import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";
import {
  BLOG_CATEGORIES,
  type BlogCategoryId,
  type BlogFrontmatter,
  type BlogPost,
  type BlogPostMeta,
} from "@/lib/blog/types";

export {
  BLOG_CATEGORIES,
  categoryLabel,
  formatPostDate,
} from "@/lib/blog/format";
export type {
  BlogCategoryId,
  BlogFrontmatter,
  BlogPost,
  BlogPostMeta,
} from "@/lib/blog/types";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

function isCategory(value: unknown): value is BlogCategoryId {
  return (
    typeof value === "string" &&
    BLOG_CATEGORIES.some((c) => c.id === value)
  );
}

function parseFrontmatter(data: Record<string, unknown>): BlogFrontmatter {
  if (!isCategory(data.category)) {
    throw new Error(`Invalid blog category: ${String(data.category)}`);
  }

  return {
    title: String(data.title ?? ""),
    description: String(data.description ?? ""),
    excerpt: String(data.excerpt ?? data.description ?? ""),
    category: data.category,
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    author: String(data.author ?? "Scelerity"),
    authorRole: String(data.authorRole ?? "Equipo editorial"),
    publishedAt: String(data.publishedAt ?? ""),
    updatedAt: data.updatedAt ? String(data.updatedAt) : undefined,
    cover: String(data.cover ?? ""),
    coverAlt: String(data.coverAlt ?? ""),
    draft: Boolean(data.draft),
  };
}

function readFile(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const frontmatter = parseFrontmatter(data as Record<string, unknown>);
  if (frontmatter.draft) return null;

  const stats = readingTime(content);
  const minutes = Math.max(1, Math.ceil(stats.minutes));

  return {
    ...frontmatter,
    slug,
    content,
    readingMinutes: minutes,
    readingTime: `${minutes} min`,
  };
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getPostBySlug(slug: string): BlogPost | null {
  return readFile(slug);
}

export function getAllPosts(): BlogPostMeta[] {
  return getAllPostSlugs()
    .map((slug) => {
      const post = readFile(slug);
      if (!post) return null;
      // Omit MDX body from list payloads
      const meta: BlogPostMeta = {
        slug: post.slug,
        title: post.title,
        description: post.description,
        excerpt: post.excerpt,
        category: post.category,
        tags: post.tags,
        author: post.author,
        authorRole: post.authorRole,
        publishedAt: post.publishedAt,
        updatedAt: post.updatedAt,
        cover: post.cover,
        coverAlt: post.coverAlt,
        draft: post.draft,
        readingTime: post.readingTime,
        readingMinutes: post.readingMinutes,
      };
      return meta;
    })
    .filter((p): p is BlogPostMeta => p !== null)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    );
}

export function getRecentPosts(limit = 6): BlogPostMeta[] {
  return getAllPosts().slice(0, limit);
}

export function getRelatedPosts(
  post: BlogPostMeta,
  limit = 3,
): BlogPostMeta[] {
  const all = getAllPosts().filter((p) => p.slug !== post.slug);

  const scored = all.map((p) => {
    let score = 0;
    if (p.category === post.category) score += 3;
    const shared = p.tags.filter((t) => post.tags.includes(t)).length;
    score += shared;
    return { post: p, score };
  });

  scored.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return (
      new Date(b.post.publishedAt).getTime() -
      new Date(a.post.publishedAt).getTime()
    );
  });

  return scored.slice(0, limit).map((s) => s.post);
}

export function getAdjacentPosts(slug: string): {
  prev: BlogPostMeta | null;
  next: BlogPostMeta | null;
} {
  const all = getAllPosts();
  const index = all.findIndex((p) => p.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: all[index + 1] ?? null,
    next: all[index - 1] ?? null,
  };
}

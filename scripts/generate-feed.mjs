/**
 * Generates public/feed.xml at build time (compatible with static export).
 */
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const root = process.cwd();
const blogDir = path.join(root, "content", "blog");
const outFile = path.join(root, "public", "feed.xml");

function siteUrl() {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (fromEnv) return fromEnv;
  const vercel = process.env.VERCEL_URL?.replace(/\/$/, "");
  if (vercel) return `https://${vercel}`;
  return "https://scelerity.vercel.app";
}

function escapeXml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function loadPosts() {
  if (!fs.existsSync(blogDir)) return [];
  return fs
    .readdirSync(blogDir)
    .filter((f) => f.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(blogDir, file), "utf8");
      const { data } = matter(raw);
      if (data.draft) return null;
      return {
        slug,
        title: data.title || slug,
        description: data.description || "",
        publishedAt: data.publishedAt || new Date().toISOString(),
        category: data.category || "",
      };
    })
    .filter(Boolean)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    );
}

const base = siteUrl();
const posts = loadPosts();
const items = posts
  .map(
    (post) => `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${base}/blog/${post.slug}/</link>
      <guid>${base}/blog/${post.slug}/</guid>
      <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
      <description>${escapeXml(post.description)}</description>
      <category>${escapeXml(post.category)}</category>
    </item>`,
  )
  .join("");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Scelerity Journal</title>
    <link>${base}/blog/</link>
    <description>Ideas sobre diseño, desarrollo, marketing digital e inteligencia artificial.</description>
    <language>es</language>${items}
  </channel>
</rss>
`;

fs.mkdirSync(path.dirname(outFile), { recursive: true });
fs.writeFileSync(outFile, xml, "utf8");
console.log(`[scelerity:feed] Wrote ${posts.length} items → public/feed.xml`);

import { BlogCard } from "@/components/blog/BlogCard";
import type { BlogPostMeta } from "@/lib/blog/format";

type Props = {
  posts: BlogPostMeta[];
  title: string;
  readLabel?: string;
};

export function RelatedArticles({
  posts,
  title,
  readLabel = "Leer artículo",
}: Props) {
  if (!posts.length) return null;

  return (
    <section className="mt-[var(--space-fluid-xl)] border-t border-[var(--border)] pt-[var(--space-fluid-lg)]">
      <h2 className="font-display text-h2 font-semibold">{title}</h2>
      <div className="mt-[var(--space-8)] grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} readLabel={readLabel} />
        ))}
      </div>
    </section>
  );
}

import {
  BLOG_CATEGORIES,
  type BlogCategoryId,
} from "@/lib/blog/types";

export function categoryLabel(
  id: BlogCategoryId,
  locale: "es" | "en" = "es",
): string {
  const found = BLOG_CATEGORIES.find((c) => c.id === id);
  return found ? found.label[locale] : id;
}

export function formatPostDate(
  iso: string,
  locale: "es" | "en" = "es",
): string {
  return new Intl.DateTimeFormat(locale === "es" ? "es-ES" : "en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(iso));
}

export { BLOG_CATEGORIES };
export type { BlogCategoryId, BlogPostMeta, BlogPost, BlogFrontmatter } from "@/lib/blog/types";

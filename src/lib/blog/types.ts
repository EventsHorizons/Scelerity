export const BLOG_CATEGORIES = [
  { id: "diseno", label: { es: "Diseño", en: "Design" } },
  { id: "desarrollo", label: { es: "Desarrollo", en: "Development" } },
  { id: "marketing", label: { es: "Marketing Digital", en: "Digital Marketing" } },
  { id: "seo", label: { es: "SEO", en: "SEO" } },
  { id: "ia", label: { es: "Inteligencia Artificial", en: "Artificial Intelligence" } },
  { id: "branding", label: { es: "Branding", en: "Branding" } },
  { id: "tecnologia", label: { es: "Tecnología", en: "Technology" } },
  { id: "ux", label: { es: "Experiencia de Usuario", en: "User Experience" } },
] as const;

export type BlogCategoryId = (typeof BLOG_CATEGORIES)[number]["id"];

export type BlogFrontmatter = {
  title: string;
  description: string;
  excerpt: string;
  category: BlogCategoryId;
  tags: string[];
  author: string;
  authorRole: string;
  publishedAt: string;
  updatedAt?: string;
  cover: string;
  coverAlt: string;
  draft?: boolean;
};

export type BlogPostMeta = BlogFrontmatter & {
  slug: string;
  readingTime: string;
  readingMinutes: number;
};

export type BlogPost = BlogPostMeta & {
  content: string;
};


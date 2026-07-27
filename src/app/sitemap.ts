import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { getAllLocalSlugs } from "@/lib/seo/local";
import { getAllServiceSlugs } from "@/lib/seo/services";
import { getSiteUrl } from "@/lib/site";

export const dynamic = "force-static";

const STATIC_ROUTES = [
  { path: "/", priority: 1, changeFrequency: "monthly" as const },
  { path: "/soluciones/", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/servicios/", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/blog/", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/nosotros/", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/contacto/", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/local/", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/privacidad/", priority: 0.3, changeFrequency: "yearly" as const },
  { path: "/terminos/", priority: 0.3, changeFrequency: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const now = new Date();
  const posts = getAllPosts();

  return [
    ...STATIC_ROUTES.map(({ path, priority, changeFrequency }) => ({
      url: `${base}${path}`,
      lastModified: now,
      changeFrequency,
      priority,
    })),
    ...getAllServiceSlugs().map((slug) => ({
      url: `${base}/servicios/${slug}/`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    ...getAllLocalSlugs().map((city) => ({
      url: `${base}/local/${city}/`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
    ...posts.map((post) => ({
      url: `${base}/blog/${post.slug}/`,
      lastModified: new Date(post.updatedAt || post.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}

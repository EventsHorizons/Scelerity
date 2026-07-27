import type { Metadata } from "next";
import { SEO_CONFIG, absoluteUrl } from "./config";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  ogType?: "website" | "article";
  ogImage?: string;
  noIndex?: boolean;
  keywords?: string[];
};

/** Builds consistent Next.js Metadata for any route. */
export function buildPageMetadata({
  title,
  description,
  path,
  ogType = "website",
  ogImage,
  noIndex = false,
  keywords,
}: PageMetaInput): Metadata {
  const url = absoluteUrl(path);
  const fullTitle = title.includes("Scelerity") ? title : `${title} — Scelerity`;
  const image = ogImage ?? absoluteUrl("/favicon.svg");

  return {
    title: fullTitle,
    description,
    keywords: keywords?.join(", "),
    alternates: { canonical: path.endsWith("/") ? path : `${path}/` },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title: fullTitle,
      description,
      type: ogType,
      url,
      locale: SEO_CONFIG.defaultLocale,
      siteName: SEO_CONFIG.siteName,
      images: [{ url: image, alt: fullTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}

export const HOME_METADATA = buildPageMetadata({
  title: "Scelerity — Velocidad con precisión",
  description: SEO_CONFIG.description,
  path: "/",
  keywords: [
    "agencia digital",
    "diseño web",
    "desarrollo web",
    "marketing digital",
    "inteligencia artificial",
    "branding",
  ],
});

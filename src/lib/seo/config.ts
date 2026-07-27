import { getSiteUrl } from "@/lib/site";

/** Central SEO configuration — single source of truth for schema & metadata. */
export const SEO_CONFIG = {
  siteName: "Scelerity",
  defaultLocale: "es_ES" as const,
  tagline: "Velocidad con precisión",
  description:
    "Agencia digital especializada en diseño web, desarrollo de software, inteligencia artificial, branding y marketing digital.",
  email: "hello@scelerity.co",
  phone: "+57 3015993300",
  whatsapp: "+573015993300",
  /** Primary service area for LocalBusiness schema */
  areaServed: ["US", "CO", "MX", "ES", "Worldwide"],
  address: {
    addressLocality: "Orlando",
    addressRegion: "FL",
    addressCountry: "US",
  },
  social: {
    instagram: "https://instagram.com/scelerity",
    facebook: "https://facebook.com/scelerity",
    linkedin: "https://linkedin.com/company/scelerity",
    tiktok: "https://tiktok.com/@scelerity",
  },
  sameAs: [
    "https://instagram.com/scelerity",
    "https://facebook.com/scelerity",
    "https://linkedin.com/company/scelerity",
    "https://tiktok.com/@scelerity",
  ],
  foundingDate: "2024",
  knowsAbout: [
    "Diseño Web",
    "Desarrollo de Software",
    "Inteligencia Artificial",
    "Branding",
    "Marketing Digital",
    "SEO",
  ],
} as const;

export function getOrgId() {
  return `${getSiteUrl()}/#organization`;
}

export function getWebsiteId() {
  return `${getSiteUrl()}/#website`;
}

export function absoluteUrl(path: string) {
  const base = getSiteUrl();
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}

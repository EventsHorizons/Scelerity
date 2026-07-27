import { SEO_CONFIG, absoluteUrl, getOrgId, getWebsiteId } from "./config";

export type BreadcrumbItem = { name: string; path: string };

export function organizationNode() {
  const base = absoluteUrl("/");
  return {
    "@type": "Organization" as const,
    "@id": getOrgId(),
    name: SEO_CONFIG.siteName,
    url: base,
    logo: absoluteUrl("/favicon.svg"),
    description: SEO_CONFIG.description,
    email: SEO_CONFIG.email,
    telephone: SEO_CONFIG.phone,
    foundingDate: SEO_CONFIG.foundingDate,
    sameAs: SEO_CONFIG.sameAs,
    knowsAbout: SEO_CONFIG.knowsAbout,
    areaServed: SEO_CONFIG.areaServed,
  };
}

export function websiteNode() {
  return {
    "@type": "WebSite" as const,
    "@id": getWebsiteId(),
    name: SEO_CONFIG.siteName,
    url: absoluteUrl("/"),
    description: SEO_CONFIG.description,
    publisher: { "@id": getOrgId() },
    inLanguage: "es-ES",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${absoluteUrl("/blog/")}?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function breadcrumbNode(items: BreadcrumbItem[]) {
  return {
    "@type": "BreadcrumbList" as const,
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqNode(items: { q: string; a: string }[]) {
  return {
    "@type": "FAQPage" as const,
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function serviceNode(input: {
  name: string;
  description: string;
  path: string;
  areaServed?: string[];
}) {
  return {
    "@type": "Service" as const,
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    provider: { "@id": getOrgId() },
    areaServed: input.areaServed ?? SEO_CONFIG.areaServed,
    serviceType: input.name,
  };
}

export function localBusinessNode(input: {
  city: string;
  region: string;
  description: string;
  path: string;
}) {
  return {
    "@type": "LocalBusiness" as const,
    "@id": `${absoluteUrl(input.path)}#localbusiness`,
    name: `${SEO_CONFIG.siteName} — ${input.city}`,
    description: input.description,
    url: absoluteUrl(input.path),
    email: SEO_CONFIG.email,
    telephone: SEO_CONFIG.phone,
    image: absoluteUrl("/favicon.svg"),
    address: {
      "@type": "PostalAddress",
      addressLocality: input.city,
      addressRegion: input.region,
      addressCountry: "US",
    },
    areaServed: input.city,
    parentOrganization: { "@id": getOrgId() },
    sameAs: SEO_CONFIG.sameAs,
  };
}

export function siteGraph(extra: Record<string, unknown>[] = []) {
  return {
    "@context": "https://schema.org",
    "@graph": [organizationNode(), websiteNode(), ...extra],
  };
}

export function pageGraph(
  breadcrumbs: BreadcrumbItem[],
  extra: Record<string, unknown>[] = [],
) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationNode(),
      websiteNode(),
      breadcrumbNode(breadcrumbs),
      ...extra,
    ],
  };
}

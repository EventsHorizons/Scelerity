export type AuditFinding = {
  id: string;
  area: string;
  issue: string;
  priority: "critical" | "high" | "medium" | "low";
  impact: string;
  solution: string;
  status: "open" | "fixed" | "partial";
};

/** Phase 1 SEO audit findings — baseline before SEO OS implementation. */
export const SEO_AUDIT_FINDINGS: AuditFinding[] = [
  { id: "AUD-001", area: "Metadatos", issue: "Home sin canonical explícito ni OG image", priority: "high", impact: "Señales SERP débiles en página principal", solution: "buildPageMetadata en / con canonical y OG", status: "fixed" },
  { id: "AUD-002", area: "Metadatos", issue: "/soluciones/ sin canonical, OG ni Twitter", priority: "high", impact: "Previews sociales genéricas", solution: "Metadata completa en soluciones", status: "fixed" },
  { id: "AUD-003", area: "Schema", issue: "Sin Organization/WebSite global", priority: "high", impact: "Entidad de marca débil", solution: "SiteJsonLd en layout", status: "fixed" },
  { id: "AUD-004", area: "Schema", issue: "FAQ sin FAQPage schema", priority: "medium", impact: "Rich results perdidos", solution: "FAQ schema en home", status: "fixed" },
  { id: "AUD-005", area: "Arquitectura", issue: "Sin landing pages por servicio", priority: "critical", impact: "No compite por keywords comerciales", solution: "/servicios/[slug]/ content-driven", status: "fixed" },
  { id: "AUD-006", area: "Arquitectura", issue: "Sin páginas locales", priority: "high", impact: "SEO local Florida sin capturar", solution: "/local/[city]/ con contenido único", status: "fixed" },
  { id: "AUD-007", area: "Arquitectura", issue: "Sin /nosotros/ ni /contacto/", priority: "medium", impact: "E-E-A-T incompleto", solution: "Páginas EEAT dedicadas", status: "fixed" },
  { id: "AUD-008", area: "Legal", issue: "Política y términos en href #", priority: "medium", impact: "Confianza y crawl dead-ends", solution: "/privacidad/ y /terminos/", status: "fixed" },
  { id: "AUD-009", area: "Analítica", issue: "Sin GA4, GTM ni Clarity", priority: "high", impact: "Sin loop de medición", solution: "Analytics component + env vars", status: "fixed" },
  { id: "AUD-010", area: "i18n SEO", issue: "Locale client-side sin hreflang", priority: "medium", impact: "EN invisible para crawlers", solution: "Rutas /en/ en roadmap Q2", status: "open" },
  { id: "AUD-011", area: "Blog", issue: "Sin archives por categoría", priority: "medium", impact: "Clusters temáticos limitados", solution: "/blog/categoria/[slug]/ roadmap", status: "open" },
  { id: "AUD-012", area: "Performance", issue: "images.unoptimized: true", priority: "medium", impact: "CWV en blog con Unsplash", solution: "Pipeline imágenes locales + AVIF", status: "open" },
  { id: "AUD-013", area: "Discoverability", issue: "RSS no en head", priority: "low", impact: "Feeds no descubiertos", solution: "link rel=alternate en layout", status: "fixed" },
  { id: "AUD-014", area: "UX", issue: "Sin breadcrumbs visuales", priority: "low", impact: "Navegación y schema UX", solution: "Breadcrumbs component", status: "fixed" },
  { id: "AUD-015", area: "404", issue: "Sin not-found personalizado", priority: "low", impact: "UX en URLs rotas", solution: "not-found.tsx", status: "fixed" },
];

export function getOpenFindings() {
  return SEO_AUDIT_FINDINGS.filter((f) => f.status === "open");
}

export function getFixedFindings() {
  return SEO_AUDIT_FINDINGS.filter((f) => f.status === "fixed");
}

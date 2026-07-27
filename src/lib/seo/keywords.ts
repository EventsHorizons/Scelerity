export type FunnelStage = "awareness" | "consideration" | "decision" | "retention";
export type SearchIntent = "informational" | "commercial" | "transactional" | "navigational";

export type KeywordEntry = {
  keyword: string;
  pillar: "diseno" | "desarrollo" | "marketing";
  intent: SearchIntent;
  funnel: FunnelStage;
  volume: "low" | "medium" | "high";
  difficulty: "low" | "medium" | "high";
  priority: "P1" | "P2" | "P3";
  targetUrl: string;
  cluster: string;
};

/** Keyword map — prioritize commercial intent & service pages (P1). */
export const KEYWORD_MAP: KeywordEntry[] = [
  // Diseño — P1
  { keyword: "diseño web profesional", pillar: "diseno", intent: "commercial", funnel: "consideration", volume: "high", difficulty: "high", priority: "P1", targetUrl: "/servicios/diseno-web/", cluster: "diseno-web" },
  { keyword: "agencia diseño web", pillar: "diseno", intent: "commercial", funnel: "decision", volume: "medium", difficulty: "medium", priority: "P1", targetUrl: "/servicios/diseno-web/", cluster: "diseno-web" },
  { keyword: "landing page diseño", pillar: "diseno", intent: "commercial", funnel: "consideration", volume: "medium", difficulty: "medium", priority: "P2", targetUrl: "/servicios/diseno-web/", cluster: "landing-pages" },
  { keyword: "branding digital", pillar: "diseno", intent: "commercial", funnel: "consideration", volume: "medium", difficulty: "medium", priority: "P1", targetUrl: "/servicios/branding/", cluster: "branding" },
  { keyword: "identidad visual empresa", pillar: "diseno", intent: "commercial", funnel: "consideration", volume: "low", difficulty: "low", priority: "P2", targetUrl: "/servicios/branding/", cluster: "branding" },
  // Desarrollo — P1
  { keyword: "desarrollo web a medida", pillar: "desarrollo", intent: "commercial", funnel: "decision", volume: "medium", difficulty: "medium", priority: "P1", targetUrl: "/servicios/desarrollo-web/", cluster: "desarrollo-web" },
  { keyword: "desarrollo aplicaciones web", pillar: "desarrollo", intent: "commercial", funnel: "decision", volume: "medium", difficulty: "high", priority: "P1", targetUrl: "/servicios/desarrollo-apps/", cluster: "desarrollo-apps" },
  { keyword: "software a medida empresas", pillar: "desarrollo", intent: "commercial", funnel: "decision", volume: "low", difficulty: "medium", priority: "P2", targetUrl: "/servicios/desarrollo-apps/", cluster: "software-medida" },
  { keyword: "desarrollo ecommerce", pillar: "desarrollo", intent: "commercial", funnel: "decision", volume: "medium", difficulty: "high", priority: "P1", targetUrl: "/servicios/ecommerce/", cluster: "ecommerce" },
  { keyword: "inteligencia artificial empresas", pillar: "desarrollo", intent: "commercial", funnel: "consideration", volume: "high", difficulty: "high", priority: "P1", targetUrl: "/servicios/inteligencia-artificial/", cluster: "ia" },
  { keyword: "automatización procesos empresariales", pillar: "desarrollo", intent: "commercial", funnel: "consideration", volume: "low", difficulty: "low", priority: "P2", targetUrl: "/servicios/automatizacion/", cluster: "automatizacion" },
  // Marketing — P1
  { keyword: "agencia seo", pillar: "marketing", intent: "commercial", funnel: "decision", volume: "high", difficulty: "high", priority: "P1", targetUrl: "/servicios/seo/", cluster: "seo" },
  { keyword: "servicios seo", pillar: "marketing", intent: "commercial", funnel: "consideration", volume: "high", difficulty: "high", priority: "P1", targetUrl: "/servicios/seo/", cluster: "seo" },
  { keyword: "marketing digital agencia", pillar: "marketing", intent: "commercial", funnel: "decision", volume: "high", difficulty: "high", priority: "P1", targetUrl: "/servicios/marketing-digital/", cluster: "marketing-digital" },
  { keyword: "google ads agencia", pillar: "marketing", intent: "commercial", funnel: "decision", volume: "medium", difficulty: "medium", priority: "P2", targetUrl: "/servicios/marketing-digital/", cluster: "paid-media" },
  // Local — P1
  { keyword: "agencia digital orlando", pillar: "marketing", intent: "commercial", funnel: "decision", volume: "low", difficulty: "low", priority: "P1", targetUrl: "/local/orlando/", cluster: "local-orlando" },
  { keyword: "diseño web miami", pillar: "diseno", intent: "commercial", funnel: "decision", volume: "low", difficulty: "medium", priority: "P1", targetUrl: "/local/miami/", cluster: "local-miami" },
  { keyword: "seo tampa", pillar: "marketing", intent: "commercial", funnel: "decision", volume: "low", difficulty: "low", priority: "P1", targetUrl: "/local/tampa/", cluster: "local-tampa" },
  // Informational — blog support
  { keyword: "core web vitals", pillar: "desarrollo", intent: "informational", funnel: "awareness", volume: "medium", difficulty: "medium", priority: "P2", targetUrl: "/blog/velocidad-core-web-vitals/", cluster: "velocidad-web" },
  { keyword: "seo 2026", pillar: "marketing", intent: "informational", funnel: "awareness", volume: "medium", difficulty: "medium", priority: "P2", targetUrl: "/blog/seo-2026/", cluster: "seo" },
  { keyword: "ia para empresas", pillar: "desarrollo", intent: "informational", funnel: "awareness", volume: "high", difficulty: "medium", priority: "P2", targetUrl: "/blog/ia-potencia-empresas/", cluster: "ia" },
];

export const CONTENT_CLUSTERS = [
  {
    pillar: "Diseño Web",
    hub: "/servicios/diseno-web/",
    spokes: [
      { topic: "Landing Pages", url: "/servicios/diseno-web/", blog: "pagina-web-conversiones" },
      { topic: "UX/UI", url: "/servicios/diseno-web/" },
      { topic: "Responsive", url: "/blog/velocidad-core-web-vitals/" },
      { topic: "Branding", url: "/servicios/branding/", blog: "branding-digital" },
      { topic: "Accesibilidad", url: "/blog/pagina-web-conversiones/" },
    ],
  },
  {
    pillar: "Desarrollo",
    hub: "/servicios/desarrollo-web/",
    spokes: [
      { topic: "Apps", url: "/servicios/desarrollo-apps/" },
      { topic: "E-commerce", url: "/servicios/ecommerce/" },
      { topic: "Automatización", url: "/servicios/automatizacion/" },
      { topic: "IA", url: "/servicios/inteligencia-artificial/", blog: "ia-potencia-empresas" },
      { topic: "Core Web Vitals", url: "/blog/velocidad-core-web-vitals/" },
    ],
  },
  {
    pillar: "Marketing Digital",
    hub: "/servicios/marketing-digital/",
    spokes: [
      { topic: "SEO", url: "/servicios/seo/", blog: "seo-2026" },
      { topic: "Paid Media", url: "/servicios/marketing-digital/" },
      { topic: "Email", url: "/servicios/marketing-digital/" },
      { topic: "Analítica", url: "/blog/marketing-digital-integrado/" },
      { topic: "Growth", url: "/blog/marketing-digital-integrado/" },
    ],
  },
] as const;

export function getKeywordsByPriority(priority: "P1" | "P2" | "P3") {
  return KEYWORD_MAP.filter((k) => k.priority === priority);
}

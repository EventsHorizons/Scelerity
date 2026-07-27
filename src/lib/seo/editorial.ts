export type EditorialEntry = {
  month: string;
  title: string;
  pillar: string;
  category: string;
  targetKeyword: string;
  funnel: "awareness" | "consideration" | "decision";
  status: "published" | "planned";
  slug?: string;
};

/** 12-month editorial calendar — reinforces topical authority. */
export const EDITORIAL_CALENDAR: EditorialEntry[] = [
  { month: "2026-01", title: "Tendencias diseño web 2026", pillar: "Diseño", category: "diseno", targetKeyword: "tendencias diseño web", funnel: "awareness", status: "planned" },
  { month: "2026-02", title: "Cómo elegir agencia desarrollo web", pillar: "Desarrollo", category: "desarrollo", targetKeyword: "agencia desarrollo web", funnel: "consideration", status: "planned" },
  { month: "2026-03", title: "Google Ads vs SEO: cuándo usar cada uno", pillar: "Marketing", category: "marketing", targetKeyword: "google ads vs seo", funnel: "consideration", status: "planned" },
  { month: "2026-04", title: "Checklist SEO técnico 2026", pillar: "Marketing", category: "seo", targetKeyword: "seo técnico checklist", funnel: "awareness", status: "planned" },
  { month: "2026-05", title: "IA generativa en marketing de contenidos", pillar: "Marketing", category: "ia", targetKeyword: "ia marketing contenidos", funnel: "awareness", status: "planned" },
  { month: "2026-06", title: "Marketing digital integrado", pillar: "Marketing", category: "marketing", targetKeyword: "marketing digital integrado", funnel: "consideration", status: "published", slug: "marketing-digital-integrado" },
  { month: "2026-07", title: "Velocidad web y Core Web Vitals", pillar: "Desarrollo", category: "desarrollo", targetKeyword: "core web vitals", funnel: "awareness", status: "published", slug: "velocidad-core-web-vitals" },
  { month: "2026-07", title: "Branding digital", pillar: "Diseño", category: "branding", targetKeyword: "branding digital", funnel: "consideration", status: "published", slug: "branding-digital" },
  { month: "2026-07", title: "IA potencia empresas", pillar: "Desarrollo", category: "ia", targetKeyword: "ia empresas", funnel: "awareness", status: "published", slug: "ia-potencia-empresas" },
  { month: "2026-07", title: "SEO en 2026", pillar: "Marketing", category: "seo", targetKeyword: "seo 2026", funnel: "awareness", status: "published", slug: "seo-2026" },
  { month: "2026-07", title: "Página web conversiones", pillar: "Diseño", category: "diseno", targetKeyword: "diseño web conversiones", funnel: "consideration", status: "published", slug: "pagina-web-conversiones" },
  { month: "2026-08", title: "UX writing para conversiones", pillar: "Diseño", category: "ux", targetKeyword: "ux writing", funnel: "awareness", status: "planned" },
  { month: "2026-09", title: "Headless commerce guía completa", pillar: "Desarrollo", category: "desarrollo", targetKeyword: "headless commerce", funnel: "consideration", status: "planned" },
  { month: "2026-10", title: "SEO local Florida guía", pillar: "Marketing", category: "seo", targetKeyword: "seo local florida", funnel: "consideration", status: "planned" },
  { month: "2026-11", title: "Automatización con IA para PYMES", pillar: "Desarrollo", category: "ia", targetKeyword: "automatización ia pymes", funnel: "consideration", status: "planned" },
  { month: "2026-12", title: "Retrospectiva digital 2026", pillar: "Marketing", category: "tecnologia", targetKeyword: "tendencias digital 2026", funnel: "awareness", status: "planned" },
];

export function getPublishedCount() {
  return EDITORIAL_CALENDAR.filter((e) => e.status === "published").length;
}

export function getPlannedByMonth(month: string) {
  return EDITORIAL_CALENDAR.filter((e) => e.month === month && e.status === "planned");
}

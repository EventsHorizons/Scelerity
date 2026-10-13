export type LocalPage = {
  slug: string;
  city: string;
  region: string;
  country: string;
  metaTitle: string;
  metaDescription: string;
  hero: { eyebrow: string; headline: string; sub: string };
  intro: string[];
  highlights: string[];
  neighborhoods: string[];
  services: string[];
  faq: { q: string; a: string }[];
};

export const LOCAL_PAGES: LocalPage[] = [
  {
    slug: "orlando",
    city: "Orlando",
    region: "FL",
    country: "US",
    metaTitle: "Diseño, desarrollo y marketing en Orlando — Drawboard",
    metaDescription:
      "Diseño web, desarrollo y marketing para empresas. Drawboard trabaja desde Bogotá.",
    hero: {
      eyebrow: "Orlando, FL",
      headline: "Diseño, desarrollo y marketing en Orlando.",
      sub: "Sitios, identidad y campañas para proyectos que necesitan verse y funcionar en Central Florida.",
    },
    intro: [
      "Orlando concentra turismo, tecnología y emprendimiento. Ahí la primera impresión suele ser digital.",
      "Hacemos diseño, desarrollo y marketing desde Bogotá. No tenemos oficina en esta ciudad.",
    ],
    highlights: [
      "Landing pages para negocios de hospitalidad y servicios",
      "SEO local para captar búsquedas en Central Florida",
      "Plataformas web rápidas optimizadas para móvil",
    ],
    neighborhoods: ["Downtown Orlando", "Lake Nona", "Winter Park", "Dr. Phillips", "International Drive"],
    services: ["diseno-web", "seo", "marketing-digital", "desarrollo-web"],
    faq: [
      { q: "¿Tienen oficina en Orlando?", a: "No. El trabajo se hace desde Bogotá." },
      { q: "¿Atienden solo Orlando?", a: "No. Un proyecto puede ser de otra ciudad. No hay sede publicada en Florida." },
    ],
  },
  {
    slug: "miami",
    city: "Miami",
    region: "FL",
    country: "US",
    metaTitle: "Diseño, desarrollo y marketing en Miami — Drawboard",
    metaDescription:
      "Branding, web y marketing para marcas en Miami que compiten en un mercado exigente.",
    hero: {
      eyebrow: "Miami, FL",
      headline: "Marca, web y marketing en Miami.",
      sub: "Identidad, desarrollo y campañas para proyectos que necesitan destacarse en Miami-Dade.",
    },
    intro: [
      "Miami pide marcas con carácter y productos digitales que aguanten una comparación global.",
      "El oficio es diseño, desarrollo y marketing para empresas. El trabajo se hace desde Bogotá.",
    ],
    highlights: [
      "Branding para startups y real estate",
      "Sitios bilingües ES/EN",
      "Campañas Meta Ads + SEO integrados",
    ],
    neighborhoods: ["Brickell", "Wynwood", "Coral Gables", "Miami Beach", "Doral"],
    services: ["branding", "diseno-web", "marketing-digital", "desarrollo-apps"],
    faq: [
      { q: "¿Contenido en español e inglés?", a: "Sí, si el encargo lo pide. El idioma se define con el alcance." },
      { q: "¿Industrias que atienden en Miami?", a: "Real estate, fintech, hospitality, e-commerce y servicios profesionales." },
    ],
  },
  {
    slug: "tampa",
    city: "Tampa",
    region: "FL",
    country: "US",
    metaTitle: "Desarrollo web y SEO en Tampa — Drawboard",
    metaDescription:
      "Desarrollo web, SEO y marketing para empresas en Tampa Bay.",
    hero: {
      eyebrow: "Tampa, FL",
      headline: "Producto digital para Tampa Bay.",
      sub: "Desarrollo web, SEO y automatización para negocios que no pueden depender de un sitio lento.",
    },
    intro: [
      "Tampa Bay mezcla corporativo, tecnología y servicios. Un sitio lento o desactualizado se nota.",
      "Diseño, sitios y comunicación para empresas. El equipo está en Bogotá.",
    ],
    highlights: [
      "Sitios para empresas que venden a otras empresas",
      "SEO local Tampa Bay",
      "Integraciones CRM y automatización",
    ],
    neighborhoods: ["Downtown Tampa", "Hyde Park", "Westshore", "St. Petersburg", "Clearwater"],
    services: ["desarrollo-web", "seo", "automatizacion", "inteligencia-artificial"],
    faq: [
      { q: "¿Trabajan con empresas B2B en Tampa?", a: "Sí. Es uno de nuestros focos: sitios corporativos y plataformas de leads." },
      { q: "¿SEO para Tampa Bay?", a: "Sí, con páginas locales, schema LocalBusiness y contenido geo-específico." },
    ],
  },
  {
    slug: "jacksonville",
    city: "Jacksonville",
    region: "FL",
    country: "US",
    metaTitle: "Web y marketing en Jacksonville — Drawboard",
    metaDescription:
      "Diseño web, desarrollo y marketing para empresas en Jacksonville.",
    hero: {
      eyebrow: "Jacksonville, FL",
      headline: "Web y marketing para Jacksonville.",
      sub: "Sitios, campañas y producto digital para empresas en Northeast Florida.",
    },
    intro: [
      "Jacksonville crece y las empresas locales necesitan una presencia que se pueda usar, no solo un perfil.",
      "Diseño, desarrollo y marketing para empresas, desde Bogotá.",
    ],
    highlights: [
      "Rediseño web corporativo",
      "Google Ads + landing pages",
      "E-commerce y catálogos online",
    ],
    neighborhoods: ["Downtown Jacksonville", "Riverside", "San Marco", "Jacksonville Beach", "Mandarin"],
    services: ["diseno-web", "marketing-digital", "ecommerce", "seo"],
    faq: [
      { q: "¿Atienden Jacksonville Beach y área metropolitana?", a: "Sí, toda el área metro de Jacksonville." },
      { q: "¿Presupuestos para PYMES?", a: "El precio se define por el alcance de cada proyecto. No publicamos planes con nombre ni tarifas fijas." },
    ],
  },
  {
    slug: "kissimmee",
    city: "Kissimmee",
    region: "FL",
    country: "US",
    metaTitle: "Diseño web y SEO local en Kissimmee — Drawboard",
    metaDescription:
      "Diseño web y SEO local para negocios de turismo y servicios en Kissimmee.",
    hero: {
      eyebrow: "Kissimmee, FL",
      headline: "Presencia digital para Kissimmee.",
      sub: "Webs y SEO local para turismo, servicios y retail en Osceola County.",
    },
    intro: [
      "Kissimmee depende del turismo y de los servicios locales. La búsqueda en Google es parte del negocio.",
      "Hacemos sitios y comunicación para empresas, desde Bogotá.",
    ],
    highlights: [
      "SEO local Kissimmee / Osceola",
      "Sitios mobile-first para turismo",
      "Google Business Profile optimization",
    ],
    neighborhoods: ["Downtown Kissimmee", "Celebration", "Poinciana", "Buenaventura Lakes", "Campbell City"],
    services: ["seo", "diseno-web", "marketing-digital", "branding"],
    faq: [
      { q: "¿Especialistas en turismo?", a: "Sí. Landing pages, SEO local y ads para hospitalidad y experiencias." },
      { q: "¿Optimizan Google Business Profile?", a: "Sí, como parte de nuestra estrategia de SEO local." },
    ],
  },
];

export function getAllLocalSlugs() {
  return LOCAL_PAGES.map((p) => p.slug);
}

export function getLocalBySlug(slug: string) {
  return LOCAL_PAGES.find((p) => p.slug === slug);
}

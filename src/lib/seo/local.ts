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
    metaTitle: "Agencia Digital en Orlando — Diseño, Desarrollo y Marketing",
    metaDescription:
      "Scelerity en Orlando: diseño web, desarrollo de software, SEO y marketing digital para empresas en Florida. Remoto con enfoque local.",
    hero: {
      eyebrow: "Orlando, FL",
      headline: "Agencia digital para empresas en Orlando.",
      sub: "Diseño, desarrollo e IA para marcas en Central Florida que quieren crecer con velocidad y precisión.",
    },
    intro: [
      "Orlando concentra turismo, tecnología y emprendimiento — mercados donde la experiencia digital define la primera impresión.",
      "Trabajamos con empresas locales y remotas en Florida, combinando craft visual, ingeniería moderna y estrategia de marketing medible.",
    ],
    highlights: [
      "Landing pages para negocios de hospitalidad y servicios",
      "SEO local para captar búsquedas en Central Florida",
      "Plataformas web rápidas optimizadas para móvil",
    ],
    neighborhoods: ["Downtown Orlando", "Lake Nona", "Winter Park", "Dr. Phillips", "International Drive"],
    services: ["diseno-web", "seo", "marketing-digital", "desarrollo-web"],
    faq: [
      { q: "¿Tienen oficina en Orlando?", a: "Operamos remoto con reuniones presenciales bajo demanda en Orlando." },
      { q: "¿Atienden solo Orlando?", a: "No. Servimos toda Florida y clientes internacionales." },
    ],
  },
  {
    slug: "miami",
    city: "Miami",
    region: "FL",
    country: "US",
    metaTitle: "Agencia Digital en Miami — Branding, Web y Marketing",
    metaDescription:
      "Agencia digital en Miami: branding, diseño web, desarrollo y marketing para marcas que compiten en mercados exigentes.",
    hero: {
      eyebrow: "Miami, FL",
      headline: "Marca y producto digital para Miami.",
      sub: "Identidad, web y growth para empresas que necesitan destacar en uno de los mercados más competitivos de Florida.",
    },
    intro: [
      "Miami exige marcas con carácter y productos digitales impecables. La competencia es global desde el día uno.",
      "Ayudamos a empresas en Miami-Dade a construir presencia digital premium con resultados medibles.",
    ],
    highlights: [
      "Branding para startups y real estate",
      "Sitios bilingües ES/EN",
      "Campañas Meta Ads + SEO integrados",
    ],
    neighborhoods: ["Brickell", "Wynwood", "Coral Gables", "Miami Beach", "Doral"],
    services: ["branding", "diseno-web", "marketing-digital", "desarrollo-apps"],
    faq: [
      { q: "¿Contenido en español e inglés?", a: "Sí. Bilingüe nativo para mercados locales e internacionales." },
      { q: "¿Industrias que atienden en Miami?", a: "Real estate, fintech, hospitality, e-commerce y servicios profesionales." },
    ],
  },
  {
    slug: "tampa",
    city: "Tampa",
    region: "FL",
    country: "US",
    metaTitle: "Agencia Digital en Tampa — Desarrollo Web y SEO",
    metaDescription:
      "Diseño web, desarrollo y SEO en Tampa Bay. Scelerity ayuda a empresas locales a crecer con producto digital de alto rendimiento.",
    hero: {
      eyebrow: "Tampa, FL",
      headline: "Producto digital para Tampa Bay.",
      sub: "Desarrollo web, SEO y automatización para empresas en un ecosistema en rápido crecimiento.",
    },
    intro: [
      "Tampa Bay combina corporativo, tech y servicios — sectores donde un sitio lento o desactualizado cuesta oportunidades.",
      "Entregamos plataformas rápidas, SEO local y sistemas que escalan con el negocio.",
    ],
    highlights: [
      "Desarrollo Next.js para empresas B2B",
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
    metaTitle: "Agencia Digital en Jacksonville — Web y Marketing Digital",
    metaDescription:
      "Agencia digital en Jacksonville: diseño web, marketing digital y desarrollo para empresas en Northeast Florida.",
    hero: {
      eyebrow: "Jacksonville, FL",
      headline: "Digital craft para Jacksonville.",
      sub: "Webs, campañas y producto digital para empresas en Northeast Florida que quieren competir online.",
    },
    intro: [
      "Jacksonville es uno de los mercados de mayor crecimiento en Florida. Las empresas locales necesitan presencia digital profesional.",
      "Combinamos diseño estratégico, desarrollo moderno y marketing medible para generar leads cualificados.",
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
      { q: "¿Presupuestos para PYMES?", a: "Sí, con planes Starter, Growth y Full Digital adaptados al tamaño del proyecto." },
    ],
  },
  {
    slug: "kissimmee",
    city: "Kissimmee",
    region: "FL",
    country: "US",
    metaTitle: "Agencia Digital en Kissimmee — Diseño Web y SEO Local",
    metaDescription:
      "Diseño web y SEO local en Kissimmee para negocios de turismo, servicios y retail en Osceola County.",
    hero: {
      eyebrow: "Kissimmee, FL",
      headline: "Presencia digital para negocios en Kissimmee.",
      sub: "Webs rápidas, SEO local y marketing para empresas cerca de los principales destinos turísticos de Florida.",
    },
    intro: [
      "Kissimmee y Osceola County dependen del turismo y servicios locales — sectores donde la visibilidad en Google es crítica.",
      "Creamos sitios optimizados para conversión móvil y SEO local que capturan búsquedas de visitantes y residentes.",
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

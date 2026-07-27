export type SeoPillar = "diseno" | "desarrollo" | "marketing";

export type ServicePage = {
  slug: string;
  pillar: SeoPillar;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  hero: { eyebrow: string; headline: string; sub: string };
  problem: { headline: string; paragraphs: string[] };
  solution: { headline: string; paragraphs: string[] };
  benefits: { title: string; text: string }[];
  useCases: string[];
  technologies: string[];
  faq: { q: string; a: string }[];
  relatedServices: string[];
  relatedBlogSlugs: string[];
};

const sharedCta = {
  primary: "Solicitar asesoría",
  secondary: "Ver soluciones",
};

export const SEO_SERVICES: ServicePage[] = [
  {
    slug: "diseno-web",
    pillar: "diseno",
    title: "Diseño Web",
    metaTitle: "Diseño Web Profesional — UX, UI y Conversión",
    metaDescription:
      "Diseño web estratégico que convierte visitantes en clientes. UX/UI, landing pages, diseño responsive y sistemas visuales para marcas que quieren crecer.",
    keywords: ["diseño web", "diseño web profesional", "ux ui", "landing page"],
    hero: {
      eyebrow: "Diseño",
      headline: "Diseño web que convierte, no solo impresiona.",
      sub: "Creamos experiencias digitales claras, rápidas y memorables — pensadas para generar confianza y acción desde el primer scroll.",
    },
    problem: {
      headline: "Tu web es tu vendedor 24/7. ¿Está cumpliendo?",
      paragraphs: [
        "Muchas empresas invierten en tráfico pero pierden conversiones por diseño confuso, mensajes genéricos o una experiencia móvil deficiente.",
        "Un diseño bonito sin estrategia no genera resultados. Lo que necesitas es claridad visual, jerarquía de información y CTAs que guíen al usuario.",
      ],
    },
    solution: {
      headline: "Diseño con intención comercial",
      paragraphs: [
        "En Scelerity combinamos investigación, UX/UI y craft visual para diseñar sitios que comunican valor en segundos.",
        "Cada sección responde a una pregunta del usuario y lo acerca a una acción concreta: contacto, demo o compra.",
      ],
    },
    benefits: [
      { title: "Más conversiones", text: "Interfaces optimizadas para reducir fricción y aumentar acciones." },
      { title: "Marca coherente", text: "Sistema visual consistente en todas las páginas y touchpoints." },
      { title: "Mobile-first", text: "Experiencia impecable en móvil, tablet y desktop." },
      { title: "Velocidad percibida", text: "Diseño ligero que refuerza la sensación de producto premium." },
    ],
    useCases: ["Rediseño de sitio corporativo", "Landing pages de campaña", "Sitios para startups", "Portales de servicios"],
    technologies: ["Figma", "Next.js", "Tailwind CSS", "Design Systems", "Prototipado interactivo"],
    faq: [
      { q: "¿Cuánto tarda un diseño web?", a: "Un sitio enfocado suele tomar 4–8 semanas según alcance y contenido." },
      { q: "¿Incluyen desarrollo?", a: "Sí. Diseño y desarrollo van integrados para garantizar fidelidad y rendimiento." },
    ],
    relatedServices: ["branding", "desarrollo-web", "marketing-digital"],
    relatedBlogSlugs: ["pagina-web-conversiones", "branding-digital"],
  },
  {
    slug: "desarrollo-web",
    pillar: "desarrollo",
    title: "Desarrollo Web",
    metaTitle: "Desarrollo Web a Medida — Rápido, Escalable y SEO-Ready",
    metaDescription:
      "Desarrollo web con Next.js y tecnologías modernas. Sitios rápidos, seguros y preparados para SEO, integraciones y crecimiento.",
    keywords: ["desarrollo web", "desarrollo web a medida", "next.js", "sitios web"],
    hero: {
      eyebrow: "Desarrollo",
      headline: "Código listo para producción y para escalar.",
      sub: "Construimos frontends y plataformas web con arquitectura sólida, Core Web Vitals optimizados y mantenimiento predecible.",
    },
    problem: {
      headline: "Plantillas y plugins no escalan contigo",
      paragraphs: [
        "Los sitios genéricos se vuelven lentos, difíciles de mantener y caros de extender cuando el negocio crece.",
        "Necesitas una base técnica que soporte integraciones, SEO técnico y evolución sin reescrituras.",
      ],
    },
    solution: {
      headline: "Ingeniería web orientada a negocio",
      paragraphs: [
        "Desarrollamos con stack moderno, componentes reutilizables y despliegue continuo.",
        "Cada decisión técnica prioriza rendimiento, accesibilidad y facilidad de evolución.",
      ],
    },
    benefits: [
      { title: "Alto rendimiento", text: "LCP, CLS e INP optimizados desde la arquitectura." },
      { title: "SEO técnico", text: "Metadatos, schema, sitemap y URLs limpias out-of-the-box." },
      { title: "Escalabilidad", text: "Código modular preparado para nuevas funcionalidades." },
      { title: "Integraciones", text: "APIs, CRMs, pagos y automatizaciones sin fricción." },
    ],
    useCases: ["Sitios corporativos", "Plataformas SaaS", "Portales de clientes", "E-commerce headless"],
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "Vercel", "PostgreSQL"],
    faq: [
      { q: "¿Qué stack utilizan?", a: "Next.js, React y TypeScript como base. Elegimos backend según el proyecto." },
      { q: "¿Ofrecen mantenimiento?", a: "Sí, con planes de evolución, monitoreo y optimización continua." },
    ],
    relatedServices: ["diseno-web", "desarrollo-apps", "automatizacion"],
    relatedBlogSlugs: ["velocidad-core-web-vitals", "seo-2026"],
  },
  {
    slug: "desarrollo-apps",
    pillar: "desarrollo",
    title: "Desarrollo de Aplicaciones",
    metaTitle: "Desarrollo de Apps Web y Móviles a Medida",
    metaDescription:
      "Desarrollo de aplicaciones web y móviles con UX clara, arquitectura escalable e integraciones. MVPs y productos digitales listos para crecer.",
    keywords: ["desarrollo de apps", "aplicaciones a medida", "mvp", "software a medida"],
    hero: {
      eyebrow: "Desarrollo",
      headline: "Aplicaciones que resuelven problemas reales.",
      sub: "Desde MVPs hasta plataformas complejas — diseño, desarrollo y despliegue con una sola dirección.",
    },
    problem: {
      headline: "Ideas grandes, ejecución lenta",
      paragraphs: [
        "Equipos sin alineación diseño-desarrollo pierden meses en retrabajo y deuda técnica.",
        "Necesitas un partner que entienda producto, no solo código.",
      ],
    },
    solution: {
      headline: "Producto digital end-to-end",
      paragraphs: [
        "Definimos alcance, diseñamos flujos críticos y construimos en sprints con entregables usables.",
        "Cada release deja valor medible para usuarios y negocio.",
      ],
    },
    benefits: [
      { title: "Time-to-market", text: "MVPs funcionales en semanas, no meses." },
      { title: "UX integrada", text: "Flujos validados antes de escalar complejidad." },
      { title: "Arquitectura sólida", text: "Base preparada para features, usuarios y datos." },
      { title: "Integraciones", text: "APIs, auth, pagos y terceros conectados desde el inicio." },
    ],
    useCases: ["MVPs", "Dashboards", "Apps B2B", "Plataformas de reservas"],
    technologies: ["React Native", "Next.js", "Supabase", "Firebase", "REST/GraphQL"],
    faq: [
      { q: "¿Web o móvil?", a: "Ambos. Recomendamos la plataforma según usuarios, presupuesto y roadmap." },
      { q: "¿Cuánto cuesta un MVP?", a: "Depende del alcance. Tras una llamada enviamos propuesta con fases claras." },
    ],
    relatedServices: ["desarrollo-web", "automatizacion", "inteligencia-artificial"],
    relatedBlogSlugs: ["ia-potencia-empresas"],
  },
  {
    slug: "seo",
    pillar: "marketing",
    title: "SEO",
    metaTitle: "Servicios SEO — Posicionamiento Orgánico y Tráfico de Calidad",
    metaDescription:
      "Estrategia SEO integral: auditoría técnica, contenido, enlazado interno y autoridad temática. Atrae tráfico con intención comercial.",
    keywords: ["seo", "posicionamiento web", "seo técnico", "agencia seo"],
    hero: {
      eyebrow: "Marketing Digital",
      headline: "SEO que genera oportunidades, no solo clics.",
      sub: "Combinamos SEO técnico, arquitectura de contenido y autoridad temática para competir por keywords con intención comercial.",
    },
    problem: {
      headline: "Tráfico sin conversión no paga la factura",
      paragraphs: [
        "Muchas estrategias SEO se enfocan en volumen sin alinear contenido, UX y conversión.",
        "Sin una base técnica sólida y clusters temáticos, el crecimiento orgánico se estanca.",
      ],
    },
    solution: {
      headline: "SEO Operating System",
      paragraphs: [
        "Implementamos un sistema SEO escalable: auditoría, arquitectura, landing pages, blog editorial y analítica.",
        "Cada pieza refuerza autoridad en diseño, desarrollo y marketing digital.",
      ],
    },
    benefits: [
      { title: "SEO técnico", text: "Indexabilidad, schema, Core Web Vitals y crawl budget optimizados." },
      { title: "Content clusters", text: "Topic clusters que capturan intención en todo el embudo." },
      { title: "Autoridad", text: "E-E-A-T reforzado con casos, metodología y contenido experto." },
      { title: "Medición", text: "KPIs claros: impresiones, CTR, conversiones y revenue atribuido." },
    ],
    useCases: ["Auditorías SEO", "Migraciones", "Content strategy", "SEO local"],
    technologies: ["Google Search Console", "GA4", "Screaming Frog", "Schema.org", "Next.js SSR/SSG"],
    faq: [
      { q: "¿En cuánto tiempo se ven resultados?", a: "Señales técnicas en semanas; posicionamiento competitivo en 3–6 meses." },
      { q: "¿Hacen link building?", a: "Priorizamos autoridad temática, PR digital y contenido enlazable de calidad." },
    ],
    relatedServices: ["marketing-digital", "diseno-web", "desarrollo-web"],
    relatedBlogSlugs: ["seo-2026", "velocidad-core-web-vitals"],
  },
  {
    slug: "branding",
    pillar: "diseno",
    title: "Branding Digital",
    metaTitle: "Branding Digital — Identidad Visual y Posicionamiento de Marca",
    metaDescription:
      "Branding digital estratégico: identidad visual, voz de marca y sistemas que venden antes del producto. Marca coherente en todos los canales.",
    keywords: ["branding digital", "identidad visual", "marca", "posicionamiento de marca"],
    hero: {
      eyebrow: "Diseño",
      headline: "Una marca fuerte reduce duda antes del pitch.",
      sub: "Construimos identidades digitales con propósito — visuales, verbales y operables en web, redes y producto.",
    },
    problem: {
      headline: "Inconsistencia erosiona confianza",
      paragraphs: [
        "Logos aislados, mensajes contradictorios y assets desalineados hacen que tu marca se sienta amateur.",
        "Sin un sistema de marca, cada pieza nueva cuesta más y comunica menos.",
      ],
    },
    solution: {
      headline: "Sistema de marca operativo",
      paragraphs: [
        "Definimos posicionamiento, identidad visual, tono y guías aplicables a web, social y producto.",
        "Tu marca se ve, suena y se comporta igual en cada touchpoint.",
      ],
    },
    benefits: [
      { title: "Diferenciación", text: "Posicionamiento claro frente a competidores genéricos." },
      { title: "Coherencia", text: "Design system y brand guidelines listos para escalar." },
      { title: "Confianza", text: "Percepción premium que acelera decisiones de compra." },
      { title: "Eficiencia", text: "Menos retrabajo en cada nueva pieza o campaña." },
    ],
    useCases: ["Rebranding", "Lanzamiento de marca", "Brand guidelines", "Identidad para startups"],
    technologies: ["Figma", "Motion Design", "Design Tokens", "Brand Strategy"],
    faq: [
      { q: "¿Incluyen logo?", a: "Sí, como parte de un sistema de identidad completo, no como archivo aislado." },
      { q: "¿Solo digital?", a: "El sistema funciona en digital y se adapta a aplicaciones impresas básicas." },
    ],
    relatedServices: ["diseno-web", "marketing-digital", "diseno-web"],
    relatedBlogSlugs: ["branding-digital"],
  },
  {
    slug: "marketing-digital",
    pillar: "marketing",
    title: "Marketing Digital",
    metaTitle: "Marketing Digital Integrado — SEO, Ads y Contenido",
    metaDescription:
      "Marketing digital integrado: SEO, Google Ads, Meta Ads, email y analítica. Estrategia unificada para crecimiento sostenible.",
    keywords: ["marketing digital", "publicidad digital", "growth marketing", "agencia marketing"],
    hero: {
      eyebrow: "Marketing Digital",
      headline: "Crecimiento con sistema, no con suerte.",
      sub: "Conectamos SEO, contenido, paid media y analítica en una estrategia que escala sin depender de un solo canal.",
    },
    problem: {
      headline: "Canales aislados, resultados volátiles",
      paragraphs: [
        "Invertir en ads sin contenido ni SEO es alquilar tráfico. Depender de un canal es riesgo.",
        "Necesitas un ecosistema donde cada pieza refuerce a las demás.",
      ],
    },
    solution: {
      headline: "Marketing integrado por diseño",
      paragraphs: [
        "Diseñamos funnels completos: awareness → consideración → conversión → retención.",
        "Cada canal tiene un rol claro y métricas compartidas.",
      ],
    },
    benefits: [
      { title: "Visión 360°", text: "SEO + paid + email + social alineados." },
      { title: "ROI medible", text: "Atribución y dashboards con KPIs de negocio." },
      { title: "Escalabilidad", text: "Playbooks replicables por campaña y mercado." },
      { title: "Contenido", text: "Editorial que alimenta orgánico y paid." },
    ],
    useCases: ["Lanzamientos", "Generación de leads", "E-commerce growth", "Brand awareness"],
    technologies: ["Google Ads", "Meta Ads", "GA4", "GTM", "HubSpot", "Mailchimp"],
    faq: [
      { q: "¿Manejan presupuesto de ads?", a: "Sí, con reporting transparente y optimización continua." },
      { q: "¿Trabajan B2B y B2C?", a: "Ambos. Adaptamos estrategia según ciclo de compra e ICP." },
    ],
    relatedServices: ["seo", "diseno-web", "inteligencia-artificial"],
    relatedBlogSlugs: ["marketing-digital-integrado", "seo-2026"],
  },
  {
    slug: "inteligencia-artificial",
    pillar: "desarrollo",
    title: "Inteligencia Artificial",
    metaTitle: "Inteligencia Artificial para Empresas — Automatización y Producto",
    metaDescription:
      "IA aplicada al negocio: automatización, copilotos, chatbots inteligentes e integración con procesos existentes. Potencia equipos, no los reemplaza.",
    keywords: ["inteligencia artificial empresas", "ia para empresas", "automatización ia", "chatbot ia"],
    hero: {
      eyebrow: "Desarrollo",
      headline: "IA que amplifica equipos, no que los reemplaza.",
      sub: "Integramos inteligencia artificial en flujos reales: soporte, ventas, contenido y operaciones — con criterio y control.",
    },
    problem: {
      headline: "Hype sin implementación útil",
      paragraphs: [
        "Muchas empresas prueban IA sin procesos claros y obtienen demos que nadie usa.",
        "La IA necesita datos, contexto y diseño de experiencia para generar valor.",
      ],
    },
    solution: {
      headline: "IA con propósito de negocio",
      paragraphs: [
        "Identificamos casos de uso de alto impacto, prototipamos rápido y desplegamos con métricas.",
        "Automatizamos lo repetitivo para que tu equipo se enfoque en lo estratégico.",
      ],
    },
    benefits: [
      { title: "Productividad", text: "Menos tareas manuales, más velocidad operativa." },
      { title: "Experiencia", text: "Asistentes y copilotos que entienden tu negocio." },
      { title: "Escalabilidad", text: "Procesos que crecen sin contratar proporcionalmente." },
      { title: "Control", text: "Human-in-the-loop y gobernanza de datos." },
    ],
    useCases: ["Chatbots de soporte", "Generación de contenido", "Clasificación de leads", "Automatización documental"],
    technologies: ["OpenAI", "Anthropic", "LangChain", "Vector DB", "APIs REST"],
    faq: [
      { q: "¿Reemplazan personas?", a: "No. La IA amplifica capacidades y elimina fricción operativa." },
      { q: "¿Es seguro para datos sensibles?", a: "Diseñamos arquitecturas con control de acceso y cumplimiento." },
    ],
    relatedServices: ["automatizacion", "desarrollo-apps", "marketing-digital"],
    relatedBlogSlugs: ["ia-potencia-empresas"],
  },
  {
    slug: "automatizacion",
    pillar: "desarrollo",
    title: "Automatización",
    metaTitle: "Automatización de Procesos — APIs, Integraciones y Workflows",
    metaDescription:
      "Automatización de procesos empresariales: integraciones, APIs, workflows y conexión entre herramientas. Menos manual, más precisión.",
    keywords: ["automatización", "integraciones", "apis", "automatización procesos"],
    hero: {
      eyebrow: "Desarrollo",
      headline: "Menos tareas manuales. Más precisión.",
      sub: "Conectamos herramientas, automatizamos flujos y eliminamos cuellos de botella operativos.",
    },
    problem: {
      headline: "Procesos manuales que no escalan",
      paragraphs: [
        "Copiar datos entre sistemas, reportes manuales y tareas repetitivas consumen tiempo y generan errores.",
        "Cada herramienta aislada es un silo que frena el crecimiento.",
      ],
    },
    solution: {
      headline: "Integraciones que unifican operaciones",
      paragraphs: [
        "Diseñamos workflows automatizados entre CRM, ERP, marketing y producto.",
        "APIs robustas y monitoreo para que todo funcione sin sorpresas.",
      ],
    },
    benefits: [
      { title: "Eficiencia", text: "Horas recuperadas cada semana en tareas repetitivas." },
      { title: "Precisión", text: "Menos errores humanos en transferencia de datos." },
      { title: "Visibilidad", text: "Dashboards y alertas en tiempo real." },
      { title: "Escalabilidad", text: "Procesos que soportan más volumen sin más headcount." },
    ],
    useCases: ["Sync CRM ↔ marketing", "Onboarding automatizado", "Reportes automáticos", "Webhooks y ETL"],
    technologies: ["Zapier", "Make", "Node.js", "REST APIs", "Webhooks", "Supabase"],
    faq: [
      { q: "¿Qué herramientas integran?", a: "HubSpot, Salesforce, Google Sheets, Slack, Stripe y más según stack." },
      { q: "¿Requieren cambiar de software?", a: "No. Conectamos lo que ya usas cuando es posible." },
    ],
    relatedServices: ["inteligencia-artificial", "desarrollo-web", "desarrollo-apps"],
    relatedBlogSlugs: ["ia-potencia-empresas", "marketing-digital-integrado"],
  },
  {
    slug: "ecommerce",
    pillar: "desarrollo",
    title: "E-commerce",
    metaTitle: "Desarrollo E-commerce — Tiendas Rápidas y Optimizadas para Conversión",
    metaDescription:
      "E-commerce a medida y headless: tiendas rápidas, checkout optimizado, integraciones de pago e inventario. Diseñadas para vender.",
    keywords: ["ecommerce", "tienda online", "desarrollo ecommerce", "shopify headless"],
    hero: {
      eyebrow: "Desarrollo",
      headline: "Tiendas que venden sin fricción.",
      sub: "E-commerce optimizado para conversión, velocidad y gestión — desde catálogo hasta checkout.",
    },
    problem: {
      headline: "Carritos abandonados y tiendas lentas",
      paragraphs: [
        "Un checkout confuso o una tienda lenta cuesta ventas todos los días.",
        "Plugins genéricos limitan personalización y performance.",
      ],
    },
    solution: {
      headline: "E-commerce diseñado para convertir",
      paragraphs: [
        "UX de compra clara, pagos seguros, integraciones de inventario y analítica de funnel.",
        "Arquitectura headless cuando el negocio lo requiere.",
      ],
    },
    benefits: [
      { title: "Conversión", text: "Checkout optimizado y UX de compra sin fricción." },
      { title: "Velocidad", text: "Core Web Vitals optimizados para SEO y UX." },
      { title: "Flexibilidad", text: "Catálogo, promos y contenido bajo control." },
      { title: "Integraciones", text: "Pagos, envíos, ERP y marketing conectados." },
    ],
    useCases: ["Tiendas D2C", "Marketplaces", "B2B ordering", "Headless commerce"],
    technologies: ["Shopify", "Stripe", "Medusa", "Next.js", "Sanity CMS"],
    faq: [
      { q: "¿Shopify o custom?", a: "Depende de complejidad. Recomendamos la opción con mejor ROI a 12 meses." },
      { q: "¿Migración de plataforma?", a: "Sí, con plan de redirects SEO y preservación de rankings." },
    ],
    relatedServices: ["desarrollo-web", "diseno-web", "marketing-digital"],
    relatedBlogSlugs: ["pagina-web-conversiones", "velocidad-core-web-vitals"],
  },
];

export { sharedCta };

export function getAllServiceSlugs() {
  return SEO_SERVICES.map((s) => s.slug);
}

export function getServiceBySlug(slug: string) {
  return SEO_SERVICES.find((s) => s.slug === slug);
}

export function getServicesByPillar(pillar: SeoPillar) {
  return SEO_SERVICES.filter((s) => s.pillar === pillar);
}

export const PILLAR_LABELS: Record<SeoPillar, string> = {
  diseno: "Diseño",
  desarrollo: "Desarrollo",
  marketing: "Marketing Digital",
};

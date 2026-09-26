/**
 * Cada imagen es evidencia del oficio, tomada del propio trabajo de Scelerity.
 * IA y automatización no usan foto: el servicio es una relación, no un objeto fotografiable.
 */

export type SceneTone = "paper" | "ivory" | "stone" | "dusk" | "ink" | "void";
export type SceneMotion = "interface" | "type" | "parallax" | "system";
export type SceneLayout = "screen" | "mark" | "build" | "device" | "store" | "search" | "campaign" | "decision" | "flow";

export type ServiceScene = {
  slug: string;
  index: string;
  pillar: { es: string; en: string };
  title: { es: string; en: string };
  line: { es: string; en: string };
  detail: { es: string; en: string };
  tone: SceneTone;
  motion: SceneMotion;
  layout: SceneLayout;
  image?: {
    src: string;
    alt: { es: string; en: string };
    objectPosition: string;
    width: number;
    height: number;
    /** El color aparece cuando la escena está activa. Solo donde la imagen es campaña, no interfaz. */
    wake?: boolean;
  };
};

export const TONE: Record<SceneTone, { bg: string; fg: string; muted: string; dark: boolean }> = {
  paper: { bg: "#f7f6f3", fg: "#1c1c1e", muted: "#5e5952", dark: false },
  ivory: { bg: "#f3efe6", fg: "#1c1c1e", muted: "#5e5952", dark: false },
  stone: { bg: "#e4ddd2", fg: "#1c1c1e", muted: "#4e4943", dark: false },
  dusk: { bg: "#3a342c", fg: "#f4f0e8", muted: "#c8c0b4", dark: true },
  ink: { bg: "#161514", fg: "#f4f0e8", muted: "#a39e96", dark: true },
  void: { bg: "#09090b", fg: "#f4f0e8", muted: "#a39e96", dark: true },
};

export const SERVICE_SCENES: ServiceScene[] = [
  {
    slug: "diseno-web",
    index: "01",
    pillar: { es: "Diseño", en: "Design" },
    title: { es: "Diseño web", en: "Web design" },
    line: {
      es: "La primera pantalla tiene que entenderse sin que nadie la explique.",
      en: "The first screen has to make sense without anyone explaining it.",
    },
    detail: {
      es: "Interfaz, páginas y una estructura que se usa en el teléfono y en el escritorio.",
      en: "Interface, pages, and a structure that works on a phone and on a desk.",
    },
    tone: "paper",
    motion: "interface",
    layout: "screen",
    image: {
      src: "/projects/northline.jpg",
      alt: {
        es: "Interfaz editorial en un monitor y un teléfono: navegación, titular y pie de página",
        en: "Editorial interface on a monitor and a phone: navigation, headline, and footer",
      },
      objectPosition: "50% 42%",
      width: 1600,
      height: 1067,
    },
  },
  {
    slug: "branding",
    index: "02",
    pillar: { es: "Diseño", en: "Design" },
    title: { es: "Branding", en: "Branding" },
    line: {
      es: "Un proyecto se reconoce antes de decir cómo se llama.",
      en: "A project is recognized before anyone says its name.",
    },
    detail: {
      es: "Identidad, dirección de arte y un sistema visual para piezas, escenario y pantalla.",
      en: "Identity, art direction, and a visual system for print, stage, and screen.",
    },
    tone: "ivory",
    motion: "type",
    layout: "mark",
    image: {
      src: "/soluciones/diseno.webp",
      alt: {
        es: "Sistema de identidad: papelería, marca y manual",
        en: "Identity system: stationery, mark, and guidelines",
      },
      objectPosition: "50% 50%",
      width: 1400,
      height: 1600,
    },
  },
  {
    slug: "desarrollo-web",
    index: "03",
    pillar: { es: "Desarrollo", en: "Development" },
    title: { es: "Desarrollo web", en: "Web development" },
    line: {
      es: "El sitio tiene que aguantar el día en que de verdad llega gente.",
      en: "The site has to hold the day people actually show up.",
    },
    detail: {
      es: "Código listo para producción, velocidad y una base que puede crecer.",
      en: "Production-ready code, speed, and a base that can grow.",
    },
    tone: "stone",
    motion: "interface",
    layout: "build",
    image: {
      src: "/projects/aether.jpg",
      alt: {
        es: "Producto digital construido: navegación, paneles y datos en una sola interfaz",
        en: "A built digital product: navigation, panels, and data in one interface",
      },
      objectPosition: "50% 45%",
      width: 1600,
      height: 1067,
    },
  },
  {
    slug: "desarrollo-apps",
    index: "04",
    pillar: { es: "Desarrollo", en: "Development" },
    title: { es: "Aplicaciones", en: "Applications" },
    line: {
      es: "Algo que las personas abren otra vez, no una demo que se queda en una carpeta.",
      en: "Something people open again, not a demo left in a folder.",
    },
    detail: {
      es: "Producto digital de punta a punta: flujos, datos e integraciones.",
      en: "Digital product end to end: flows, data, and integrations.",
    },
    tone: "dusk",
    motion: "interface",
    layout: "device",
    image: {
      src: "/projects/vespera.jpg",
      alt: {
        es: "Aplicación en dos teléfonos: catálogo en uno y cuenta en el otro",
        en: "An application on two phones: catalog on one, account on the other",
      },
      objectPosition: "50% 55%",
      width: 1400,
      height: 1600,
    },
  },
  {
    slug: "ecommerce",
    index: "05",
    pillar: { es: "Desarrollo", en: "Development" },
    title: { es: "E-commerce", en: "E-commerce" },
    line: {
      es: "Comprar sin perder el hilo entre el deseo y el pago.",
      en: "Buying without losing the thread between wanting and paying.",
    },
    detail: {
      es: "Tienda, catálogo y checkout para que la compra no se corte.",
      en: "Store, catalog, and checkout so the purchase does not break.",
    },
    tone: "dusk",
    motion: "interface",
    layout: "store",
    image: {
      src: "/soluciones/meridian.webp",
      alt: {
        es: "Tienda online: ficha de producto y checkout",
        en: "Online store: product page and checkout",
      },
      objectPosition: "50% 40%",
      width: 1400,
      height: 1600,
    },
  },
  {
    slug: "seo",
    index: "06",
    pillar: { es: "Marketing digital", en: "Digital marketing" },
    title: { es: "SEO", en: "SEO" },
    line: {
      es: "Estar ahí cuando alguien ya está buscando.",
      en: "Being there when someone is already looking.",
    },
    detail: {
      es: "SEO técnico, contenido y medición de lo que trae oportunidades.",
      en: "Technical SEO, content, and measurement of what brings opportunities.",
    },
    tone: "ink",
    motion: "system",
    layout: "search",
    image: {
      src: "/soluciones/signal.webp",
      alt: {
        es: "Panel de búsqueda: posiciones, contenido y rendimiento",
        en: "Search panel: rankings, content, and performance",
      },
      objectPosition: "50% 30%",
      width: 1600,
      height: 1000,
    },
  },
  {
    slug: "marketing-digital",
    index: "07",
    pillar: { es: "Marketing digital", en: "Digital marketing" },
    title: { es: "Marketing digital", en: "Digital marketing" },
    line: {
      es: "La campaña, el sitio y las redes tienen que decir lo mismo.",
      en: "The campaign, the site, and social have to say the same thing.",
    },
    detail: {
      es: "Contenido, pauta y una lectura clara de a quién le importa.",
      en: "Content, media, and a clear read of who it matters to.",
    },
    tone: "ink",
    motion: "parallax",
    layout: "campaign",
    image: {
      src: "/soluciones/marketing.webp",
      alt: {
        es: "Lectura de campaña: canales, analítica y métricas juntas",
        en: "A campaign read: channels, analytics, and metrics together",
      },
      objectPosition: "50% 45%",
      width: 1600,
      height: 1100,
      wake: true,
    },
  },
  {
    slug: "inteligencia-artificial",
    index: "08",
    pillar: { es: "Desarrollo", en: "Development" },
    title: { es: "Inteligencia artificial", en: "Artificial intelligence" },
    line: {
      es: "Más capacidad para el equipo. La decisión sigue siendo de una persona.",
      en: "More capacity for the team. The decision stays with a person.",
    },
    detail: {
      es: "Herramientas de IA aplicadas al trabajo real, con alguien al mando.",
      en: "AI tools applied to real work, with a person in charge.",
    },
    tone: "void",
    motion: "system",
    layout: "decision",
  },
  {
    slug: "automatizacion",
    index: "09",
    pillar: { es: "Desarrollo", en: "Development" },
    title: { es: "Automatización", en: "Automation" },
    line: {
      es: "Sacar a la gente de la tarea que se repite para dejarles la que importa.",
      en: "Taking people off the repeated task so they can do the one that matters.",
    },
    detail: {
      es: "Integraciones y procesos que quitan trabajo manual sin perder el control.",
      en: "Integrations and processes that remove manual work without losing control.",
    },
    tone: "void",
    motion: "system",
    layout: "flow",
  },
];

export const SERVICES_INTRO = {
  es: {
    kicker: "Oficio",
    headline: "Diseño, desarrollo y marketing.",
    sub: "Cada capítulo muestra el objeto del trabajo.",
  },
  en: {
    kicker: "Craft",
    headline: "Design, development, and marketing.",
    sub: "Each chapter shows the object of the work.",
  },
} as const;

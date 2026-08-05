export type SolutionsReelVariant = "hero" | "dev" | "landing";

export type SolutionsVisualDef = {
  type: "image" | "reel";
  src?: string;
  alt: { es: string; en: string };
  reel?: SolutionsReelVariant;
};

export const solutionsVisuals = {
  hero: {
    type: "reel",
    reel: "hero",
    alt: {
      es: "Soluciones digitales — sitio web en desktop y móvil",
      en: "Digital solutions — website on desktop and mobile",
    },
  },
  pillars: [
    {
      type: "image",
      src: "/soluciones/diseno.webp",
      alt: {
        es: "Sistema de identidad visual, papelería y manual de marca",
        en: "Visual identity system, stationery, and brand guidelines",
      },
    },
    {
      type: "reel",
      reel: "dev",
      alt: {
        es: "Desarrollo web responsive — interfaces en desktop y móvil",
        en: "Responsive web development — desktop and mobile interfaces",
      },
    },
    {
      type: "image",
      src: "/soluciones/marketing.webp",
      alt: {
        es: "Dashboard de campañas, analítica y métricas de marketing",
        en: "Campaign dashboard, analytics, and marketing metrics",
      },
    },
  ],
  showcase: [
    {
      type: "image",
      src: "/projects/northline.jpg",
      alt: {
        es: "Northline — identidad visual y motion design",
        en: "Northline — visual identity and motion design",
      },
    },
    {
      type: "image",
      src: "/projects/aether.jpg",
      alt: {
        es: "Aether — plataforma digital y producto",
        en: "Aether — digital platform and product",
      },
    },
    {
      type: "reel",
      reel: "landing",
      alt: {
        es: "Pulse — landing page optimizada para conversión",
        en: "Pulse — conversion-optimized landing page",
      },
    },
    {
      type: "image",
      src: "/soluciones/meridian.webp",
      alt: {
        es: "Meridian — tienda online con checkout y fichas de producto",
        en: "Meridian — online store with checkout and product pages",
      },
    },
    {
      type: "image",
      src: "/soluciones/signal.webp",
      alt: {
        es: "Signal — panel de SEO, rankings y rendimiento de contenido",
        en: "Signal — SEO panel, rankings, and content performance",
      },
    },
  ],
  strategy: {
    type: "image",
    src: "/soluciones/estrategia.webp",
    alt: {
      es: "Estrategia digital — KPIs, analítica y planificación",
      en: "Digital strategy — KPIs, analytics, and planning",
    },
  },
} as const satisfies {
  hero: SolutionsVisualDef;
  pillars: SolutionsVisualDef[];
  showcase: SolutionsVisualDef[];
  strategy: SolutionsVisualDef;
};

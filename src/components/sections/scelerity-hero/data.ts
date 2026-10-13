/**
 * Tres planos de una misma idea: la oferta sale a la vista.
 * Hoja en blanco, la misma composición en teléfono y papel, ticket y caja con el mismo signo.
 * Sin texto dentro de la imagen. Piezas generadas para este sitio.
 */

export const HERO_PEOPLE = [
  {
    id: "art",
    pillar: { es: "Identidad", en: "Identity" },
    src: "/hero/hoja.jpg",
    width: 1376,
    height: 768,
    objectPosition: "50% 62%",
    alt: {
      es: "Una hoja en blanco que sale de una carpeta negra, con un filo magenta",
      en: "A blank sheet pulled from a black folder, with a magenta edge",
    },
  },
  {
    id: "tech",
    pillar: { es: "Sitio web", en: "Website" },
    src: "/hero/telefono.jpg",
    width: 1376,
    height: 768,
    objectPosition: "50% 58%",
    alt: {
      es: "Un teléfono y una tarjeta con la misma composición de bloques, sin texto",
      en: "A phone and a card sharing the same block layout, with no text",
    },
  },
  {
    id: "culture",
    pillar: { es: "Mensajes", en: "Messages" },
    src: "/hero/ticket-caja.jpg",
    width: 1376,
    height: 768,
    objectPosition: "50% 70%",
    alt: {
      es: "Un ticket y una caja con el mismo signo y la misma franja magenta",
      en: "A ticket and a box sharing the same mark and the same magenta stripe",
    },
  },
] as const;

export const HERO_COPY = {
  es: {
    sr: "Diseño, tecnología y estrategia para marcas con propósito.",
    plate: "Drawboard · Agencia creativa y digital",
    line: "Diseño, tecnología",
    key: "y estrategia.",
    deck: "",
    cta: "Cuéntanos tu proyecto",
    ctaSecondary: "Conoce nuestros servicios",
    system: "Sistema Drawboard",
    index: "01 / 03",
    coord: "4.711° N",
    coord2: "74.072° W",
  },
  en: {
    sr: "Design, technology, and strategy for brands with purpose.",
    plate: "Drawboard · Creative and digital agency",
    line: "Design, technology",
    key: "and strategy.",
    deck: "",
    cta: "Tell us about your project",
    ctaSecondary: "See our services",
    system: "Drawboard System",
    index: "01 / 03",
    coord: "4.711° N",
    coord2: "74.072° W",
  },
} as const;

export const SLICE_COUNT = 7;

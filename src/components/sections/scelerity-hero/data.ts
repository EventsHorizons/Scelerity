/**
 * Tres escenas, un solo plano.
 * Arte → Sistemas → Cultura. Una persona haciendo el oficio, no un retrato suelto ni un concierto.
 * Origen: Unsplash (licencia libre), guardadas en /public/hero.
 */

export const HERO_PEOPLE = [
  {
    id: "art",
    pillar: { es: "Arte", en: "Art" },
    src: "/hero/arte.jpg",
    width: 2400,
    height: 1350,
    objectPosition: "58% 46%",
    alt: {
      es: "Persona pintando en un estudio, con paleta, pinceles y caballete",
      en: "A person painting in a studio, with palette, brushes, and easel",
    },
  },
  {
    id: "tech",
    pillar: { es: "Sistemas", en: "Systems" },
    src: "/hero/sistemas.jpg",
    width: 2400,
    height: 1350,
    objectPosition: "62% 48%",
    alt: {
      es: "Persona trabajando frente a un portátil con código en pantalla",
      en: "A person working at a laptop with code on the screen",
    },
  },
  {
    id: "culture",
    pillar: { es: "Cultura", en: "Culture" },
    src: "/hero/cultura.jpg",
    width: 2400,
    height: 1350,
    objectPosition: "50% 42%",
    alt: {
      es: "Persona frente a un cuadro en un museo",
      en: "A person standing before a painting in a museum",
    },
  },
] as const;

export const HERO_COPY = {
  es: {
    sr: "Ideas en cultura.",
    plate: "Arte, sistemas y cultura",
    line: "Ideas en",
    key: "cultura",
    system: "Sistema Scelerity",
    index: "01 / 03",
    coord: "4.711° N",
    coord2: "74.072° W",
  },
  en: {
    sr: "Ideas in culture.",
    plate: "Art, systems and culture",
    line: "Ideas in",
    key: "culture",
    system: "Scelerity System",
    index: "01 / 03",
    coord: "4.711° N",
    coord2: "74.072° W",
  },
} as const;

export const SLICE_COUNT = 7;

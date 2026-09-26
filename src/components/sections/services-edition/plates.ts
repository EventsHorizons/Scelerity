/**
 * Un plano por capítulo. Arquitectura o una sola persona.
 * No son eventos ni multitudes.
 */

export const EDITION_PLATES = {
  hero: {
    src: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=2200&q=80",
    width: 2200,
    height: 1467,
    objectPosition: "50% 45%",
    alt: {
      es: "Detalle arquitectónico, hormigón y luz lateral",
      en: "Architectural detail, concrete and side light",
    },
  },
  capabilities: [
    {
      src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1800&q=80",
      objectPosition: "50% 40%",
      alt: {
        es: "Fachada, estructura y ritmo de vanos",
        en: "Facade, structure, and the rhythm of openings",
      },
    },
    {
      src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1600&q=80",
      objectPosition: "50% 18%",
      alt: {
        es: "Retrato editorial, mirada frontal",
        en: "Editorial portrait, frontal gaze",
      },
    },
    {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1600&q=80",
      objectPosition: "50% 14%",
      alt: {
        es: "Retrato cerrado, luz cálida sobre el rostro",
        en: "Tight portrait, warm light on the face",
      },
    },
  ],
} as const;

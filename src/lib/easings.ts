/**
 * Motion System v2 easings — Framer Motion mirrors of CustomEase "craft"/"type"/"snap".
 */
export const ease = {
  craft: [0.16, 1, 0.3, 1] as const,
  scene: [0.7, 0, 0.2, 1] as const,
  type: [0.22, 1.15, 0.28, 1] as const,
  snap: [0.2, 1, 0.25, 1] as const,
  bolt: [0.16, 1, 0.3, 1] as const,
  boltInOut: [0.7, 0, 0.2, 1] as const,
  charge: [0.4, -0.08, 0.05, 1] as const,
  outExpo: [0.16, 1, 0.3, 1] as const,
  outQuart: [0.16, 1, 0.3, 1] as const,
  inOutCubic: [0.7, 0, 0.2, 1] as const,
  cinematic: [0.16, 1, 0.3, 1] as const,
};

export const duration = {
  strike: 0.28,
  fast: 0.42,
  base: 0.7,
  atmosphere: 0.7,
  hero: 2.6,
  travel: 0.95,
  gear: 1.1,
};

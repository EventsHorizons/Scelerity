/**
 * Motion from design_system.md.
 * Enter / settle / press: cubic-bezier(0.22, 1, 0.36, 1).
 * Exit: cubic-bezier(0.4, 0, 1, 1).
 */
export const ease = {
  stoic: [0.45, 0.05, 0.55, 0.95] as const,
  craft: [0.22, 1, 0.36, 1] as const,
  scene: [0.4, 0, 1, 1] as const,
  type: [0.22, 1, 0.36, 1] as const,
  snap: [0.22, 1, 0.36, 1] as const,
  bolt: [0.22, 1, 0.36, 1] as const,
  boltInOut: [0.4, 0, 1, 1] as const,
  charge: [0.22, 1, 0.36, 1] as const,
  outExpo: [0.22, 1, 0.36, 1] as const,
  outQuart: [0.22, 1, 0.36, 1] as const,
  inOutCubic: [0.4, 0, 1, 1] as const,
  cinematic: [0.22, 1, 0.36, 1] as const,
};

export const duration = {
  instant: 0.08,
  fast: 0.14,
  mid: 0.24,
  slow: 0.38,
  expressive: 0.64,
  ambient: 1.2,
  strike: 0.14,
  base: 0.24,
  atmosphere: 0.38,
  hero: 0.38,
  travel: 0.24,
  gear: 0.24,
};

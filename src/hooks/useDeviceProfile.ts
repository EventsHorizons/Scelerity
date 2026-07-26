"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/**
 * Central device capability profile — drives progressive enhancement
 * so mobile never downloads or runs desktop-grade motion / WebGL.
 */
export function useDeviceProfile() {
  const finePointer = useMediaQuery("(hover: hover) and (pointer: fine)");
  const desktop = useMediaQuery("(min-width: 64rem)");
  const reduced = useReducedMotion();

  const animate = !reduced && finePointer;
  const smoothScroll = !reduced && finePointer;
  const webgl = !reduced && desktop;

  return {
    finePointer,
    desktop,
    reduced,
    /** GSAP timelines, SplitText, magnetic effects */
    animate,
    /** Lenis + GSAP ticker */
    smoothScroll,
    /** Three.js energy field */
    webgl,
    /** Blur-heavy effects, multi-orb ambient */
    lowPower: !desktop || !finePointer,
  };
}

"use client";

import { useEffect, useState } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useReducedMotion } from "@/hooks/useReducedMotion";

function detectLowPowerDevice(): boolean {
  if (typeof navigator === "undefined") return false;
  const cores = navigator.hardwareConcurrency ?? 8;
  const memory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 8;
  const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection
    ?.saveData;
  return cores <= 4 || memory <= 4 || Boolean(saveData);
}

/**
 * Central device capability profile — drives progressive enhancement
 * so mobile never downloads or runs desktop-grade motion / WebGL.
 */
export function useDeviceProfile() {
  const finePointer = useMediaQuery("(hover: hover) and (pointer: fine)");
  const desktop = useMediaQuery("(min-width: 64rem)");
  const reduced = useReducedMotion();
  const [lowPowerHw, setLowPowerHw] = useState(false);

  useEffect(() => {
    setLowPowerHw(detectLowPowerDevice());
  }, []);

  const lowPower = !desktop || !finePointer || lowPowerHw;
  const animate = !reduced && finePointer && !lowPowerHw;
  const smoothScroll = !reduced && finePointer && !lowPowerHw;
  const webgl = !reduced && desktop && !lowPowerHw;

  return {
    finePointer,
    desktop,
    reduced,
    lowPowerHw,
    /** GSAP timelines, SplitText, magnetic effects */
    animate,
    /** Lenis + GSAP ticker */
    smoothScroll,
    /** Three.js energy field */
    webgl,
    /** Blur-heavy effects, multi-orb ambient */
    lowPower,
  };
}

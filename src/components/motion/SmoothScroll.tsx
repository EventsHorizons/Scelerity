"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { registerGsap, gsap, ScrollTrigger } from "@/lib/gsap";
import { setScrollVelocity } from "@/lib/scrollVelocity";
import { setLenisInstance } from "@/lib/lenis";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;

    registerGsap();

    // Aggressive, high-momentum wheel response — quick to react, quick to stop.
    const lenis = new Lenis({
      duration: 0.9,
      easing: (t) => 1 - Math.pow(1 - t, 3.5),
      smoothWheel: true,
      wheelMultiplier: 1.05,
      touchMultiplier: 1.4,
    });

    setLenisInstance(lenis);

    lenis.on(
      "scroll",
      (e: { velocity: number }) => {
        ScrollTrigger.update();
        const v = e.velocity ?? 0;
        // Normalize into a soft [-1, 1]-ish band for downstream transforms.
        const clamped = gsap.utils.clamp(-1, 1, v / 40);
        setScrollVelocity(clamped, v >= 0 ? 1 : -1);
      },
    );

    const ticker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(ticker);
    gsap.ticker.lagSmoothing(0);

    document.documentElement.classList.add("lenis", "lenis-smooth");

    return () => {
      gsap.ticker.remove(ticker);
      setLenisInstance(null);
      lenis.destroy();
      setScrollVelocity(0, 1);
      document.documentElement.classList.remove("lenis", "lenis-smooth");
    };
  }, [reduced]);

  return <>{children}</>;
}

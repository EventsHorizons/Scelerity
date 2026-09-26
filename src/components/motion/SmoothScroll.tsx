"use client";

import { useEffect } from "react";
import { registerGsap, gsap, registerScrollTrigger } from "@/lib/gsap";
import { setLenisInstance } from "@/lib/lenis";

/** Desktop-only Lenis — loaded dynamically so mobile never pays the bundle cost. */
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    let destroyed = false;
    let cleanup: (() => void) | undefined;

    const cores = navigator.hardwareConcurrency ?? 8;
    const memory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 8;
    const lowPower = cores <= 4 || memory <= 4;

    (async () => {
      const [{ default: Lenis }, ScrollTrigger] = await Promise.all([
        import("lenis"),
        registerScrollTrigger(),
      ]);

      if (destroyed) return;

      registerGsap();

      const lenis = new Lenis({
        duration: lowPower ? 1 : 1.15,
        easing: (t) => 1 - Math.pow(1 - t, 3),
        smoothWheel: true,
        wheelMultiplier: lowPower ? 0.9 : 0.95,
        touchMultiplier: 1,
        lerp: lowPower ? 0.09 : 0.1,
      });

      setLenisInstance(lenis);

      lenis.on("scroll", () => {
        ScrollTrigger.update();
      });

      const ticker = (time: number) => {
        lenis.raf(time * 1000);
      };

      gsap.ticker.add(ticker);
      gsap.ticker.lagSmoothing(0);

      document.documentElement.classList.add("lenis", "lenis-smooth");

      cleanup = () => {
        gsap.ticker.remove(ticker);
        setLenisInstance(null);
        lenis.destroy();
        document.documentElement.classList.remove("lenis", "lenis-smooth");
      };
    })();

    return () => {
      destroyed = true;
      cleanup?.();
    };
  }, []);

  return <>{children}</>;
}

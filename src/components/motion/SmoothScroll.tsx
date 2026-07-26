"use client";

import { useEffect } from "react";
import { registerGsap, gsap, registerScrollTrigger } from "@/lib/gsap";
import { setLenisInstance } from "@/lib/lenis";

/** Desktop-only Lenis — loaded dynamically so mobile never pays the bundle cost. */
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    let destroyed = false;
    let cleanup: (() => void) | undefined;

    (async () => {
      const [{ default: Lenis }, ScrollTrigger] = await Promise.all([
        import("lenis"),
        registerScrollTrigger(),
      ]);

      if (destroyed) return;

      registerGsap();

      const lenis = new Lenis({
        duration: 0.9,
        easing: (t) => 1 - Math.pow(1 - t, 3.5),
        smoothWheel: true,
        wheelMultiplier: 1.05,
        touchMultiplier: 1.4,
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

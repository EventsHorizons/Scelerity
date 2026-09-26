"use client";

import { useLayoutEffect, type RefObject } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap, registerGsap } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type Lens = { x: number; y: number; r: number };

/**
 * El cursor no entra en React.
 * La lente del hero va por quickTo. El proceso horizontal va pineado al scroll.
 */
export function useEditionMotion(rootRef: RefObject<HTMLElement | null>) {
  const reduced = useReducedMotion();

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root || reduced) return;

    registerGsap();
    gsap.registerPlugin(ScrollTrigger);

    let detach: (() => void) | null = null;
    let tick: (() => void) | null = null;
    const mm = gsap.matchMedia();

    const ctx = gsap.context(() => {
      const lensEl = root.querySelector<HTMLElement>("[data-edition='lens']");
      if (lensEl) {
        const lens: Lens = { x: 50, y: 42, r: 0 };
        const xTo = gsap.quickTo(lens, "x", { duration: 0.45, ease: "power3.out" });
        const yTo = gsap.quickTo(lens, "y", { duration: 0.45, ease: "power3.out" });
        const rTo = gsap.quickTo(lens, "r", { duration: 0.55, ease: "power3.out" });

        const paint = () => {
          lensEl.style.setProperty("--mx", `${lens.x}%`);
          lensEl.style.setProperty("--my", `${lens.y}%`);
          lensEl.style.setProperty("--mr", `${lens.r}vw`);
        };

        tick = () => paint();
        gsap.ticker.add(tick);

        const hero = root.querySelector<HTMLElement>("[data-edition='hero']");
        const onMove = (event: PointerEvent) => {
          if (!hero) return;
          const bounds = hero.getBoundingClientRect();
          const nx = (event.clientX - bounds.left) / bounds.width;
          const ny = (event.clientY - bounds.top) / bounds.height;
          xTo(nx * 100);
          yTo(ny * 100);
          rTo(26);
        };
        const onLeave = () => rTo(0);

        hero?.addEventListener("pointermove", onMove);
        hero?.addEventListener("pointerleave", onLeave);
        detach = () => {
          hero?.removeEventListener("pointermove", onMove);
          hero?.removeEventListener("pointerleave", onLeave);
        };
      }

      root.querySelectorAll<HTMLElement>("[data-cap]").forEach((article) => {
        const photo = article.querySelector<HTMLElement>("[data-cap-photo]");
        ScrollTrigger.create({
          trigger: article,
          start: "top 58%",
          end: "bottom 42%",
          onToggle: (self) => {
            article.classList.toggle("is-active", self.isActive);
            if (!self.isActive) return;
            const id = article.getAttribute("data-cap");
            root.querySelectorAll<HTMLElement>("[data-cap-nav]").forEach((el) => {
              el.classList.toggle("is-current", el.getAttribute("data-cap-nav") === id);
            });
          },
        });

        if (photo) {
          gsap.fromTo(
            photo,
            { y: 32 },
            {
              y: -28,
              ease: "none",
              scrollTrigger: {
                trigger: article,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            },
          );
        }
      });

      mm.add("(min-width: 1024px)", () => {
        const section = root.querySelector<HTMLElement>("[data-edition='process']");
        const track = root.querySelector<HTMLElement>("[data-edition='track']");
        const title = root.querySelector<HTMLElement>("[data-edition='process-title']");
        if (!section || !track) return;

        const distance = () => {
          const titleW = title?.offsetWidth ?? 0;
          return Math.max(track.scrollWidth - (window.innerWidth - titleW) + 48, 0);
        };

        gsap.to(track, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            pin: true,
            pinType: "transform",
            scrub: 0.65,
            start: "top top",
            end: () => `+=${distance()}`,
            invalidateOnRefresh: true,
          },
        });
      });
    }, root);

    return () => {
      detach?.();
      if (tick) gsap.ticker.remove(tick);
      mm.revert();
      ctx.revert();
    };
  }, [reduced, rootRef]);
}

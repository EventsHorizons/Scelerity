"use client";

import { useLayoutEffect, type RefObject } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap, registerGsap } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/** El movimiento cambia con el oficio: interfaz precisa, tipo que se revela, foto que se desplaza, sistema que se activa. */
export function useServiceMotion(rootRef: RefObject<HTMLElement | null>) {
  const reduced = useReducedMotion();

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root || reduced) return;

    registerGsap();
    gsap.registerPlugin(ScrollTrigger);
    const desktop = window.matchMedia("(min-width: 1024px)").matches;

    const ctx = gsap.context(() => {
      const scenes = gsap.utils.toArray<HTMLElement>("[data-scene]");

      scenes.forEach((scene) => {
        const kind = scene.dataset.motion;
        const reveal = scene.querySelector<HTMLElement>("[data-reveal]");
        const photo = scene.querySelector<HTMLElement>("[data-photo]");
        const title = scene.querySelector<HTMLElement>("[data-title]");

        if (kind === "interface" && reveal) {
          gsap.fromTo(
            reveal,
            { clipPath: "inset(0% 6% 0% 6%)" },
            {
              clipPath: "inset(0% 0% 0% 0%)",
              ease: "none",
              scrollTrigger: {
                trigger: scene,
                start: "top 85%",
                end: "top 45%",
                scrub: 0.35,
              },
            },
          );
        }

        if (kind === "type" && title) {
          gsap.from(title, {
            y: 18,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: { trigger: title, start: "top 88%", toggleActions: "play none none reverse" },
          });
        }

        if (kind === "parallax" && photo && desktop) {
          gsap.fromTo(
            photo,
            { y: 42 },
            {
              y: -32,
              ease: "none",
              scrollTrigger: {
                trigger: scene,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            },
          );
        }

        if (kind === "interface" && photo && desktop) {
          gsap.fromTo(
            photo,
            { y: 16 },
            {
              y: -10,
              ease: "none",
              scrollTrigger: {
                trigger: scene,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            },
          );
        }

        ScrollTrigger.create({
          trigger: scene,
          start: "top 60%",
          end: "bottom 40%",
          onToggle: (self) => scene.classList.toggle("is-active", self.isActive),
        });
      });
    }, root);

    return () => ctx.revert();
  }, [reduced, rootRef]);
}

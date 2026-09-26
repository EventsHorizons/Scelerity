"use client";

import { useLayoutEffect, type RefObject } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap, registerGsap } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import type { Locale } from "@/data/content";
import { HERO_PEOPLE } from "./data";

type Lens = { x: number; y: number; r: number };
type Breath = { s: number; x: number; y: number };

const HOLD = 3.8;
const CLOSED_TOP = "inset(100% 0% 0% 0%)";
const CLOSED_BOTTOM = "inset(0% 0% 100% 0%)";
const OPEN = "inset(0% 0% 0% 0%)";

/**
 * El cursor no entra en React.
 * La lente, la respiración del plano y el reflejo van por quickTo.
 * El cambio de retrato es un corte por tiras (clip-path), no un fundido.
 */
export function useHeroMotion(rootRef: RefObject<HTMLElement | null>, locale: Locale) {
  const reduced = useReducedMotion();

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root || reduced) return;

    registerGsap();
    gsap.registerPlugin(ScrollTrigger);

    const count = HERO_PEOPLE.length;
    let detach: (() => void) | null = null;
    let tick: (() => void) | null = null;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from("[data-hero='system']", { autoAlpha: 0, duration: 0.45, stagger: 0.05 }, 0);
      tl.from("[data-hero='shutter']", { clipPath: "inset(8% 6% 10% 6%)", duration: 1.05 }, 0.12);
      tl.from("[data-hero='type']", { autoAlpha: 0, y: 26, duration: 0.75, stagger: 0.06 }, 0.38);

      const stage = root.querySelector<HTMLElement>("[data-hero-stage]");
      if (stage) {
        gsap.to(stage, {
          y: 36,
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "top top",
            end: "bottom top",
            scrub: 0.45,
          },
        });
      }

      const indexEl = root.querySelector<HTMLElement>("[data-hero='index']");
      const pillarEl = root.querySelector<HTMLElement>("[data-hero='pillar']");

      const paintBlinds = (index: number) => {
        const person = HERO_PEOPLE[index];
        root.querySelectorAll<HTMLImageElement>("[data-hero='blind'], [data-hero='blind-color']").forEach((img) => {
          img.src = person.src;
          img.style.objectPosition = person.objectPosition;
        });
      };

      const closeSlices = () => {
        root.querySelectorAll<HTMLElement>("[data-hero='blinds']").forEach((group) => {
          group.querySelectorAll<HTMLElement>("[data-hero='slice']").forEach((slice, index) => {
            slice.style.clipPath = index % 2 === 1 ? CLOSED_BOTTOM : CLOSED_TOP;
          });
        });
      };

      const commit = (index: number) => {
        for (let i = 0; i < count; i += 1) {
          const visible = i === index ? "1" : "0";
          root.querySelectorAll<HTMLElement>(`[data-person="${i}"]`).forEach((el) => {
            el.style.opacity = visible;
          });
        }
        if (indexEl) {
          indexEl.textContent = `${String(index + 1).padStart(2, "0")} / ${String(count).padStart(2, "0")}`;
        }
        if (pillarEl) pillarEl.textContent = HERO_PEOPLE[index].pillar[locale];
      };

      const sliceGroups = gsap.utils.toArray<HTMLElement>("[data-hero='blinds']").map((group) =>
        Array.from(group.querySelectorAll<HTMLElement>("[data-hero='slice']")),
      );

      if (count > 1 && sliceGroups.length > 0) {
        const cycle = gsap.timeline({ repeat: -1 });

        for (let index = 0; index < count; index += 1) {
          const next = (index + 1) % count;
          cycle.call(() => paintBlinds(next), [], `+=${HOLD}`);
          sliceGroups.forEach((slices, group) => {
            cycle.to(
              slices,
              {
                clipPath: OPEN,
                duration: 1.05,
                ease: "power4.inOut",
                stagger: { each: 0.04, from: "center" },
              },
              group === 0 ? ">" : "<",
            );
          });
          cycle.call(() => {
            commit(next);
            closeSlices();
          });
        }
      }

      const lensEl = root.querySelector<HTMLElement>("[data-hero='lens']");
      const field = root.querySelector<HTMLElement>("[data-hero='field']");
      const mirror = root.querySelector<HTMLElement>("[data-hero='mirror']");
      if (!lensEl) return;

      const lens: Lens = { x: 50, y: 42, r: 0 };
      const breath: Breath = { s: 1, x: 0, y: 0 };
      const drift = { x: 0 };

      const xTo = gsap.quickTo(lens, "x", { duration: 0.45, ease: "power3.out" });
      const yTo = gsap.quickTo(lens, "y", { duration: 0.45, ease: "power3.out" });
      const rTo = gsap.quickTo(lens, "r", { duration: 0.55, ease: "power3.out" });
      const sTo = gsap.quickTo(breath, "s", { duration: 0.9, ease: "power3.out" });
      const fxTo = gsap.quickTo(breath, "x", { duration: 0.9, ease: "power3.out" });
      const fyTo = gsap.quickTo(breath, "y", { duration: 0.9, ease: "power3.out" });
      const driftTo = gsap.quickTo(drift, "x", { duration: 0.7, ease: "power3.out" });

      const paint = () => {
        lensEl.style.setProperty("--mx", `${lens.x}%`);
        lensEl.style.setProperty("--my", `${lens.y}%`);
        lensEl.style.setProperty("--mr", `${lens.r}vw`);
        if (field) {
          field.style.transform = `translate3d(${breath.x}px, ${breath.y}px, 0) scale(${breath.s})`;
        }
        if (mirror) mirror.style.transform = `translate3d(${drift.x}px, 0, 0)`;
      };

      tick = () => paint();
      gsap.ticker.add(tick);

      const onMove = (event: PointerEvent) => {
        const bounds = root.getBoundingClientRect();
        const nx = (event.clientX - bounds.left) / bounds.width;
        const ny = (event.clientY - bounds.top) / bounds.height;
        xTo(nx * 100);
        yTo(ny * 100);
        rTo(28);
        sTo(1 + (ny - 0.5) * 0.045);
        fxTo((nx - 0.5) * -16);
        fyTo((ny - 0.5) * -10);
        driftTo((nx - 0.5) * -22);
      };

      const onLeave = () => {
        rTo(0);
        sTo(1);
        fxTo(0);
        fyTo(0);
        driftTo(0);
      };

      root.addEventListener("pointermove", onMove);
      root.addEventListener("pointerleave", onLeave);
      detach = () => {
        root.removeEventListener("pointermove", onMove);
        root.removeEventListener("pointerleave", onLeave);
      };
    }, root);

    const indexEl = root.querySelector<HTMLElement>("[data-hero='index']");
    const pillarEl = root.querySelector<HTMLElement>("[data-hero='pillar']");
    const indexLabel = indexEl?.textContent ?? "";
    const pillarLabel = pillarEl?.textContent ?? "";

    return () => {
      detach?.();
      if (tick) gsap.ticker.remove(tick);
      if (indexEl) indexEl.textContent = indexLabel;
      if (pillarEl) pillarEl.textContent = pillarLabel;
      ctx.revert();
    };
  }, [reduced, rootRef, locale]);
}

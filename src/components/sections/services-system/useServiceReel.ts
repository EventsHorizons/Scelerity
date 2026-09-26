"use client";

import { useLayoutEffect, type RefObject } from "react";
import { gsap, registerGsap } from "@/lib/gsap";
import { getLenisInstance } from "@/lib/lenis";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/**
 * The section is as tall as every service. A sticky frame holds the viewport
 * and a damped follow (lerp) slides the track sideways, so the motion settles
 * instead of snapping to the scroll.
 */
export function useServiceReel(rootRef: RefObject<HTMLElement | null>, count: number) {
  const reduced = useReducedMotion();

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root || count < 1) return;

    const track = root.querySelector<HTMLElement>("[data-reel='track']");
    if (!track) return;

    const slides = Array.from(track.querySelectorAll<HTMLElement>("[data-reel-slide]"));
    const last = Math.max(count - 1, 1);

    const paint = (eased: number) => {
      const cursor = eased * last;
      const index = Math.min(count - 1, Math.max(0, Math.round(cursor)));
      slides.forEach((slide, i) => {
        const reveal = Math.max(0, 1 - Math.abs(cursor - i));
        slide.style.setProperty("--reveal", reveal.toFixed(4));
        slide.classList.toggle("is-current", i === index);
      });
    };

    const scrollToIndex = (index: number) => {
      if (root.dataset.mode !== "pan") {
        slides[index]?.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
        return;
      }
      const start = root.getBoundingClientRect().top + window.scrollY;
      const span = Math.max(root.offsetHeight - window.innerHeight, 0);
      const y = start + (index / last) * span;
      const lenis = getLenisInstance();
      if (lenis) lenis.scrollTo(y, { duration: 1.6 });
      else window.scrollTo({ top: y, behavior: "smooth" });
    };

    const onJump = (event: MouseEvent) => {
      const link = (event.target as HTMLElement | null)?.closest<HTMLAnchorElement>("a[data-reel-target]");
      if (!link || root.dataset.mode !== "pan") return;
      const index = slides.findIndex((slide) => slide.id === link.dataset.reelTarget);
      if (index < 0) return;
      event.preventDefault();
      scrollToIndex(index);
    };

    document.addEventListener("click", onJump);

    let stop = () => {};

    const startStack = () => {
      root.dataset.mode = "stack";
      root.style.height = "";
      gsap.set(track, { clearProps: "transform" });
      const observer = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
          if (!visible) return;
          const index = slides.indexOf(visible.target as HTMLElement);
          if (index < 0) return;
          paint(index / last);
        },
        { threshold: [0.35, 0.55] },
      );
      slides.forEach((slide) => observer.observe(slide));
      paint(0);
      return () => observer.disconnect();
    };

    const startPan = () => {
      registerGsap();
      root.dataset.mode = "pan";
      let target = 0;
      let eased = 0;
      paint(0);

      let still = 0;

      const read = () => {
        const span = Math.max(root.offsetHeight - window.innerHeight, 1);
        const scrolled = Math.min(Math.max(-root.getBoundingClientRect().top, 0), span);
        target = scrolled / span;
      };

      const tick = () => {
        const before = target;
        read();
        if (Math.abs(target - before) < 0.0004) still += 1;
        else still = 0;
        const resting = still > 12;
        const dest = resting ? Math.round(target * last) / last : target;
        const delta = dest - eased;
        eased = Math.abs(delta) < 0.0008 ? dest : eased + delta * 0.07;
        const width = root.clientWidth;
        gsap.set(track, { x: -eased * last * width, force3D: true });
        paint(eased);
      };

      gsap.ticker.add(tick);

      const hash = window.location.hash.replace("#", "");
      const hashed = slides.findIndex((slide) => slide.id === hash);
      if (hashed > 0) {
        requestAnimationFrame(() => scrollToIndex(hashed));
      }

      return () => {
        gsap.ticker.remove(tick);
        gsap.set(track, { clearProps: "transform" });
      };
    };

    const apply = () => {
      stop();
      const wide = window.matchMedia("(min-width: 64rem)").matches;
      stop = reduced || !wide ? startStack() : startPan();
    };

    apply();
    const media = window.matchMedia("(min-width: 64rem)");
    media.addEventListener("change", apply);

    return () => {
      media.removeEventListener("change", apply);
      document.removeEventListener("click", onJump);
      stop();
      root.style.height = "";
      delete root.dataset.mode;
    };
  }, [count, reduced, rootRef]);
}

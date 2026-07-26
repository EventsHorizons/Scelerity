"use client";

import { useEffect, useRef } from "react";
import { registerGsap, gsap } from "@/lib/gsap";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type CursorMode = "default" | "link" | "cta" | "media";

/**
 * Cursor v2 — extension of the interface.
 * Velocity stretch/compress, magnetic CTAs, ambient glow,
 * adapts appearance between dark and light themes.
 */
export function CustomCursor() {
  const finePointer = useMediaQuery("(hover: hover) and (pointer: fine)");
  const reduced = useReducedMotion();
  const coreRef = useRef<HTMLDivElement>(null);
  const boltRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!finePointer || reduced) return;
    registerGsap();

    const core = coreRef.current!;
    const bolt = boltRef.current!;
    document.body.classList.add("has-custom-cursor");

    const coreX = gsap.quickTo(core, "x", { duration: 0.07, ease: "craft" });
    const coreY = gsap.quickTo(core, "y", { duration: 0.07, ease: "craft" });
    const boltX = gsap.quickTo(bolt, "x", { duration: 0.18, ease: "craft" });
    const boltY = gsap.quickTo(bolt, "y", { duration: 0.18, ease: "craft" });
    const rotTo = gsap.quickTo(bolt, "rotate", { duration: 0.14, ease: "craft" });
    const sxTo = gsap.quickTo(bolt, "scaleX", { duration: 0.28, ease: "craft" });
    const syTo = gsap.quickTo(bolt, "scaleY", { duration: 0.28, ease: "craft" });

    let px = 0;
    let py = 0;
    let x = 0;
    let y = 0;
    let visible = false;
    let mode: CursorMode = "default";
    let pressed = false;
    let magnetX: number | null = null;
    let magnetY: number | null = null;
    let raf = 0;

    const syncTheme = () => {
      const theme = document.documentElement.dataset.theme || "dark";
      bolt.dataset.theme = theme;
      core.dataset.theme = theme;
    };
    syncTheme();
    const mo = new MutationObserver(syncTheme);
    mo.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    const modeScale: Record<CursorMode, number> = {
      default: 1,
      link: 1.85,
      cta: 2.6,
      media: 2.3,
    };

    const onMove = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (!visible) {
        visible = true;
        px = x;
        py = y;
        gsap.set([core, bolt], { autoAlpha: 1 });
      }
    };

    const resolve = (
      target: EventTarget | null,
    ): { mode: CursorMode; el: Element | null } => {
      if (!(target instanceof Element)) return { mode: "default", el: null };
      const el = target.closest<HTMLElement>("[data-cursor]");
      if (el) {
        const m = el.dataset.cursor;
        if (m === "cta" || m === "media" || m === "link") return { mode: m, el };
      }
      if (target.closest("a, button, [role='button']")) return { mode: "link", el: null };
      return { mode: "default", el: null };
    };

    const onOver = (e: PointerEvent) => {
      const { mode: m, el } = resolve(e.target);
      mode = m;
      bolt.dataset.mode = m;
      if (m === "cta" && el) {
        const r = el.getBoundingClientRect();
        magnetX = r.left + r.width / 2;
        magnetY = r.top + r.height / 2;
      } else {
        magnetX = null;
        magnetY = null;
      }
    };

    const onDown = () => {
      pressed = true;
    };
    const onUp = () => {
      pressed = false;
    };
    const onLeaveDoc = () => {
      visible = false;
      gsap.to([core, bolt], { autoAlpha: 0, duration: 0.2 });
    };

    const render = () => {
      const vx = x - px;
      const vy = y - py;
      px += vx;
      py += vy;

      const speed = Math.min(Math.hypot(vx, vy), 60);
      const norm = speed / 60;

      const tx = magnetX !== null ? gsap.utils.interpolate(x, magnetX, 0.38) : x;
      const ty = magnetY !== null ? gsap.utils.interpolate(y, magnetY, 0.38) : y;

      coreX(tx);
      coreY(ty);
      boltX(tx);
      boltY(ty);

      if (speed > 1.2) rotTo((Math.atan2(vy, vx) * 180) / Math.PI);

      const base = modeScale[mode] * (pressed ? 0.68 : 1);
      sxTo(base * (1 + norm * 1.65));
      syTo(base * (1 - norm * 0.5));

      raf = requestAnimationFrame(render);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerover", onOver, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    window.addEventListener("pointerup", onUp, { passive: true });
    document.addEventListener("mouseleave", onLeaveDoc);
    raf = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(raf);
      mo.disconnect();
      document.body.classList.remove("has-custom-cursor");
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      document.removeEventListener("mouseleave", onLeaveDoc);
    };
  }, [finePointer, reduced]);

  if (!finePointer || reduced) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[100]" aria-hidden>
      <div
        ref={boltRef}
        className="cursor-bolt invisible absolute -left-4 -top-4 h-8 w-8 rounded-full"
      />
      <div
        ref={coreRef}
        className="cursor-core invisible absolute -left-[3px] -top-[3px] h-1.5 w-1.5 rounded-full"
      />
    </div>
  );
}

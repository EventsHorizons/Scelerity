"use client";

import { useEffect, useRef } from "react";
import { registerGsap, gsap } from "@/lib/gsap";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type CursorMode = "default" | "link" | "cta" | "media";

/**
 * Precise cursor. A dot sits on the pointer. A thin ring follows
 * a fraction behind and only changes size on links, media, and primary CTAs.
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

    const coreX = gsap.quickTo(core, "x", { duration: 0.08, ease: "power2.out" });
    const coreY = gsap.quickTo(core, "y", { duration: 0.08, ease: "power2.out" });
    const boltX = gsap.quickTo(bolt, "x", { duration: 0.22, ease: "power3.out" });
    const boltY = gsap.quickTo(bolt, "y", { duration: 0.22, ease: "power3.out" });
    const scaleTo = gsap.quickTo(bolt, "scale", { duration: 0.26, ease: "power3.out" });

    let x = 0;
    let y = 0;
    let visible = false;
    let mode: CursorMode = "default";
    let pressed = false;
    let hiddenField = false;
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
      link: 1.35,
      cta: 1.7,
      media: 1.9,
    };

    const onMove = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (!visible) {
        visible = true;
        gsap.set([core, bolt], { x, y, autoAlpha: hiddenField ? 0 : 1 });
      }
    };

    const isField = (target: EventTarget | null) =>
      target instanceof Element &&
      Boolean(target.closest("input, textarea, select, [contenteditable='true']"));

    const resolve = (
      target: EventTarget | null,
    ): { mode: CursorMode; field: boolean } => {
      if (isField(target)) return { mode: "default", field: true };
      if (!(target instanceof Element)) return { mode: "default", field: false };
      const el = target.closest<HTMLElement>("[data-cursor]");
      if (el) {
        const m = el.dataset.cursor;
        if (m === "cta" || m === "media" || m === "link") return { mode: m, field: false };
      }
      if (target.closest("a, button, [role='button']")) return { mode: "link", field: false };
      return { mode: "default", field: false };
    };

    const onOver = (e: PointerEvent) => {
      const next = resolve(e.target);
      mode = next.mode;
      hiddenField = next.field;
      bolt.dataset.mode = next.mode;
      gsap.to([core, bolt], {
        autoAlpha: hiddenField ? 0 : 1,
        duration: 0.1,
        overwrite: "auto",
      });
    };

    const onDown = () => {
      pressed = true;
      bolt.dataset.pressed = "true";
    };
    const onUp = () => {
      pressed = false;
      delete bolt.dataset.pressed;
    };
    const onLeaveDoc = () => {
      visible = false;
      gsap.to([core, bolt], { autoAlpha: 0, duration: 0.12 });
    };

    const render = () => {
      if (visible && !hiddenField) {
        coreX(x);
        coreY(y);
        boltX(x);
        boltY(y);
        scaleTo(modeScale[mode] * (pressed ? 0.86 : 1));
      }
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

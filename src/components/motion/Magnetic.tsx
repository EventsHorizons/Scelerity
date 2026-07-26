"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { registerGsap, gsap } from "@/lib/gsap";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/cn";

type Props = {
  children: ReactNode;
  strength?: number;
  className?: string;
};

/**
 * Mechanical magnetic attraction driven by gsap.quickTo. Snaps toward the
 * pointer with a hard, precise pull and releases under control — no elastic
 * overshoot.
 */
export function Magnetic({ children, strength = 0.4, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const finePointer = useMediaQuery("(hover: hover) and (pointer: fine)");
  const reduced = useReducedMotion();
  const enabled = finePointer && !reduced;

  useEffect(() => {
    const el = ref.current;
    if (!el || !enabled) return;

    registerGsap();
    const xTo = gsap.quickTo(el, "x", { duration: 0.4, ease: "craft" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.4, ease: "craft" });

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height / 2);
      xTo(dx * strength);
      yTo(dy * strength);
    };
    const onLeave = () => {
      xTo(0);
      yTo(0);
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
      gsap.set(el, { x: 0, y: 0 });
    };
  }, [enabled, strength]);

  return (
    <div
      ref={ref}
      className={cn("inline-block max-w-full will-change-transform", className)}
    >
      {children}
    </div>
  );
}

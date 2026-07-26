"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { registerGsap, gsap } from "@/lib/gsap";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/cn";

type Props = {
  children: ReactNode;
  className?: string;
  lean?: number;
};

/**
 * Cards never simply lift. They lean toward the cursor with a subtle
 * perspective tilt, push forward in Z, and route a light glow to the pointer
 * position. All transform-only, smoothed with gsap.quickTo.
 */
export function KineticCard({ children, className, lean = 6 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const finePointer = useMediaQuery("(hover: hover) and (pointer: fine)");
  const reduced = useReducedMotion();
  const enabled = finePointer && !reduced;

  useEffect(() => {
    const el = ref.current;
    if (!el || !enabled) return;

    registerGsap();
    const rotX = gsap.quickTo(el, "rotationX", { duration: 0.5, ease: "craft" });
    const rotY = gsap.quickTo(el, "rotationY", { duration: 0.5, ease: "craft" });
    const zTo = gsap.quickTo(el, "z", { duration: 0.5, ease: "craft" });

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const nx = (e.clientX - r.left) / r.width;
      const ny = (e.clientY - r.top) / r.height;
      el.style.setProperty("--mx", `${nx * 100}%`);
      el.style.setProperty("--my", `${ny * 100}%`);
      rotY((nx - 0.5) * lean * 2);
      rotX((0.5 - ny) * lean * 2);
      zTo(30);
    };
    const onLeave = () => {
      rotX(0);
      rotY(0);
      zTo(0);
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
      gsap.set(el, { rotationX: 0, rotationY: 0, z: 0 });
    };
  }, [enabled, lean]);

  return (
    <div
      ref={ref}
      className={cn("kinetic-card [transform-style:preserve-3d] will-change-transform", className)}
      style={{ perspective: 900 }}
    >
      {children}
    </div>
  );
}

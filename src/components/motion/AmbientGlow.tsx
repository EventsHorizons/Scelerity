"use client";

import { cn } from "@/lib/cn";

type Variant = "hero" | "services" | "featured" | "cta";

type Props = {
  variant: Variant;
  className?: string;
};

/**
 * Architectural ambient lighting — large blurred radial gradients that
 * add depth without replacing the section background. CSS-only, GPU-friendly.
 */
export function AmbientGlow({ variant, className }: Props) {
  return (
    <div
      className={cn(
        "ambient-glow pointer-events-none absolute inset-0 overflow-hidden",
        `ambient-glow--${variant}`,
        className,
      )}
      aria-hidden
    >
      <div className="ambient-glow__orb ambient-glow__orb-a" />
      <div className="ambient-glow__orb ambient-glow__orb-b" />
    </div>
  );
}

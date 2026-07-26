"use client";

import { cn } from "@/lib/cn";

export type LogoVariant = "primary" | "compact" | "lockup";

type Props = {
  variant?: LogoVariant;
  className?: string;
  /** Accessible label — defaults to Scelerity */
  label?: string;
};

/**
 * Scelerity wordmark system.
 * Primary: full wordmark · Compact: Sc · Lockup: mark + wordmark.
 * Extra-bold, optically tight — premium software product feel.
 */
export function Logo({
  variant = "primary",
  className,
  label = "Scelerity",
}: Props) {
  if (variant === "compact") {
    return (
      <span
        className={cn("wordmark wordmark--compact", className)}
        aria-label={label}
      >
        Sc
      </span>
    );
  }

  if (variant === "lockup") {
    return (
      <span
        className={cn("wordmark-lockup inline-flex items-center gap-2.5", className)}
        aria-label={label}
      >
        <Mark className="h-[1.05em] w-[1.05em] shrink-0" />
        <span className="wordmark">Scelerity</span>
      </span>
    );
  }

  return (
    <span className={cn("wordmark", className)} aria-label={label}>
      Scelerity
    </span>
  );
}

/** Minimal geometric mark derived from the Sc letterforms — monochrome, timeless. */
export function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-current", className)}
      aria-hidden
    >
      {/* Soft rounded square — contained energy, no neon */}
      <rect
        x="1.5"
        y="1.5"
        width="29"
        height="29"
        rx="8"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.22"
      />
      {/* Compact Sc letterforms */}
      <text
        x="16"
        y="21.5"
        textAnchor="middle"
        fill="currentColor"
        style={{
          fontFamily: "var(--font-display), system-ui, sans-serif",
          fontWeight: 800,
          fontSize: "13px",
          letterSpacing: "-0.06em",
        }}
      >
        Sc
      </text>
    </svg>
  );
}

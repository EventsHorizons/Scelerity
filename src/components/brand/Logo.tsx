"use client";

import { cn } from "@/lib/cn";
import { LogoMark } from "@/components/brand/LogoMark";

export type LogoVariant = "lockup" | "mark" | "wordmark" | "compact";

type Props = {
  /** lockup = isotipo + Scelerity (default) */
  variant?: LogoVariant;
  className?: string;
  /** Accessible label — defaults to Scelerity */
  label?: string;
};

const WORDMARK = ["s", "c", "e", "l", "e", "r", "i", "t", "y"] as const;

function Wordmark() {
  return (
    <span className="wordmark" aria-hidden>
      {WORDMARK.map((letter, index) => (
        <span key={`${letter}-${index}`} className={`wordmark__pair wordmark__pair--${index}`}>
          {letter}
        </span>
      ))}
    </span>
  );
}

/**
 * Scelerity brand lockup — isotipo + wordmark.
 * Light theme: dark mark + text · Dark theme: light mark + text (via currentColor).
 */
export function Logo({
  variant = "lockup",
  className,
  label = "Scelerity",
}: Props) {
  if (variant === "mark") {
    return (
      <span className={cn("inline-flex", className)} aria-label={label} role="img">
        <LogoMark className="wordmark-lockup__mark" />
      </span>
    );
  }

  if (variant === "compact") {
    return (
      <span className={cn("inline-flex", className)} aria-label={label} role="img">
        <LogoMark className="wordmark-lockup__mark wordmark-lockup__mark--solo" />
      </span>
    );
  }

  if (variant === "wordmark") {
    return (
      <span className={cn("wordmark-lockup wordmark-lockup--type", className)} aria-label={label} role="img">
        <Wordmark />
      </span>
    );
  }

  return (
    <span
      className={cn("wordmark-lockup", className)}
      aria-label={label}
      role="img"
    >
      <LogoMark className="wordmark-lockup__mark" />
      <Wordmark />
    </span>
  );
}

/** @deprecated Use LogoMark — kept for backwards compatibility. */
export { LogoMark as Mark } from "@/components/brand/LogoMark";

"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export type CardTone = "dark" | "light";

type Props = {
  children: ReactNode;
  id?: string;
  className?: string;
  full?: boolean;
  /** Landing card rhythm — dark / light alternation (light theme only). */
  cardTone?: CardTone;
};

/** Editorial section. Card surfaces + alternation apply only in light mode via CSS. */
export function Section({
  children,
  id,
  className,
  full = false,
  cardTone,
}: Props) {
  return (
    <section
      id={id}
      className={cn(
        "relative w-full overflow-x-clip",
        full && "min-h-[100svh]",
        cardTone && `section-card section-card--${cardTone}`,
        className,
      )}
    >
      {children}
    </section>
  );
}

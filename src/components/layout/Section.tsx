"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = {
  children: ReactNode;
  id?: string;
  className?: string;
  full?: boolean;
};

/** Plain editorial section — no atmosphere switching, no entrance effects. */
export function Section({ children, id, className, full = false }: Props) {
  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden",
        full && "min-h-[100svh]",
        className,
      )}
    >
      {children}
    </section>
  );
}

import type { ReactNode } from "react";

export function TextCta({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      data-cursor="link"
      className="tap-target inline-flex min-h-11 items-center font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--fg)] transition-opacity duration-300 hover:opacity-60"
    >
      {children}
    </a>
  );
}

"use client";

import { useLocale } from "@/context/LocaleContext";
import { cn } from "@/lib/cn";

export function LanguageToggle({ className }: { className?: string }) {
  const { locale, setLocale } = useLocale();

  return (
    <div
      className={cn(
        "inline-flex h-9 items-center rounded-full border border-[var(--glass-border)] bg-[var(--glass)] p-0.5 backdrop-blur-md",
        className,
      )}
      role="group"
      aria-label="Language"
    >
      {(["es", "en"] as const).map((code) => {
        const active = locale === code;
        return (
          <button
            key={code}
            type="button"
            data-cursor="link"
            onClick={() => setLocale(code)}
            aria-pressed={active}
            className={cn(
              "rounded-full px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-[0.14em] transition-colors duration-300",
              active
                ? "bg-[var(--fg)] text-[var(--bg)]"
                : "text-[var(--fg-muted)] hover:text-[var(--fg)]",
            )}
          >
            {code}
          </button>
        );
      })}
    </div>
  );
}

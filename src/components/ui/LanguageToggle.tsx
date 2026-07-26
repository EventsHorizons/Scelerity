"use client";

import { useLocale } from "@/context/LocaleContext";
import { cn } from "@/lib/cn";

export function LanguageToggle({ className }: { className?: string }) {
  const { locale, setLocale } = useLocale();

  return (
    <div
      className={cn(
        "inline-flex h-12 shrink-0 items-center rounded-full border border-[var(--glass-border)] bg-[var(--glass)] backdrop-blur-md",
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
            aria-label={code === "es" ? "Español" : "English"}
            className={cn(
              "inline-flex h-full min-w-11 items-center justify-center rounded-full px-3 font-mono text-[0.6875rem] uppercase tracking-[0.14em] transition-colors duration-300 [touch-action:manipulation]",
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

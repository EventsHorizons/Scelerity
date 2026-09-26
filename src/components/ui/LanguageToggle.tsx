"use client";

import { useLocale } from "@/context/LocaleContext";
import { cn } from "@/lib/cn";

export function LanguageToggle({ className }: { className?: string }) {
  const { locale, setLocale } = useLocale();

  return (
    <div
      className={cn(
        "inline-flex h-11 shrink-0 items-center rounded-full bg-[var(--fill)]",
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
              "inline-flex h-full min-w-11 items-center justify-center rounded-full px-3 text-[13px] font-medium tracking-[-0.01em] transition-[background-color,color] duration-[140ms] ease-[cubic-bezier(0.22,1,0.36,1)] [touch-action:manipulation]",
              active
                ? "bg-[var(--fill-selected)] text-[var(--text)]"
                : "text-[var(--text-2)] hover:text-[var(--text)]",
            )}
          >
            {code}
          </button>
        );
      })}
    </div>
  );
}

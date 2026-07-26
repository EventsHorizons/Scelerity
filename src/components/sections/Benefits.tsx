"use client";

import { useLocale } from "@/context/LocaleContext";
import { Section } from "@/components/layout/Section";

export function Benefits() {
  const { t } = useLocale();

  return (
    <Section id="benefits">
      <div className="section-pad section-y-lg mx-auto max-w-[1200px]">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
          <p className="chapter-label lg:col-span-3 lg:pt-4">{t.benefits.label}</p>
          <h2 className="text-balance font-display text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.035em] lg:col-span-9">
            {t.benefits.headline}
          </h2>
        </div>

        <div className="mt-20 grid gap-0 border-t border-[var(--border)] sm:mt-28 sm:grid-cols-2">
          {t.benefits.items.map((item, i) => (
            <div
              key={item.title}
              className="border-b border-[var(--border)] py-12 sm:border-r sm:px-10 sm:py-16 sm:odd:pl-0 sm:even:border-r-0 sm:even:pr-0"
            >
              <p className="font-mono text-xs text-[var(--fg-subtle)]">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-6 font-display text-[clamp(1.5rem,3vw,2.25rem)] font-semibold tracking-[-0.03em]">
                {item.title}
              </h3>
              <p className="mt-5 max-w-md text-base leading-relaxed text-[var(--fg-muted)] sm:text-lg">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

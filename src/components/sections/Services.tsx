"use client";

import { useLocale } from "@/context/LocaleContext";
import { Section } from "@/components/layout/Section";
import { AmbientGlow } from "@/components/motion/AmbientGlow";

export function Services() {
  const { t } = useLocale();

  return (
    <Section id="services">
      <AmbientGlow variant="services" />
      <div className="relative z-10 section-pad section-y-lg mx-auto max-w-[1200px]">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
          <p className="chapter-label lg:col-span-3 lg:pt-4">{t.services.label}</p>
          <h2 className="text-balance font-display text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.035em] lg:col-span-9">
            {t.services.headline}
          </h2>
        </div>

        <div className="mt-20 border-t border-[var(--border)] sm:mt-28">
          {t.services.items.map((item, i) => (
            <div
              key={item.name}
              data-cursor="link"
              className="group grid gap-8 border-b border-[var(--border)] py-14 sm:grid-cols-12 sm:gap-8 sm:py-20"
            >
              <p className="font-mono text-xs text-[var(--fg-subtle)] sm:col-span-1">
                {String(i + 1).padStart(2, "0")}
              </p>

              <div className="sm:col-span-4">
                <h3 className="font-display text-[clamp(1.75rem,4vw,2.75rem)] font-semibold tracking-[-0.035em]">
                  {item.name}
                </h3>
                <div className="mt-6 h-px w-12 bg-[image:var(--gradient-primary)] transition-all duration-500 group-hover:w-24" />
              </div>

              <div className="grid gap-8 sm:col-span-7 sm:grid-cols-3 sm:gap-6">
                <div>
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-[var(--fg-subtle)]">
                    {t.services.columns.what}
                  </p>
                  <p className="mt-3 text-base leading-relaxed text-[var(--fg-muted)]">
                    {item.what}
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-[var(--fg-subtle)]">
                    {t.services.columns.why}
                  </p>
                  <p className="mt-3 text-base leading-relaxed text-[var(--fg-muted)]">
                    {item.why}
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-[var(--fg-subtle)]">
                    {t.services.columns.result}
                  </p>
                  <p className="mt-3 text-base leading-relaxed text-[var(--fg-muted)]">
                    {item.result}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

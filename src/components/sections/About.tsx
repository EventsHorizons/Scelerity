"use client";

import { useLocale } from "@/context/LocaleContext";
import { Section } from "@/components/layout/Section";

export function About() {
  const { t } = useLocale();

  return (
    <Section id="about">
      <div className="section-pad section-y-lg mx-auto max-w-[1200px]">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
          <p className="chapter-label lg:col-span-3 lg:pt-4">{t.about.label}</p>

          <div className="lg:col-span-9">
            <h2 className="text-balance font-display text-[clamp(2.25rem,5.5vw,4.25rem)] font-semibold leading-[1.02] tracking-[-0.035em]">
              {t.about.headline}
            </h2>

            <div className="mt-12 max-w-2xl space-y-6">
              {t.about.body.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-lg leading-relaxed text-[var(--fg-muted)] sm:text-xl"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24 grid gap-0 border-t border-[var(--border)] sm:grid-cols-3">
          {t.about.principles.map((item) => (
            <div
              key={item.title}
              className="border-b border-[var(--border)] py-10 sm:border-b-0 sm:border-r sm:px-8 sm:py-12 sm:first:pl-0 sm:last:border-r-0 sm:last:pr-0"
            >
              <h3 className="font-display text-xl font-semibold tracking-[-0.02em] sm:text-2xl">
                {item.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-[var(--fg-muted)]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

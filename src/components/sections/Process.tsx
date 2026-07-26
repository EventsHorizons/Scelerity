"use client";

import { useLocale } from "@/context/LocaleContext";
import { Section } from "@/components/layout/Section";

export function Process() {
  const { t } = useLocale();

  return (
    <Section id="process">
      <div className="section-pad section-y-lg mx-auto max-w-[1200px]">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
          <p className="chapter-label lg:col-span-3 lg:pt-4">{t.process.label}</p>
          <h2 className="text-balance font-display text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.035em] lg:col-span-9">
            {t.process.headline}
          </h2>
        </div>

        <ol className="mt-20 grid gap-0 border-t border-[var(--border)] sm:mt-28 sm:grid-cols-2 lg:grid-cols-4">
          {t.process.steps.map((step) => (
            <li
              key={step.number}
              className="border-b border-[var(--border)] py-10 sm:border-r sm:px-8 sm:py-14 sm:first:pl-0 lg:[&:nth-child(4n)]:border-r-0 lg:[&:nth-child(4n)]:pr-0"
            >
              <p className="font-mono text-sm text-[var(--fg-subtle)]">
                {step.number}
              </p>
              <h3 className="mt-6 font-display text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
                {step.title}
              </h3>
              <p className="mt-4 max-w-[16rem] text-base leading-relaxed text-[var(--fg-muted)]">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

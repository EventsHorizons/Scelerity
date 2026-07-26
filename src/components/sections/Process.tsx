"use client";

import { useLocale } from "@/context/LocaleContext";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";

export function Process() {
  const { t } = useLocale();

  return (
    <Section id="process">
      <Container size="content" className="section-y-lg">
        <div className="section-head">
          <p className="chapter-label lg:pt-3">{t.process.label}</p>
          <h2 className="text-balance font-display text-h2 font-semibold">
            {t.process.headline}
          </h2>
        </div>

        <ol className="rule-grid rule-grid--4 mt-[var(--space-fluid-lg)]">
          {t.process.steps.map((step) => (
            <li key={step.number}>
              <p className="font-mono text-small text-[var(--fg-subtle)]">
                {step.number}
              </p>
              <h3 className="mt-[var(--space-5)] font-display text-h3 font-semibold">
                {step.title}
              </h3>
              <p className="mt-[var(--space-4)] max-w-[34ch] text-body text-pretty text-[var(--fg-muted)]">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}

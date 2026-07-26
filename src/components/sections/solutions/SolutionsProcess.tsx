"use client";

import { useLocale } from "@/context/LocaleContext";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";

export function SolutionsProcess() {
  const { t } = useLocale();
  const s = t.solutions.process;

  return (
    <Section id="proceso">
      <Container size="content" className="section-y-lg">
        <div className="section-head">
          <p className="chapter-label lg:pt-3">{s.label}</p>
          <h2 className="text-balance font-display text-h2 font-semibold">
            {s.headline}
          </h2>
        </div>

        <ol className="rule-grid rule-grid--3 mt-[var(--space-fluid-lg)]">
          {s.steps.map((step) => (
            <li key={step.number}>
              <p className="font-mono text-small text-[var(--fg-subtle)]">
                {step.number}
              </p>
              <h3 className="mt-[var(--space-5)] font-display text-h3 font-semibold">
                {step.title}
              </h3>
              <p className="mt-[var(--space-3)] max-w-[30ch] text-body text-pretty text-[var(--fg-muted)]">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}

"use client";

import { useLocale } from "@/context/LocaleContext";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";

export function SolutionsProcess() {
  const { t } = useLocale();
  const s = t.solutions.process;

  return (
    <Section id="proceso" cardTone="light">
      <Container size="content">
        <div className="section-head">
          <p className="chapter-label lg:pt-3">{s.label}</p>
          <h2 className="max-w-[16ch] text-balance font-display text-h2 font-semibold">
            {s.headline}
          </h2>
        </div>

        <ol className="mt-20 grid gap-16 md:mt-28 md:grid-cols-2 md:gap-x-16 md:gap-y-20">
          {s.steps.map((step) => (
            <li key={step.number}>
              <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--fg-subtle)]">
                {step.number}
                <span className="mx-3 opacity-40">—</span>
                {step.title}
              </p>
              <h3 className="mt-5 max-w-[18ch] text-balance font-display text-h3 font-semibold">
                {step.lead}
              </h3>
              <div className="mt-5 max-w-[36ch] space-y-3">
                {step.text.map((line) => (
                  <p key={line} className="text-body text-pretty text-[var(--fg-muted)]">
                    {line}
                  </p>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}

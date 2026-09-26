"use client";

import { useLocale } from "@/context/LocaleContext";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";

export function SolutionsPrinciple() {
  const { t } = useLocale();
  const s = t.solutions.principle;

  return (
    <Section id="principio" cardTone="paper">
      <Container size="content">
        <div className="section-head">
          <p className="chapter-label lg:pt-3">{s.label}</p>
          <div>
            <h2 className="max-w-[18ch] text-balance font-display text-h2 font-semibold">
              {s.headline}
            </h2>
            <p className="mt-10 text-lead text-pretty text-[var(--fg-muted)]">{s.intro}</p>
          </div>
        </div>

        <ol className="rule-grid rule-grid--3 mt-16 md:mt-20">
          {s.questions.map((question, i) => (
            <li key={question}>
              <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--fg-subtle)]">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-5 max-w-[14ch] text-balance font-display text-h3 font-semibold">
                {question}
              </h3>
            </li>
          ))}
        </ol>

        <p className="mt-16 font-display text-h4 font-medium text-pretty md:mt-20">
          {s.close}
        </p>
      </Container>
    </Section>
  );
}

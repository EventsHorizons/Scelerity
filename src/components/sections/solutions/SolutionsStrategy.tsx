"use client";

import { useLocale } from "@/context/LocaleContext";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";

export function SolutionsStrategy() {
  const { t } = useLocale();
  const s = t.solutions.strategy;

  return (
    <Section id="estrategia">
      <Container size="content" className="section-y-lg">
        <div className="section-head">
          <p className="chapter-label lg:pt-3">{s.label}</p>
          <div>
            <h2 className="text-balance font-display text-h2 font-semibold">
              {s.headline}
            </h2>
            <p className="mt-[var(--space-6)] measure text-lead text-pretty text-[var(--fg-muted)]">
              {s.body}
            </p>
          </div>
        </div>

        <ul className="rule-grid rule-grid--2 mt-[var(--space-fluid-lg)]">
          {s.points.map((point, i) => (
            <li key={point} className="flex gap-4">
              <span className="font-mono text-small text-[var(--fg-subtle)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-body text-pretty text-[var(--fg-muted)]">
                {point}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

"use client";

import { useLocale } from "@/context/LocaleContext";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";

export function SolutionsStatement() {
  const { t } = useLocale();
  const s = t.solutions.statement;

  return (
    <Section cardTone="paper">
      <Container size="content">
        <p className="font-mono text-[12px] uppercase tracking-[0.18em]">{s.brand}</p>
        <p className="mt-6 max-w-[18ch] text-balance font-display text-h3 font-medium">
          {s.tagline}
        </p>
        <p className="mt-10 font-mono text-small tracking-[0.04em] text-[var(--fg-muted)]">
          {s.layers}
        </p>
        <p className="mt-16 font-mono text-[12px] uppercase tracking-[0.18em] text-[var(--fg-subtle)]">
          {s.year}
        </p>
        <p className="mt-3 text-body text-[var(--fg-muted)]">{s.line}</p>
      </Container>
    </Section>
  );
}

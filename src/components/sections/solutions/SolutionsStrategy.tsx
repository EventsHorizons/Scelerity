"use client";

import { useLocale } from "@/context/LocaleContext";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { KineticCard } from "@/components/motion/KineticCard";
import { SolutionsVisual } from "@/components/sections/solutions/SolutionsVisual";
import { solutionsVisuals } from "@/data/solutions-visuals";

export function SolutionsStrategy() {
  const { t } = useLocale();
  const s = t.solutions.strategy;

  return (
    <Section id="estrategia">
      <Container size="content" className="section-y-lg">
        <div className="grid items-start gap-[var(--space-fluid-lg)] lg:grid-cols-[1fr_min(42%,28rem)] lg:gap-[var(--space-12)]">
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

          <KineticCard
            lean={3}
            className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--glass-border)] bg-[var(--card)] lg:sticky lg:top-[calc(var(--header-h)+var(--space-6))]"
          >
            <SolutionsVisual
              visual={solutionsVisuals.strategy}
              aspect="aspect-[4/3] lg:aspect-[5/4]"
              sizes="(max-width: 1024px) 100vw, 448px"
            />
          </KineticCard>
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

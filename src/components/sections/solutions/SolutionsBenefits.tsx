"use client";

import { useLocale } from "@/context/LocaleContext";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { AmbientGlow } from "@/components/motion/AmbientGlow";

export function SolutionsBenefits() {
  const { t } = useLocale();
  const s = t.solutions.benefits;

  return (
    <Section id="beneficios">
      <AmbientGlow variant="services" />
      <Container size="content" className="relative z-10 section-y-lg">
        <div className="section-head">
          <p className="chapter-label lg:pt-3">{s.label}</p>
          <h2 className="text-balance font-display text-h2 font-semibold">
            {s.headline}
          </h2>
        </div>

        <div className="rule-grid rule-grid--2 mt-[var(--space-fluid-lg)]">
          {s.items.map((item, i) => (
            <div key={item.title}>
              <p className="font-mono text-small text-[var(--fg-subtle)]">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-[var(--space-5)] font-display text-h3 font-semibold">
                {item.title}
              </h3>
              <p className="mt-[var(--space-3)] measure-sm text-body text-pretty text-[var(--fg-muted)]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

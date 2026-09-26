"use client";

import { useLocale } from "@/context/LocaleContext";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";

export function SolutionsSystem() {
  const { t } = useLocale();
  const s = t.solutions.system;

  return (
    <Section id="sistema" cardTone="light">
      <Container size="content">
        <div className="section-head">
          <p className="chapter-label lg:pt-3">{s.label}</p>
          <div>
            <h2 className="max-w-[14ch] text-balance font-display text-h2 font-semibold">
              {s.headline}
            </h2>
            <div className="mt-12 max-w-[28ch] space-y-3">
              {s.lines.map((line) => (
                <p key={line} className="font-display text-h4 text-pretty text-[var(--fg-muted)]">
                  {line}
                </p>
              ))}
            </div>
            <p className="mt-8 font-display text-h4 font-medium">{s.closer}</p>
          </div>
        </div>

        <ul className="rule-grid rule-grid--4 mt-20 md:mt-28">
          {s.layers.map((layer) => (
            <li key={layer.title}>
              <h3 className="font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--fg-subtle)]">
                {layer.title}
              </h3>
              <p className="mt-5 max-w-[18ch] font-display text-h4 font-medium text-pretty">
                {layer.text}
              </p>
            </li>
          ))}
        </ul>

        <p className="mt-16 font-display text-h3 font-semibold text-balance md:mt-20">
          {s.statement}
        </p>
      </Container>
    </Section>
  );
}

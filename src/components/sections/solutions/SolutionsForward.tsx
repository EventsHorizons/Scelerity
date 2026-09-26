"use client";

import { useLocale } from "@/context/LocaleContext";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";

export function SolutionsForward() {
  const { t } = useLocale();
  const s = t.solutions.forward;

  return (
    <Section cardTone="paper">
      <Container size="content">
        <div className="section-head">
          <p className="chapter-label lg:pt-3">{s.label}</p>
          <div>
            <h2 className="max-w-[18ch] text-balance font-display text-h2 font-semibold">
              {s.headline}
            </h2>
            <div className="mt-10 measure space-y-6">
              {s.body.map((line) => (
                <p key={line} className="text-lead text-pretty text-[var(--fg-muted)]">
                  {line}
                </p>
              ))}
            </div>
            <div className="mt-14 space-y-2">
              {s.emphasis.map((line) => (
                <p key={line} className="font-display text-h3 font-semibold text-pretty">
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

"use client";

import { useLocale } from "@/context/LocaleContext";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";

export function SolutionsManifesto() {
  const { t } = useLocale();
  const s = t.solutions.manifesto;

  return (
    <Section cardTone="light">
      <Container size="content">
        <div className="section-head">
          <p className="chapter-label lg:pt-3">{s.label}</p>
          <div>
            <h2 className="max-w-[16ch] text-balance font-display text-h2 font-semibold">
              {s.headline}
            </h2>
            <p className="mt-10 measure text-lead text-pretty">{s.lead}</p>
            <p className="mt-6 measure text-lead text-pretty text-[var(--fg-muted)]">
              {s.body}
            </p>
            <p className="mt-16 max-w-[22ch] text-balance font-display text-h3 font-semibold">
              {s.creed}
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

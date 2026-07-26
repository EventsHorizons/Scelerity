"use client";

import { useLocale } from "@/context/LocaleContext";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";

export function About() {
  const { t } = useLocale();

  return (
    <Section id="about">
      <Container size="content" className="section-y-lg">
        <div className="section-head">
          <p className="chapter-label lg:pt-3">{t.about.label}</p>

          <div>
            <h2 className="text-balance font-display text-display font-semibold">
              {t.about.headline}
            </h2>

            <div className="mt-[var(--space-fluid-md)] measure space-y-[var(--space-5)]">
              {t.about.body.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-lead text-pretty text-[var(--fg-muted)]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>

        <ul className="rule-grid rule-grid--3 mt-[var(--space-fluid-xl)]">
          {t.about.principles.map((item) => (
            <li key={item.title}>
              <h3 className="font-display text-h3 font-semibold">{item.title}</h3>
              <p className="mt-[var(--space-4)] text-body text-pretty text-[var(--fg-muted)]">
                {item.text}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

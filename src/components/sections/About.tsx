"use client";

import { useLocale } from "@/context/LocaleContext";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export function About() {
  const { t } = useLocale();

  return (
    <Section id="about" cardTone="light">
      <Container size="content" className="section-y-lg">
        <div className="section-head">
          <p className="chapter-label lg:pt-3">{t.about.label}</p>

          <div>
            <h2 className="text-balance font-display text-h2 font-semibold">
              {t.about.headline}
            </h2>

            <div className="mt-12 measure space-y-8">
              {t.about.body.map((line) => (
                <p key={line} className="text-lead leading-relaxed text-pretty text-[var(--fg-muted)]">
                  {line}
                </p>
              ))}
            </div>

            <div className="mt-[var(--space-fluid-md)]">
              <Button href="#trabajo">{t.about.cta}</Button>
            </div>
          </div>
        </div>

        <ul className="rule-grid rule-grid--3 mt-24 md:mt-32">
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

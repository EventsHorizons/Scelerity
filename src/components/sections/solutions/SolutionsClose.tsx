"use client";

import { useLocale } from "@/context/LocaleContext";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { TextCta } from "@/components/sections/solutions/TextCta";

export function SolutionsClose() {
  const { t } = useLocale();
  const s = t.solutions.close;

  return (
    <Section id="empezar" cardTone="light">
      <Container size="content">
        <div>
          <h2 className="max-w-[18ch] text-balance font-display text-display font-semibold">
            {s.headline}
          </h2>
          <div className="mt-10 max-w-[36ch] space-y-3">
            {s.lines.map((line) => (
              <p key={line} className="text-lead text-pretty text-[var(--fg-muted)]">
                {line}
              </p>
            ))}
          </div>
          <p className="mt-10 font-display text-h3 font-semibold text-pretty">{s.emphasis}</p>
          <div className="mt-12 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-8">
            <Button href="/contacto/">{s.ctaPrimary}</Button>
            <TextCta href="/#trabajo">{s.ctaSecondary}</TextCta>
          </div>
        </div>
      </Container>
    </Section>
  );
}

"use client";

import { useLocale } from "@/context/LocaleContext";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { TextCta } from "@/components/sections/solutions/TextCta";

export function SolutionsHero() {
  const { locale, t } = useLocale();
  const s = t.solutions.hero;
  const crumbs =
    locale === "es"
      ? [
          { name: "Inicio", path: "/" },
          { name: "Servicios", path: "/servicios/" },
        ]
      : [
          { name: "Home", path: "/" },
          { name: "Services", path: "/servicios/" },
        ];

  return (
    <Section cardTone="paper">
      <Container size="content">
        <Breadcrumbs items={crumbs} className="mb-16" />
        <div className="section-head">
          <p className="chapter-label lg:pt-3">{s.label}</p>
          <div>
            <h1 className="max-w-[16ch] text-balance font-display text-h1 font-semibold">
              {s.headline}
            </h1>
            <h2 className="mt-10 max-w-[36ch] text-balance font-display text-h3 font-medium">
              {s.sub}
            </h2>
            <div className="mt-10 measure space-y-6">
              {s.body.map((line) => (
                <p key={line} className="text-lead text-pretty text-[var(--fg-muted)]">
                  {line}
                </p>
              ))}
            </div>
            <div className="mt-12 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-8">
              <Button href="/contacto/">{s.ctaPrimary}</Button>
              <TextCta href="#capacidades">{s.ctaSecondary}</TextCta>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

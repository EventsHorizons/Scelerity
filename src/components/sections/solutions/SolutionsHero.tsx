"use client";

import { useLocale } from "@/context/LocaleContext";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { AmbientGlow } from "@/components/motion/AmbientGlow";
import { Button } from "@/components/ui/Button";
import { Magnetic } from "@/components/motion/Magnetic";
import { KineticCard } from "@/components/motion/KineticCard";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import { SolutionsVisual } from "@/components/sections/solutions/SolutionsVisual";

export function SolutionsHero() {
  const { t } = useLocale();
  const s = t.solutions.hero;

  return (
    <Section id="top" full className="flex flex-col justify-center">
      <AmbientGlow variant="hero" />
      <div className="relative z-10 flex min-h-[100svh] flex-col justify-center pb-[var(--space-fluid-xl)] pt-[calc(var(--header-h)+var(--space-fluid-lg))]">
        <Container size="content" className="relative z-10">
          <div className="grid items-center gap-[var(--space-fluid-lg)] lg:grid-cols-2 lg:gap-[var(--space-12)]">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <p className="chapter-label">{s.label}</p>

              <h1 className="mt-[var(--space-6)] text-balance font-display text-hero font-semibold">
                {s.headline}
              </h1>

              <p className="mt-[var(--space-6)] max-w-[38ch] text-sub text-[var(--fg-muted)] sm:mt-[var(--space-8)]">
                {s.sub}
              </p>

              <div className="mt-[var(--space-10)] flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4 lg:mt-[var(--space-12)]">
                <Magnetic className="w-full sm:w-auto">
                  <Button
                    href={`https://wa.me/${t.cta.whatsapp}`}
                    size="lg"
                    block
                    className="btn-whatsapp sm:w-auto"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${s.ctaPrimary} — WhatsApp`}
                  >
                    <WhatsAppIcon size={19} />
                    {s.ctaPrimary}
                  </Button>
                </Magnetic>
                <Magnetic strength={0.25} className="w-full sm:w-auto">
                  <Button
                    href="#planes"
                    variant="secondary"
                    size="lg"
                    block
                    className="sm:w-auto"
                  >
                    {s.ctaSecondary}
                  </Button>
                </Magnetic>
              </div>
            </div>

            <KineticCard
              lean={3}
              className="w-full overflow-hidden rounded-[var(--radius-lg)] border border-[var(--glass-border)] bg-[var(--card)] lg:rounded-[28px]"
            >
              <article data-cursor="media" className="group">
                <SolutionsVisual media="video" tone={0} aspect="aspect-[4/5] sm:aspect-[4/3] lg:aspect-[5/4]" />
              </article>
            </KineticCard>
          </div>
        </Container>
      </div>
    </Section>
  );
}

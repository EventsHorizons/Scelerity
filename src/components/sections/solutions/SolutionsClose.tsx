"use client";

import { useLocale } from "@/context/LocaleContext";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { AmbientGlow } from "@/components/motion/AmbientGlow";
import { Button } from "@/components/ui/Button";
import { Magnetic } from "@/components/motion/Magnetic";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";

export function SolutionsClose() {
  const { t } = useLocale();
  const s = t.solutions.close;

  return (
    <Section id="contacto">
      <AmbientGlow variant="cta" />
      <Container size="content" className="relative z-10 section-y-lg">
        <div className="mx-auto max-w-[52ch] text-center lg:mx-0 lg:text-left">
          <h2 className="text-balance font-display text-display font-semibold">
            {s.headline}
          </h2>
          <p className="mt-[var(--space-6)] text-lead text-pretty text-[var(--fg-muted)]">
            {s.body}
          </p>

          <div className="mt-[var(--space-10)] flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center sm:justify-center sm:gap-4 lg:justify-start">
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
      </Container>
    </Section>
  );
}

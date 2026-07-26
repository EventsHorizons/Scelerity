"use client";

import { useLocale } from "@/context/LocaleContext";
import { Section } from "@/components/layout/Section";
import { AmbientGlow } from "@/components/motion/AmbientGlow";
import { Button } from "@/components/ui/Button";
import { Magnetic } from "@/components/motion/Magnetic";

export function FinalCTA() {
  const { t } = useLocale();

  return (
    <Section id="contact">
      <AmbientGlow variant="cta" />
      <div className="relative z-10 section-pad section-y-lg mx-auto max-w-[1200px]">
        <h2 className="max-w-4xl text-balance font-display text-[clamp(2.5rem,7vw,5.5rem)] font-semibold leading-[0.98] tracking-[-0.04em]">
          {t.cta.headline}
        </h2>

        <p className="mt-10 max-w-md text-lg text-[var(--fg-muted)]">
          {t.cta.body}
        </p>

        <div className="mt-16 flex flex-wrap items-center gap-3">
          <Magnetic>
            <Button href={`mailto:${t.cta.email}`} size="lg">
              {t.cta.primary}
            </Button>
          </Magnetic>
          <Magnetic strength={0.25}>
            <Button href={`mailto:${t.cta.email}`} variant="secondary" size="lg">
              {t.cta.secondary}
            </Button>
          </Magnetic>
        </div>
      </div>
    </Section>
  );
}

"use client";

import dynamic from "next/dynamic";
import { useLocale } from "@/context/LocaleContext";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { HeroEnergyFallback } from "@/components/canvas/HeroEnergyFallback";
import { useDeviceProfile } from "@/hooks/useDeviceProfile";

const EnergyField = dynamic(
  () => import("@/components/canvas/EnergyField").then((m) => m.EnergyField),
  { ssr: false },
);

export function Hero() {
  const { t } = useLocale();
  const { webgl } = useDeviceProfile();

  return (
    <Section id="top" cardTone="dark" className="frame-hero">
      <div className="hero-motion" aria-hidden>
        <div className="hero-energy">
          {webgl ? <EnergyField /> : <HeroEnergyFallback />}
        </div>
      </div>
      <Container size="wide" className="relative z-10 flex w-full justify-center py-16 md:py-28">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <Reveal>
            <p className="chapter-label">{t.hero.kicker}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="m-0 mt-16 text-balance font-display text-hero text-[var(--text)]">
              {t.hero.headline}
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="m-0 mt-16 max-w-xl font-sans text-lead text-[var(--text-2)]">
              {t.hero.sub}
            </p>
          </Reveal>
          <Reveal delay={0.3} className="mt-16">
            <div className="flex flex-col items-center gap-6 sm:flex-row sm:gap-8">
              <Button href="#contact">{t.hero.ctaPrimary}</Button>
              <Button href="#trabajo" variant="secondary">
                {t.hero.ctaSecondary}
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

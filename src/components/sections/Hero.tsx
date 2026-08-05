"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import { useLocale } from "@/context/LocaleContext";
import { Button } from "@/components/ui/Button";
import { Magnetic } from "@/components/motion/Magnetic";
import { SplitText } from "@/components/motion/SplitText";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { AmbientGlow } from "@/components/motion/AmbientGlow";
import { HeroEnergyFallback } from "@/components/canvas/HeroEnergyFallback";
import { registerGsap, gsap } from "@/lib/gsap";
import { useDeviceProfile } from "@/hooks/useDeviceProfile";
import { cn } from "@/lib/cn";

const EnergyField = dynamic(
  () => import("@/components/canvas/EnergyField").then((m) => m.EnergyField),
  { ssr: false },
);

export function Hero() {
  const { t } = useLocale();
  const root = useRef<HTMLDivElement>(null);
  const charsRef = useRef<Element[]>([]);
  const { animate, webgl, reduced } = useDeviceProfile();

  useEffect(() => {
    const el = root.current;
    if (!el || reduced) return;
    registerGsap();

    const ctx = gsap.context(() => {
      gsap.set(".hero-sub", { y: 18, autoAlpha: 0 });
      gsap.set(".hero-cta", { y: 18, autoAlpha: 0 });
      gsap.set(".hero-energy", { autoAlpha: 0 });

      const tl = gsap.timeline({ defaults: { ease: "craft" } });

      tl.to(".hero-energy", { autoAlpha: 1, duration: 1.8, ease: "none" }, 0);

      if (animate) {
        tl.fromTo(
          ".hero-sweep",
          { xPercent: -120, opacity: 0, scaleX: 0.35 },
          { xPercent: 220, opacity: 0.9, scaleX: 1, duration: 1.1, ease: "scene" },
          0.15,
        ).to(".hero-sweep", { opacity: 0, duration: 0.35 }, 1.05);

        tl.add(() => {
          const chars = charsRef.current;
          if (!chars.length) return;
          gsap.fromTo(
            chars,
            { yPercent: 120, autoAlpha: 0, filter: "blur(10px)" },
            {
              yPercent: 0,
              autoAlpha: 1,
              filter: "blur(0px)",
              duration: 0.9,
              ease: "type",
              stagger: { each: 0.028, from: "start" },
            },
          );
        }, 0.35);
      }

      tl.to(".hero-sub", { y: 0, autoAlpha: 1, duration: 0.65 }, animate ? 1.35 : 0.25).to(
        ".hero-cta",
        { y: 0, autoAlpha: 1, duration: 0.7, stagger: 0.1 },
        animate ? 1.55 : 0.45,
      );
    }, el);

    return () => ctx.revert();
  }, [reduced, animate, t.hero.headline]);

  return (
    <Section id="top" full cardTone="dark" className="flex flex-col justify-center">
      <AmbientGlow variant="hero" />

      <div
        ref={root}
        className="relative z-10 flex min-h-[100svh] flex-col justify-center pb-[var(--hero-pad-bottom)] pt-[calc(var(--header-h)+var(--space-fluid-lg))]"
      >
        <div
          className="hero-energy pointer-events-none"
          aria-hidden
        >
          {webgl ? <EnergyField /> : <HeroEnergyFallback />}
        </div>

        <Container size="content" className="relative z-10">
          <div className="flex flex-col items-center text-center lg:max-w-[62ch] lg:items-start lg:text-left">
            <div className="relative w-full">
              {animate ? (
                <div
                  className="hero-sweep speed-line pointer-events-none absolute -top-5 left-1/2 h-px w-32 -translate-x-1/2 rounded-full sm:w-44 lg:left-0 lg:translate-x-0"
                  aria-hidden
                />
              ) : null}
              <SplitText
                text={t.hero.headline}
                as="h1"
                paused
                onReady={(chars) => {
                  charsRef.current = chars;
                }}
                className={cn(
                  "text-balance font-display text-hero font-semibold",
                  !animate && "hero-headline-enter",
                )}
              />
            </div>

            <p className="hero-sub mt-[var(--space-6)] max-w-[34ch] text-sub text-[var(--fg-muted)] sm:mt-[var(--space-8)]">
              {t.hero.sub}
            </p>

            <div className="mt-[var(--space-10)] flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4 lg:mt-[var(--space-12)]">
              <div className="hero-cta w-full sm:w-auto">
                <Magnetic className="w-full sm:w-auto">
                  <Button href="#contact" size="lg" block className="sm:w-auto">
                    {t.hero.ctaPrimary}
                  </Button>
                </Magnetic>
              </div>
              <div className="hero-cta w-full sm:w-auto">
                <Magnetic strength={0.25} className="w-full sm:w-auto">
                  <Button
                    href="#work"
                    variant="secondary"
                    size="lg"
                    block
                    className="sm:w-auto"
                  >
                    {t.hero.ctaSecondary}
                  </Button>
                </Magnetic>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </Section>
  );
}

"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import { useLocale } from "@/context/LocaleContext";
import { Button } from "@/components/ui/Button";
import { Magnetic } from "@/components/motion/Magnetic";
import { SplitText } from "@/components/motion/SplitText";
import { Section } from "@/components/layout/Section";
import { AmbientGlow } from "@/components/motion/AmbientGlow";
import { registerGsap, gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const EnergyField = dynamic(
  () => import("@/components/canvas/EnergyField").then((m) => m.EnergyField),
  { ssr: false },
);

export function Hero() {
  const { t } = useLocale();
  const root = useRef<HTMLDivElement>(null);
  const charsRef = useRef<Element[]>([]);
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = root.current;
    if (!el || reduced) return;
    registerGsap();

    const ctx = gsap.context(() => {
      gsap.set(".hero-sub", { y: 18, autoAlpha: 0 });
      gsap.set(".hero-cta", { x: -28, autoAlpha: 0 });
      gsap.set(".hero-energy", { autoAlpha: 0 });

      const tl = gsap.timeline({ defaults: { ease: "craft" } });

      tl.to(".hero-energy", { autoAlpha: 1, duration: 1.8, ease: "none" }, 0)
        .fromTo(
          ".hero-sweep",
          { xPercent: -120, opacity: 0, scaleX: 0.35 },
          { xPercent: 220, opacity: 0.9, scaleX: 1, duration: 1.1, ease: "scene" },
          0.15,
        )
        .to(".hero-sweep", { opacity: 0, duration: 0.35 }, 1.05);

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

      tl.to(".hero-sub", { y: 0, autoAlpha: 1, duration: 0.65 }, 1.35).to(
        ".hero-cta",
        { x: 0, autoAlpha: 1, duration: 0.7, stagger: 0.1 },
        1.55,
      );
    }, el);

    return () => ctx.revert();
  }, [reduced, t.hero.headline]);

  return (
    <Section
      id="top"
      full
      className="flex flex-col justify-center pb-32 pt-32"
    >
      <AmbientGlow variant="hero" />
      <div ref={root} className="relative z-10">
        <div
          className="hero-energy pointer-events-none absolute -right-[8%] top-1/2 h-[min(88vh,760px)] w-[min(58vw,720px)] -translate-y-1/2"
          aria-hidden
        >
          <EnergyField />
        </div>

        <div className="section-pad relative z-10 mx-auto w-full max-w-[1200px]">
          <div className="relative max-w-3xl">
            <div
              className="hero-sweep speed-line pointer-events-none absolute -top-5 left-0 h-px w-44 rounded-full"
              aria-hidden
            />
            <SplitText
              text={t.hero.headline}
              as="h1"
              paused
              onReady={(chars) => {
                charsRef.current = chars;
              }}
              className="font-display text-[clamp(2.75rem,7.5vw,6rem)] font-semibold leading-[0.98] tracking-[-0.04em]"
            />
          </div>

          <p className="hero-sub mt-8 max-w-md text-base text-[var(--fg-muted)] sm:text-lg">
            {t.hero.sub}
          </p>

          <div className="mt-14 flex flex-wrap items-center gap-3">
            <div className="hero-cta">
              <Magnetic>
                <Button href="#contact" size="lg">
                  {t.hero.ctaPrimary}
                </Button>
              </Magnetic>
            </div>
            <div className="hero-cta">
              <Magnetic strength={0.25}>
                <Button href="#work" variant="secondary" size="lg">
                  {t.hero.ctaSecondary}
                </Button>
              </Magnetic>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

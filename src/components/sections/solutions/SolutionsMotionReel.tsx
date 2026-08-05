"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/cn";
import type { SolutionsReelVariant } from "@/data/solutions-visuals";
import { SolutionsHeroReel } from "@/components/sections/solutions/SolutionsHeroReel";

type Props = {
  variant: SolutionsReelVariant;
  className?: string;
  label: string;
};

const urls: Record<SolutionsReelVariant, string> = {
  hero: "scelerity.com",
  dev: "studio.app",
  landing: "pulse.io",
};

export function SolutionsMotionReel({ variant, className, label }: Props) {
  const reduced = useReducedMotion();
  const rootRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(true);
  const animate = !reduced && active;

  useEffect(() => {
    const el = rootRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { rootMargin: "80px", threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  if (variant === "hero") {
    return <SolutionsHeroReel label={label} className={className} />;
  }

  return (
    <div
      ref={rootRef}
      className={cn(
        "featured-reel solutions-reel",
        `solutions-reel--${variant}`,
        className,
      )}
      data-animate={animate ? "true" : "false"}
      aria-label={label}
    >
      <div className="featured-reel__stage">
          <div className="featured-reel__browser">
            <BrowserChrome url={urls[variant]} />
            <div className="featured-reel__viewport">
              {variant === "dev" ? (
                <DevViewport animate={animate} />
              ) : (
                <LandingViewport animate={animate} />
              )}
            </div>
          </div>
      </div>
    </div>
  );
}

function BrowserChrome({ url }: { url: string }) {
  return (
    <div className="featured-reel__chrome" aria-hidden>
      <span className="featured-reel__dot featured-reel__dot--r" />
      <span className="featured-reel__dot featured-reel__dot--y" />
      <span className="featured-reel__dot featured-reel__dot--g" />
      <div className="featured-reel__url">
        <span>{url}</span>
      </div>
    </div>
  );
}

function DevViewport({ animate }: { animate: boolean }) {
  return (
    <div className="solutions-reel__dev-view">
      <div
        className={cn(
          "solutions-reel__dev-frame solutions-reel__dev-frame--desktop",
          animate && "solutions-reel__dev-frame--active",
        )}
      >
        <DevDesktop />
      </div>
      <div
        className={cn(
          "solutions-reel__dev-frame solutions-reel__dev-frame--mobile",
          animate && "solutions-reel__dev-frame--active",
        )}
      >
        <DevMobile />
      </div>
    </div>
  );
}

function LandingViewport({ animate }: { animate: boolean }) {
  return (
    <>
      <div
        className={cn(
          "featured-reel__scroll solutions-reel__scroll--landing",
          animate && "solutions-reel__scroll--run",
        )}
      >
        <LandingSite />
        <LandingSite />
      </div>
      {animate ? <div className="featured-reel__cursor solutions-reel__cursor--landing" /> : null}
    </>
  );
}

function DevDesktop() {
  return (
    <div className="dev-ui dev-ui--desktop">
      <aside className="dev-ui__sidebar">
        <span className="is-active">Overview</span>
        <span>Pages</span>
        <span>Components</span>
      </aside>
      <main className="dev-ui__main">
        <div className="dev-ui__toolbar" />
        <div className="dev-ui__canvas">
          <div className="dev-ui__block dev-ui__block--wide" />
          <div className="dev-ui__row">
            <div className="dev-ui__block" />
            <div className="dev-ui__block" />
          </div>
        </div>
      </main>
    </div>
  );
}

function DevMobile() {
  return (
    <div className="dev-ui dev-ui--mobile">
      <div className="dev-ui__mobile-header" />
      <div className="dev-ui__mobile-hero" />
      <div className="dev-ui__mobile-cards">
        <div />
        <div />
      </div>
    </div>
  );
}

function LandingSite() {
  return (
    <div className="landing-site">
      <header className="landing-site__nav">
        <span>Pulse</span>
        <span className="landing-site__cta">Empezar</span>
      </header>
      <section className="landing-site__hero">
        <p className="landing-site__eyebrow">Conversión</p>
        <h3>Convierte visitas en clientes reales.</h3>
        <p>Landing optimizada con CTA claro, prueba social y métricas en tiempo real.</p>
        <span className="landing-site__btn">Solicitar demo</span>
      </section>
      <section className="landing-site__metrics">
        <article>
          <strong>+38%</strong>
          <span>Leads</span>
        </article>
        <article>
          <strong>2.1s</strong>
          <span>LCP</span>
        </article>
        <article>
          <strong>94</strong>
          <span>Score</span>
        </article>
      </section>
      <section className="landing-site__proof">
        <div />
        <div />
        <div />
      </section>
    </div>
  );
}

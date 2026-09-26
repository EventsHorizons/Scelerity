"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/cn";

type Props = {
  className?: string;
  label: string;
};

export function SolutionsHeroReel({ className, label }: Props) {
  const reduced = useReducedMotion();
  const rootRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(true);

  useEffect(() => {
    const el = rootRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { rootMargin: "80px", threshold: 0.08 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const animate = !reduced && active;

  return (
    <div
      ref={rootRef}
      className={cn("solutions-hero-reel", className)}
      data-animate={animate ? "true" : "false"}
      aria-label={label}
    >
      <div className="solutions-hero-reel__ambient" aria-hidden />

      <div className="solutions-hero-reel__canvas">
        <div className="solutions-hero-reel__devices" aria-hidden>
          <div className="solutions-hero-reel__desktop">
            <BrowserChrome url="scelerity.com" />
            <div className="solutions-hero-reel__viewport solutions-hero-reel__viewport-fade">
              <div
                className={cn(
                  "solutions-hero-reel__track",
                  animate && "solutions-hero-reel__track--run",
                )}
              >
                <SolutionsSite />
                <SolutionsSite />
              </div>
            </div>
          </div>

          <div className="solutions-hero-reel__phone">
            <div className="solutions-hero-reel__phone-notch" />
            <div className="solutions-hero-reel__phone-screen solutions-hero-reel__viewport-fade">
              <div
                className={cn(
                  "solutions-hero-reel__track solutions-hero-reel__track--phone",
                  animate && "solutions-hero-reel__track--run",
                )}
              >
                <MobileSite />
                <MobileSite />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BrowserChrome({ url }: { url: string }) {
  return (
    <div className="solutions-hero-reel__chrome" aria-hidden>
      <span className="solutions-hero-reel__dot solutions-hero-reel__dot--r" />
      <span className="solutions-hero-reel__dot solutions-hero-reel__dot--y" />
      <span className="solutions-hero-reel__dot solutions-hero-reel__dot--g" />
      <div className="solutions-hero-reel__url">
        <span>{url}</span>
      </div>
    </div>
  );
}

function SolutionsSite() {
  return (
    <div className="solutions-site">
      <header className="solutions-site__nav">
        <span className="solutions-site__logo">scelerity</span>
        <nav className="solutions-site__links">
          <span>Servicios</span>
          <span>Proyectos</span>
          <span>Contacto</span>
        </nav>
      </header>
      <section className="solutions-site__hero">
        <p className="solutions-site__eyebrow">Soluciones</p>
        <h3>Diseño, desarrollo y marketing integrados.</h3>
        <p>Una presencia digital clara, rápida y pensada para convertir.</p>
      </section>
      <section className="solutions-site__grid">
        <article>
          <span>Diseño</span>
          <p>Identidad y experiencia</p>
        </article>
        <article>
          <span>Desarrollo</span>
          <p>Web y plataformas</p>
        </article>
        <article>
          <span>Marketing</span>
          <p>SEO y campañas</p>
        </article>
      </section>
      <section className="solutions-site__footer">
        <div />
        <div />
      </section>
    </div>
  );
}

function MobileSite() {
  return (
    <div className="solutions-site solutions-site--mobile">
      <header className="solutions-site__nav">
        <span className="solutions-site__logo">scelerity</span>
      </header>
      <section className="solutions-site__hero">
        <p className="solutions-site__eyebrow">Soluciones</p>
        <h3>Tu marca, en cualquier pantalla.</h3>
      </section>
      <section className="solutions-site__stack">
        <article>Diseño</article>
        <article>Desarrollo</article>
        <article>Marketing</article>
      </section>
      <section className="solutions-site__footer solutions-site__footer--mobile">
        <div />
      </section>
    </div>
  );
}

"use client";

import { useEffect, useRef } from "react";
import { useLocale } from "@/context/LocaleContext";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { registerGsap, gsap } from "@/lib/gsap";
import { cn } from "@/lib/cn";
import { PAGE, SERVICES, tx } from "./content";
import { depthStyle } from "./depthStyle";
import heroStyles from "../scelerity-hero/hero.module.css";
import styles from "./services.module.css";

const plate = depthStyle({
  bg: "#09090b",
  fg: "#f4f0e8",
  muted: "#c8c0b4",
  subtle: "#a39e96",
});

const ATMOSPHERE =
  "https://images.unsplash.com/photo-1770891948880-65950e82697d?auto=format&fit=crop&w=2000&q=70";

export function ServicesHero() {
  const { locale } = useLocale();
  const hero = PAGE.hero;
  const rootRef = useRef<HTMLElement>(null);
  const photoRef = useRef<HTMLImageElement>(null);
  const fine = useMediaQuery("(hover: hover) and (pointer: fine)");
  const reduced = useReducedMotion();

  useEffect(() => {
    const root = rootRef.current;
    const photo = photoRef.current;
    if (!root || !photo || reduced || !fine) return;

    registerGsap();
    const xTo = gsap.quickTo(photo, "x", { duration: 0.7, ease: "power3.out" });
    const yTo = gsap.quickTo(photo, "y", { duration: 0.7, ease: "power3.out" });

    const onMove = (event: PointerEvent) => {
      const rect = root.getBoundingClientRect();
      const nx = (event.clientX - rect.left) / rect.width - 0.5;
      const ny = (event.clientY - rect.top) / rect.height - 0.5;
      xTo(nx * 22);
      yTo(ny * 14);
    };
    const onLeave = () => {
      xTo(0);
      yTo(0);
    };

    root.addEventListener("pointermove", onMove);
    root.addEventListener("pointerleave", onLeave);
    return () => {
      root.removeEventListener("pointermove", onMove);
      root.removeEventListener("pointerleave", onLeave);
    };
  }, [fine, reduced]);

  return (
    <section
      ref={rootRef}
      className={cn("services-hero", styles.heroShell)}
      style={plate}
      aria-labelledby="services-hero-title"
    >
      <div className={styles.heroAtmosphere} aria-hidden>
        <img ref={photoRef} src={ATMOSPHERE} alt="" className={styles.heroAtmospherePhoto} />
        <div className={styles.heroShade} />
        <div className={cn(heroStyles.grain, styles.heroGrain)} />
      </div>

      <Container size="content" className={styles.heroCopy}>
        <Breadcrumbs
          items={[
            { name: tx(locale, hero.home), path: "/" },
            { name: tx(locale, hero.crumb), path: "/servicios/" },
          ]}
        />

        <p className={styles.heroKicker}>{tx(locale, hero.label)}</p>
        <h1 id="services-hero-title" className={styles.heroTitle}>
          {tx(locale, hero.title)}
        </h1>
        <p className={styles.heroDeck}>{tx(locale, hero.sub)}</p>
        <a href="#contact" className={cn(styles.cta, styles.ctaOnDark, styles.heroCta)} data-cursor="cta">
          {tx(locale, hero.cta)}
        </a>

        <nav aria-label={tx(locale, hero.indexLabel)} className={styles.index}>
          {SERVICES.map((service) => (
            <a key={service.slug} href={`#${service.slug}`} data-reel-target={service.slug} data-cursor="link">
              <span className={styles.indexName}>{tx(locale, service.title)}</span>
              <span className={styles.indexNum}>{service.index}</span>
            </a>
          ))}
        </nav>
      </Container>
    </section>
  );
}

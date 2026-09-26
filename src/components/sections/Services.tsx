"use client";

import { useRef } from "react";
import { useLocale } from "@/context/LocaleContext";
import { useServiceReel } from "@/components/sections/services-system/useServiceReel";
import heroStyles from "@/components/sections/scelerity-hero/hero.module.css";
import styles from "./home-cycle.module.css";
import { cn } from "@/lib/cn";

export function Services() {
  const { t } = useLocale();
  const rootRef = useRef<HTMLElement>(null);
  const copy = t.services;
  const total = copy.phases.length + 1;
  const totalLabel = String(total).padStart(2, "0");

  useServiceReel(rootRef, total);

  return (
    <section
      ref={rootRef}
      id="services"
      className={cn("home-cycle", styles.cycle)}
      style={{ ["--slides" as string]: total }}
      aria-label={copy.label}
    >
      <div className={styles.viewport}>
        <div data-reel="track" className={styles.track}>
          <article data-reel-slide className={styles.intro} aria-labelledby="home-cycle-title">
            <p className={styles.kicker}>{copy.label}</p>
            <h2 id="home-cycle-title" className={styles.manifesto}>
              {copy.headline}
            </h2>
            <p className={styles.deck}>{copy.deck}</p>
          </article>

          {copy.phases.map((phase, index) => (
            <article
              key={phase.name}
              data-reel-slide
              className={styles.slide}
              aria-labelledby={`home-cycle-${index}`}
            >
              <figure className={styles.visual}>
                <img
                  src={phase.image}
                  alt={phase.alt}
                  width={1600}
                  height={1200}
                  className={styles.photo}
                />
                <div className={styles.shade} aria-hidden />
                <div className={cn(heroStyles.grain, styles.grain)} aria-hidden />
              </figure>

              <div className={styles.copy}>
                <p className={styles.kicker}>
                  <span>Fase {String(index + 1).padStart(2, "0")}</span>
                  <span aria-hidden> · </span>
                  <span>{phase.name}</span>
                </p>
                <h3 id={`home-cycle-${index}`} className={styles.phaseTitle}>
                  {phase.lead}
                </h3>
                <p className={styles.phaseBody}>{phase.body}</p>
                <ul className={styles.rows}>
                  {phase.rows.map((row) => (
                    <li key={row.label} className={styles.row}>
                      <span className={styles.rowLabel}>{row.label}</span>
                      <span className={styles.rowValue}>{row.value}</span>
                    </li>
                  ))}
                </ul>
                <a href="#contact" className={styles.cta} data-cursor="link">
                  {copy.cta}
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.progress} aria-hidden>
          <p className={styles.count}>
            <span className={styles.fase}>Fase</span>
            <span data-reel="current">01</span>
            <span className={styles.total}> / {totalLabel}</span>
          </p>
          <div className={styles.bar}>
            <span data-reel="bar" className={styles.barFill} />
          </div>
        </div>
      </div>
    </section>
  );
}

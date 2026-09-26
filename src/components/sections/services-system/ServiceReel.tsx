"use client";

import { useRef } from "react";
import { useLocale } from "@/context/LocaleContext";
import { PAGE, SERVICES, tx } from "./content";
import { ServiceSection } from "./ServiceSection";
import { useServiceReel } from "./useServiceReel";
import styles from "./services.module.css";

export function ServiceReel() {
  const { locale } = useLocale();
  const rootRef = useRef<HTMLElement>(null);
  const total = String(SERVICES.length).padStart(2, "0");

  useServiceReel(rootRef, SERVICES.length);

  return (
    <section
      ref={rootRef}
      className={`services-reel ${styles.reel}`}
      style={{ ["--slides" as string]: SERVICES.length }}
      aria-label={tx(locale, PAGE.hero.label)}
    >
      <div className={styles.reelViewport}>
        <div data-reel="track" className={styles.reelTrack}>
          {SERVICES.map((service, index) => (
            <ServiceSection key={service.slug} service={service} index={index} />
          ))}
        </div>

        <div className={styles.reelProgress} aria-hidden>
          <p className={styles.reelCount}>
            <span data-reel="current">01</span>
            <span className={styles.reelTotal}> / {total}</span>
          </p>
          <div className={styles.reelBar} aria-hidden>
            <span data-reel="bar" className={styles.reelBarFill} />
          </div>
        </div>
      </div>
    </section>
  );
}

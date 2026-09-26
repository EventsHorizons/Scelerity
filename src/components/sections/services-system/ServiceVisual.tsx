"use client";

import type { ServiceEntry } from "./content";
import { tx } from "./content";
import { useLocale } from "@/context/LocaleContext";
import heroStyles from "../scelerity-hero/hero.module.css";
import styles from "./services.module.css";
import { cn } from "@/lib/cn";

type Props = {
  image: ServiceEntry["image"];
  className?: string;
  sticky?: boolean;
};

/** Same grade as the home header: grayscale plate, vignette, grain, type on the picture. */
export function ServiceVisual({ image, className, sticky = true }: Props) {
  const { locale } = useLocale();

  return (
    <figure className={cn(styles.figure, className)}>
      <div className={cn(styles.plateStage, sticky && styles.stickyField)}>
        <img
          src={image.src}
          alt={tx(locale, image.alt)}
          className={heroStyles.plate}
        />
        <div className={cn(heroStyles.vignette, "pointer-events-none absolute inset-0")} aria-hidden />
        <div className={cn(heroStyles.grain, "pointer-events-none absolute inset-0")} aria-hidden />
        <div className={styles.plateType} aria-hidden>
          <p className={styles.plateLine}>{tx(locale, image.line)}</p>
          <p className={styles.plateKey}>{tx(locale, image.key)}</p>
        </div>
      </div>
    </figure>
  );
}

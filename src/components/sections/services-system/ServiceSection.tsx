"use client";

import Link from "next/link";
import { useLocale } from "@/context/LocaleContext";
import { PAGE, tx, type ServiceEntry } from "./content";
import heroStyles from "../scelerity-hero/hero.module.css";
import styles from "./services.module.css";
import { cn } from "@/lib/cn";

export function ServiceSection({ service, index }: { service: ServiceEntry; index: number }) {
  const { locale } = useLocale();

  return (
    <article
      id={service.slug}
      data-reel-slide
      data-index={index}
      aria-labelledby={`${service.slug}-title`}
      className={styles.reelSlide}
    >
      <figure className={styles.reelVisual} data-cursor="media">
        <img
          src={service.image.src}
          alt={tx(locale, service.image.alt)}
          width={1600}
          height={1200}
          className={cn(styles.reelImg, styles.grade)}
        />
        <div className={styles.gradeShade} aria-hidden />
        <div className={styles.reelLight} aria-hidden />
        <div className={cn(heroStyles.grain, styles.gradeGrain)} aria-hidden />
      </figure>

      <div className={styles.reelCopy}>
        <p className={styles.reelBadge}>
          <span>{service.index}</span>
          <span aria-hidden>·</span>
          <span>{tx(locale, PAGE.hero.label)}</span>
        </p>

        <h2 id={`${service.slug}-title`} className={styles.reelTitle}>
          {tx(locale, service.title)}
        </h2>
        <p className={styles.reelLead}>{tx(locale, service.manifesto)}</p>
        <p className={styles.reelPosition}>{tx(locale, service.response)}</p>

        <div className={styles.reelSheet}>
          <p className={styles.reelSheetLabel}>{tx(locale, PAGE.labels.capabilities)}</p>
          <ul className={styles.reelRows}>
            {service.capabilities.map((group) => (
              <li key={group.title.es} className={styles.reelRow}>
                <span className={styles.reelRowLabel}>{tx(locale, group.title)}</span>
                <span className={styles.reelRowValue}>
                  {group.items.map((item) => tx(locale, item)).join(" · ")}
                </span>
              </li>
            ))}
            <li className={styles.reelRow}>
              <span className={styles.reelRowLabel}>{tx(locale, PAGE.labels.deliverables)}</span>
              <span className={styles.reelRowValue}>
                {service.deliverables.map((item) => tx(locale, item)).join(" · ")}
              </span>
            </li>
          </ul>
        </div>

        <Link href={`/servicios/${service.slug}/`} className={styles.enter} data-cursor="link">
          {tx(locale, PAGE.enter)}
        </Link>
      </div>
    </article>
  );
}

"use client";

import { useRef } from "react";
import { useLocale } from "@/context/LocaleContext";
import { cn } from "@/lib/cn";
import { HERO_COPY, HERO_PEOPLE, SLICE_COUNT } from "./scelerity-hero/data";
import styles from "./scelerity-hero/hero.module.css";
import { useHeroMotion } from "./scelerity-hero/useHeroMotion";

/**
 * Cortes verticales del retrato que entra.
 * Arrancan cerrados. El mismo encuadre, no una segunda escena.
 */
function Blinds({ variant }: { variant: "plate" | "color" }) {
  const incoming = HERO_PEOPLE[1];

  return (
    <div data-hero="blinds" className="pointer-events-none absolute inset-0" aria-hidden>
      {Array.from({ length: SLICE_COUNT }, (_, index) => (
        <div
          key={index}
          data-hero="slice"
          className={styles.slice}
          style={{
            left: `${(index * 100) / SLICE_COUNT}%`,
            width: `${100 / SLICE_COUNT}%`,
            clipPath: index % 2 === 1 ? "inset(0% 0% 100% 0%)" : "inset(100% 0% 0% 0%)",
          }}
        >
          <img
            data-hero={variant === "color" ? "blind-color" : "blind"}
            src={incoming.src}
            alt=""
            className={variant === "color" ? styles.blindColor : styles.blind}
            style={{
              width: `${SLICE_COUNT * 100}%`,
              left: `${-index * 100}%`,
              objectPosition: incoming.objectPosition,
            }}
          />
        </div>
      ))}
    </div>
  );
}

export function ScelerityHero() {
  const rootRef = useRef<HTMLElement>(null);
  const { locale } = useLocale();
  const copy = HERO_COPY[locale];
  useHeroMotion(rootRef, locale);

  return (
    <section
      id="top"
      ref={rootRef}
      className="section-card section-card--dark relative isolate h-[100svh] min-h-[640px] w-full overflow-hidden"
      style={{ backgroundColor: "#09090B" }}
    >
      <h1 className="sr-only">{copy.sr}</h1>

      <div data-hero-stage className="absolute inset-0">
        <div data-hero="shutter" className="absolute inset-0" role="img" aria-label={copy.plate}>
          <div data-hero="field" className={styles.field}>
            {HERO_PEOPLE.map((person, index) => (
              <img
                key={person.id}
                data-hero="person"
                data-person={index}
                src={person.src}
                alt=""
                width={person.width}
                height={person.height}
                loading="eager"
                fetchPriority={index === 0 ? "high" : "low"}
                decoding="async"
                className={styles.plate}
                style={{ objectPosition: person.objectPosition, opacity: index === 0 ? 1 : 0 }}
              />
            ))}

            <div data-hero="mirror" className="pointer-events-none absolute inset-0" aria-hidden>
              <div className="absolute inset-y-0 left-0 w-[14%] overflow-hidden opacity-40">
                {HERO_PEOPLE.map((person, index) => (
                  <img
                    key={person.id}
                    data-person={index}
                    src={person.src}
                    alt=""
                    className={cn(styles.mirrorPlate, "left-0")}
                    style={{ objectPosition: person.objectPosition, opacity: index === 0 ? 1 : 0 }}
                  />
                ))}
              </div>
              <div className="absolute inset-y-0 right-0 w-[14%] overflow-hidden opacity-40">
                {HERO_PEOPLE.map((person, index) => (
                  <img
                    key={person.id}
                    data-person={index}
                    src={person.src}
                    alt=""
                    className={cn(styles.mirrorPlate, "right-0")}
                    style={{ objectPosition: person.objectPosition, opacity: index === 0 ? 1 : 0 }}
                  />
                ))}
              </div>
            </div>

            <Blinds variant="plate" />

            {/* El color vive solo dentro de la lente. El plano que entra sigue en blanco y negro. */}
            <div data-hero="lens" className={styles.lens}>
              {HERO_PEOPLE.map((person, index) => (
                <img
                  key={person.id}
                  data-person={index}
                  src={person.src}
                  alt=""
                  width={person.width}
                  height={person.height}
                  decoding="async"
                  className={styles.lensPlate}
                  style={{ objectPosition: person.objectPosition, opacity: index === 0 ? 1 : 0 }}
                />
              ))}
              <Blinds variant="color" />
            </div>
          </div>
        </div>

        <div className={cn(styles.vignette, "pointer-events-none absolute inset-0")} aria-hidden />

        <div className="pointer-events-none absolute inset-x-0 top-1/2 z-30 -translate-y-1/2 mix-blend-difference px-5 text-center lg:px-[8vw]">
          <p
            data-hero="type"
            className="font-display text-[clamp(4.5rem,13vw,12.5rem)] font-bold leading-[0.82] tracking-tighter text-[#f4f0e8]"
            aria-hidden
          >
            {copy.line}
          </p>
          <p
            data-hero="type"
            className="font-serif text-[clamp(3.4rem,8vw,8.5rem)] italic leading-[0.9] tracking-tight text-[#f4f0e8] lg:pl-[18vw]"
            aria-hidden
          >
            {copy.key}
          </p>
        </div>
      </div>

      <div className={cn(styles.grain, "pointer-events-none absolute inset-0 z-10")} aria-hidden />
      <div
        data-hero="system"
        className="pointer-events-none absolute inset-3 z-10 border border-[#f4f0e8]/5 lg:inset-5"
        aria-hidden
      />

    </section>
  );
}

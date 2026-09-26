"use client";

import { useLocale } from "@/context/LocaleContext";
import { Container } from "@/components/layout/Container";
import { PAGE, tx } from "./content";
import { depthStyle } from "./depthStyle";
import styles from "./services.module.css";

const white = depthStyle({
  bg: "#ffffff",
  fg: "#1c1c1e",
  muted: "#5e5952",
  subtle: "#8a847c",
});

export function ServicesIntro() {
  const { locale } = useLocale();

  return (
    <section className="services-intro" style={white} aria-labelledby="services-intro-title">
      <Container size="content">
        <div className={styles.intro}>
          <p className="chapter-label">{tx(locale, PAGE.intro.label)}</p>
          <h2 id="services-intro-title" className={styles.introLine}>
            {tx(locale, PAGE.intro.title)}
          </h2>
          <p className="mt-6 max-w-[46ch] text-body text-pretty text-[var(--fg-muted)]">
            {tx(locale, PAGE.intro.body)}
          </p>
        </div>
      </Container>
    </section>
  );
}

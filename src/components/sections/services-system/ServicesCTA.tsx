"use client";

import { cn } from "@/lib/cn";
import { useLocale } from "@/context/LocaleContext";
import { Container } from "@/components/layout/Container";
import { Magnetic } from "@/components/motion/Magnetic";
import { PAGE, tx } from "./content";
import { depthStyle } from "./depthStyle";
import styles from "./services.module.css";

const tone = depthStyle({
  bg: "#ffffff",
  fg: "#1c1c1e",
  muted: "#5e5952",
  subtle: "#8a847c",
});

export function ServicesCTA() {
  const { locale } = useLocale();

  return (
    <section className="services-close" style={tone} aria-labelledby="services-close-title">
      <Container size="content">
        <div className={styles.closeGrid}>
          <div>
            <p className="chapter-label">{tx(locale, PAGE.close.label)}</p>
            <h2 id="services-close-title" className={styles.closeTitle}>
              {tx(locale, PAGE.close.title)}
            </h2>
            <p className="mt-6 max-w-[42ch] text-lead text-pretty text-[var(--fg-muted)]">
              {tx(locale, PAGE.close.body)}
            </p>
          </div>
          <Magnetic strength={0.12} className="w-full sm:w-auto">
            <a href="#contact" className={cn(styles.cta, "w-full sm:w-auto")} data-cursor="cta">
              {tx(locale, PAGE.close.cta)}
            </a>
          </Magnetic>
        </div>
      </Container>
    </section>
  );
}

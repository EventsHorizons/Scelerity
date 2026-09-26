"use client";

import { useLocale } from "@/context/LocaleContext";
import { Container } from "@/components/layout/Container";
import { PAGE, tx } from "./content";
import { depthStyle } from "./depthStyle";
import styles from "./services.module.css";

const tone = depthStyle({
  bg: "#242220",
  fg: "#f4f0e8",
  muted: "#c8c0b4",
  subtle: "#a39e96",
});

export function ServiceTransition() {
  const { locale } = useLocale();

  return (
    <section className="services-hinge" style={tone} aria-labelledby="services-hinge-title">
      <Container size="content">
        <p className="chapter-label">{tx(locale, PAGE.hinge.label)}</p>
        <h2 id="services-hinge-title" className={`${styles.hinge} mt-8`}>
          {tx(locale, PAGE.hinge.text)}
        </h2>
      </Container>
    </section>
  );
}

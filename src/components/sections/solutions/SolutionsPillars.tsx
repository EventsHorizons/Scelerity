"use client";

import { Code2, Megaphone, Palette } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { AmbientGlow } from "@/components/motion/AmbientGlow";
import { KineticCard } from "@/components/motion/KineticCard";
import { SolutionsVisual } from "@/components/sections/solutions/SolutionsVisual";

const icons = [Palette, Code2, Megaphone] as const;

export function SolutionsPillars() {
  const { t } = useLocale();
  const s = t.solutions.pillars;

  return (
    <Section id="pilares">
      <AmbientGlow variant="services" />
      <Container size="content" className="relative z-10 section-y-lg">
        <div className="section-head">
          <p className="chapter-label lg:pt-3">{s.label}</p>
          <h2 className="text-balance font-display text-h2 font-semibold">
            {s.headline}
          </h2>
        </div>

        <div className="mt-[var(--space-fluid-lg)] space-y-[var(--space-fluid-md)]">
          {s.items.map((pillar, i) => {
            const Icon = icons[i];
            const reversed = i % 2 === 1;

            return (
              <KineticCard
                key={pillar.title}
                lean={4}
                className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--glass-border)] bg-[var(--card)]"
              >
                <article
                  data-cursor="link"
                  className={`group grid items-center gap-[var(--space-6)] p-[var(--space-6)] sm:p-[var(--space-8)] lg:grid-cols-2 lg:gap-[var(--space-10)] lg:p-[var(--space-10)] ${reversed ? "lg:[direction:rtl]" : ""}`}
                >
                  <div className={reversed ? "lg:[direction:ltr]" : ""}>
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--glass-border)] bg-[var(--glass)] text-[var(--fg-muted)]">
                      <Icon size={20} strokeWidth={1.5} aria-hidden />
                    </div>
                    <h3 className="mt-[var(--space-5)] font-display text-title font-semibold">
                      {pillar.title}
                    </h3>
                    <p className="mt-[var(--space-3)] font-mono text-micro uppercase tracking-[0.18em] text-[var(--fg-subtle)]">
                      {pillar.tagline}
                    </p>
                    <p className="mt-[var(--space-5)] max-w-[40ch] text-lead text-pretty text-[var(--fg-muted)]">
                      {pillar.value}
                    </p>
                    <div className="mt-[var(--space-6)] h-px w-12 bg-[image:var(--gradient-primary)] transition-all duration-500 group-hover:w-20" />
                  </div>

                  <div className={reversed ? "lg:[direction:ltr]" : ""}>
                    <SolutionsVisual
                      media={i === 1 ? "video" : "image"}
                      tone={i}
                      aspect="aspect-[16/10]"
                      className="rounded-[var(--radius-md)]"
                    />
                  </div>
                </article>
              </KineticCard>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

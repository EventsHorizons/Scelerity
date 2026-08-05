"use client";

import { ArrowUpRight } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { AmbientGlow } from "@/components/motion/AmbientGlow";
import { KineticCard } from "@/components/motion/KineticCard";
import { FeaturedProductReel } from "@/components/sections/FeaturedProductReel";

export function Featured() {
  const { t } = useLocale();
  const project = t.featured.project;

  return (
    <Section id="featured" cardTone="dark">
      <AmbientGlow variant="featured" />
      <Container size="content" className="relative z-10 section-y-lg">
        <p className="chapter-label">{t.featured.label}</p>

        <h2 className="mt-[var(--space-8)] text-balance font-display text-hero font-semibold">
          {project.title}
        </h2>
        <p className="mt-[var(--space-5)] text-small text-[var(--fg-muted)]">
          {project.category}
        </p>

        <KineticCard
          lean={3}
          className="mt-[var(--space-fluid-lg)] overflow-hidden rounded-[var(--radius-lg)] border border-[var(--glass-border)] bg-[#09090b] md:rounded-[28px]"
        >
          <article data-cursor="media" className="group">
            <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-[16/10] lg:aspect-[21/9]">
              <FeaturedProductReel />
            </div>
          </article>
        </KineticCard>

        <div className="mt-[var(--space-fluid-md)] grid gap-[var(--space-10)] border-t border-[var(--border)] pt-[var(--space-fluid-md)] lg:grid-cols-12 lg:gap-[var(--space-8)]">
          <p className="measure text-lead text-pretty text-[var(--fg-muted)] lg:col-span-6">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-x-[var(--space-10)] gap-y-[var(--space-6)] lg:col-span-4">
            {project.metrics.map((metric) => (
              <div key={metric.label}>
                <p className="font-display text-h3 font-semibold">
                  {metric.value}
                </p>
                <p className="mt-2 font-mono text-micro uppercase tracking-[0.18em] text-[var(--fg-subtle)]">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>

          <div className="lg:col-span-2 lg:justify-self-end">
            <a
              href="#contact"
              data-cursor="link"
              className="tap-target group/link inline-flex items-center gap-2 text-small text-[var(--fg-muted)] transition-colors duration-300 hover:text-[var(--fg)]"
            >
              {t.work.view}
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
              />
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}

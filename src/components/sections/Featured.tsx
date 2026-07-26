"use client";

import { ArrowUpRight } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";
import { Section } from "@/components/layout/Section";
import { AmbientGlow } from "@/components/motion/AmbientGlow";
import { KineticCard } from "@/components/motion/KineticCard";

export function Featured() {
  const { t } = useLocale();
  const project = t.featured.project;

  return (
    <Section id="featured">
      <AmbientGlow variant="featured" />
      <div className="relative z-10 section-pad section-y-lg mx-auto max-w-[1200px]">
        <p className="chapter-label">{t.featured.label}</p>

        <h2 className="mt-10 font-display text-[clamp(2.75rem,9vw,7rem)] font-semibold leading-[0.92] tracking-[-0.045em]">
          {project.title}
        </h2>
        <p className="mt-6 text-sm text-[var(--fg-muted)] sm:text-base">
          {project.category}
        </p>

        <KineticCard
          lean={3}
          className="mt-16 overflow-hidden rounded-[28px] border border-[var(--glass-border)] bg-[var(--card)]"
        >
          <article data-cursor="media" className="group">
            <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-[#1a1d2e] via-[#141722] to-[#0f1118] sm:aspect-[21/9]">
              <div className="absolute inset-0 opacity-55 transition-transform duration-700 ease-out group-hover:scale-[1.03]">
                <div className="absolute inset-[10%] rounded-[20px] border border-white/10" />
                <div className="absolute left-[16%] top-[20%] h-[44%] w-[34%] rounded-[16px] border border-white/12 bg-white/[0.04]" />
                <div className="absolute bottom-[14%] right-[12%] h-[30%] w-[42%] rounded-[16px] border border-[#67f0c1]/25 bg-[#67f0c1]/[0.07]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(92,141,255,0.22),transparent_50%)]" />
              </div>
            </div>
          </article>
        </KineticCard>

        <div className="mt-14 grid gap-12 border-t border-[var(--border)] pt-12 lg:grid-cols-12 lg:gap-8">
          <p className="max-w-lg text-lg leading-relaxed text-[var(--fg-muted)] lg:col-span-6">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-10 lg:col-span-4">
            {project.metrics.map((metric) => (
              <div key={metric.label}>
                <p className="font-display text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                  {metric.value}
                </p>
                <p className="mt-2 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-[var(--fg-subtle)]">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>

          <div className="lg:col-span-2 lg:justify-self-end">
            <a
              href="#contact"
              data-cursor="link"
              className="group/link inline-flex items-center gap-2 text-sm text-[var(--fg-muted)] transition-colors duration-300 hover:text-[var(--fg)]"
            >
              {t.work.view}
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
              />
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

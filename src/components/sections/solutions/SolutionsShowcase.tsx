"use client";

import { useLocale } from "@/context/LocaleContext";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { AmbientGlow } from "@/components/motion/AmbientGlow";
import { KineticCard } from "@/components/motion/KineticCard";
import { SolutionsVisual } from "@/components/sections/solutions/SolutionsVisual";
import { cn } from "@/lib/cn";

export function SolutionsShowcase() {
  const { t } = useLocale();
  const s = t.solutions.showcase;

  return (
    <Section id="showcase">
      <AmbientGlow variant="featured" />
      <Container size="content" className="relative z-10 section-y-lg">
        <div className="section-head section-head--baseline">
          <p className="chapter-label lg:pt-3">{s.label}</p>
          <h2 className="text-balance font-display text-h2 font-semibold">
            {s.headline}
          </h2>
        </div>

        <div className="solutions-bento mt-[var(--space-fluid-lg)]">
          {s.items.map((item, i) => (
            <KineticCard
              key={item.title}
              lean={3}
              className={cn(
                "solutions-bento__cell overflow-hidden rounded-[var(--radius-lg)] border border-[var(--glass-border)] bg-[var(--card)]",
                item.layout === "hero" && "solutions-bento__cell--hero",
                item.layout === "wide" && "solutions-bento__cell--wide",
              )}
            >
              <article data-cursor="media" className="group flex h-full flex-col">
                <SolutionsVisual
                  media={item.media}
                  tone={i}
                  aspect="aspect-[4/3] min-h-[12rem] h-full flex-1 rounded-none"
                />
                <div className="flex items-end justify-between gap-4 p-5 sm:p-6">
                  <div>
                    <h3 className="font-display text-h4 font-semibold">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-small text-[var(--fg-muted)]">
                      {item.category}
                    </p>
                  </div>
                  <span className="font-mono text-micro text-[var(--fg-subtle)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </article>
            </KineticCard>
          ))}
        </div>
      </Container>
    </Section>
  );
}

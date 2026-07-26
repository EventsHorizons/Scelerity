"use client";

import { useLocale } from "@/context/LocaleContext";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { KineticCard } from "@/components/motion/KineticCard";

export function SolutionsPlans() {
  const { t } = useLocale();
  const s = t.solutions.plans;

  return (
    <Section id="planes">
      <Container size="content" className="section-y-lg">
        <div className="section-head">
          <p className="chapter-label lg:pt-3">{s.label}</p>
          <h2 className="text-balance font-display text-h2 font-semibold">
            {s.headline}
          </h2>
        </div>

        <div className="auto-grid mt-[var(--space-fluid-lg)] [--auto-grid-gap:var(--space-6)] [--auto-grid-min:18rem]">
          {s.items.map((plan, i) => (
            <KineticCard
              key={plan.name}
              lean={4}
              className="flex h-full flex-col overflow-hidden rounded-[var(--radius-lg)] border border-[var(--glass-border)] bg-[var(--card)] p-[var(--space-6)] sm:p-[var(--space-8)]"
            >
              <article data-cursor="link" className="group flex h-full flex-col">
                <p className="font-mono text-small text-[var(--fg-subtle)]">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-[var(--space-4)] font-display text-title font-semibold">
                  {plan.name}
                </h3>
                <p className="mt-[var(--space-2)] text-small text-[var(--fg-muted)]">
                  {plan.tagline}
                </p>
                <div className="mt-[var(--space-5)] h-px w-10 bg-[image:var(--gradient-primary)] transition-all duration-500 group-hover:w-16" />

                <p className="mt-[var(--space-6)] font-mono text-micro uppercase tracking-[0.18em] text-[var(--fg-subtle)]">
                  {s.idealLabel}
                </p>
                <p className="mt-[var(--space-3)] text-body text-pretty text-[var(--fg-muted)]">
                  {plan.ideal}
                </p>

                <p className="mt-[var(--space-6)] font-mono text-micro uppercase tracking-[0.18em] text-[var(--fg-subtle)]">
                  {s.includesLabel}
                </p>
                <ul className="mt-[var(--space-3)] space-y-2">
                  {plan.includes.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2.5 text-small text-[var(--fg-muted)]"
                    >
                      <span
                        className="mt-[0.5em] h-1 w-1 shrink-0 rounded-full bg-[image:var(--gradient-primary)]"
                        aria-hidden
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto border-t border-[var(--border)] pt-[var(--space-6)]">
                  <p className="font-mono text-micro uppercase tracking-[0.18em] text-[var(--fg-subtle)]">
                    {s.resultLabel}
                  </p>
                  <p className="mt-[var(--space-3)] text-body text-pretty text-[var(--fg)]">
                    {plan.result}
                  </p>
                </div>
              </article>
            </KineticCard>
          ))}
        </div>
      </Container>
    </Section>
  );
}

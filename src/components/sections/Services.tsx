"use client";

import { useLocale } from "@/context/LocaleContext";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { AmbientGlow } from "@/components/motion/AmbientGlow";

export function Services() {
  const { t } = useLocale();
  const columns = [
    { key: "what", label: t.services.columns.what },
    { key: "why", label: t.services.columns.why },
    { key: "result", label: t.services.columns.result },
  ] as const;

  return (
    <Section id="services">
      <AmbientGlow variant="services" />
      <Container size="content" className="relative z-10 section-y-lg">
        <div className="section-head">
          <p className="chapter-label lg:pt-3">{t.services.label}</p>
          <h2 className="text-balance font-display text-h2 font-semibold">
            {t.services.headline}
          </h2>
        </div>

        <div className="mt-[var(--space-fluid-lg)] border-t border-[var(--border)]">
          {t.services.items.map((item, i) => (
            <div
              key={item.name}
              data-cursor="link"
              className="group grid gap-[var(--space-6)] border-b border-[var(--border)] py-[var(--space-fluid-md)] lg:grid-cols-12 lg:gap-[var(--space-8)] lg:py-[var(--space-fluid-lg)]"
            >
              <p className="font-mono text-small text-[var(--fg-subtle)] lg:col-span-1">
                {String(i + 1).padStart(2, "0")}
              </p>

              <div className="lg:col-span-4">
                <h3 className="font-display text-title font-semibold">
                  {item.name}
                </h3>
                <div className="mt-[var(--space-5)] h-px w-12 bg-[image:var(--gradient-primary)] transition-all duration-500 group-hover:w-24" />
              </div>

              <div className="grid gap-[var(--space-6)] md:grid-cols-2 lg:col-span-7 lg:grid-cols-3">
                {columns.map((column) => (
                  <div key={column.key}>
                    <p className="font-mono text-micro uppercase tracking-[0.18em] text-[var(--fg-subtle)]">
                      {column.label}
                    </p>
                    <p className="mt-[var(--space-3)] text-body text-pretty text-[var(--fg-muted)]">
                      {item[column.key]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

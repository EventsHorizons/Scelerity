"use client";

import { useId, useState } from "react";
import { Plus } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/cn";

export function FAQ() {
  const { t } = useLocale();
  const [open, setOpen] = useState<number | null>(0);
  const uid = useId();

  return (
    <Section id="faq" cardTone="light">
      <Container size="content" className="section-y-lg">
        <div className="section-head section-head--baseline">
          <p className="chapter-label">{t.faq.label}</p>
          <h2 className="text-balance font-display text-h2 font-semibold">
            {t.faq.headline}
          </h2>
        </div>

        <div className="mt-[var(--space-fluid-lg)] border-t border-[var(--border)]">
          {t.faq.items.map((item, i) => {
            const isOpen = open === i;
            const panelId = `${uid}-panel-${i}`;
            const buttonId = `${uid}-button-${i}`;

            return (
              <div key={item.q} className="border-b border-[var(--border)]">
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    data-cursor="link"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-start justify-between gap-[var(--space-5)] py-[var(--space-6)] text-left [touch-action:manipulation] md:py-[var(--space-8)]"
                  >
                    <span className="font-display text-h4 font-semibold text-pretty">
                      {item.q}
                    </span>
                    <Plus
                      size={22}
                      aria-hidden
                      className={cn(
                        "mt-0.5 shrink-0 text-[var(--fg-subtle)] transition-transform duration-300",
                        isOpen && "rotate-45",
                      )}
                    />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  inert={!isOpen}
                  className={cn(
                    "grid transition-[grid-template-rows] duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="measure pb-[var(--space-8)] text-body text-pretty text-[var(--fg-muted)]">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

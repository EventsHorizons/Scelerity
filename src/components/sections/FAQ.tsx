"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";
import { Section } from "@/components/layout/Section";
import { cn } from "@/lib/cn";

export function FAQ() {
  const { t } = useLocale();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faq">
      <div className="section-pad section-y-lg mx-auto max-w-[1200px]">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
          <p className="chapter-label lg:col-span-3 lg:pt-4">{t.faq.label}</p>
          <h2 className="text-balance font-display text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.035em] lg:col-span-9">
            {t.faq.headline}
          </h2>
        </div>

        <div className="mt-16 border-t border-[var(--border)] sm:mt-24">
          {t.faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="border-b border-[var(--border)]">
                <button
                  type="button"
                  data-cursor="link"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-start justify-between gap-6 py-7 text-left sm:py-9"
                >
                  <span className="font-display text-lg font-semibold tracking-[-0.02em] sm:text-xl">
                    {item.q}
                  </span>
                  <Plus
                    size={20}
                    className={cn(
                      "mt-1 shrink-0 text-[var(--fg-subtle)] transition-transform duration-300",
                      isOpen && "rotate-45",
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "grid transition-[grid-template-rows] duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-2xl pb-8 text-base leading-relaxed text-[var(--fg-muted)] sm:text-lg">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

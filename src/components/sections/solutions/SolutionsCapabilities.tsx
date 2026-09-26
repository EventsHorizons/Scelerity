"use client";

import { useLocale } from "@/context/LocaleContext";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { TextCta } from "@/components/sections/solutions/TextCta";

export function SolutionsCapabilities() {
  const { t } = useLocale();
  const s = t.solutions.capabilities;

  return (
    <Section id="capacidades" cardTone="paper">
      <Container size="content">
        <div className="section-head">
          <p className="chapter-label lg:pt-3">{s.label}</p>
          <div>
            <h2 className="max-w-[16ch] text-balance font-display text-h2 font-semibold">
              {s.headline}
            </h2>
            <p className="mt-10 text-lead text-pretty text-[var(--fg-muted)]">{s.lead}</p>
            <p className="mt-4 max-w-[36ch] text-lead text-pretty font-medium">{s.emphasis}</p>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-24 md:mt-28 md:gap-32">
          {s.items.map((item) => (
            <article
              key={item.name}
              className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16"
            >
              <div className="lg:col-span-7">
                <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--fg-subtle)]">
                  {item.index}
                  <span className="mx-3 opacity-40">/</span>
                  {item.name}
                </p>
                <h3 className="mt-5 max-w-[16ch] text-balance font-display text-h2 font-semibold">
                  {item.headline}
                </h3>
                <p className="mt-8 max-w-[38ch] text-lead text-pretty">{item.lead}</p>
                <p className="mt-4 measure text-body text-pretty text-[var(--fg-muted)]">
                  {item.body}
                </p>
                <p className="mt-10 font-mono text-small tracking-[0.04em] text-[var(--fg-muted)]">
                  {item.microcopy}
                </p>
                <div className="mt-8">
                  <TextCta href={item.href}>{item.cta}</TextCta>
                </div>
              </div>

              <div className="lg:col-span-5 lg:pt-2">
                <p className="chapter-label">{s.includesLabel}</p>
                <ul className="mt-6 space-y-3">
                  {item.includes.map((include) => (
                    <li key={include} className="text-body text-[var(--fg)]">
                      {include}
                    </li>
                  ))}
                </ul>
                <p className="chapter-label mt-12">{s.stackLabel}</p>
                <p className="mt-6 max-w-[28ch] font-mono text-small leading-relaxed text-[var(--fg-muted)]">
                  {item.stack}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}

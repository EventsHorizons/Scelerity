"use client";

import dynamic from "next/dynamic";
import { Mail, Globe2, Zap } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { AmbientGlow } from "@/components/motion/AmbientGlow";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import { Magnetic } from "@/components/motion/Magnetic";

const ContactForm = dynamic(
  () => import("@/components/ui/ContactForm").then((m) => m.ContactForm),
  { ssr: false },
);

export function FinalCTA() {
  const { t } = useLocale();

  return (
    <Section id="contact">
      <AmbientGlow variant="cta" />
      <Container size="content" className="relative z-10 section-y-lg">
        {/* Single column until there is genuinely room for two */}
        <div className="grid items-start gap-[var(--space-fluid-lg)] lg:grid-cols-2 lg:gap-[var(--space-12)] xl:gap-[var(--space-20)]">
          <div>
            <p className="chapter-label">{t.cta.eyebrow}</p>

            <h2 className="mt-[var(--space-6)] text-balance font-display text-display font-semibold">
              {t.cta.headline}
            </h2>

            <div className="mt-[var(--space-8)] measure space-y-[var(--space-5)]">
              {t.cta.body.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-body text-pretty text-[var(--fg-muted)]"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <ul className="mt-[var(--space-10)] space-y-[var(--space-2)]">
              <li>
                <a
                  href={`mailto:${t.cta.email}`}
                  data-cursor="link"
                  className="tap-target inline-flex min-h-11 items-center gap-3 text-small text-[var(--fg-muted)] transition-colors duration-300 hover:text-[var(--fg)]"
                >
                  <Mail size={18} className="shrink-0 text-[var(--fg-subtle)]" />
                  {t.cta.email}
                </a>
              </li>
              <li className="flex min-h-11 items-center gap-3 text-small text-[var(--fg-muted)]">
                <Globe2 size={18} className="shrink-0 text-[var(--fg-subtle)]" />
                {t.cta.location}
              </li>
              <li className="flex min-h-11 items-center gap-3 text-small text-[var(--fg-muted)]">
                <Zap size={18} className="shrink-0 text-[var(--fg-subtle)]" />
                {t.cta.response}
              </li>
            </ul>

            <div className="mt-[var(--space-10)]">
              <Magnetic className="w-full sm:w-auto">
                <Button
                  href={`https://wa.me/${t.cta.whatsapp}`}
                  size="lg"
                  block
                  className="btn-whatsapp sm:w-auto"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${t.cta.primary} — WhatsApp`}
                >
                  <WhatsAppIcon size={19} />
                  {t.cta.primary}
                </Button>
              </Magnetic>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </Container>
    </Section>
  );
}

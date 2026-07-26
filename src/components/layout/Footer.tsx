"use client";

import { useLocale } from "@/context/LocaleContext";
import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/brand/Logo";

export function Footer() {
  const { t } = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)]">
      <Container
        size="content"
        className="flex flex-col gap-[var(--space-6)] pb-[max(var(--space-10),env(safe-area-inset-bottom))] pt-[var(--space-8)] md:flex-row md:items-center md:justify-between"
      >
        <div>
          <Logo className="text-[1.0625rem]" />
          <p className="mt-2 text-small text-[var(--fg-muted)]">
            {t.footer.tagline}
          </p>
        </div>
        <div className="flex flex-col gap-1 text-small text-[var(--fg-subtle)] md:items-end">
          <a
            href={`mailto:${t.cta.email}`}
            data-cursor="link"
            className="tap-target inline-flex min-h-11 items-center transition-colors hover:text-[var(--fg)]"
          >
            {t.cta.email}
          </a>
          <p className="font-mono text-micro">
            © {year} · {t.footer.rights}
          </p>
        </div>
      </Container>
    </footer>
  );
}

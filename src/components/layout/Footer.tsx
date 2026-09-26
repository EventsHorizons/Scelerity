"use client";

import Link from "next/link";
import { useLocale } from "@/context/LocaleContext";
import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/brand/Logo";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function Footer() {
  const { t } = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer>
      <Container
        size="content"
        className="flex flex-col gap-[var(--space-12)] pb-[max(var(--space-16),env(safe-area-inset-bottom))] pt-[var(--space-16)] md:flex-row md:items-start md:justify-between"
      >
        <div className="text-center md:text-left">
          <Link href="/" aria-label="Scelerity — Home">
            <Logo className="wordmark-lockup--footer" />
          </Link>
          <p className="mt-4 max-w-[28ch] text-small leading-relaxed text-[var(--fg-muted)]">
            {t.footer.tagline}
          </p>
          <SocialLinks links={t.footer.social} className="mt-5" />
        </div>

        <div className="flex flex-col items-center gap-[var(--space-6)] md:items-end">
          <nav aria-label={t.footer.navLabel}>
            <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 md:justify-end">
              {t.footer.links.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    data-cursor="link"
                    className="tap-target inline-flex min-h-11 items-center text-small text-[var(--fg-muted)] transition-colors duration-300 hover:text-[var(--fg)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 md:justify-end">
            {t.footer.legal.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  data-cursor="link"
                  className="tap-target inline-flex min-h-11 items-center font-mono text-micro uppercase tracking-[0.14em] text-[var(--fg-subtle)] transition-colors duration-300 hover:text-[var(--fg-muted)]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex flex-col items-center gap-3 text-small text-[var(--fg-subtle)] md:items-end">
            <a
              href={`mailto:${t.cta.email}`}
              data-cursor="link"
              className="tap-target inline-flex min-h-11 items-center transition-colors hover:text-[var(--fg)]"
            >
              {t.cta.email}
            </a>
            <p className="font-mono text-micro">
              © {year} Scelerity · {t.footer.rights}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

"use client";

import { useLocale } from "@/context/LocaleContext";
import { Logo } from "@/components/brand/Logo";

export function Footer() {
  const { t } = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="section-pad border-t border-[var(--border)] pb-10 pt-8">
      <div className="mx-auto flex max-w-[1100px] flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Logo className="text-base" />
          <p className="mt-2 text-sm text-[var(--fg-muted)]">{t.footer.tagline}</p>
        </div>
        <div className="flex flex-col gap-1 text-sm text-[var(--fg-subtle)] sm:items-end">
          <a
            href={`mailto:${t.cta.email}`}
            data-cursor="link"
            className="transition-colors hover:text-[var(--fg)]"
          >
            {t.cta.email}
          </a>
          <p className="font-mono text-[0.65rem]">
            © {year} · {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}

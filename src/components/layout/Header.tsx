"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/brand/Logo";
import { useScrollLock } from "@/hooks/useScrollLock";
import { useSiteNav } from "@/hooks/useSiteNav";
import { cn } from "@/lib/cn";
import { ease } from "@/lib/easings";

export function Header() {
  const { t } = useLocale();
  const { links, logoHref, contactHref } = useSiteNav();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useScrollLock(open);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    toggleRef.current?.focus({ preventScroll: true });
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    const desktop = window.matchMedia("(min-width: 64rem)");
    const onBreakpoint = () => desktop.matches && setOpen(false);

    window.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onBreakpoint);
    panelRef.current?.focus({ preventScroll: true });

    return () => {
      window.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onBreakpoint);
    };
  }, [open, close]);

  return (
    <>
      <motion.header
        initial={{ y: -28, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.85, ease: ease.outExpo }}
        className="fixed inset-x-0 top-0 z-[70] px-3 pt-3 sm:px-4 sm:pt-4"
      >
        <div
          className={cn(
            "relative mx-auto flex h-[var(--header-h)] w-full max-w-[1200px] items-center justify-between gap-3 rounded-[22px] px-3 transition-[background-color,border-color,box-shadow] duration-500 sm:px-5",
            scrolled || open
              ? "glass-panel shadow-[0_8px_40px_rgba(0,0,0,0.18)]"
              : "border border-transparent bg-transparent",
          )}
        >
          <div
            className="pointer-events-none absolute inset-x-6 top-0 h-px overflow-hidden rounded-full"
            aria-hidden
          >
            <div className="header-speed-line speed-line h-full w-1/3 rounded-full" />
          </div>

          <Link
            href={logoHref}
            data-cursor="link"
            onClick={() => setOpen(false)}
            className="tap-target relative z-10 inline-flex items-center py-1 pr-2 text-[var(--fg)]"
            aria-label="Scelerity — Home"
          >
            <Logo className="text-[1.0625rem] md:text-[1.125rem]" />
          </Link>

          <nav
            className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-5 lg:flex xl:gap-7"
            aria-label="Primary"
          >
            {links.map((link, i) => (
              <motion.div
                key={link.href + link.label}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.25 + i * 0.06,
                  duration: 0.55,
                  ease: ease.outExpo,
                }}
              >
                <Link
                  href={link.href}
                  data-cursor="link"
                  className="tap-target text-[0.8125rem] text-[var(--fg-muted)] transition-colors duration-300 hover:text-[var(--fg)]"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-2 lg:flex">
              <LanguageToggle />
              <ThemeToggle />
              <Button href={contactHref} size="sm">
                {t.nav.contact}
              </Button>
            </div>

            <button
              ref={toggleRef}
              type="button"
              data-cursor="link"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--glass-border)] text-[var(--fg)] [touch-action:manipulation] lg:hidden"
              aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            ref={panelRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-label={t.nav.menu}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: ease.outExpo }}
            className="nav-overlay backdrop-blur-xl backdrop-saturate-150 lg:hidden"
          >
            <nav
              className="flex flex-1 flex-col justify-center"
              aria-label="Mobile"
            >
              <ul className="border-t border-[var(--border)]">
                {links.map((link, i) => (
                  <motion.li
                    key={link.href + link.label}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.06 + i * 0.05,
                      duration: 0.35,
                      ease: ease.outExpo,
                    }}
                  >
                    <Link
                      href={link.href}
                      data-cursor="link"
                      onClick={close}
                      className="nav-overlay__link"
                    >
                      {link.label}
                      <span className="nav-overlay__index" aria-hidden>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </Link>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.26,
                    duration: 0.35,
                    ease: ease.outExpo,
                  }}
                >
                  <Link
                    href={contactHref}
                    data-cursor="link"
                    onClick={close}
                    className="nav-overlay__link"
                  >
                    {t.nav.contact}
                    <ArrowUpRight
                      size={22}
                      className="text-[var(--fg-subtle)]"
                      aria-hidden
                    />
                  </Link>
                </motion.li>
              </ul>
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.26, duration: 0.3 }}
              className="mt-auto flex flex-col gap-5 pt-8 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between"
            >
              <div className="flex items-center gap-2">
                <LanguageToggle />
                <ThemeToggle />
              </div>
              <a
                href={`mailto:${t.cta.email}`}
                data-cursor="link"
                className="tap-target inline-flex min-h-12 max-w-full items-center truncate text-small text-[var(--fg-muted)] transition-colors duration-300 hover:text-[var(--fg)]"
              >
                {t.cta.email}
              </a>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

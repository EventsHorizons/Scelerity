"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/brand/Logo";
import { useScrollLock } from "@/hooks/useScrollLock";
import { getLenisInstance } from "@/lib/lenis";
import { useSiteNav } from "@/hooks/useSiteNav";
import { cn } from "@/lib/cn";
import { ease } from "@/lib/easings";

function isCurrent(href: string, pathname: string) {
  const path = pathname.endsWith("/") ? pathname : `${pathname}/`;
  const target = href.endsWith("/") ? href : `${href}/`;
  if (!target.startsWith("/")) return false;
  if (
    (path === "/servicios/" || path.startsWith("/servicios/") || path === "/soluciones/" || path.startsWith("/soluciones/")) &&
    (target === "/servicios/" || target === "/soluciones/")
  ) {
    return true;
  }
  return path === target || path.startsWith(target);
}

function scrollToStart() {
  getLenisInstance()?.scrollTo(0, { immediate: true, force: true });
  window.scrollTo(0, 0);
}

const itemClass = (active: boolean) =>
  cn(
    "header-link inline-flex min-h-11 items-center rounded-full px-4 py-3 text-[14px] font-normal leading-relaxed tracking-[-0.01em]",
    active && "is-active",
  );

export function Header() {
  const { t } = useLocale();
  const pathname = usePathname();
  const { links, logoHref, contactHref } = useSiteNav();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const path = pathname.endsWith("/") ? pathname : `${pathname}/`;
  const onDarkOpen = path === "/" || path === "/servicios/" || path === "/soluciones/";
  const solid = !onDarkOpen || scrolled;
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const skipRestore = useRef(false);

  useScrollLock(open, skipRestore);

  useEffect(() => {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  }, []);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash && hash !== "#top") return;
    scrollToStart();
    const frame = requestAnimationFrame(scrollToStart);
    const later = window.setTimeout(scrollToStart, 80);
    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(later);
    };
  }, [pathname]);

  const openPage = useCallback(() => {
    skipRestore.current = true;
    setOpen(false);
    scrollToStart();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
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
    const desktop = window.matchMedia("(min-width: 80rem)");
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
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-20 px-4 pt-[calc(env(safe-area-inset-top)+16px)] md:px-6",
          open && "z-[40]",
        )}
      >
        <div className="relative mx-auto w-full max-w-[80rem]">
          <div className={cn("header-glass", solid && "is-on")} aria-hidden />
          <motion.div
            className={cn(
              "header-bar relative flex items-center justify-between gap-8 px-6 py-4 lg:px-10",
              solid && "is-scrolled",
            )}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: ease.craft }}
          >
          <Link
            href={logoHref}
            data-cursor="link"
            onClick={openPage}
            className="inline-flex min-h-11 shrink-0 items-center"
            aria-label="Scelerity — Home"
          >
            <Logo className="wordmark-lockup--header" />
          </Link>

          <nav className="hidden items-center gap-6 xl:flex" aria-label="Primary">
            {links.map((link, i) => {
              const active = isCurrent(link.href, pathname);
              return (
                <motion.div
                  key={link.href + link.label}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.16 + i * 0.06,
                    duration: 0.45,
                    ease: ease.craft,
                  }}
                >
                  <Link
                    href={link.href}
                    data-cursor="link"
                    aria-current={active ? "page" : undefined}
                    className={itemClass(active)}
                    onClick={openPage}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              );
            })}
          </nav>

          <div className="flex items-center gap-6">
            <div className="hidden items-center gap-5 xl:flex">
              <LanguageToggle />
              <ThemeToggle />
              <Button href={contactHref} onClick={openPage}>
                {t.nav.contact}
              </Button>
            </div>

            <button
              ref={toggleRef}
              type="button"
              data-cursor="link"
              className="header-menu inline-flex h-11 w-11 items-center justify-center rounded-full bg-transparent transition-[background-color,opacity,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.98] xl:hidden"
              aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
            </button>
          </div>
          </motion.div>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <>
            <motion.button
              type="button"
              aria-label={t.nav.closeMenu}
              className="nav-scrim"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: ease.craft }}
              onClick={close}
            />
            <motion.div
              id="mobile-nav"
              ref={panelRef}
              tabIndex={-1}
              role="dialog"
              aria-modal="true"
              aria-label={t.nav.menu}
              initial={{ opacity: 0, x: "-50%", y: "calc(-50% + 4px)" }}
              animate={{ opacity: 1, x: "-50%", y: "-50%" }}
              exit={{ opacity: 0, x: "-50%", y: "calc(-50% + 4px)" }}
              transition={{ duration: 0.4, ease: ease.craft }}
              className="nav-dialog xl:hidden"
            >
              <nav aria-label="Mobile">
                <ul className="flex flex-col gap-2">
                  {links.map((link, i) => {
                    const active = isCurrent(link.href, pathname);
                    return (
                      <motion.li
                        key={link.href + link.label}
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: Math.min(0.16, i * 0.024),
                          duration: 0.4,
                          ease: ease.craft,
                        }}
                      >
                        <Link
                          href={link.href}
                          data-cursor="link"
                          onClick={openPage}
                          aria-current={active ? "page" : undefined}
                          data-active={active ? "true" : undefined}
                          className="nav-overlay__link"
                        >
                          {link.label}
                        </Link>
                      </motion.li>
                    );
                  })}
                  <motion.li
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.12, duration: 0.4, ease: ease.craft }}
                  >
                    <Link
                      href={contactHref}
                      data-cursor="link"
                      onClick={openPage}
                      className="nav-overlay__link"
                    >
                      {t.nav.contact}
                    </Link>
                  </motion.li>
                </ul>
              </nav>

              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <LanguageToggle />
                  <ThemeToggle />
                </div>
                <a
                  href={`mailto:${t.cta.email}`}
                  data-cursor="link"
                  className="inline-flex min-h-11 items-center text-[14px] leading-[1.45] tracking-[-0.01em] text-[var(--text-2)] transition-colors duration-[140ms] hover:text-[var(--text)]"
                >
                  {t.cta.email}
                </a>
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}

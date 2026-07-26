"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/brand/Logo";
import { cn } from "@/lib/cn";
import { ease } from "@/lib/easings";

export function Header() {
  const { t } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = [
    { href: "#work", label: t.nav.work },
    { href: "#about", label: t.nav.about },
    { href: "#services", label: t.nav.services },
  ];

  return (
    <motion.header
      initial={{ y: -28, opacity: 0, filter: "blur(8px)" }}
      animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.85, ease: ease.outExpo }}
      className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4"
    >
      <div
        className={cn(
          "relative mx-auto flex h-14 max-w-[1100px] items-center justify-between gap-3 rounded-[22px] px-4 transition-[background-color,border-color,box-shadow] duration-500 sm:px-5",
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

        <a
          href="#top"
          data-cursor="link"
          className="relative z-10 inline-flex items-center py-1 pr-2 text-[var(--fg)]"
          aria-label="Scelerity — Home"
        >
          <Logo className="text-[1.05rem] sm:text-[1.125rem]" />
        </a>

        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 md:flex"
          aria-label="Primary"
        >
          {links.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              data-cursor="link"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.25 + i * 0.06,
                duration: 0.55,
                ease: ease.outExpo,
              }}
              className="text-[0.8rem] text-[var(--fg-muted)] transition-colors duration-300 hover:text-[var(--fg)]"
            >
              {link.label}
            </motion.a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageToggle className="hidden sm:inline-flex" />
          <ThemeToggle />
          <Button
            href="#contact"
            size="md"
            className="hidden h-9 px-4 text-xs sm:inline-flex"
          >
            {t.nav.contact}
          </Button>
          <button
            type="button"
            data-cursor="link"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--glass-border)] text-[var(--fg)] md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="glass-panel mx-auto mt-2 max-w-[1100px] rounded-[22px] p-5 md:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-cursor="link"
                onClick={() => setOpen(false)}
                className="py-3 font-display text-xl tracking-tight"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3 flex items-center gap-3">
              <LanguageToggle />
              <Button href="#contact" onClick={() => setOpen(false)}>
                {t.nav.contact}
              </Button>
            </div>
          </nav>
        </div>
      ) : null}
    </motion.header>
  );
}

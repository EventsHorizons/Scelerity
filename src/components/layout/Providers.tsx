"use client";

import { useEffect } from "react";
import { ThemeProvider } from "@/context/ThemeContext";
import { LocaleProvider } from "@/context/LocaleContext";
import { ClientEnhancements } from "@/components/layout/ClientEnhancements";

function CtaPress() {
  useEffect(() => {
    let current: HTMLElement | null = null;
    let releaseTimer = 0;

    const match = (target: EventTarget | null) => {
      if (!(target instanceof Element)) return null;
      const el = target.closest(".btn");
      if (!(el instanceof HTMLElement)) return null;
      if (el.classList.contains("btn-secondary") || el.classList.contains("btn-ghost")) return null;
      if (el.hasAttribute("disabled")) return null;
      return el;
    };

    const down = (event: PointerEvent) => {
      const el = match(event.target);
      if (!el) return;
      window.clearTimeout(releaseTimer);
      current = el;
      el.classList.add("is-pressed");
    };

    const up = () => {
      const el = current;
      if (!el) return;
      current = null;
      releaseTimer = window.setTimeout(() => {
        el.classList.remove("is-pressed");
      }, 460);
    };

    document.addEventListener("pointerdown", down);
    document.addEventListener("pointerup", up);
    document.addEventListener("pointercancel", up);
    return () => {
      window.clearTimeout(releaseTimer);
      document.removeEventListener("pointerdown", down);
      document.removeEventListener("pointerup", up);
      document.removeEventListener("pointercancel", up);
    };
  }, []);

  return null;
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <LocaleProvider>
        <CtaPress />
        <ClientEnhancements>{children}</ClientEnhancements>
      </LocaleProvider>
    </ThemeProvider>
  );
}

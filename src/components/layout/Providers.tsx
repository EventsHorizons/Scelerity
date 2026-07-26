"use client";

import { ThemeProvider } from "@/context/ThemeContext";
import { LocaleProvider } from "@/context/LocaleContext";
import { ClientEnhancements } from "@/components/layout/ClientEnhancements";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <LocaleProvider>
        <ClientEnhancements>{children}</ClientEnhancements>
      </LocaleProvider>
    </ThemeProvider>
  );
}

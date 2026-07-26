"use client";

import { ThemeProvider } from "@/context/ThemeContext";
import { LocaleProvider } from "@/context/LocaleContext";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { CustomCursor } from "@/components/motion/CustomCursor";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <LocaleProvider>
        <SmoothScroll>
          <CustomCursor />
          {children}
        </SmoothScroll>
      </LocaleProvider>
    </ThemeProvider>
  );
}

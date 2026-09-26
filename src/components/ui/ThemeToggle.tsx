"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { cn } from "@/lib/cn";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      data-cursor="link"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={!isDark}
      className={cn(
        "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-transparent text-[var(--text-2)] transition-[background-color,color,opacity,transform] duration-[140ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[var(--fill)] hover:text-[var(--text)] active:scale-[0.96] active:opacity-85",
        className,
      )}
    >
      {isDark ? <Sun size={24} strokeWidth={1.5} /> : <Moon size={24} strokeWidth={1.5} />}
    </button>
  );
}

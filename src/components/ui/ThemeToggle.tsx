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
        "inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[var(--glass-border)] bg-[var(--glass)] text-[var(--fg-muted)] backdrop-blur-md transition-colors duration-400 hover:text-[var(--fg)] active:text-[var(--fg)]",
        className,
      )}
    >
      {isDark ? <Sun size={18} strokeWidth={1.75} /> : <Moon size={18} strokeWidth={1.75} />}
    </button>
  );
}

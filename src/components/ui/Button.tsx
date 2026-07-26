"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { forwardRef, type ReactNode } from "react";
import { cn } from "@/lib/cn";
import { ease } from "@/lib/easings";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

type ButtonProps = Omit<HTMLMotionProps<"a">, "children"> & {
  variant?: Variant;
  size?: Size;
  href?: string;
  /** Stretch to the full width of the parent (mobile CTAs, forms) */
  block?: boolean;
  children?: ReactNode;
};

const variants: Record<Variant, string> = {
  primary: "btn-gradient border-transparent",
  secondary:
    "btn-secondary border border-[var(--glass-border)] bg-transparent text-[var(--fg)]",
  ghost:
    "bg-transparent text-[var(--fg-muted)] border border-transparent hover:text-[var(--fg)]",
};

/* Every size clears the 48px minimum touch target. */
const sizes: Record<Size, string> = {
  sm: "min-h-12 px-5 text-[0.8125rem]",
  md: "min-h-12 px-6 text-[0.875rem]",
  lg: "min-h-[3.25rem] px-7 text-[0.9375rem]",
};

export const Button = forwardRef<HTMLAnchorElement, ButtonProps>(
  function Button(
    {
      className,
      variant = "primary",
      size = "md",
      block = false,
      children,
      href = "#contact",
      ...props
    },
    ref,
  ) {
    return (
      <motion.a
        ref={ref}
        href={href}
        data-cursor="cta"
        whileHover={{ y: -2, scale: 1.012 }}
        whileTap={{ scale: 0.96, y: 0 }}
        transition={{ duration: 0.3, ease: ease.snap }}
        className={cn(
          "group/btn relative inline-flex items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-full text-center font-medium tracking-tight [touch-action:manipulation]",
          variants[variant],
          sizes[size],
          block ? "w-full" : "max-w-full",
          className,
        )}
        {...props}
      >
        {variant === "primary" ? <span className="btn-sweep" aria-hidden /> : null}
        {variant === "secondary" ? (
          <span className="btn-secondary-fill" aria-hidden />
        ) : null}
        <span className="relative z-10 inline-flex items-center gap-2">
          {children}
        </span>
      </motion.a>
    );
  },
);

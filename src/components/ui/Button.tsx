"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { forwardRef, type ReactNode } from "react";
import { cn } from "@/lib/cn";
import { ease } from "@/lib/easings";
import { useReducedMotion } from "@/hooks/useReducedMotion";

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
  primary: "btn",
  secondary: "btn btn-secondary",
  ghost: "btn btn-ghost",
};

const sizes: Record<Size, string> = {
  sm: "min-h-12 px-7 py-3.5 text-base font-medium",
  md: "min-h-12 px-8 py-4 text-base font-medium",
  lg: "min-h-14 px-10 py-4 text-base font-medium",
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
    const reduced = useReducedMotion();

    return (
      <motion.a
        ref={ref}
        href={href}
        data-cursor={variant === "primary" ? "cta" : "link"}
        whileHover={reduced || variant === "primary" ? undefined : { y: -1 }}
        whileTap={reduced || variant === "primary" ? undefined : { scale: 0.985 }}
        transition={{ duration: 0.45, ease: ease.craft }}
        className={cn(
          "whitespace-nowrap text-center [touch-action:manipulation]",
          variants[variant],
          sizes[size],
          block ? "w-full" : "max-w-full",
          className,
        )}
        {...props}
      >
        {children}
      </motion.a>
    );
  },
);

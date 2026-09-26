"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { ease } from "@/lib/easings";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/cn";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

/** Short fade-up. Quick settle, no bounce. */
export function Reveal({ children, className, delay = 0 }: Props) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      initial={reduced ? false : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: reduced ? 0 : 0.7, delay, ease: ease.craft }}
    >
      {children}
    </motion.div>
  );
}

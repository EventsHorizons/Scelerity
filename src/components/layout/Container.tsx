import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Size = "narrow" | "content" | "wide" | "full";

type Tag = ElementType<{
  className?: string;
  id?: string;
  children?: ReactNode;
}>;

type Props = {
  children: ReactNode;
  /** narrow 768 · content 1200 · wide 1280 · full 1440 */
  size?: Size;
  as?: Tag;
  className?: string;
  id?: string;
};

/**
 * The single source of horizontal rhythm.
 * Lateral padding scales 20px (mobile) → 32–48px (tablet) → 64–96px (desktop),
 * and the shell is capped so content never exceeds 1440px or touches an edge.
 */
export function Container({
  children,
  size = "content",
  as: Element = "div",
  className,
  id,
}: Props) {
  return (
    <Element
      id={id}
      className={cn("container-shell", `container-shell--${size}`, className)}
    >
      {children}
    </Element>
  );
}

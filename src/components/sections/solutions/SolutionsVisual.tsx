"use client";

import Image from "next/image";
import { useLocale } from "@/context/LocaleContext";
import { cn } from "@/lib/cn";
import type { SolutionsVisualDef } from "@/data/solutions-visuals";
import { SolutionsMotionReel } from "@/components/sections/solutions/SolutionsMotionReel";

type Props = {
  visual: SolutionsVisualDef;
  className?: string;
  aspect?: string;
  priority?: boolean;
  sizes?: string;
};

export function SolutionsVisual({
  visual,
  className,
  aspect = "aspect-[4/3]",
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 640px",
}: Props) {
  const { locale } = useLocale();
  const alt = visual.alt[locale === "en" ? "en" : "es"];

  if (visual.type === "reel" && visual.reel) {
    return (
      <div
        className={cn(
          "relative w-full overflow-hidden bg-[var(--card)]",
          aspect,
          className,
        )}
      >
        <SolutionsMotionReel
          variant={visual.reel}
          label={alt}
          className="absolute inset-0 h-full w-full"
        />
      </div>
    );
  }

  if (!visual.src) return null;

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-[var(--radius-lg)] bg-[var(--card)]",
        aspect,
        className,
      )}
    >
      <Image
        src={visual.src}
        alt={alt}
        fill
        priority={priority}
        loading={priority ? undefined : "lazy"}
        sizes={sizes}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(0,0,0,0.18)_100%)]"
        aria-hidden
      />
    </div>
  );
}

"use client";

import { Play } from "lucide-react";
import { cn } from "@/lib/cn";

type Props = {
  media?: "image" | "video";
  tone?: number;
  className?: string;
  aspect?: string;
};

const tones = [
  "from-[#1a1d2e] via-[#141722] to-[#0f1118]",
  "from-[#152028] via-[#12181f] to-[#0e1218]",
  "from-[#1a1826] via-[#15131e] to-[#100f16]",
  "from-[#141a24] via-[#111820] to-[#0d1117]",
];

/** Premium gradient mockup panel — same visual language as Work / Featured. */
export function SolutionsVisual({
  media = "image",
  tone = 0,
  className,
  aspect = "aspect-[4/3]",
}: Props) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-[var(--radius-lg)] bg-gradient-to-br",
        tones[tone % tones.length],
        aspect,
        className,
      )}
      aria-hidden
    >
      <div className="absolute inset-0 opacity-55 transition-transform duration-700 ease-out group-hover:scale-[1.02]">
        <div className="absolute inset-[10%] rounded-[14px] border border-white/10 sm:rounded-[18px]" />
        <div className="absolute left-[14%] top-[18%] h-[40%] w-[36%] rounded-[10px] border border-white/12 bg-white/[0.04] sm:rounded-[14px]" />
        <div className="absolute bottom-[14%] right-[10%] h-[28%] w-[38%] rounded-[10px] border border-[#67f0c1]/25 bg-[#67f0c1]/[0.07] sm:rounded-[14px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(92,141,255,0.22),transparent_50%)]" />
      </div>

      {media === "video" ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-black/30 text-white backdrop-blur-sm transition-transform duration-500 group-hover:scale-105">
            <Play size={16} fill="currentColor" />
          </span>
        </div>
      ) : null}
    </div>
  );
}

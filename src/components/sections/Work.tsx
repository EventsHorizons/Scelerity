"use client";

import { Play } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";
import { Section } from "@/components/layout/Section";
import { KineticCard } from "@/components/motion/KineticCard";
import { cn } from "@/lib/cn";

const tones = [
  "from-[#1a1d2e] via-[#141722] to-[#0f1118]",
  "from-[#152028] via-[#12181f] to-[#0e1218]",
  "from-[#1a1826] via-[#15131e] to-[#100f16]",
];

export function Work() {
  const { t } = useLocale();

  return (
    <Section id="work">
      <div className="section-pad section-y-lg mx-auto max-w-[1200px]">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-8">
          <p className="chapter-label lg:col-span-3">{t.work.label}</p>
          <h2 className="text-balance font-display text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.035em] lg:col-span-9">
            {t.work.headline}
          </h2>
        </div>

        <div className="mt-16 grid gap-6 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {t.work.projects.map((project, index) => (
            <KineticCard
              key={project.title}
              lean={4}
              className="overflow-hidden rounded-[22px] border border-[var(--glass-border)] bg-[var(--card)]"
            >
              <article data-cursor="media" className="group">
                <div
                  className={cn(
                    "relative aspect-[4/3] overflow-hidden bg-gradient-to-br",
                    tones[index % tones.length],
                  )}
                >
                  <div className="absolute inset-0 opacity-55 transition-transform duration-700 ease-out group-hover:scale-[1.03]">
                    <div className="absolute inset-[12%] rounded-[14px] border border-white/10" />
                    <div className="absolute left-[14%] top-[18%] h-[40%] w-[36%] rounded-[10px] border border-white/12 bg-white/[0.04]" />
                    <div className="absolute bottom-[16%] right-[10%] h-[28%] w-[38%] rounded-[10px] border border-[#67f0c1]/25 bg-[#67f0c1]/[0.07]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(92,141,255,0.22),transparent_50%)]" />
                  </div>

                  {project.media === "video" ? (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-black/30 text-white backdrop-blur-sm transition-transform duration-500 group-hover:scale-105">
                        <Play size={14} fill="currentColor" />
                      </span>
                    </div>
                  ) : null}

                  <div className="absolute inset-x-0 bottom-0 flex justify-between p-4 opacity-0 transition-opacity duration-400 group-hover:opacity-100">
                    <span className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-white/80">
                      {t.work.view}
                    </span>
                    <span className="font-mono text-[0.6rem] text-white/50">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                <div className="px-5 py-5">
                  <h3 className="font-display text-xl font-semibold tracking-[-0.03em] sm:text-2xl">
                    {project.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-[var(--fg-muted)]">
                    {project.category}
                  </p>
                </div>
              </article>
            </KineticCard>
          ))}
        </div>
      </div>
    </Section>
  );
}

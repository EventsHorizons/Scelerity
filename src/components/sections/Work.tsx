"use client";

import { Play } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
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
      <Container size="content" className="section-y-lg">
        <div className="section-head section-head--baseline">
          <p className="chapter-label">{t.work.label}</p>
          <h2 className="text-balance font-display text-h2 font-semibold">
            {t.work.headline}
          </h2>
        </div>

        {/* auto-fit: 1 column on phones, 2 on tablets, 3 from laptop up */}
        <div
          className="auto-grid mt-[var(--space-fluid-lg)] [--auto-grid-gap:var(--space-6)] [--auto-grid-min:17rem]"
        >
          {t.work.projects.map((project, index) => (
            <KineticCard
              key={project.title}
              lean={4}
              className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--glass-border)] bg-[var(--card)]"
            >
              <article data-cursor="media" className="group flex h-full flex-col">
                <div
                  className={cn(
                    "relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br",
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
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-black/30 text-white backdrop-blur-sm transition-transform duration-500 group-hover:scale-105">
                        <Play size={16} fill="currentColor" />
                      </span>
                    </div>
                  ) : null}

                  {/* Always readable on touch, revealed on hover for pointers */}
                  <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 p-4 opacity-100 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100">
                    <span className="font-mono text-micro uppercase tracking-[0.18em] text-white/90">
                      {t.work.view}
                    </span>
                    <span className="font-mono text-micro text-white/70">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col px-5 py-6">
                  <h3 className="font-display text-h4 font-semibold">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-small text-[var(--fg-muted)]">
                    {project.category}
                  </p>
                </div>
              </article>
            </KineticCard>
          ))}
        </div>
      </Container>
    </Section>
  );
}

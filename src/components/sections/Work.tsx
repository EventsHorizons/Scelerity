"use client";

import Image from "next/image";
import { useLocale } from "@/context/LocaleContext";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { KineticCard } from "@/components/motion/KineticCard";
import { Button } from "@/components/ui/Button";

export function Work() {
  const { t } = useLocale();

  return (
    <Section id="trabajo" cardTone="paper">
      <Container size="content" className="section-y-lg">
        <div className="section-head section-head--baseline">
          <p className="chapter-label">{t.work.label}</p>
          <h2 className="text-balance font-display text-h2 font-semibold">
            {t.work.headline}
          </h2>
        </div>

        <div className="auto-grid mt-24 [--auto-grid-gap:var(--space-10)] [--auto-grid-min:17rem] md:mt-32">
          {t.work.projects.map((project, index) => (
            <KineticCard
              key={project.title}
              lean={4}
              className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--glass-border)] bg-[var(--card)]"
            >
              <article data-cursor="media" className="group flex h-full flex-col">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[var(--surface)]">
                  <Image
                    src={project.cover}
                    alt={project.coverAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                    priority={index === 0}
                  />

                </div>

                <div className="flex flex-1 flex-col px-8 py-10 sm:px-10">
                  <h3 className="font-display text-h4 font-semibold leading-relaxed">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-small leading-relaxed text-[var(--fg-muted)]">
                    {project.category}
                  </p>
                  <p className="mt-6 text-body text-pretty leading-relaxed text-[var(--fg-muted)]">
                    {project.description}
                  </p>
                </div>
              </article>
            </KineticCard>
          ))}
        </div>

        <div className="mt-20 md:mt-28">
          <Button href="#contact">{t.work.cta}</Button>
        </div>
      </Container>
    </Section>
  );
}

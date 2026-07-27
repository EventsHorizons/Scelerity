"use client";

import { useLocale } from "@/context/LocaleContext";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { BlogCarousel } from "@/components/blog/BlogCarousel";
import { Button } from "@/components/ui/Button";
import type { BlogPostMeta } from "@/lib/blog/format";

type Props = {
  posts: BlogPostMeta[];
};

export function Insights({ posts }: Props) {
  const { t } = useLocale();
  const j = t.journal;

  if (!posts.length) return null;

  return (
    <Section id="insights" cardTone="light">
      <Container size="content" className="section-y-lg">
        <div className="section-head section-head--baseline">
          <p className="chapter-label">{j.label}</p>
          <div>
            <h2 className="text-balance font-display text-h2 font-semibold">
              {j.headline}
            </h2>
            <p className="mt-[var(--space-4)] max-w-[42ch] text-lead text-pretty text-[var(--fg-muted)]">
              {j.sub}
            </p>
          </div>
        </div>

        <div className="mt-[var(--space-fluid-lg)]">
          <BlogCarousel
            posts={posts}
            readLabel={j.readArticle}
            prevLabel={j.prev}
            nextLabel={j.next}
          />
        </div>

        <div className="mt-[var(--space-10)] flex justify-center sm:justify-start">
          <Button href="/blog/" variant="secondary" size="lg">
            {j.viewAll}
          </Button>
        </div>
      </Container>
    </Section>
  );
}

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  categoryLabel,
  formatPostDate,
  type BlogPostMeta,
} from "@/lib/blog/format";

type Props = {
  prev: BlogPostMeta | null;
  next: BlogPostMeta | null;
  locale?: "es" | "en";
  labels?: { prev: string; next: string };
};

export function ArticleNav({
  prev,
  next,
  locale = "es",
  labels = { prev: "Artículo anterior", next: "Artículo siguiente" },
}: Props) {
  if (!prev && !next) return null;

  return (
    <nav
      aria-label="Navegación entre artículos"
      className="mt-[var(--space-fluid-xl)] grid gap-4 border-t border-[var(--border)] pt-[var(--space-fluid-md)] md:grid-cols-2"
    >
      {prev ? (
        <Link
          href={`/blog/${prev.slug}/`}
          data-cursor="link"
          className="group flex gap-4 rounded-[var(--radius-md)] border border-[var(--border)] p-4 transition-colors duration-300 hover:border-[var(--border-strong)]"
        >
          <div className="relative hidden h-20 w-28 shrink-0 overflow-hidden rounded-xl sm:block">
            <Image
              src={prev.cover}
              alt=""
              fill
              className="object-cover"
              sizes="112px"
            />
          </div>
          <div className="min-w-0">
            <p className="inline-flex items-center gap-2 font-mono text-micro uppercase tracking-[0.16em] text-[var(--fg-subtle)]">
              <ArrowLeft size={12} />
              {labels.prev}
            </p>
            <p className="mt-2 font-display text-h4 font-semibold text-balance transition-colors group-hover:text-[var(--fg)]">
              {prev.title}
            </p>
            <p className="mt-1 text-small text-[var(--fg-muted)]">
              {categoryLabel(prev.category, locale)} ·{" "}
              {formatPostDate(prev.publishedAt, locale)}
            </p>
          </div>
        </Link>
      ) : (
        <div />
      )}

      {next ? (
        <Link
          href={`/blog/${next.slug}/`}
          data-cursor="link"
          className="group flex gap-4 rounded-[var(--radius-md)] border border-[var(--border)] p-4 text-right transition-colors duration-300 hover:border-[var(--border-strong)] md:ml-auto md:flex-row-reverse"
        >
          <div className="relative hidden h-20 w-28 shrink-0 overflow-hidden rounded-xl sm:block">
            <Image
              src={next.cover}
              alt=""
              fill
              className="object-cover"
              sizes="112px"
            />
          </div>
          <div className="min-w-0">
            <p className="inline-flex items-center justify-end gap-2 font-mono text-micro uppercase tracking-[0.16em] text-[var(--fg-subtle)]">
              {labels.next}
              <ArrowRight size={12} />
            </p>
            <p className="mt-2 font-display text-h4 font-semibold text-balance transition-colors group-hover:text-[var(--fg)]">
              {next.title}
            </p>
            <p className="mt-1 text-small text-[var(--fg-muted)]">
              {categoryLabel(next.category, locale)} ·{" "}
              {formatPostDate(next.publishedAt, locale)}
            </p>
          </div>
        </Link>
      ) : null}
    </nav>
  );
}

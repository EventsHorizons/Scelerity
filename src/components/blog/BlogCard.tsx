"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { categoryLabel, formatPostDate, type BlogPostMeta } from "@/lib/blog/format";
import { ease } from "@/lib/easings";

type Props = {
  post: BlogPostMeta;
  locale?: "es" | "en";
  readLabel?: string;
  className?: string;
  priority?: boolean;
};

export function BlogCard({
  post,
  locale = "es",
  readLabel = "Leer artículo",
  className,
  priority = false,
}: Props) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.45, ease: ease.outExpo }}
      className={cn("group h-full", className)}
    >
      <Link
        href={`/blog/${post.slug}/`}
        data-cursor="media"
        className="flex h-full flex-col overflow-hidden rounded-[var(--radius-lg)] border border-[var(--glass-border)] bg-[var(--card)] transition-[box-shadow,border-color] duration-500 hover:border-[var(--border-strong)] hover:shadow-[0_24px_60px_-28px_rgba(0,0,0,0.45)]"
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={post.cover}
            alt={post.coverAlt}
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
        </div>

        <div className="flex flex-1 flex-col px-5 py-6 sm:px-6">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-micro uppercase tracking-[0.16em] text-[var(--fg-subtle)]">
            <span>{categoryLabel(post.category, locale)}</span>
            <span aria-hidden>·</span>
            <time dateTime={post.publishedAt}>
              {formatPostDate(post.publishedAt, locale)}
            </time>
            <span aria-hidden>·</span>
            <span>{post.readingTime}</span>
          </div>

          <h3 className="mt-4 font-display text-h4 font-semibold text-balance transition-colors duration-300 group-hover:text-[var(--fg)]">
            {post.title}
          </h3>

          <p className="mt-3 line-clamp-2 text-small text-pretty text-[var(--fg-muted)]">
            {post.excerpt}
          </p>

          <span className="mt-auto inline-flex items-center gap-2 pt-6 text-small text-[var(--fg-muted)] transition-colors duration-300 group-hover:text-[var(--fg)]">
            {readLabel}
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </span>
        </div>
      </Link>
    </motion.article>
  );
}

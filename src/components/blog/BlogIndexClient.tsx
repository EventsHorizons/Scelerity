"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { BlogCard } from "@/components/blog/BlogCard";
import {
  BLOG_CATEGORIES,
  categoryLabel,
  type BlogCategoryId,
  type BlogPostMeta,
} from "@/lib/blog/format";
import { cn } from "@/lib/cn";

type Labels = {
  searchPlaceholder: string;
  all: string;
  sortNewest: string;
  sortOldest: string;
  empty: string;
  readLabel: string;
  results: string;
};

type Props = {
  posts: BlogPostMeta[];
  labels: Labels;
  locale?: "es" | "en";
};

export function BlogIndexClient({ posts, labels, locale = "es" }: Props) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<BlogCategoryId | "all">("all");
  const [sort, setSort] = useState<"newest" | "oldest">("newest");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = posts.filter((p) => {
      if (category !== "all" && p.category !== category) return false;
      if (!q) return true;
      const hay = [
        p.title,
        p.excerpt,
        p.description,
        categoryLabel(p.category, locale),
        ...p.tags,
      ]
        .join(" ")
        .toLowerCase();
      return hay.includes(q);
    });

    list = [...list].sort((a, b) => {
      const diff =
        new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime();
      return sort === "newest" ? -diff : diff;
    });

    return list;
  }, [posts, query, category, sort, locale]);

  return (
    <div>
      <div className="flex flex-col gap-[var(--space-6)] lg:flex-row lg:items-center lg:justify-between">
        <label className="relative block w-full max-w-xl">
          <span className="sr-only">{labels.searchPlaceholder}</span>
          <Search
            size={18}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[var(--fg-subtle)]"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={labels.searchPlaceholder}
            className="field !min-h-12 !rounded-full !border !border-[var(--border)] !bg-[var(--card)] !px-12 !py-3"
          />
        </label>

        <div className="flex flex-wrap items-center gap-3">
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as "newest" | "oldest")}
            className="min-h-12 rounded-full border border-[var(--border)] bg-[var(--card)] px-4 text-small text-[var(--fg)]"
            aria-label={labels.sortNewest}
          >
            <option value="newest">{labels.sortNewest}</option>
            <option value="oldest">{labels.sortOldest}</option>
          </select>
        </div>
      </div>

      <div
        className="mt-[var(--space-8)] flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        role="tablist"
        aria-label="Categorías"
      >
        <FilterChip
          active={category === "all"}
          onClick={() => setCategory("all")}
          label={labels.all}
        />
        {BLOG_CATEGORIES.map((c) => (
          <FilterChip
            key={c.id}
            active={category === c.id}
            onClick={() => setCategory(c.id)}
            label={c.label[locale]}
          />
        ))}
      </div>

      <p className="mt-[var(--space-6)] font-mono text-micro uppercase tracking-[0.16em] text-[var(--fg-subtle)]">
        {labels.results.replace("{n}", String(filtered.length))}
      </p>

      {filtered.length === 0 ? (
        <p className="mt-[var(--space-fluid-lg)] text-lead text-[var(--fg-muted)]">
          {labels.empty}
        </p>
      ) : (
        <div className="mt-[var(--space-10)] grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {filtered.map((post, i) => (
            <BlogCard
              key={post.slug}
              post={post}
              locale={locale}
              readLabel={labels.readLabel}
              priority={i < 3}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={cn(
        "shrink-0 rounded-full border px-4 py-2.5 text-small transition-colors duration-300",
        active
          ? "border-[var(--fg)] bg-[var(--fg)] text-[var(--bg)]"
          : "border-[var(--border)] text-[var(--fg-muted)] hover:text-[var(--fg)]",
      )}
    >
      {label}
    </button>
  );
}

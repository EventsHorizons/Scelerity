"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BlogCard } from "@/components/blog/BlogCard";
import type { BlogPostMeta } from "@/lib/blog/format";
import { cn } from "@/lib/cn";

type Props = {
  posts: BlogPostMeta[];
  readLabel?: string;
  prevLabel?: string;
  nextLabel?: string;
};

export function BlogCarousel({
  posts,
  readLabel = "Leer artículo",
  prevLabel = "Anterior",
  nextLabel = "Siguiente",
}: Props) {
  const scroller = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const update = useCallback(() => {
    const el = scroller.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft < max - 8);
  }, []);

  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update, posts.length]);

  const scrollByCard = (dir: -1 | 1) => {
    const el = scroller.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-carousel-item]");
    const amount = card ? card.offsetWidth + 24 : el.clientWidth * 0.85;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      scrollByCard(-1);
    }
    if (e.key === "ArrowRight") {
      e.preventDefault();
      scrollByCard(1);
    }
  };

  return (
    <div className="relative" onKeyDown={onKeyDown}>
      <div className="mb-[var(--space-6)] flex items-center justify-end gap-2">
        <button
          type="button"
          aria-label={prevLabel}
          disabled={!canPrev}
          onClick={() => scrollByCard(-1)}
          className={cn(
            "inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--glass-border)] text-[var(--fg)] transition-opacity duration-300",
            !canPrev && "opacity-35",
          )}
        >
          <ChevronLeft size={20} />
        </button>
        <button
          type="button"
          aria-label={nextLabel}
          disabled={!canNext}
          onClick={() => scrollByCard(1)}
          className={cn(
            "inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--glass-border)] text-[var(--fg)] transition-opacity duration-300",
            !canNext && "opacity-35",
          )}
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div
        ref={scroller}
        tabIndex={0}
        role="region"
        aria-label="Artículos recientes"
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] focus-visible:outline-none [&::-webkit-scrollbar]:hidden"
      >
        {posts.map((post, i) => (
          <div
            key={post.slug}
            data-carousel-item
            className="w-[min(100%,22rem)] shrink-0 snap-start sm:w-[min(48%,26rem)] lg:w-[calc((100%-3rem)/3)]"
          >
            <BlogCard
              post={post}
              readLabel={readLabel}
              priority={i < 3}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

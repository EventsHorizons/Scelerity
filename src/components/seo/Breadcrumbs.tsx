import Link from "next/link";
import type { BreadcrumbItem } from "@/lib/seo/schema";

type Props = {
  items: BreadcrumbItem[];
  className?: string;
};

export function Breadcrumbs({ items, className }: Props) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-small text-[var(--fg-muted)]">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.path} className="inline-flex items-center gap-2">
              {i > 0 ? (
                <span aria-hidden className="text-[var(--fg-subtle)]">
                  /
                </span>
              ) : null}
              {isLast ? (
                <span aria-current="page" className="text-[var(--fg)]">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.path}
                  className="transition-colors hover:text-[var(--fg)]"
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

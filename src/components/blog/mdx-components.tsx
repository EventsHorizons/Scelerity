import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

type Kids = { children?: ReactNode };

export const blogMdxComponents = {
  h2: ({ children }: Kids) => (
    <h2 className="mt-[var(--space-fluid-lg)] scroll-mt-28 font-display text-h2 font-semibold tracking-tight">
      {children}
    </h2>
  ),
  h3: ({ children }: Kids) => (
    <h3 className="mt-[var(--space-fluid-md)] scroll-mt-28 font-display text-h3 font-semibold tracking-tight">
      {children}
    </h3>
  ),
  p: ({ children }: Kids) => (
    <p className="mt-[var(--space-6)] text-lead leading-relaxed text-pretty text-[var(--fg-muted)]">
      {children}
    </p>
  ),
  ul: ({ children }: Kids) => (
    <ul className="mt-[var(--space-6)] list-disc space-y-4 pl-5 text-lead leading-relaxed text-[var(--fg-muted)] marker:text-[var(--fg-subtle)]">
      {children}
    </ul>
  ),
  ol: ({ children }: Kids) => (
    <ol className="mt-[var(--space-6)] list-decimal space-y-4 pl-5 text-lead leading-relaxed text-[var(--fg-muted)] marker:text-[var(--fg-subtle)]">
      {children}
    </ol>
  ),
  li: ({ children }: Kids) => (
    <li className="text-pretty pl-1">{children}</li>
  ),
  blockquote: ({ children }: Kids) => (
    <blockquote className="my-[var(--space-fluid-md)] border-l-2 border-[#5c8dff]/50 pl-[var(--space-6)] font-display text-h4 font-semibold text-[var(--fg)]">
      {children}
    </blockquote>
  ),
  a: ({ href, children }: Kids & { href?: string }) => {
    const external = href?.startsWith("http");
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--fg)] underline decoration-[var(--border-strong)] underline-offset-4 transition-colors hover:decoration-[#5c8dff]"
        >
          {children}
        </a>
      );
    }
    return (
      <Link
        href={href || "#"}
        className="text-[var(--fg)] underline decoration-[var(--border-strong)] underline-offset-4 transition-colors hover:decoration-[#5c8dff]"
      >
        {children}
      </Link>
    );
  },
  img: ({ src, alt }: { src?: string; alt?: string }) => {
    if (!src) return null;
    return (
      <figure className="my-[var(--space-fluid-md)] overflow-hidden rounded-[var(--radius-lg)] border border-[var(--glass-border)]">
        <Image
          src={src}
          alt={alt || ""}
          width={1200}
          height={675}
          className="h-auto w-full object-cover"
          sizes="(max-width: 768px) 100vw, 720px"
        />
        {alt ? (
          <figcaption className="border-t border-[var(--border)] px-4 py-3 font-mono text-micro uppercase tracking-[0.14em] text-[var(--fg-subtle)]">
            {alt}
          </figcaption>
        ) : null}
      </figure>
    );
  },
  hr: () => <hr className="my-[var(--space-fluid-lg)] border-[var(--border)]" />,
  strong: ({ children }: Kids) => (
    <strong className="font-medium text-[var(--fg)]">{children}</strong>
  ),
  code: ({ children, className }: Kids & { className?: string }) => {
    const isBlock = className?.includes("language-");
    if (isBlock) {
      return <code className={`font-mono text-small ${className || ""}`}>{children}</code>;
    }
    return (
      <code className="rounded-md border border-[var(--border)] bg-[var(--card)] px-1.5 py-0.5 font-mono text-small text-[var(--fg)]">
        {children}
      </code>
    );
  },
  pre: ({ children }: Kids) => (
    <pre className="my-[var(--space-fluid-md)] overflow-x-auto rounded-[var(--radius-md)] border border-[var(--glass-border)] bg-[var(--card)] p-[var(--space-5)] font-mono text-small leading-relaxed">
      {children}
    </pre>
  ),
};

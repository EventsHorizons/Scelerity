"use client";

import { useState } from "react";
import { Check, Link2 } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import { cn } from "@/lib/cn";

type Props = {
  url: string;
  title: string;
  className?: string;
  labels?: {
    share: string;
    copy: string;
    copied: string;
  };
};

function LinkedInGlyph({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8.25h4.52V24H.24V8.25zM8.34 8.25h4.33v2.14h.06c.6-1.14 2.08-2.34 4.28-2.34 4.58 0 5.42 3.01 5.42 6.93V24h-4.52v-7.75c0-1.85-.03-4.22-2.57-4.22-2.57 0-2.96 2-2.96 4.09V24H8.34V8.25z" />
    </svg>
  );
}

function FacebookGlyph({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M22.68 0H1.32A1.32 1.32 0 0 0 0 1.32v21.36A1.32 1.32 0 0 0 1.32 24h11.5v-9.29H9.69v-3.62h3.13V8.41c0-3.1 1.89-4.79 4.66-4.79 1.33 0 2.47.1 2.8.14v3.24h-1.92c-1.5 0-1.8.72-1.8 1.76v2.31h3.6l-.47 3.62h-3.13V24h6.12A1.32 1.32 0 0 0 24 22.68V1.32A1.32 1.32 0 0 0 22.68 0z" />
    </svg>
  );
}

function XGlyph({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.9 1.5h3.3l-7.2 8.23L24 22.5h-7.43l-5.82-7.6-6.66 7.6H.77l7.7-8.8L0 1.5h7.62l5.26 6.94L18.9 1.5zm-1.16 18.9h1.83L6.39 3.4H4.43l13.31 17z" />
    </svg>
  );
}

export function ArticleShare({
  url,
  title,
  className,
  labels = {
    share: "Compartir",
    copy: "Copiar enlace",
    copied: "Copiado",
  },
}: Props) {
  const [copied, setCopied] = useState(false);
  const encoded = encodeURIComponent(url);
  const text = encodeURIComponent(title);

  const items = [
    {
      label: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encoded}`,
      icon: LinkedInGlyph,
    },
    {
      label: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encoded}`,
      icon: FacebookGlyph,
    },
    {
      label: "X",
      href: `https://twitter.com/intent/tweet?url=${encoded}&text=${text}`,
      icon: XGlyph,
    },
    {
      label: "WhatsApp",
      href: `https://wa.me/?text=${text}%20${encoded}`,
      icon: WhatsAppIcon,
    },
  ] as const;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      /* ignore */
    }
  };

  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      <p className="font-mono text-micro uppercase tracking-[0.16em] text-[var(--fg-subtle)]">
        {labels.share}
      </p>
      <div className="flex flex-wrap items-center gap-2">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              data-cursor="link"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] text-[var(--fg-muted)] transition-colors duration-300 hover:text-[var(--fg)]"
            >
              <Icon size={16} />
            </a>
          );
        })}
        <button
          type="button"
          onClick={copy}
          aria-label={copied ? labels.copied : labels.copy}
          className="inline-flex h-11 items-center gap-2 rounded-full border border-[var(--border)] px-4 text-small text-[var(--fg-muted)] transition-colors duration-300 hover:text-[var(--fg)]"
        >
          {copied ? <Check size={16} /> : <Link2 size={16} />}
          {copied ? labels.copied : labels.copy}
        </button>
      </div>
    </div>
  );
}

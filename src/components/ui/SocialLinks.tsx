"use client";

import { SocialIcon, type SocialPlatform } from "@/components/ui/BrandIcons";
import { cn } from "@/lib/cn";

export type SocialLink = {
  platform: SocialPlatform;
  href: string;
  label: string;
};

type Props = {
  links: SocialLink[];
  className?: string;
};

export function SocialLinks({ links, className }: Props) {
  return (
    <ul
      className={cn(
        "flex flex-wrap items-center justify-center gap-5 md:justify-start md:gap-6",
        className,
      )}
    >
      {links.map((link) => (
        <li key={link.platform}>
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="link"
            aria-label={link.label}
            title={link.label}
            className="social-link tap-target inline-flex h-11 w-11 items-center justify-center text-[var(--fg-muted)] transition-[color,transform,opacity] duration-300 hover:scale-[1.08] hover:text-[#5c8dff] [touch-action:manipulation]"
          >
            <SocialIcon platform={link.platform} size={23} />
          </a>
        </li>
      ))}
    </ul>
  );
}

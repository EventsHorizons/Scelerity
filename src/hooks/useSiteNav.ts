"use client";

import { usePathname } from "next/navigation";
import { useLocale } from "@/context/LocaleContext";

/**
 * Cross-page nav helpers — home sections stay hash-based on `/`,
 * and become `/#…` from other routes so static export + basePath work via Link.
 */
export function useSiteNav() {
  const pathname = usePathname();
  const { t } = useLocale();
  const onHome = pathname === "/";

  const home = (hash: string) => (onHome ? `#${hash}` : `/#${hash}`);

  const links = [
    { href: "/soluciones/", label: t.nav.solutions, external: false as const },
    { href: "/blog/", label: t.nav.journal, external: false as const },
    { href: home("work"), label: t.nav.work, external: false as const },
    { href: home("about"), label: t.nav.about, external: false as const },
    { href: home("services"), label: t.nav.services, external: false as const },
  ];

  return {
    onHome,
    logoHref: onHome ? "#top" : "/",
    contactHref: home("contact"),
    links,
    home,
  };
}

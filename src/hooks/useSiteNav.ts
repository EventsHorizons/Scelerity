"use client";

import { usePathname } from "next/navigation";
import { useLocale } from "@/context/LocaleContext";

/**
 * Primary navigation points at the site's routes.
 * `home()` still builds a hash on `/` and `/#…` from any other page.
 */
export function useSiteNav() {
  const pathname = usePathname();
  const { t } = useLocale();
  const onHome = pathname === "/";

  const home = (hash: string) => (onHome ? `#${hash}` : `/#${hash}`);

  const links = [
    { href: "/servicios/", label: t.nav.servicesPage, external: false as const },
    { href: "/blog/", label: t.nav.journal, external: false as const },
    { href: "/nosotros/", label: t.nav.company, external: false as const },
  ];

  return {
    onHome,
    logoHref: onHome ? "#top" : "/",
    contactHref: "/contacto/",
    links,
    home,
  };
}

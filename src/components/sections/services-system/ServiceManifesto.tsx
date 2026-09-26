import type { Copy } from "./content";
import { tx } from "./content";
import type { Locale } from "@/data/content";
import styles from "./services.module.css";

export function ServiceManifesto({ locale, copy }: { locale: Locale; copy: Copy }) {
  return <p className={styles.manifesto}>{tx(locale, copy)}</p>;
}

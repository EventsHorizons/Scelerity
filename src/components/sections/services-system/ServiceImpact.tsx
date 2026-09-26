import type { Copy } from "./content";
import { tx } from "./content";
import type { Locale } from "@/data/content";
import styles from "./services.module.css";

export function ServiceImpact({
  locale,
  label,
  items,
}: {
  locale: Locale;
  label: Copy;
  items: Copy[];
}) {
  return (
    <div>
      <p className="chapter-label">{tx(locale, label)}</p>
      <ul className={`${styles.impact} mt-4`}>
        {items.map((item) => (
          <li key={item.es} className="text-body text-[var(--fg-muted)]">
            {tx(locale, item)}
          </li>
        ))}
      </ul>
    </div>
  );
}

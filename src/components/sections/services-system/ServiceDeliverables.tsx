import type { Copy } from "./content";
import { tx } from "./content";
import type { Locale } from "@/data/content";
import styles from "./services.module.css";

export function ServiceDeliverables({
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
      <ul className={`${styles.deliver} mt-4 text-small text-[var(--fg-muted)]`}>
        {items.map((item) => (
          <li key={item.es}>{tx(locale, item)}</li>
        ))}
      </ul>
    </div>
  );
}

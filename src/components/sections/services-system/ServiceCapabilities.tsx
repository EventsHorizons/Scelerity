import type { CapabilityGroup, Copy } from "./content";
import { tx } from "./content";
import type { Locale } from "@/data/content";
import styles from "./services.module.css";

export function ServiceCapabilities({
  locale,
  label,
  groups,
}: {
  locale: Locale;
  label: Copy;
  groups: CapabilityGroup[];
}) {
  return (
    <div>
      <p className="chapter-label">{tx(locale, label)}</p>
      <div className={styles.caps}>
        {groups.map((group) => (
          <div key={group.title.es} className={styles.capGroup}>
            <h3 className={styles.capTitle}>{tx(locale, group.title)}</h3>
            <ul className={styles.capList}>
              {group.items.map((item) => (
                <li key={item.es} className="text-small text-[var(--fg-muted)]">
                  {tx(locale, item)}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

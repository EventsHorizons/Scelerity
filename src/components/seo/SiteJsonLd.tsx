import { siteGraph } from "@/lib/seo/schema";
import { JsonLd } from "./JsonLd";

/** Site-wide Organization + WebSite schema on every page. */
export function SiteJsonLd() {
  return <JsonLd data={siteGraph()} />;
}

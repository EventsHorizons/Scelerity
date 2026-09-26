import { JsonLd } from "@/components/seo/JsonLd";
import { siteGraph } from "@/lib/seo/schema";

export function HomeJsonLd() {
  return <JsonLd data={siteGraph()} />;
}

import { content } from "@/data/content";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqNode, siteGraph } from "@/lib/seo/schema";

/** Server-side FAQ schema for home — crawlers see Spanish default. */
export function HomeJsonLd() {
  const faq = content.es.faq.items;
  const data = siteGraph([faqNode(faq)]);

  return <JsonLd data={data} />;
}

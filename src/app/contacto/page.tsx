import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SkipLink } from "@/components/layout/SkipLink";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { ContactForm } from "@/components/ui/ContactForm";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { localBusinessNode, pageGraph } from "@/lib/seo/schema";
import { SEO_CONFIG } from "@/lib/seo/config";
import { content } from "@/data/content";

export const metadata: Metadata = buildPageMetadata({
  title: "Contacto — Scelerity",
  description:
    "Cuéntanos sobre el proyecto. Cultural & creative marketing, desde Bogotá.",
  path: "/contacto/",
});

export default function ContactoPage() {
  const cta = content.es.cta;
  const breadcrumbs = [
    { name: "Inicio", path: "/" },
    { name: "Contacto", path: "/contacto/" },
  ];

  return (
    <>
      <SkipLink />
      <Header />
      <JsonLd
        data={pageGraph(breadcrumbs, [
          localBusinessNode({
            city: SEO_CONFIG.address.addressLocality,
            region: SEO_CONFIG.address.addressRegion,
            description: SEO_CONFIG.description,
            path: "/contacto/",
          }),
        ])}
      />
      <main id="main" className="page-rhythm">
        <Section cardTone="paper">
          <Container size="content">
            <Breadcrumbs items={breadcrumbs} className="mb-16" />
            <h1 className="font-display text-h1 font-semibold">{cta.headline}</h1>
            <div className="mt-10 measure space-y-8">
              {cta.body.map((p) => (
                <p key={p} className="text-lead text-[var(--fg-muted)]">
                  {p}
                </p>
              ))}
            </div>
            <a
              href={`mailto:${cta.email}`}
              className="mt-10 inline-flex min-h-11 items-center text-body text-[var(--fg)]"
            >
              {cta.email}
            </a>
          </Container>
        </Section>

        <Section cardTone="light">
          <Container size="narrow">
            <ContactForm />
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}

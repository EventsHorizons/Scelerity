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
    "Contacta a Scelerity. Diseño web, desarrollo y marketing digital. Respuesta en menos de 24 horas.",
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
      <main id="main">
        <Section className="pt-[calc(var(--header-h)+var(--space-fluid-lg))]">
          <Container size="content">
            <Breadcrumbs items={breadcrumbs} className="mb-[var(--space-6)]" />
            <h1 className="font-display text-h1 font-bold text-balance">{cta.headline}</h1>
            {cta.body.map((p) => (
              <p key={p.slice(0, 24)} className="measure mt-[var(--space-6)] text-body-lg text-[var(--fg-muted)]">
                {p}
              </p>
            ))}
            <ul className="mt-[var(--space-8)] space-y-2 text-body text-[var(--fg-muted)]">
              <li>
                <a href={`mailto:${cta.email}`} className="hover:text-[var(--fg)]">
                  {cta.email}
                </a>
              </li>
              <li>{cta.location}</li>
              <li>{cta.response}</li>
            </ul>
          </Container>
        </Section>

        <Section cardTone="light">
          <Container size="narrow" className="section-y">
            <h2 className="font-display text-h2 font-semibold">Escríbenos</h2>
            <ContactForm />
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}

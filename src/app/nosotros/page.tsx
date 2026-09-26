import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SkipLink } from "@/components/layout/SkipLink";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { pageGraph } from "@/lib/seo/schema";
import { content } from "@/data/content";

export const metadata: Metadata = buildPageMetadata({
  title: "Nosotros — Scelerity",
  description:
    "Scelerity es una agencia de marketing cultural y creativo en Bogotá. Diseño, desarrollo y marketing para proyectos, industrias creativas y marcas.",
  path: "/nosotros/",
});

export default function NosotrosPage() {
  const about = content.es.about;
  const breadcrumbs = [
    { name: "Inicio", path: "/" },
    { name: "Nosotros", path: "/nosotros/" },
  ];

  return (
    <>
      <SkipLink />
      <Header />
      <JsonLd data={pageGraph(breadcrumbs)} />
      <main id="main" className="page-rhythm">
        <Section cardTone="paper">
          <Container size="content">
            <Breadcrumbs items={breadcrumbs} className="mb-16" />
            <p className="chapter-label">Cultural & creative marketing</p>
            <h1 className="mt-8 max-w-[18ch] text-balance font-display text-h1 font-semibold">
              Agencia de marketing cultural y creativo.
            </h1>
            <div className="mt-10 measure space-y-8">
              <p className="text-lead text-[var(--fg-muted)]">
                Scelerity hace diseño, desarrollo y marketing desde Bogotá. El criterio es cultural: un proyecto tiene que entrar en una conversación, no solo publicarse.
              </p>
              <p className="text-lead text-[var(--fg-muted)]">
                Trabajamos con proyectos culturales, industrias creativas y marcas que necesitan identidad, sitios, campañas y producto.
              </p>
            </div>
            <ul className="mt-16 grid gap-10 md:grid-cols-3">
              {about.principles.map((item) => (
                <li key={item.title}>
                  <h2 className="font-display text-h3 font-semibold">{item.title}</h2>
                  <p className="mt-4 text-body text-[var(--fg-muted)]">{item.text}</p>
                </li>
              ))}
            </ul>
            <div className="mt-16">
              <Button href="/contacto/">Iniciar conversación</Button>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}

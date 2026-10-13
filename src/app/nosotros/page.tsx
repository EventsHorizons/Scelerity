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
    "Cada proyecto tiene su propio punto de partida. Scelerity.",
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
            <p className="chapter-label">Bogotá</p>
            <h1 className="mt-8 max-w-[16ch] text-balance font-display text-h1 font-semibold">
              Cada proyecto tiene su propio punto de partida.
            </h1>
            <div className="mt-10 measure space-y-8">
              <p className="text-lead text-[var(--fg-muted)]">
                Algunos negocios necesitan encontrar su voz. Otros tienen un excelente producto, pero una web que los frena o un mensaje que no llega a su audiencia.
              </p>
              <p className="text-lead text-[var(--fg-muted)]">
                En Scelerity no aplicamos fórmulas genéricas. Combinamos diseño, código y marketing estratégico para resolver el problema exacto que tienes frente a ti.
              </p>
              <p className="text-lead text-[var(--fg-muted)]">
                Te damos claridad técnica y visual, invirtiendo solo en lo que realmente necesitas para avanzar.
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
              <Button href="/contacto/">Hablemos de tu proyecto</Button>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}

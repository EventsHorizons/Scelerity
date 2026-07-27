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
    "Conoce Scelerity: estudio de diseño y producto digital. Metodología, principios y equipo enfocado en velocidad con precisión.",
  path: "/nosotros/",
});

export default function NosotrosPage() {
  const about = content.es.about;
  const process = content.es.process;
  const breadcrumbs = [
    { name: "Inicio", path: "/" },
    { name: "Nosotros", path: "/nosotros/" },
  ];

  return (
    <>
      <SkipLink />
      <Header />
      <JsonLd data={pageGraph(breadcrumbs)} />
      <main id="main">
        <Section className="pt-[calc(var(--header-h)+var(--space-fluid-lg))]">
          <Container size="content">
            <Breadcrumbs items={breadcrumbs} className="mb-[var(--space-6)]" />
            <p className="chapter-label">{about.label}</p>
            <h1 className="mt-3 font-display text-h1 font-bold text-balance">{about.headline}</h1>
            {about.body.map((p) => (
              <p key={p.slice(0, 24)} className="measure mt-[var(--space-6)] text-body-lg text-[var(--fg-muted)]">
                {p}
              </p>
            ))}
          </Container>
        </Section>

        <Section cardTone="light">
          <Container size="content" className="section-y">
            <h2 className="font-display text-h2 font-semibold">Principios</h2>
            <ul className="mt-[var(--space-fluid-md)] grid gap-[var(--space-6)] sm:grid-cols-3">
              {about.principles.map((p) => (
                <li key={p.title} className="rounded-[var(--radius-lg)] border border-[var(--glass-border)] p-[var(--space-6)]">
                  <h3 className="font-display text-h4 font-semibold">{p.title}</h3>
                  <p className="mt-2 text-body text-[var(--fg-muted)]">{p.text}</p>
                </li>
              ))}
            </ul>
          </Container>
        </Section>

        <Section>
          <Container size="content" className="section-y">
            <h2 className="font-display text-h2 font-semibold">{process.headline}</h2>
            <ol className="mt-[var(--space-fluid-md)] space-y-[var(--space-6)]">
              {process.steps.map((s) => (
                <li key={s.number} className="flex gap-[var(--space-5)]">
                  <span className="font-mono text-micro text-[var(--fg-subtle)]">{s.number}</span>
                  <div>
                    <h3 className="font-display text-h4 font-semibold">{s.title}</h3>
                    <p className="mt-1 text-body text-[var(--fg-muted)]">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-[var(--space-fluid-lg)]">
              <Button href="/contacto/" size="lg">
                Trabajar con nosotros
              </Button>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}

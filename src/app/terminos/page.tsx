import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SkipLink } from "@/components/layout/SkipLink";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Términos y Condiciones — Scelerity",
  description: "Términos y condiciones de uso del sitio web y servicios de Scelerity.",
  path: "/terminos/",
});

export default function TerminosPage() {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="main">
        <Section className="pt-[calc(var(--header-h)+var(--space-fluid-lg))]">
          <Container size="narrow">
            <Breadcrumbs
              items={[
                { name: "Inicio", path: "/" },
                { name: "Términos", path: "/terminos/" },
              ]}
              className="mb-[var(--space-6)]"
            />
            <h1 className="font-display text-h1 font-bold">Términos y condiciones</h1>
            <p className="mt-2 text-small text-[var(--fg-subtle)]">Última actualización: julio 2026</p>

            <div className="prose-seo mt-[var(--space-fluid-lg)] space-y-[var(--space-6)] text-body text-[var(--fg-muted)]">
              <section>
                <h2 className="font-display text-h4 font-semibold text-[var(--fg)]">1. Uso del sitio</h2>
                <p className="mt-2">
                  Al acceder a scelerity.co aceptas estos términos. El contenido del sitio es informativo y no constituye
                  una oferta vinculante hasta acordar un contrato de servicios por escrito.
                </p>
              </section>
              <section>
                <h2 className="font-display text-h4 font-semibold text-[var(--fg)]">2. Propiedad intelectual</h2>
                <p className="mt-2">
                  El diseño, código, marca y contenidos de Scelerity están protegidos. No está permitida su reproducción
                  sin autorización expresa.
                </p>
              </section>
              <section>
                <h2 className="font-display text-h4 font-semibold text-[var(--fg)]">3. Servicios</h2>
                <p className="mt-2">
                  Cada proyecto se rige por propuesta, alcance y contrato específicos. Los plazos y entregables se
                  acuerdan caso a caso.
                </p>
              </section>
              <section>
                <h2 className="font-display text-h4 font-semibold text-[var(--fg)]">4. Contacto</h2>
                <p className="mt-2">
                  Para consultas sobre estos términos: hello@scelerity.co
                </p>
              </section>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}

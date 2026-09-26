import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SkipLink } from "@/components/layout/SkipLink";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Política de Privacidad — Scelerity",
  description: "Política de privacidad de Scelerity. Cómo recopilamos, usamos y protegemos tus datos.",
  path: "/privacidad/",
});

export default function PrivacidadPage() {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="main" className="page-rhythm">
        <Section className="pb-[var(--section-y)] pt-[calc(var(--header-h)+var(--space-fluid-lg))]">
          <Container size="narrow">
            <Breadcrumbs
              items={[
                { name: "Inicio", path: "/" },
                { name: "Privacidad", path: "/privacidad/" },
              ]}
              className="mb-[var(--space-6)]"
            />
            <h1 className="font-display text-h1 font-bold">Política de privacidad</h1>
            <p className="mt-2 text-small text-[var(--fg-subtle)]">Última actualización: julio 2026</p>

            <div className="prose-seo mt-[var(--space-fluid-lg)] space-y-[var(--space-6)] text-body text-[var(--fg-muted)]">
              <section>
                <h2 className="font-display text-h4 font-semibold text-[var(--fg)]">1. Responsable</h2>
                <p className="mt-2">
                  Scelerity («nosotros») es responsable del tratamiento de los datos personales recopilados a través de
                  scelerity.co y canales de contacto asociados. Email: hello@scelerity.co
                </p>
              </section>
              <section>
                <h2 className="font-display text-h4 font-semibold text-[var(--fg)]">2. Datos que recopilamos</h2>
                <p className="mt-2">
                  Nombre, email, teléfono, mensaje y origen de contacto cuando completas formularios. Datos de navegación
                  anónimos mediante cookies analíticas (GA4, Clarity) si aceptas su uso.
                </p>
              </section>
              <section>
                <h2 className="font-display text-h4 font-semibold text-[var(--fg)]">3. Finalidad</h2>
                <p className="mt-2">
                  Responder consultas comerciales, mejorar nuestros servicios y comunicaciones relacionadas con tu solicitud.
                  No vendemos datos personales a terceros.
                </p>
              </section>
              <section>
                <h2 className="font-display text-h4 font-semibold text-[var(--fg)]">4. Tus derechos</h2>
                <p className="mt-2">
                  Puedes solicitar acceso, rectificación o eliminación de tus datos escribiendo a hello@scelerity.co
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

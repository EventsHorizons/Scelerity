import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SkipLink } from "@/components/layout/SkipLink";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { type LocalPage } from "@/lib/seo/local";
import { getServiceBySlug } from "@/lib/seo/services";
import {
  faqNode,
  localBusinessNode,
  pageGraph,
  type BreadcrumbItem,
} from "@/lib/seo/schema";

type Props = {
  page: LocalPage;
};

export function LocalPageView({ page }: Props) {
  const breadcrumbs: BreadcrumbItem[] = [
    { name: "Inicio", path: "/" },
    { name: "Local", path: "/local/" },
    { name: page.city, path: `/local/${page.slug}/` },
  ];

  const services = page.services
    .map((slug) => getServiceBySlug(slug))
    .filter(Boolean);

  const schema = pageGraph(breadcrumbs, [
    localBusinessNode({
      city: page.city,
      region: page.region,
      description: page.metaDescription,
      path: `/local/${page.slug}/`,
    }),
    faqNode(page.faq),
  ]);

  return (
    <>
      <SkipLink />
      <Header />
      <JsonLd data={schema} />
      <main id="main" className="page-rhythm">
        <Section className="pt-[calc(var(--header-h)+var(--space-fluid-lg))]">
          <Container size="content">
            <Breadcrumbs items={breadcrumbs} className="mb-[var(--space-6)]" />
            <p className="chapter-label">{page.hero.eyebrow}</p>
            <h1 className="mt-3 max-w-[20ch] font-display text-h1 font-bold text-balance">
              {page.hero.headline}
            </h1>
            <p className="measure mt-[var(--space-6)] text-body-lg text-pretty text-[var(--fg-muted)]">
              {page.hero.sub}
            </p>
            <div className="mt-[var(--space-8)]">
              <Button href="/contacto/" size="lg">
                Solicitar asesoría en {page.city}
              </Button>
            </div>
          </Container>
        </Section>

        <Section cardTone="light">
          <Container size="content" className="section-y">
            <div className="flex flex-col gap-6">
              {page.intro.map((p) => (
                <p key={p.slice(0, 30)} className="measure text-body leading-relaxed text-[var(--fg-muted)]">
                  {p}
                </p>
              ))}
            </div>
            <h2 className="mt-[var(--space-fluid-md)] font-display text-h3 font-semibold">
              Lo que hacemos en {page.city}
            </h2>
            <ul className="mt-8 space-y-4">
              {page.highlights.map((h) => (
                <li key={h} className="text-body text-[var(--fg-muted)]">
                  · {h}
                </li>
              ))}
            </ul>
          </Container>
        </Section>

        <Section>
          <Container size="content" className="section-y">
            <h2 className="font-display text-h3 font-semibold">Servicios en {page.city}</h2>
            <ul className="mt-10 grid gap-8 sm:grid-cols-2">
              {services.map((s) =>
                s ? (
                  <li key={s.slug}>
                    <Link
                      href={`/servicios/${s.slug}/`}
                      className="block rounded-[var(--radius-lg)] border border-[var(--glass-border)] bg-[var(--card)] p-[var(--space-8)] transition-colors hover:border-[var(--border-strong)]"
                    >
                      <h3 className="font-display text-h4 font-semibold">{s.title}</h3>
                      <p className="mt-4 text-small leading-relaxed text-[var(--fg-muted)]">{s.metaDescription.slice(0, 100)}…</p>
                    </Link>
                  </li>
                ) : null,
              )}
            </ul>
          </Container>
        </Section>

        <Section cardTone="light">
          <Container size="content" className="section-y">
            <h2 className="font-display text-h3 font-semibold">Áreas que atendemos</h2>
            <div className="mt-8 flex flex-wrap gap-3">
              {page.neighborhoods.map((n) => (
                <span
                  key={n}
                  className="rounded-full border border-[var(--glass-border)] px-4 py-2 text-small leading-relaxed text-[var(--fg-muted)]"
                >
                  {n}
                </span>
              ))}
            </div>
          </Container>
        </Section>

        <Section>
          <Container size="content" className="section-y">
            <h2 className="font-display text-h2 font-semibold">Preguntas frecuentes</h2>
            <dl className="mt-[var(--space-fluid-md)] space-y-[var(--space-6)]">
              {page.faq.map((item) => (
                <div key={item.q} className="border-b border-[var(--border)] pb-[var(--space-6)]">
                  <dt className="font-display text-h4 font-semibold">{item.q}</dt>
                  <dd className="measure mt-4 text-body leading-relaxed text-[var(--fg-muted)]">{item.a}</dd>
                </div>
              ))}
            </dl>
          </Container>
        </Section>

        <Section cardTone="dark">
          <Container size="content" className="section-y text-center">
            <h2 className="font-display text-h2 font-semibold text-balance">
              Trabajemos juntos en {page.city}
            </h2>
            <p className="mx-auto measure mt-4 text-body text-[var(--fg-muted)]">
              Operamos remoto con enfoque local. Respuesta en menos de 24 horas.
            </p>
            <div className="mt-[var(--space-8)] flex flex-wrap justify-center gap-3">
              <Button href="/contacto/" size="lg">
                Escríbenos
              </Button>
              <Button href="/servicios/" variant="secondary" size="lg">
                Ver servicios
              </Button>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}

import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SkipLink } from "@/components/layout/SkipLink";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  type ServicePage,
  getServiceBySlug,
  PILLAR_LABELS,
  sharedCta,
} from "@/lib/seo/services";
import {
  faqNode,
  pageGraph,
  serviceNode,
  type BreadcrumbItem,
} from "@/lib/seo/schema";

type Props = {
  service: ServicePage;
};

export function ServicePageView({ service }: Props) {
  const breadcrumbs: BreadcrumbItem[] = [
    { name: "Inicio", path: "/" },
    { name: "Servicios", path: "/servicios/" },
    { name: service.title, path: `/servicios/${service.slug}/` },
  ];

  const related = service.relatedServices
    .map((slug) => getServiceBySlug(slug))
    .filter(Boolean) as ServicePage[];

  const schema = pageGraph(breadcrumbs, [
    serviceNode({
      name: service.title,
      description: service.metaDescription,
      path: `/servicios/${service.slug}/`,
    }),
    faqNode(service.faq),
  ]);

  return (
    <>
      <SkipLink />
      <Header />
      <JsonLd data={schema} />
      <main id="main">
        <Section className="pt-[calc(var(--header-h)+var(--space-fluid-lg))]">
          <Container size="content">
            <Breadcrumbs items={breadcrumbs} className="mb-[var(--space-6)]" />
            <p className="chapter-label">{service.hero.eyebrow}</p>
            <h1 className="mt-3 max-w-[18ch] font-display text-h1 font-bold text-balance">
              {service.hero.headline}
            </h1>
            <p className="measure mt-[var(--space-6)] text-body-lg text-pretty text-[var(--fg-muted)]">
              {service.hero.sub}
            </p>
            <div className="mt-[var(--space-8)] flex flex-wrap gap-3">
              <Button href="/contacto/" size="lg">
                {sharedCta.primary}
              </Button>
              <Button href="/soluciones/" variant="secondary" size="lg">
                {sharedCta.secondary}
              </Button>
            </div>
          </Container>
        </Section>

        <Section cardTone="light">
          <Container size="content" className="section-y">
            <div className="grid gap-[var(--space-fluid-lg)] lg:grid-cols-2">
              <div>
                <h2 className="font-display text-h3 font-semibold">{service.problem.headline}</h2>
                {service.problem.paragraphs.map((p) => (
                  <p key={p.slice(0, 24)} className="measure mt-4 text-body text-[var(--fg-muted)]">
                    {p}
                  </p>
                ))}
              </div>
              <div>
                <h2 className="font-display text-h3 font-semibold">{service.solution.headline}</h2>
                {service.solution.paragraphs.map((p) => (
                  <p key={p.slice(0, 24)} className="measure mt-4 text-body text-[var(--fg-muted)]">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        <Section>
          <Container size="content" className="section-y">
            <h2 className="font-display text-h2 font-semibold">Beneficios</h2>
            <ul className="mt-[var(--space-fluid-md)] grid gap-[var(--space-6)] sm:grid-cols-2">
              {service.benefits.map((b) => (
                <li
                  key={b.title}
                  className="rounded-[var(--radius-lg)] border border-[var(--glass-border)] bg-[var(--card)] p-[var(--space-6)]"
                >
                  <h3 className="font-display text-h4 font-semibold">{b.title}</h3>
                  <p className="mt-2 text-body text-[var(--fg-muted)]">{b.text}</p>
                </li>
              ))}
            </ul>
          </Container>
        </Section>

        <Section cardTone="light">
          <Container size="content" className="section-y">
            <div className="grid gap-[var(--space-fluid-lg)] lg:grid-cols-2">
              <div>
                <h2 className="font-display text-h3 font-semibold">Casos de uso</h2>
                <ul className="mt-4 space-y-2">
                  {service.useCases.map((u) => (
                    <li key={u} className="text-body text-[var(--fg-muted)]">
                      · {u}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="font-display text-h3 font-semibold">Tecnologías</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {service.technologies.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-[var(--glass-border)] px-3 py-1 font-mono text-micro uppercase tracking-wider text-[var(--fg-muted)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </Section>

        <Section>
          <Container size="content" className="section-y">
            <h2 className="font-display text-h2 font-semibold">Preguntas frecuentes</h2>
            <dl className="mt-[var(--space-fluid-md)] space-y-[var(--space-6)]">
              {service.faq.map((item) => (
                <div key={item.q} className="border-b border-[var(--border)] pb-[var(--space-6)]">
                  <dt className="font-display text-h4 font-semibold">{item.q}</dt>
                  <dd className="measure mt-2 text-body text-[var(--fg-muted)]">{item.a}</dd>
                </div>
              ))}
            </dl>
          </Container>
        </Section>

        {related.length > 0 ? (
          <Section cardTone="light">
            <Container size="content" className="section-y">
              <h2 className="font-display text-h3 font-semibold">Servicios relacionados</h2>
              <ul className="mt-6 flex flex-wrap gap-3">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link
                      href={`/servicios/${r.slug}/`}
                      className="inline-flex rounded-full border border-[var(--glass-border)] px-4 py-2 text-small transition-colors hover:border-[var(--border-strong)] hover:text-[var(--fg)]"
                    >
                      {r.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </Container>
          </Section>
        ) : null}

        {service.relatedBlogSlugs.length > 0 ? (
          <Section>
            <Container size="content" className="section-y">
              <h2 className="font-display text-h3 font-semibold">Artículos relacionados</h2>
              <ul className="mt-6 flex flex-wrap gap-3">
                {service.relatedBlogSlugs.map((slug) => (
                  <li key={slug}>
                    <Link
                      href={`/blog/${slug}/`}
                      className="inline-flex rounded-full border border-[var(--glass-border)] px-4 py-2 text-small transition-colors hover:border-[var(--border-strong)]"
                    >
                      Leer en el blog →
                    </Link>
                  </li>
                ))}
              </ul>
            </Container>
          </Section>
        ) : null}

        <Section cardTone="dark">
          <Container size="content" className="section-y text-center">
            <p className="chapter-label">{PILLAR_LABELS[service.pillar]}</p>
            <h2 className="mx-auto mt-3 max-w-[20ch] font-display text-h2 font-semibold text-balance">
              ¿Listo para empezar con {service.title.toLowerCase()}?
            </h2>
            <p className="mx-auto measure mt-4 text-body text-[var(--fg-muted)]">
              Cuéntanos tu proyecto y te respondemos en menos de 24 horas.
            </p>
            <div className="mt-[var(--space-8)] flex flex-wrap justify-center gap-3">
              <Button href="/contacto/" size="lg">
                {sharedCta.primary}
              </Button>
              <Button href="/#work" variant="secondary" size="lg">
                Ver proyectos
              </Button>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}

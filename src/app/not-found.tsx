import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SkipLink } from "@/components/layout/SkipLink";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="main">
        <Section className="flex min-h-[70svh] items-center pt-[var(--header-h)]">
          <Container size="content" className="text-center">
            <p className="font-mono text-micro uppercase tracking-[0.2em] text-[var(--fg-subtle)]">
              404
            </p>
            <h1 className="mt-4 font-display text-h1 font-bold text-balance">
              Esta página no existe
            </h1>
            <p className="mx-auto measure mt-[var(--space-6)] text-body text-[var(--fg-muted)]">
              El enlace puede estar roto o la página fue movida. Explora nuestros servicios o vuelve al inicio.
            </p>
            <div className="mt-[var(--space-8)] flex flex-wrap justify-center gap-3">
              <Button href="/" size="lg">
                Ir al inicio
              </Button>
              <Button href="/servicios/" variant="secondary" size="lg">
                Ver servicios
              </Button>
            </div>
            <nav className="mt-[var(--space-fluid-lg)]" aria-label="Enlaces útiles">
              <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-small text-[var(--fg-muted)]">
                <li>
                  <Link href="/blog/" className="hover:text-[var(--fg)]">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contacto/" className="hover:text-[var(--fg)]">
                    Contacto
                  </Link>
                </li>
              </ul>
            </nav>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}

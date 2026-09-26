import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SkipLink } from "@/components/layout/SkipLink";
import { JsonLd } from "@/components/seo/JsonLd";
import { ServicesPage } from "@/components/sections/services-system/ServicesPage";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { pageGraph, serviceNode } from "@/lib/seo/schema";
import { SEO_SERVICES } from "@/lib/seo/services";

const description =
  "Diseño web, branding, desarrollo, aplicaciones, comercio electrónico, SEO y marketing digital. Scelerity, Bogotá.";

export const metadata: Metadata = buildPageMetadata({
  title: "Servicios — Scelerity",
  description,
  path: "/servicios/",
  keywords: [
    "diseño web",
    "branding",
    "desarrollo web",
    "ecommerce",
    "seo",
    "marketing digital",
  ],
});

const breadcrumbs = [
  { name: "Inicio", path: "/" },
  { name: "Servicios", path: "/servicios/" },
];

export default function ServiciosPage() {
  return (
    <>
      <SkipLink />
      <Header />
      <JsonLd
        data={pageGraph(
          breadcrumbs,
          SEO_SERVICES.map((service) =>
            serviceNode({
              name: service.title,
              description: service.metaDescription,
              path: `/servicios/${service.slug}/`,
            }),
          ),
        )}
      />
      <main id="main" className="page-rhythm services-page">
        <ServicesPage />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SkipLink } from "@/components/layout/SkipLink";
import { SolutionsHero } from "@/components/sections/solutions/SolutionsHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { pageGraph, serviceNode } from "@/lib/seo/schema";
import { solutionsEs } from "@/data/solutions";

const SolutionsPillars = dynamic(() =>
  import("@/components/sections/solutions/SolutionsPillars").then((m) => ({
    default: m.SolutionsPillars,
  })),
);
const SolutionsShowcase = dynamic(() =>
  import("@/components/sections/solutions/SolutionsShowcase").then((m) => ({
    default: m.SolutionsShowcase,
  })),
);
const SolutionsPlans = dynamic(() =>
  import("@/components/sections/solutions/SolutionsPlans").then((m) => ({
    default: m.SolutionsPlans,
  })),
);
const SolutionsStrategy = dynamic(() =>
  import("@/components/sections/solutions/SolutionsStrategy").then((m) => ({
    default: m.SolutionsStrategy,
  })),
);
const SolutionsProcess = dynamic(() =>
  import("@/components/sections/solutions/SolutionsProcess").then((m) => ({
    default: m.SolutionsProcess,
  })),
);
const SolutionsBenefits = dynamic(() =>
  import("@/components/sections/solutions/SolutionsBenefits").then((m) => ({
    default: m.SolutionsBenefits,
  })),
);
const SolutionsClose = dynamic(() =>
  import("@/components/sections/solutions/SolutionsClose").then((m) => ({
    default: m.SolutionsClose,
  })),
);

export const metadata: Metadata = buildPageMetadata({
  title: solutionsEs.meta.title,
  description: solutionsEs.meta.description,
  path: "/soluciones/",
  keywords: ["soluciones digitales", "planes diseño web", "desarrollo", "marketing digital"],
});

const solucionesSchema = pageGraph(
  [
    { name: "Inicio", path: "/" },
    { name: "Soluciones", path: "/soluciones/" },
  ],
  [
    serviceNode({
      name: "Soluciones digitales Scelerity",
      description: solutionsEs.meta.description,
      path: "/soluciones/",
    }),
  ],
);

export default function SolucionesPage() {
  return (
    <>
      <SkipLink />
      <Header />
      <JsonLd data={solucionesSchema} />
      <main id="main">
        <SolutionsHero />
        <SolutionsPillars />
        <SolutionsShowcase />
        <SolutionsPlans />
        <SolutionsStrategy />
        <SolutionsProcess />
        <SolutionsBenefits />
        <SolutionsClose />
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SkipLink } from "@/components/layout/SkipLink";
import { SolutionsHero } from "@/components/sections/solutions/SolutionsHero";

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

export const metadata: Metadata = {
  title: "Soluciones — Scelerity",
  description:
    "Diseño, desarrollo y marketing digital para marcas que quieren crecer con claridad.",
};

export default function SolucionesPage() {
  return (
    <>
      <SkipLink />
      <Header />
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

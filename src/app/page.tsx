import dynamic from "next/dynamic";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SkipLink } from "@/components/layout/SkipLink";
import { ScelerityHero } from "@/components/sections/ScelerityHero";
import { HomeJsonLd } from "@/components/seo/HomeJsonLd";

const Work = dynamic(() =>
  import("@/components/sections/Work").then((m) => ({ default: m.Work })),
);
const Services = dynamic(() =>
  import("@/components/sections/Services").then((m) => ({ default: m.Services })),
);
const About = dynamic(() =>
  import("@/components/sections/About").then((m) => ({ default: m.About })),
);
const FinalCTA = dynamic(() =>
  import("@/components/sections/FinalCTA").then((m) => ({ default: m.FinalCTA })),
);

export default function Home() {
  return (
    <>
      <SkipLink />
      <Header />
      <HomeJsonLd />
      <main id="main" className="landing-rhythm">
        <ScelerityHero />
        <About />
        <Work />
        <Services />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

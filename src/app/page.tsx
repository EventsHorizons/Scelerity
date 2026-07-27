import dynamic from "next/dynamic";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SkipLink } from "@/components/layout/SkipLink";
import { Hero } from "@/components/sections/Hero";

const Work = dynamic(() =>
  import("@/components/sections/Work").then((m) => ({ default: m.Work })),
);
const About = dynamic(() =>
  import("@/components/sections/About").then((m) => ({ default: m.About })),
);
const Services = dynamic(() =>
  import("@/components/sections/Services").then((m) => ({ default: m.Services })),
);
const Featured = dynamic(() =>
  import("@/components/sections/Featured").then((m) => ({ default: m.Featured })),
);
const Process = dynamic(() =>
  import("@/components/sections/Process").then((m) => ({ default: m.Process })),
);
const Benefits = dynamic(() =>
  import("@/components/sections/Benefits").then((m) => ({ default: m.Benefits })),
);
const FAQ = dynamic(() =>
  import("@/components/sections/FAQ").then((m) => ({ default: m.FAQ })),
);
const FinalCTA = dynamic(() =>
  import("@/components/sections/FinalCTA").then((m) => ({ default: m.FinalCTA })),
);

export default function Home() {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="main" className="landing-rhythm">
        <Hero />
        <Work />
        <About />
        <Services />
        <Featured />
        <Process />
        <Benefits />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

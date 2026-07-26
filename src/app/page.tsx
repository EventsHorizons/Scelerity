import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Work } from "@/components/sections/Work";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Featured } from "@/components/sections/Featured";
import { Process } from "@/components/sections/Process";
import { Benefits } from "@/components/sections/Benefits";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
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

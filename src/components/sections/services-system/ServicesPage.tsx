"use client";

import { ServicesHero } from "./ServicesHero";
import { ServiceReel } from "./ServiceReel";
import { ServicesCTA } from "./ServicesCTA";

export function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServiceReel />
      <ServicesCTA />
    </>
  );
}

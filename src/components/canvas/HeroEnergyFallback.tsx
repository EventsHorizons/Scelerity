/**
 * CSS-only energy core for mobile / low-power devices.
 * Visually aligned with the WebGL hero — zero JS, zero GPU shader cost.
 */
export function HeroEnergyFallback() {
  return (
    <div className="hero-energy-fallback" aria-hidden>
      <div className="hero-energy-fallback__core" />
      <div className="hero-energy-fallback__halo" />
    </div>
  );
}

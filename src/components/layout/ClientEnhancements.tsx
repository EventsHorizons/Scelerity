"use client";

import dynamic from "next/dynamic";
import type { ReactNode } from "react";
import { useDeviceProfile } from "@/hooks/useDeviceProfile";

const CustomCursor = dynamic(
  () =>
    import("@/components/motion/CustomCursor").then((m) => m.CustomCursor),
  { ssr: false },
);

const SmoothScroll = dynamic(
  () =>
    import("@/components/motion/SmoothScroll").then((m) => m.SmoothScroll),
  { ssr: false },
);

/** Desktop-only motion shell — mobile uses native scroll (faster, zero Lenis cost). */
export function ClientEnhancements({ children }: { children: ReactNode }) {
  const { smoothScroll } = useDeviceProfile();

  if (!smoothScroll) {
    return <>{children}</>;
  }

  return (
    <SmoothScroll>
      <CustomCursor />
      {children}
    </SmoothScroll>
  );
}

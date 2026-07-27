import { cn } from "@/lib/cn";

type Props = {
  className?: string;
};

/** Official Scelerity isotipo paths (viewBox 1293 × 1558). */
export const LOGO_MARK_PATHS = [
  "M665 0 L103 440 L69 473 L37 518 L20 553 L11 579 L1 630 L1 689 L10 736 L21 768 L35 797 L61 836 L94 871 L141 905 L178 923 L208 933 L235 939 L276 943 L309 942 L347 936 L378 927 L411 913 L453 887 L1014 447 Z",
  "M1152 653 L1127 640 L1099 629 L1065 620 L1026 615 L991 615 L948 621 L913 631 L873 649 L831 677 L278 1111 L627 1557 L1190 1117 L1228 1079 L1255 1040 L1278 989 L1290 937 L1292 878 L1283 824 L1268 782 L1248 745 L1217 705 L1193 682 Z",
] as const;

/** Padded on the right so the bolt edge is not clipped beside the wordmark. */
export const LOGO_VIEWBOX = "0 0 1338 1558";

/**
 * Scelerity isotipo — official vector mark.
 * Uses currentColor for automatic light / dark theme adaptation.
 */
export function LogoMark({ className }: Props) {
  return (
    <svg
      viewBox={LOGO_VIEWBOX}
      overflow="visible"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("block shrink-0 overflow-visible text-current", className)}
      aria-hidden
    >
      {LOGO_MARK_PATHS.map((d) => (
        <path key={d.slice(0, 12)} d={d} fill="currentColor" />
      ))}
    </svg>
  );
}

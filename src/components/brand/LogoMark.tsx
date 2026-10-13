import { cn } from "@/lib/cn";

type Props = {
  className?: string;
};

/** Drawboard mark: rounded frame, chevron, and prompt dash. */
export const LOGO_VIEWBOX = "0 0 48 48";

export const LOGO_MARK = {
  frame: { x: 2.25, y: 2.25, width: 43.5, height: 43.5, rx: 11 },
  chevron: "M13.5 18.5 L22.5 24.5 L13.5 30.5",
  dash: "M25.5 30.5 H34",
} as const;

/**
 * Drawboard isotipo.
 * Uses currentColor so it follows light and dark theme.
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
      <rect
        x={LOGO_MARK.frame.x}
        y={LOGO_MARK.frame.y}
        width={LOGO_MARK.frame.width}
        height={LOGO_MARK.frame.height}
        rx={LOGO_MARK.frame.rx}
        fill="none"
        stroke="currentColor"
        strokeWidth="3.5"
      />
      <path
        d={LOGO_MARK.chevron}
        fill="none"
        stroke="currentColor"
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d={LOGO_MARK.dash}
        fill="none"
        stroke="currentColor"
        strokeWidth="3.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

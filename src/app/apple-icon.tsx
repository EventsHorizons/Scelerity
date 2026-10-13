import { ImageResponse } from "next/og";
import { LOGO_MARK, LOGO_VIEWBOX } from "@/components/brand/LogoMark";

export const dynamic = "force-static";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Apple touch icon — isotipo on brand dark. */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#09090b",
          borderRadius: 40,
        }}
      >
        <svg viewBox={LOGO_VIEWBOX} width="120" height="120" xmlns="http://www.w3.org/2000/svg">
          <rect
            x={LOGO_MARK.frame.x}
            y={LOGO_MARK.frame.y}
            width={LOGO_MARK.frame.width}
            height={LOGO_MARK.frame.height}
            rx={LOGO_MARK.frame.rx}
            fill="none"
            stroke="#f4f0e8"
            strokeWidth="3.5"
          />
          <path
            d={LOGO_MARK.chevron}
            fill="none"
            stroke="#f4f0e8"
            strokeWidth="3.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d={LOGO_MARK.dash}
            fill="none"
            stroke="#f4f0e8"
            strokeWidth="3.4"
            strokeLinecap="round"
          />
        </svg>
      </div>
    ),
    { ...size },
  );
}

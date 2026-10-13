import { ImageResponse } from "next/og";
import { LOGO_MARK, LOGO_VIEWBOX } from "@/components/brand/LogoMark";

export const dynamic = "force-static";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/** PNG favicon fallback — isotipo only, dark canvas. */
export default function Icon() {
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
        }}
      >
        <svg viewBox={LOGO_VIEWBOX} width="26" height="26" xmlns="http://www.w3.org/2000/svg">
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

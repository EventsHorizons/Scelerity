import { ImageResponse } from "next/og";
import { LOGO_MARK_PATHS, LOGO_VIEWBOX } from "@/components/brand/LogoMark";

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
        <svg viewBox={LOGO_VIEWBOX} width="108" height="130" xmlns="http://www.w3.org/2000/svg">
          {LOGO_MARK_PATHS.map((d) => (
            <path key={d.slice(0, 12)} d={d} fill="#f5f7fa" />
          ))}
        </svg>
      </div>
    ),
    { ...size },
  );
}

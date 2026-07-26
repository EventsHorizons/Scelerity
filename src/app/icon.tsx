import { ImageResponse } from "next/og";
import { LOGO_MARK_PATHS, LOGO_VIEWBOX } from "@/components/brand/LogoMark";

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
        <svg viewBox={LOGO_VIEWBOX} width="20" height="24" xmlns="http://www.w3.org/2000/svg">
          {LOGO_MARK_PATHS.map((d) => (
            <path key={d.slice(0, 12)} d={d} fill="#f5f7fa" />
          ))}
        </svg>
      </div>
    ),
    { ...size },
  );
}

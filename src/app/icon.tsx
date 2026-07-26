import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/** Favicon — compact Sc mark, monochrome on brand dark. */
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
          borderRadius: 8,
          color: "#f5f7fa",
          fontSize: 15,
          fontWeight: 800,
          letterSpacing: "-0.06em",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        Sc
      </div>
    ),
    { ...size },
  );
}

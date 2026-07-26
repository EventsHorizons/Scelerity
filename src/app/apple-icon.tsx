import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Apple touch / PWA icon — compact Sc mark. */
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
          color: "#f5f7fa",
          fontSize: 84,
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

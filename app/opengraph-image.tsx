import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const runtime = "nodejs";
export const alt = site.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0f172a",
          color: "#f8fafc",
        }}
      >
        <div style={{ fontSize: 72, fontWeight: 700, letterSpacing: "-0.02em" }}>
          {site.name}
        </div>
        <div style={{ fontSize: 34, marginTop: 24, color: "#a5b4fc", maxWidth: 900 }}>
          {site.description}
        </div>
      </div>
    ),
    { ...size },
  );
}

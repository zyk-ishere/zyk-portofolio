import { ImageResponse } from "next/og";

export const alt = "Taufik Zaqi — Full Stack Web Developer & Grey Hat";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0a0a0a",
          backgroundImage:
            "linear-gradient(135deg, #1b1b1b 0%, #0a0a0a 45%, #050505 100%)",
          padding: "72px 80px",
        }}
      >
        {/* top bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 26,
              letterSpacing: 2,
              color: "#fafafa",
            }}
          >
            taufik.zaqi
            <span style={{ color: "#7a7a7a" }}>_</span>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              letterSpacing: 4,
              color: "#7a7a7a",
            }}
          >
            zyk.web.id
          </div>
        </div>

        {/* center */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              letterSpacing: 6,
              color: "#8a8a8a",
              marginBottom: 18,
            }}
          >
            $ whoami
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 92,
              fontWeight: 700,
              lineHeight: 1.05,
              color: "#fafafa",
              letterSpacing: -2,
            }}
          >
            Taufik Zaqi
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 34,
              color: "#b4b4b4",
              marginTop: 20,
            }}
          >
            Full Stack Web Developer · Grey Hat
          </div>
        </div>

        {/* bottom chips */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          {[
            "Next.js",
            "Web Security",
            "Networking",
            "Bug Hunting",
          ].map((tag) => (
            <div
              key={tag}
              style={{
                display: "flex",
                fontSize: 20,
                color: "#d4d4d4",
                border: "1px solid #333333",
                borderRadius: 8,
                padding: "8px 16px",
                backgroundColor: "#141414",
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}

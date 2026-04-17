import { ImageResponse } from "next/og";

export const alt = "Bridge To AI — Making AI Work For Your Business";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#0F172A",
          color: "white",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Ambient gradient orbs */}
        <div
          style={{
            position: "absolute",
            top: -180,
            right: -120,
            width: 560,
            height: 560,
            borderRadius: 9999,
            background: "radial-gradient(circle, rgba(79,70,229,0.40) 0%, rgba(79,70,229,0) 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -200,
            left: -140,
            width: 520,
            height: 520,
            borderRadius: 9999,
            background: "radial-gradient(circle, rgba(124,58,237,0.30) 0%, rgba(124,58,237,0) 70%)",
          }}
        />

        {/* Top — brand mark */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 10,
              height: 40,
              borderRadius: 9999,
              background: "linear-gradient(180deg, #4F46E5 0%, #7C3AED 100%)",
            }}
          />
          <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: "-0.01em" }}>
            Bridge To AI
          </div>
        </div>

        {/* Middle — headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 980 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              color: "rgba(165,180,252,0.7)",
              fontSize: 18,
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            <div style={{ width: 28, height: 3, borderRadius: 9999, background: "#7C3AED" }} />
            AI for Australian business
          </div>
          <div
            style={{
              fontSize: 82,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.035em",
            }}
          >
            We&apos;ll show you exactly where AI fits in your business.
          </div>
        </div>

        {/* Bottom — proof pills */}
        <div
          style={{
            display: "flex",
            gap: 14,
            fontSize: 22,
            fontWeight: 600,
            color: "rgba(199,210,254,0.75)",
          }}
        >
          {["Free audit", "1–2 weeks to live", "Australia-wide"].map((t) => (
            <div
              key={t}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "12px 22px",
                borderRadius: 14,
                border: "1px solid rgba(255,255,255,0.10)",
                background: "rgba(255,255,255,0.04)",
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}

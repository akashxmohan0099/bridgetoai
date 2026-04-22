import { ImageResponse } from "next/og";

const BRAND_GRADIENT = "linear-gradient(180deg, #4F46E5 0%, #F97316 100%)";

export function renderBrandIcon(opts: {
  size: { width: number; height: number };
  fontSize: number;
  borderRadius?: number;
}) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: BRAND_GRADIENT,
          ...(opts.borderRadius !== undefined && { borderRadius: opts.borderRadius }),
          color: "white",
          fontSize: opts.fontSize,
          fontWeight: 800,
          fontFamily: "sans-serif",
          letterSpacing: "-0.05em",
        }}
      >
        B
      </div>
    ),
    opts.size,
  );
}

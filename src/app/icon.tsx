import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  const font = readFileSync(
    join(process.cwd(), "node_modules/@fontsource/museomoderno/files/museomoderno-latin-700-normal.woff")
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: "#111111",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 7,
        }}
      >
        <span
          style={{
            fontFamily: "MuseoModerno",
            fontWeight: 700,
            fontSize: 17,
            color: "#ffffff",
            letterSpacing: "-0.3px",
          }}
        >
          NM.
        </span>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "MuseoModerno", data: font, weight: 700 }],
    }
  );
}

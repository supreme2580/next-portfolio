import { ImageResponse } from "next/server";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          background: "#323643",
          width: "100%",
          height: "100%",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Plus Jakarta Sans",
          color: "#f7f7f7",
        }}
      >
        <svg
          width="500"
          height="500"
          viewBox="0 0 500 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="250" cy="250" r="250" fill="#323643" />
          <path
            d="M178.783 307.4L86.9828 268.4V242.8L178.783 203.6V230.4L108.383 260.2V251L178.783 280.8V307.4ZM202.614 334L269.014 169H297.614L231.214 334H202.614ZM321.386 307.4V280.8L391.586 251V260.2L321.386 230.4V203.6L412.986 242.8V268.4L321.386 307.4Z"
            fill="#93DEFF"
          />
        </svg>
        <div tw="flex flex-col" style={{ gap: "2rem" }}>
          <div tw="text-7xl">Jose Luis Bautista</div>
          <div tw="text-[#606471] text-4xl">Aspiring Software Engineer</div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}

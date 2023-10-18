import { Redis } from "@upstash/redis";
import { NextRequest, NextResponse } from "next/server";

const redis = Redis.fromEnv();

export const runtime = "edge";

export async function POST(req: NextRequest) {
  if (req.method !== "POST") {
    return new NextResponse("use POST", { status: 405 });
  }

  const ip = req.ip;

  if (!ip) {
    return new NextResponse("IP not found", { status: 400 });
  }

  // Hash the IP in order to not store it directly in your db.
  const buf = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(ip)
  );

  const hash = Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

  // Deduplicate the IP for each unique POST request.
  const isNew = await redis.set(
    ["postRequestDeduplication", hash].join(":"),
    true,
    {
      nx: true,
      ex: 24 * 60 * 60,
    }
  );

  if (!isNew) {
    return new NextResponse(null, { status: 202 });
  }

  await redis.incr("profileViews");

  return new NextResponse(null, { status: 202 });
}

//Credits to https://upstash.com/blog/nextjs13-approuter-view-counter

import { createHash, scryptSync, timingSafeEqual } from "node:crypto";
import { neon } from "@neondatabase/serverless";
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const PAGE_SIZE = 10;
const MAX_COMMENT_LENGTH = 2000;
const MAX_DISPLAY_NAME_LENGTH = 40;
const MAX_PASSWORD_LENGTH = 256;
const MAX_POSTS_PER_WINDOW = 10;

function getDatabase() {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) return null;
  return neon(databaseUrl);
}

function validStorySlug(value: unknown): value is string {
  return typeof value === "string" && /^[a-z0-9-]{1,100}$/.test(value);
}

function sameOrigin(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin) return false;

  try {
    return new URL(origin).host === new URL(request.url).host;
  } catch {
    return false;
  }
}

function verifySharedPassword(password: string) {
  const salt = process.env.COMMENT_PASSWORD_SALT;
  const expectedHex = process.env.COMMENT_PASSWORD_HASH;

  if (!salt || !expectedHex || !/^[a-f0-9]{128}$/i.test(expectedHex)) {
    return false;
  }

  const expected = Buffer.from(expectedHex, "hex");
  const actual = scryptSync(password, salt, expected.length);

  return actual.length === expected.length && timingSafeEqual(actual, expected);
}

function getRateLimitKey(request: Request) {
  const secret = process.env.COMMENT_RATE_LIMIT_SECRET;
  if (!secret) return null;

  // Vercel supplies x-forwarded-for. Only a hash is stored, never the raw IP.
  const forwardedFor = request.headers.get("x-forwarded-for");
  const ip = forwardedFor?.split(",")[0]?.trim() || "unknown";
  return createHash("sha256").update(`${secret}:${ip}`).digest("hex");
}

export async function GET(request: Request) {
  const sql = getDatabase();
  if (!sql) {
    return NextResponse.json(
      { error: "Comments are being set up. Please check back soon." },
      { status: 503 },
    );
  }

  const url = new URL(request.url);
  const story = url.searchParams.get("story");
  const rawPage = Number(url.searchParams.get("page") || "1");

  if (!validStorySlug(story) || !Number.isSafeInteger(rawPage) || rawPage < 1) {
    return NextResponse.json({ error: "Invalid story or page." }, { status: 400 });
  }

  try {
    const countRows = await sql`
      SELECT COUNT(*)::int AS total
      FROM story_comments
      WHERE story_slug = ${story}
    `;
    const total = Number(countRows[0]?.total || 0);
    const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
    const page = Math.min(rawPage, totalPages);
    const offset = (page - 1) * PAGE_SIZE;

    const rows = await sql`
      SELECT
        id::text AS id,
        display_name,
        body,
        created_at
      FROM story_comments
      WHERE story_slug = ${story}
      ORDER BY created_at DESC, id DESC
      LIMIT ${PAGE_SIZE}
      OFFSET ${offset}
    `;

    return NextResponse.json(
      { comments: rows, page, totalPages, total },
      {
        headers: {
          "Cache-Control": "no-store, max-age=0",
          "X-Content-Type-Options": "nosniff",
        },
      },
    );
  } catch {
    return NextResponse.json(
      { error: "Comments could not be loaded right now." },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  if (!sameOrigin(request)) {
    return NextResponse.json({ error: "Request rejected." }, { status: 403 });
  }

  const contentLength = Number(request.headers.get("content-length") || "0");
  if (contentLength > 10_000) {
    return NextResponse.json({ error: "Your submission is too large." }, { status: 413 });
  }

  const sql = getDatabase();
  if (!sql) {
    return NextResponse.json(
      { error: "Comments are being set up. Please check back soon." },
      { status: 503 },
    );
  }

  const rateLimitKey = getRateLimitKey(request);
  if (!rateLimitKey) {
    return NextResponse.json(
      { error: "Comments are not configured yet." },
      { status: 503 },
    );
  }

  let input: unknown;
  try {
    input = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!input || typeof input !== "object") {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const data = input as Record<string, unknown>;
  const story = data.story;
  const password = data.password;
  const displayName = typeof data.displayName === "string" ? data.displayName.trim() : "";
  const body = typeof data.body === "string" ? data.body.trim() : "";

  if (!validStorySlug(story)) {
    return NextResponse.json({ error: "Invalid story." }, { status: 400 });
  }
  if (typeof password !== "string" || password.length < 1 || password.length > MAX_PASSWORD_LENGTH) {
    return NextResponse.json({ error: "Please enter the friends-only password." }, { status: 400 });
  }
  if (!displayName || displayName.length > MAX_DISPLAY_NAME_LENGTH) {
    return NextResponse.json({ error: "Display names must be 1–40 characters." }, { status: 400 });
  }
  if (!body || body.length > MAX_COMMENT_LENGTH) {
    return NextResponse.json({ error: "Comments must be 1–2000 characters." }, { status: 400 });
  }

  try {
    const limitRows = await sql`
      INSERT INTO comment_rate_limits (ip_hash, window_started_at, attempts)
      VALUES (${rateLimitKey}, NOW(), 1)
      ON CONFLICT (ip_hash) DO UPDATE SET
        attempts = CASE
          WHEN comment_rate_limits.window_started_at < NOW() - INTERVAL '15 minutes' THEN 1
          ELSE comment_rate_limits.attempts + 1
        END,
        window_started_at = CASE
          WHEN comment_rate_limits.window_started_at < NOW() - INTERVAL '15 minutes' THEN NOW()
          ELSE comment_rate_limits.window_started_at
        END
      RETURNING attempts
    `;

    if (Number(limitRows[0]?.attempts || 0) > MAX_POSTS_PER_WINDOW) {
      return NextResponse.json(
        { error: "Too many attempts. Please wait 15 minutes before trying again." },
        { status: 429 },
      );
    }

    if (!verifySharedPassword(password)) {
      return NextResponse.json({ error: "That friends-only password isn't correct." }, { status: 401 });
    }

    const inserted = await sql`
      INSERT INTO story_comments (story_slug, display_name, body)
      VALUES (${story}, ${displayName}, ${body})
      RETURNING id::text AS id, display_name, body, created_at
    `;

    return NextResponse.json({ comment: inserted[0] }, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Your comment could not be saved right now. Please try again later." },
      { status: 500 },
    );
  }
}

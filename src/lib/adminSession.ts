import { cookies } from "next/headers";

const COOKIE_NAME = "bta_admin";
const SESSION_DAYS = 7;

function getSecret(): string {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret || secret.length < 16) {
    throw new Error("ADMIN_SESSION_SECRET must be set and at least 16 chars");
  }
  return secret;
}

async function hmac(data: string, secret: string): Promise<string> {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    enc.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const sig = await crypto.subtle.sign("HMAC", key, enc.encode(data));
  return Buffer.from(sig).toString("base64url");
}

function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let out = 0;
  for (let i = 0; i < a.length; i++) out |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return out === 0;
}

export async function createAdminSession(): Promise<void> {
  const exp = Date.now() + SESSION_DAYS * 24 * 60 * 60 * 1000;
  const payload = String(exp);
  const sig = await hmac(payload, getSecret());
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, `${payload}.${sig}`, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    expires: new Date(exp),
  });
}

export async function destroyAdminSession(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}

export async function isAdminAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  const raw = cookieStore.get(COOKIE_NAME)?.value;
  if (!raw) return false;

  const dot = raw.indexOf(".");
  if (dot === -1) return false;
  const payload = raw.slice(0, dot);
  const sig = raw.slice(dot + 1);

  const exp = Number(payload);
  if (!Number.isFinite(exp) || exp <= Date.now()) return false;

  let secret: string;
  try {
    secret = getSecret();
  } catch {
    return false;
  }

  const expected = await hmac(payload, secret);
  return safeEqual(sig, expected);
}

export async function verifyPasscode(input: string): Promise<boolean> {
  const expected = process.env.ADMIN_PASSCODE;
  if (!expected || !/^\d{6}$/.test(expected)) return false;
  if (!/^\d{6}$/.test(input)) return false;
  return safeEqual(input, expected);
}

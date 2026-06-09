"use server";

import { cookies } from "next/headers";

export async function registerCookie() {
  const cookieStore = await cookies();
  cookieStore.set("cookie_consent", "true", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 365,
  });
  return { success: true };
}

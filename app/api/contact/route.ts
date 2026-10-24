import { NextResponse } from "next/server";
import {
  type ContactSubmission,
  contactConfirmationEmail,
  contactNotificationEmail,
  interestLabels,
} from "@/lib/email/contact";
import { sendEmail } from "@/lib/email/ses";

// Submissions faster than this are almost certainly bots.
const MIN_FILL_MS = 3000;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const limits = {
  name: 200,
  firstName: 100,
  lastName: 100,
  email: 254,
  phone: 40,
  interest: 40,
  purpose: 300,
  message: 5000,
};

function field(body: Record<string, unknown>, key: string, max: number) {
  const value = body[key];
  if (typeof value !== "string") return "";
  const trimmed = value.trim().slice(0, max);
  // Single-line fields must not carry line breaks (header injection guard).
  return key === "message" ? trimmed : trimmed.replace(/[\r\n]+/g, " ");
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  // Honeypot: real users never see or fill this field. Pretend success so
  // bots don't learn they were caught.
  const honeypot = body.website;
  const startedAt = Number(body.startedAt);
  if (
    (typeof honeypot === "string" && honeypot.length > 0) ||
    !Number.isFinite(startedAt) ||
    Date.now() - startedAt < MIN_FILL_MS
  ) {
    return NextResponse.json({ ok: true });
  }

  // Accepts both form variants: full form (firstName/lastName/message) and
  // the minimal form (name/purpose).
  const name =
    field(body, "name", limits.name) ||
    `${field(body, "firstName", limits.firstName)} ${field(body, "lastName", limits.lastName)}`.trim();
  const data: ContactSubmission = {
    name,
    email: field(body, "email", limits.email),
    phone: field(body, "phone", limits.phone),
    interest: field(body, "interest", limits.interest),
    purpose: field(body, "purpose", limits.purpose),
    message: field(body, "message", limits.message),
  };

  if (!data.name) {
    return NextResponse.json(
      { error: "Please fill in all required fields." },
      { status: 400 },
    );
  }
  if (!EMAIL_RE.test(data.email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }
  if (data.interest && !(data.interest in interestLabels)) {
    data.interest = "";
  }

  const to = (process.env.CONTACT_TO_EMAIL ?? "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  if (to.length === 0) {
    console.error("CONTACT_TO_EMAIL is not configured");
    return NextResponse.json(
      { error: "Unable to send your message right now." },
      { status: 500 },
    );
  }

  try {
    await sendEmail({
      to,
      replyTo: [data.email],
      ...contactNotificationEmail(data),
    });
  } catch (err) {
    console.error("Failed to send contact notification", err);
    return NextResponse.json(
      { error: "Unable to send your message right now. Please try again." },
      { status: 502 },
    );
  }

  // Confirmation is best-effort; the team already has the inquiry.
  try {
    await sendEmail({ to: [data.email], ...contactConfirmationEmail(data) });
  } catch (err) {
    console.error("Failed to send contact confirmation", err);
  }

  return NextResponse.json({ ok: true });
}

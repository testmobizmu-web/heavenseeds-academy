import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { createClient } from "@sanity/client";

export const runtime = "nodejs"; // Resend needs Node runtime

function getClient() {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
  const token = process.env.SANITY_WRITE_TOKEN; // server-only token

  if (!projectId || !dataset) throw new Error("Missing Sanity project/dataset env");
  if (!token) throw new Error("Missing SANITY_WRITE_TOKEN env");

  return createClient({
    projectId,
    dataset,
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-01-01",
    token,
    useCdn: false,
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Honeypot
    if (typeof body.company === "string" && body.company.trim().length > 0) {
      return NextResponse.json({ ok: false, error: "Spam" }, { status: 400 });
    }

    const locale = body.locale === "fr" ? "fr" : "en";
    const type = String(body.type || "general");
    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const phone = String(body.phone || "").trim();
    const message = String(body.message || "").trim();
    const sourceUrl = String(body.sourceUrl || "").trim();

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
    }

    // 1) Store in Sanity as lead
    const sanity = getClient();

    const created = await sanity.create({
      _type: "lead",
      locale,
      type,
      name,
      email,
      phone,
      message,
      sourceUrl,
      createdAt: new Date().toISOString(),
      status: "new",
    });

    // 2) Send email via Resend
    const resendKey = process.env.RESEND_API_KEY;
    if (!resendKey) throw new Error("Missing RESEND_API_KEY env");

    const resend = new Resend(resendKey);

    const to = process.env.CONTACT_TO_EMAIL || "info@heavenseedacademy.com";
    const from = process.env.CONTACT_FROM_EMAIL || "HeavenSeeds Academy <onboarding@resend.dev>";

    const subject =
      locale === "fr"
        ? `Nouveau message (${type}) — ${name}`
        : `New message (${type}) — ${name}`;

    const text = [
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : "",
      `Type: ${type}`,
      sourceUrl ? `Source: ${sourceUrl}` : "",
      "",
      message,
      "",
      `Sanity Lead ID: ${created?._id || ""}`,
    ]
      .filter(Boolean)
      .join("\n");

    await resend.emails.send({
      from,
      to,
      subject,
      text,
      replyTo: email,
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    return NextResponse.json(
      { ok: false, error: err?.message || "Server error" },
      { status: 500 }
    );
  }
}

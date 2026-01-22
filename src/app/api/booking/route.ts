// src/app/api/bookings/route.ts
import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

function supaAdmin() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const service = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  if (!url || !service) throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY");
  return createClient(url, service, { auth: { persistSession: false } });
}

type Payload = {
  locale: "en" | "fr";
  fullName: string;
  email: string;
  phone?: string;
  appointmentType: string;
  visitors?: number;
  date: string; // YYYY-MM-DD
  time: string; // HH:MM
  timezone: string; // e.g. Indian/Mauritius
  childAge?: string;
  notes?: string;
  sourceUrl?: string;
};

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Payload;

    // Basic validation
    if (!body?.fullName?.trim()) return NextResponse.json({ ok: false, error: "Name required" }, { status: 400 });
    if (!body?.email?.trim()) return NextResponse.json({ ok: false, error: "Email required" }, { status: 400 });
    if (!body?.date || !body?.time) return NextResponse.json({ ok: false, error: "Date/time required" }, { status: 400 });

    // Build an ISO timestamp. We store as timestamptz.
    // NOTE: We treat provided date+time as Mauritius time.
    // We convert by appending +04:00 (Mauritius is UTC+4, no DST).
    const startAtIso = `${body.date}T${body.time}:00+04:00`;

    const supabase = supaAdmin();

    const { data, error } = await supabase
      .from("hsa_bookings")
      .insert([
        {
          locale: body.locale,
          full_name: body.fullName.trim(),
          email: body.email.trim(),
          phone: body.phone?.trim() || null,
          appointment_type: body.appointmentType,
          visitors: typeof body.visitors === "number" ? body.visitors : null,
          child_age: body.childAge?.trim() || null,
          notes: body.notes?.trim() || null,
          start_at: startAtIso,
          timezone: body.timezone || "Indian/Mauritius",
          status: "confirmed",
        },
      ])
      .select("id, start_at, appointment_type")
      .single();

    if (error) {
      return NextResponse.json({ ok: false, error: error.message }, { status: 400 });
    }

    return NextResponse.json({
      ok: true,
      booking: {
        id: data.id,
        startAt: data.start_at,
        appointmentType: data.appointment_type,
      },
    });
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e?.message || "Server error" }, { status: 500 });
  }
}

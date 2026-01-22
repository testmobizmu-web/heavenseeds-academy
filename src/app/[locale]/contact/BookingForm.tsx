// src/app/[locale]/contact/BookingForm.tsx
"use client";

import { useMemo, useState } from "react";

type Props = { locale: "en" | "fr" };

function pad(n: number) {
  return String(n).padStart(2, "0");
}

// Build a deterministic list of times (no Date.now usage)
function timeOptions() {
  const out: string[] = [];
  // 09:00 to 16:30 every 30 mins
  for (let h = 9; h <= 16; h++) {
    out.push(`${pad(h)}:00`);
    out.push(`${pad(h)}:30`);
  }
  return out;
}

export default function BookingForm({ locale }: Props) {
  const isFr = locale === "fr";
  const WA_PHONE = "23058204613";
  const TZ = "Indian/Mauritius";

  const t = useMemo(
    () => ({
      title: isFr ? "Réservation directe" : "Direct Booking",
      sub: isFr
        ? "Choisissez une date et une heure — votre réservation est confirmée instantanément."
        : "Pick a date and time — your booking is confirmed instantly.",
      badge: isFr ? "Traitement rapide" : "Fast handling",

      fullName: isFr ? "Nom complet" : "Full name",
      email: "Email",
      phone: isFr ? "Téléphone / WhatsApp (optionnel)" : "Phone / WhatsApp (optional)",
      type: isFr ? "Type de rendez-vous" : "Appointment type",
      visitors: isFr ? "Nombre de visiteurs" : "Number of visitors",
      date: isFr ? "Date" : "Date",
      time: isFr ? "Heure" : "Time",
      childAge: isFr ? "Âge de l’enfant (optionnel)" : "Child age (optional)",
      notes: isFr ? "Notes (optionnel)" : "Notes (optional)",

      optTour: isFr ? "Visite du campus (Maurice)" : "Campus tour (Mauritius)",
      optOnline: isFr ? "Conseil cours en ligne" : "Online course guidance",
      optGeneral: isFr ? "Autre / informations" : "Other / information",

      confirm: isFr ? "Confirmer la réservation" : "Confirm booking",
      confirming: isFr ? "Confirmation…" : "Confirming…",
      successH: isFr ? "Réservation confirmée ✅" : "Booking confirmed ✅",
      successP: isFr
        ? "Nous vous contacterons si nécessaire. Pour une réponse plus rapide, confirmez aussi sur WhatsApp."
        : "We’ll reach out if needed. For a faster reply, also confirm on WhatsApp.",
      wa: isFr ? "Confirmer sur WhatsApp" : "Confirm on WhatsApp",
      gcal: isFr ? "Ajouter à Google Calendar" : "Add to Google Calendar",
      again: isFr ? "Faire une autre réservation" : "Make another booking",

      fail: isFr ? "Échec. Réessayez." : "Failed. Please try again.",
      required: isFr ? "Veuillez remplir les champs requis." : "Please fill required fields.",
    }),
    [isFr]
  );

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [appointmentType, setAppointmentType] = useState<"tour" | "online" | "general">("tour");
  const [visitors, setVisitors] = useState<number>(2);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("10:00");
  const [childAge, setChildAge] = useState("");
  const [notes, setNotes] = useState("");

  const [busy, setBusy] = useState(false);
  const [toast, setToast] = useState<null | { ok: boolean; text: string }>(null);
  const [confirmed, setConfirmed] = useState<null | { id: string; startAt: string; label: string }>(null);

  function typeLabel() {
    if (appointmentType === "tour") return t.optTour;
    if (appointmentType === "online") return t.optOnline;
    return t.optGeneral;
  }

  function waLink() {
    const text = isFr
      ? `Bonjour 👋\nJe confirme ma réservation HeavenSeeds Academy.\n\nNom: ${fullName}\nEmail: ${email}\nTéléphone: ${
          phone || "-"
        }\nType: ${typeLabel()}\nVisiteurs: ${visitors}\nDate/Heure (Maurice): ${date} ${time}\nÂge enfant: ${
          childAge || "-"
        }\nNotes: ${notes || "-"}\n\nMerci 😊`
      : `Hello 👋\nI’m confirming my HeavenSeeds Academy booking.\n\nName: ${fullName}\nEmail: ${email}\nPhone: ${
          phone || "-"
        }\nType: ${typeLabel()}\nVisitors: ${visitors}\nDate/Time (Mauritius): ${date} ${time}\nChild age: ${
          childAge || "-"
        }\nNotes: ${notes || "-"}\n\nThank you 😊`;

    return `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(text)}`;
  }

  function googleCalLink() {
    // Google Calendar expects UTC-like date format, but can accept local; we’ll use +04:00 time
    const start = `${date.replaceAll("-", "")}T${time.replace(":", "")}00+0400`;
    // 45 min appointment
    const [hh, mm] = time.split(":").map((x) => parseInt(x, 10));
    const endMinutes = hh * 60 + mm + 45;
    const endH = Math.floor(endMinutes / 60);
    const endM = endMinutes % 60;
    const end = `${date.replaceAll("-", "")}T${pad(endH)}${pad(endM)}00+0400`;

    const details = isFr
      ? "Réservation HeavenSeeds Academy — visite / conseil."
      : "HeavenSeeds Academy booking — tour / guidance.";

    const url = new URL("https://calendar.google.com/calendar/render");
    url.searchParams.set("action", "TEMPLATE");
    url.searchParams.set("text", `HeavenSeeds Academy — ${typeLabel()}`);
    url.searchParams.set("dates", `${start}/${end}`);
    url.searchParams.set("details", details);
    url.searchParams.set("ctz", TZ);
    return url.toString();
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setToast(null);

    if (!fullName.trim() || !email.trim() || !date || !time) {
      setToast({ ok: false, text: t.required });
      return;
    }

    const payload = {
      locale,
      fullName: fullName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      appointmentType: typeLabel(),
      visitors,
      date,
      time,
      timezone: TZ,
      childAge: childAge.trim(),
      notes: notes.trim(),
      sourceUrl: typeof window !== "undefined" ? window.location.href : "",
    };

    setBusy(true);
    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => null);
      if (!data?.ok) throw new Error(data?.error || "Failed");

      setConfirmed({
        id: data.booking.id,
        startAt: data.booking.startAt,
        label: `${typeLabel()} · ${date} ${time}`,
      });

      setToast({ ok: true, text: t.successH });
    } catch {
      setToast({ ok: false, text: t.fail });
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="relative overflow-hidden rounded-3xl border bg-white p-6 shadow-sm">
      <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-rose-500 via-amber-400 via-emerald-400 via-sky-500 to-violet-500" />

      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">{t.title}</h2>
          <p className="mt-1 text-sm text-slate-600">{t.sub}</p>
        </div>

        <span className="inline-flex items-center gap-2 rounded-full border bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">
          <span className="h-2 w-2 rounded-full bg-gradient-to-r from-rose-500 via-amber-400 to-emerald-400" />
          {t.badge}
        </span>
      </div>

      {toast && (
        <div
          className={`mt-4 rounded-2xl border px-4 py-3 text-sm ${
            toast.ok ? "border-emerald-200 bg-emerald-50 text-emerald-900" : "border-rose-200 bg-rose-50 text-rose-900"
          }`}
          role="status"
          aria-live="polite"
        >
          <div className="font-semibold">{toast.text}</div>

          {toast.ok && confirmed && (
            <div className="mt-3">
              <div className="text-xs text-emerald-900/80">{confirmed.label}</div>

              <div className="mt-3 flex flex-col gap-2 sm:flex-row">
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-95"
                >
                  {t.wa}
                </a>

                <a
                  href={googleCalLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl border bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 shadow-sm hover:bg-slate-50"
                >
                  {t.gcal}
                </a>

                <button
                  type="button"
                  onClick={() => {
                    setConfirmed(null);
                    setToast(null);
                    setFullName("");
                    setEmail("");
                    setPhone("");
                    setAppointmentType("tour");
                    setVisitors(2);
                    setDate("");
                    setTime("10:00");
                    setChildAge("");
                    setNotes("");
                  }}
                  className="inline-flex items-center justify-center rounded-2xl border bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50"
                >
                  {t.again}
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {!confirmed && (
        <form onSubmit={onSubmit} className="mt-5 grid gap-3">
          <div className="grid gap-3 sm:grid-cols-2">
            <label className="grid gap-1 text-sm">
              <span className="font-semibold text-slate-700">{t.fullName}</span>
              <input className="hsa-input" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
            </label>

            <label className="grid gap-1 text-sm">
              <span className="font-semibold text-slate-700">{t.email}</span>
              <input className="hsa-input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </label>
          </div>

          <label className="grid gap-1 text-sm">
            <span className="font-semibold text-slate-700">{t.phone}</span>
            <input className="hsa-input" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+230…" />
          </label>

          <div className="grid gap-3 sm:grid-cols-2">
            <label className="grid gap-1 text-sm">
              <span className="font-semibold text-slate-700">{t.type}</span>
              <select className="hsa-select" value={appointmentType} onChange={(e) => setAppointmentType(e.target.value as any)}>
                <option value="tour">{t.optTour}</option>
                <option value="online">{t.optOnline}</option>
                <option value="general">{t.optGeneral}</option>
              </select>
            </label>

            <label className="grid gap-1 text-sm">
              <span className="font-semibold text-slate-700">{t.visitors}</span>
              <select className="hsa-select" value={visitors} onChange={(e) => setVisitors(parseInt(e.target.value, 10))}>
                {[1, 2, 3, 4, 5].map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <label className="grid gap-1 text-sm">
              <span className="font-semibold text-slate-700">{t.date}</span>
              <input className="hsa-input" type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            </label>

            <label className="grid gap-1 text-sm">
              <span className="font-semibold text-slate-700">{t.time}</span>
              <select className="hsa-select" value={time} onChange={(e) => setTime(e.target.value)}>
                {timeOptions().map((x) => (
                  <option key={x} value={x}>
                    {x}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <label className="grid gap-1 text-sm">
            <span className="font-semibold text-slate-700">{t.childAge}</span>
            <input className="hsa-input" value={childAge} onChange={(e) => setChildAge(e.target.value)} placeholder={isFr ? "ex: 3 ans" : "e.g., 3 years"} />
          </label>

          <label className="grid gap-1 text-sm">
            <span className="font-semibold text-slate-700">{t.notes}</span>
            <textarea
              className="hsa-textarea"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder={isFr ? "Disponibilités, besoins, questions…" : "Availability notes, needs, questions…"}
              style={{ minHeight: 96 }}
            />
          </label>

          <button
            disabled={busy}
            className="rounded-2xl bg-slate-900 px-5 py-3 text-white shadow-sm hover:opacity-95 disabled:opacity-60"
            type="submit"
          >
            {busy ? t.confirming : t.confirm}
          </button>
        </form>
      )}
    </div>
  );
}


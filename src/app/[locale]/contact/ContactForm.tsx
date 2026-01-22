"use client";

import { useMemo, useState } from "react";

type Props = { locale: "en" | "fr" };

export default function ContactForm({ locale }: Props) {
  const isFr = locale === "fr";

  const labels = useMemo(
    () => ({
      title: isFr ? "Formulaire" : "Contact Form",
      name: isFr ? "Nom" : "Name",
      email: "Email",
      phone: isFr ? "Téléphone / WhatsApp (optionnel)" : "Phone / WhatsApp (optional)",
      topic: isFr ? "Sujet" : "Topic",
      tour: isFr ? "Je veux réserver une visite (Maurice)" : "I want to book a tour (Mauritius)",
      online: isFr ? "Question sur les cours en ligne" : "Question about online courses",
      general: isFr ? "Autre demande" : "General enquiry",
      message: isFr ? "Message" : "Message",
      send: isFr ? "Envoyer" : "Send",
      sending: isFr ? "Envoi…" : "Sending…",
      ok: isFr ? "Message envoyé ✅" : "Message sent ✅",
      fail: isFr ? "Échec de l’envoi. Réessayez." : "Failed to send. Please try again.",
      waCta: isFr ? "Confirmer sur WhatsApp" : "Confirm on WhatsApp",
      waHint: isFr
        ? "Pour une réponse plus rapide, envoyez aussi un message WhatsApp."
        : "For a faster reply, also send a WhatsApp message.",
    }),
    [isFr]
  );

  const WA_PHONE = "23058204613";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState<"tour" | "online" | "general">("tour");
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);
  const [toast, setToast] = useState<null | { ok: boolean; text: string }>(null);
  const [lastPayload, setLastPayload] = useState<null | {
    name: string;
    type: "tour" | "online" | "general";
    email: string;
    phone: string;
    message: string;
    sourceUrl: string;
  }>(null);

  function topicLabel(t: "tour" | "online" | "general") {
    if (t === "tour") return labels.tour;
    if (t === "online") return labels.online;
    return labels.general;
  }

  function buildWhatsAppLink(payload: NonNullable<typeof lastPayload>) {
    const text = isFr
      ? `Bonjour 👋\nJe viens d’envoyer le formulaire sur HeavenSeeds Academy.\n\nNom: ${payload.name}\nSujet: ${topicLabel(
          payload.type
        )}\nEmail: ${payload.email}\nTéléphone: ${payload.phone || "-"}\n\nMessage:\n${payload.message}\n\nPage: ${
          payload.sourceUrl
        }\n\nMerci 😊`
      : `Hello 👋\nI just submitted the contact form on HeavenSeeds Academy.\n\nName: ${payload.name}\nTopic: ${topicLabel(
          payload.type
        )}\nEmail: ${payload.email}\nPhone: ${payload.phone || "-"}\n\nMessage:\n${payload.message}\n\nPage: ${
          payload.sourceUrl
        }\n\nThank you 😊`;

    return `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(text)}`;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setToast(null);

    const sourceUrl = typeof window !== "undefined" ? window.location.href : "";

    const payload = {
      locale,
      type,
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      message: message.trim(),
      sourceUrl,
    };

    setBusy(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => null);
      if (!data?.ok) throw new Error(data?.error || "Failed");

      setToast({ ok: true, text: labels.ok });
      setLastPayload({
        name: payload.name,
        type: payload.type,
        email: payload.email,
        phone: payload.phone,
        message: payload.message,
        sourceUrl: payload.sourceUrl,
      });

      // Reset form
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setType("tour");
    } catch {
      setToast({ ok: false, text: labels.fail });
      setLastPayload(null);
    } finally {
      setBusy(false);
      setTimeout(() => setToast(null), 4500);
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="relative overflow-hidden rounded-3xl border bg-white p-6 shadow-sm"
    >
      <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-rose-500 via-amber-400 via-emerald-400 via-sky-500 to-violet-500" />

      <h2 className="text-lg font-semibold">{labels.title}</h2>
      <p className="mt-1 text-sm text-slate-600">{labels.waHint}</p>

      {toast && (
        <div
          className={`mt-4 rounded-2xl border px-4 py-3 text-sm ${
            toast.ok
              ? "border-emerald-200 bg-emerald-50 text-emerald-900"
              : "border-rose-200 bg-rose-50 text-rose-900"
          }`}
          role="status"
          aria-live="polite"
        >
          <div className="font-semibold">{toast.text}</div>

          {/* Premium WhatsApp CTA after success */}
          {toast.ok && lastPayload && (
            <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center">
              <a
                href={buildWhatsAppLink(lastPayload)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-2xl bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-95"
              >
                {labels.waCta}
              </a>
              <span className="text-xs text-emerald-900/80">
                {isFr
                  ? "Optionnel, mais recommandé pour une réponse plus rapide."
                  : "Optional, but recommended for faster replies."}
              </span>
            </div>
          )}
        </div>
      )}

      <div className="mt-4 grid gap-3">
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="grid gap-1 text-sm">
            <span className="font-semibold text-slate-700">{labels.name}</span>
            <input
              className="hsa-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              autoComplete="name"
              placeholder={isFr ? "Votre nom" : "Your name"}
            />
          </label>

          <label className="grid gap-1 text-sm">
            <span className="font-semibold text-slate-700">{labels.email}</span>
            <input
              className="hsa-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              autoComplete="email"
              placeholder="you@email.com"
            />
          </label>
        </div>

        <label className="grid gap-1 text-sm">
          <span className="font-semibold text-slate-700">{labels.phone}</span>
          <input
            className="hsa-input"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            autoComplete="tel"
            placeholder={isFr ? "+230..." : "+230..."}
          />
        </label>

        <label className="grid gap-1 text-sm">
          <span className="font-semibold text-slate-700">{labels.topic}</span>
          <select
            className="hsa-select"
            value={type}
            onChange={(e) => setType(e.target.value as any)}
          >
            <option value="tour">{labels.tour}</option>
            <option value="online">{labels.online}</option>
            <option value="general">{labels.general}</option>
          </select>
        </label>

        <label className="grid gap-1 text-sm">
          <span className="font-semibold text-slate-700">{labels.message}</span>
          <textarea
            className="hsa-textarea"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            style={{ minHeight: 110 }}   // ✅ compact
           placeholder={isFr ? "Expliquez votre demande (âge, niveau, horaires, etc.)" : "Tell us what you need (age, level, schedule,                         etc.)"}
      />

        </label>

        <button
          disabled={busy}
          className="rounded-2xl bg-slate-900 px-5 py-3 text-white shadow-sm hover:opacity-95 disabled:opacity-60"
          type="submit"
        >
          {busy ? labels.sending : labels.send}
        </button>
      </div>
    </form>
  );
}


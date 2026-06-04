"use client";

import Link from "next/link";
import {
  ArrowRight,
  Brain,
  ChevronDown,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  Speech,
} from "lucide-react";
import { FormEvent, useState } from "react";

const whatsappNumber = "23058204613";
const emailAddress = "Heavenseed2126@gmail.com";
const phonePrimary = "57614680";
const phoneWhatsapp = "58204613";

const address =
  "111, Malartic Avenue, Quatre Bornes, 75947, Zone 4, Mauritius";

const enquiryTypes = [
  "Nursery admission enquiry",
  "Inclusive education support",
  "Primary learning support",
  "Speech delay support",
  "Speech therapy guidance",
  "Child psychology support",
  "Fees and availability",
  "Other",
];

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5 fill-current" aria-hidden="true">
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.23.2 2.23.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.77l-.44 2.91h-2.33V22C18.34 21.24 22 17.08 22 12.06Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5 fill-current" aria-hidden="true">
      <path d="M7.8 2h8.4A5.81 5.81 0 0 1 22 7.8v8.4a5.81 5.81 0 0 1-5.8 5.8H7.8A5.81 5.81 0 0 1 2 16.2V7.8A5.81 5.81 0 0 1 7.8 2Zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6Zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
    </svg>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    enquiryType: "Nursery admission enquiry",
    message: "",
  });

  function updateField(field: keyof typeof form, value: string) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const message = `Hello Heaven's Seed International School,%0A%0AI would like to request more information.%0A%0AEnquiry: ${encodeURIComponent(
      form.enquiryType
    )}%0AName: ${encodeURIComponent(form.name)}%0APhone: ${encodeURIComponent(
      form.phone
    )}%0AEmail: ${encodeURIComponent(form.email)}%0AMessage: ${encodeURIComponent(
      form.message
    )}%0A%0AThank you.`;

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  }

  const quickWhatsappMessage = encodeURIComponent(
    "Hello Heaven's Seed International School, I would like to know more about nursery, inclusive education, primary support, speech delay support or child psychology support."
  );

  return (
    <main>
      {/* Hero */}
      <section className="relative px-4 py-7 sm:px-6 sm:py-9 lg:px-8 lg:py-10">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#A84F3F] p-6 text-white shadow-[0_26px_85px_rgba(168,79,63,0.18)] sm:p-8 lg:p-10">
            <div className="absolute -left-24 -top-24 size-72 rounded-full bg-[#F4D77B]/20 blur-3xl" />
            <div className="absolute -bottom-32 right-0 size-96 rounded-full bg-[#7F342B]/28 blur-3xl" />

            <div className="relative grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full border border-white/16 bg-white/10 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#F4D77B] backdrop-blur-md sm:text-[11px]">
                  <Sparkles size={14} />
                  Contact Heaven’s Seed
                </p>

                <h1 className="mt-5 max-w-3xl text-3xl font-extrabold leading-tight tracking-[-0.055em] text-white sm:text-5xl lg:text-6xl">
                  Speak with us about your child’s support pathway.
                </h1>

                <p className="mt-4 max-w-2xl text-sm font-semibold leading-7 text-white/82 sm:text-lg sm:leading-8">
                  Contact Heaven’s Seed International School for nursery
                  admissions, inclusive education, primary learning support,
                  speech delay support, speech therapy guidance and child
                  psychology support.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={`https://wa.me/${whatsappNumber}?text=${quickWhatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F4B321] px-6 py-3 text-sm font-extrabold !text-[#7F342B] shadow-[0_18px_45px_rgba(244,179,33,0.36)] transition hover:-translate-y-1 hover:bg-[#FFD46A]"
                  >
                    <span className="text-[#7F342B]">WhatsApp Us</span>
                    <MessageCircle size={17} className="text-[#7F342B]" />
                  </Link>

                  <Link
                    href={`mailto:${emailAddress}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white/16 px-6 py-3 text-sm font-extrabold !text-white ring-1 ring-white/25 backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/24"
                  >
                    <span className="text-white">Email Us</span>
                    <Mail size={17} className="text-white" />
                  </Link>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    icon: Phone,
                    title: "Call Us",
                    text: `${phonePrimary} / ${phoneWhatsapp}`,
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    text: emailAddress,
                  },
                  {
                    icon: Speech,
                    title: "Speech Support",
                    text: "Speech delay and communication guidance",
                  },
                  {
                    icon: Brain,
                    title: "Child Support",
                    text: "Learning, emotional and psychology support",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <article
                      key={item.title}
                      className="rounded-[1.5rem] border border-white/12 bg-white/10 p-5 shadow-[0_18px_55px_rgba(0,0,0,0.12)] backdrop-blur-xl"
                    >
                      <div className="grid size-11 place-items-center rounded-2xl bg-[#F4B321] text-[#7F342B]">
                        <Icon size={20} strokeWidth={2.4} />
                      </div>

                      <h2 className="mt-4 text-lg font-extrabold tracking-[-0.03em] text-white">
                        {item.title}
                      </h2>

                      <p className="mt-2 break-words text-sm leading-6 text-white/76">
                        {item.text}
                      </p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form + Details */}
      <section className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[2rem] border border-[#A84F3F]/10 bg-white shadow-[0_26px_85px_rgba(24,53,40,0.12)]">
            <div className="grid items-stretch lg:grid-cols-[0.92fr_1.08fr]">
              {/* Left Details */}
              <div className="relative flex h-full flex-col bg-[#A84F3F] p-5 text-white sm:p-7 lg:p-8">
                <div className="absolute -left-20 -top-20 size-60 rounded-full bg-[#F4D77B]/20 blur-3xl" />
                <div className="absolute -bottom-24 right-0 size-64 rounded-full bg-[#7F342B]/28 blur-3xl" />

                <div className="relative flex h-full flex-col">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-[#F4D77B] sm:text-[11px]">
                    Our Details
                  </p>

                  <h2 className="mt-3 text-2xl font-extrabold leading-tight tracking-[-0.04em] text-white sm:text-3xl">
                    Visit, call or message us.
                  </h2>

                  <p className="mt-3 max-w-xl text-sm leading-6 text-white/82">
                    We are here to answer your questions about nursery,
                    inclusive learning, primary support, speech delay,
                    speech therapy guidance and child development support.
                  </p>

                  <div className="mt-5 grid gap-2.5">
                    <Link
                      href={`tel:${phonePrimary}`}
                      className="flex items-center gap-3 rounded-2xl border border-white/12 bg-white/10 p-3 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white/15"
                    >
                      <Phone size={17} className="text-[#F4D77B]" />
                      {phonePrimary}
                    </Link>

                    <Link
                      href={`https://wa.me/${whatsappNumber}?text=${quickWhatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 rounded-2xl border border-white/12 bg-white/10 p-3 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white/15"
                    >
                      <MessageCircle size={17} className="text-[#F4D77B]" />
                      WhatsApp: {phoneWhatsapp}
                    </Link>

                    <Link
                      href={`mailto:${emailAddress}`}
                      className="flex items-center gap-3 rounded-2xl border border-white/12 bg-white/10 p-3 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white/15"
                    >
                      <Mail size={17} className="text-[#F4D77B]" />
                      {emailAddress}
                    </Link>

                    <Link
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                        address
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 rounded-2xl border border-white/12 bg-white/10 p-3 text-sm font-bold leading-6 text-white backdrop-blur-md transition hover:bg-white/15"
                    >
                      <MapPin
                        size={17}
                        className="mt-0.5 shrink-0 text-[#F4D77B]"
                      />
                      <span>{address}</span>
                    </Link>
                  </div>

                  <div className="mt-4 flex items-center gap-3">
                    <Link
                      href="https://www.facebook.com/share/1CKUaPFuv4/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Heaven’s Seed Facebook"
                      className="grid size-11 place-items-center rounded-full border border-white/20 bg-[#F4B321] text-[#7F342B] shadow-[0_14px_35px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1 hover:bg-white"
                    >
                      <FacebookIcon />
                    </Link>

                    <Link
                      href="https://www.instagram.com/heavenseedsacademy/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Heaven’s Seed Instagram"
                      className="grid size-11 place-items-center rounded-full border border-white/20 bg-[#F4B321] text-[#7F342B] shadow-[0_14px_35px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1 hover:bg-white"
                    >
                      <InstagramIcon />
                    </Link>
                  </div>

                  <Link
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      address
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 block overflow-hidden rounded-[1.5rem] border border-white/14 bg-white/10 shadow-[0_18px_55px_rgba(0,0,0,0.18)]"
                    aria-label="Open Heaven’s Seed location on Google Maps"
                  >
                    <iframe
                      title="Heaven’s Seed International School location map"
                      src={`https://www.google.com/maps?q=${encodeURIComponent(
                        address
                      )}&output=embed`}
                      className="h-44 w-full border-0 sm:h-48"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </Link>
                </div>
              </div>

              {/* Right Form */}
              <div className="flex h-full flex-col justify-center bg-white p-5 sm:p-7 lg:p-8">
                <div className="mb-4">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-[#A84F3F] sm:text-[11px]">
                    Send Enquiry
                  </p>

                  <h3 className="mt-2 text-2xl font-extrabold tracking-[-0.04em] text-[#183528] sm:text-3xl">
                    Send your message by WhatsApp.
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#426252]">
                    Fill your details and WhatsApp will open with your enquiry
                    ready to send.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="grid gap-3.5">
                  <div className="grid gap-3.5 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#183528]/70">
                        Name
                      </label>
                      <input
                        required
                        type="text"
                        value={form.name}
                        onChange={(event) =>
                          updateField("name", event.target.value)
                        }
                        placeholder="Your name"
                        className="h-11 w-full rounded-2xl border border-[#A84F3F]/12 bg-[#fffaf0] px-4 text-sm font-semibold text-[#183528] outline-none transition focus:border-[#F4B321] focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="mb-1.5 block text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#183528]/70">
                        Phone Number
                      </label>
                      <input
                        required
                        type="tel"
                        value={form.phone}
                        onChange={(event) =>
                          updateField("phone", event.target.value)
                        }
                        placeholder="Your number"
                        className="h-11 w-full rounded-2xl border border-[#A84F3F]/12 bg-[#fffaf0] px-4 text-sm font-semibold text-[#183528] outline-none transition focus:border-[#F4B321] focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid gap-3.5 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#183528]/70">
                        Email
                      </label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(event) =>
                          updateField("email", event.target.value)
                        }
                        placeholder="your@email.com"
                        className="h-11 w-full rounded-2xl border border-[#A84F3F]/12 bg-[#fffaf0] px-4 text-sm font-semibold text-[#183528] outline-none transition focus:border-[#F4B321] focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="mb-1.5 block text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#183528]/70">
                        Query Type
                      </label>

                      <div className="relative">
                        <select
                          required
                          value={form.enquiryType}
                          onChange={(event) =>
                            updateField("enquiryType", event.target.value)
                          }
                          className="h-11 w-full appearance-none rounded-2xl border border-[#A84F3F]/12 bg-[#fffaf0] px-4 pr-10 text-sm font-semibold text-[#183528] outline-none transition focus:border-[#F4B321] focus:bg-white"
                        >
                          {enquiryTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>

                        <ChevronDown
                          size={17}
                          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#A84F3F]/70"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#183528]/70">
                      Short Message
                    </label>
                    <textarea
                      required
                      value={form.message}
                      onChange={(event) =>
                        updateField("message", event.target.value)
                      }
                      placeholder="I would like to know more about nursery, inclusive education or speech support..."
                      rows={5}
                      className="w-full resize-none rounded-2xl border border-[#A84F3F]/12 bg-[#fffaf0] px-4 py-3 text-sm font-semibold leading-6 text-[#183528] outline-none transition focus:border-[#F4B321] focus:bg-white"
                    />
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <button
                      type="submit"
                      className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#F4B321] px-5 text-sm font-extrabold !text-[#7F342B] shadow-[0_16px_35px_rgba(244,179,33,0.28)] transition duration-300 hover:-translate-y-1 hover:bg-[#FFD46A]"
                    >
                      <span className="text-[#7F342B]">WhatsApp Us</span>
                      <Send size={16} className="text-[#7F342B]" />
                    </button>

                    <Link
                      href={`mailto:${emailAddress}`}
                      className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#A84F3F] px-5 text-sm font-extrabold !text-white shadow-[0_16px_35px_rgba(168,79,63,0.28)] transition duration-300 hover:-translate-y-1 hover:bg-[#7F342B]"
                    >
                      <span className="text-white">Email Us</span>
                      <Mail size={16} className="text-white" />
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <p className="sr-only">
            Contact Heaven’s Seed International School in Quatre Bornes,
            Mauritius by phone, WhatsApp, email, Facebook, Instagram or contact
            form for nursery admissions, inclusive education, primary learning
            support, speech delay support, speech therapy guidance and child
            psychology support.
          </p>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="px-4 py-6 pb-12 sm:px-6 sm:py-8 sm:pb-14 lg:px-8 lg:py-10 lg:pb-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                icon: ShieldCheck,
                title: "Safe & Caring",
                text: "A nurturing space for children and peace of mind for parents.",
              },
              {
                icon: Speech,
                title: "Speech Support",
                text: "Support for speech delay, communication and expression.",
              },
              {
                icon: Brain,
                title: "Holistic Guidance",
                text: "Support for learning, behaviour, confidence and emotional wellbeing.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-[1.75rem] border border-white/45 bg-white/55 p-5 shadow-[0_18px_55px_rgba(24,53,40,0.08)] backdrop-blur-xl"
                >
                  <div className="grid size-12 place-items-center rounded-2xl bg-[#A84F3F] text-white">
                    <Icon size={21} strokeWidth={2.4} />
                  </div>

                  <h2 className="mt-4 text-lg font-extrabold tracking-[-0.03em] text-[#183528]">
                    {item.title}
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-[#426252]">
                    {item.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
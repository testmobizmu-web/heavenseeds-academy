"use client";

import Link from "next/link";
import {
  Brain,
  ChevronDown,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Speech,
} from "lucide-react";
import { FormEvent, useEffect, useState } from "react";

type Language = "en" | "fr";

const whatsappNumber = "23058204613";
const emailAddress = "Heavenseed2126@gmail.com";

const address =
  "111, Malartic Avenue, Quatre Bornes, 75947, Zone 4, Mauritius";

const content = {
  en: {
    eyebrow: "Contact Us",
    title: "Speak with Heaven’s Seed International School.",
    description:
      "Contact us for nursery admissions, inclusive education, primary support, speech delay support, speech therapy guidance and child psychology support.",
    detailsTitle: "Visit, call or message us.",
    quickTitle: "Send your enquiry quickly.",
    quickDescription:
      "Choose a query, fill your details, and send it directly by WhatsApp.",
    name: "Name",
    phone: "Phone Number",
    email: "Email",
    queryType: "Query Type",
    message: "Short Message",
    namePlaceholder: "Your name",
    phonePlaceholder: "Your number",
    emailPlaceholder: "your@email.com",
    messagePlaceholder:
      "I would like to know more about nursery, inclusive education or speech support...",
    whatsappButton: "WhatsApp Us",
    emailButton: "Email Us",
    quickWhatsapp:
      "Hello Heaven's Seed International School, I would like to know more about nursery, inclusive education, primary support, speech delay support or child psychology support.",
    whatsappIntro:
      "Hello Heaven's Seed International School,%0A%0AI would like to request more information.",
    sr:
      "Contact Heaven’s Seed International School in Quatre Bornes, Mauritius for nursery admissions, inclusive education, primary learning support, speech delay support, speech therapy guidance and child psychology support.",
    enquiryTypes: [
      "Nursery admission enquiry",
      "Inclusive education support",
      "Primary learning support",
      "Speech delay support",
      "Speech therapy guidance",
      "Child psychology support",
      "Fees and availability",
      "Other",
    ],
  },
  fr: {
    eyebrow: "Contactez-nous",
    title: "Parlez avec Heaven’s Seed International School.",
    description:
      "Contactez-nous pour la nurserie, l’éducation inclusive, le soutien primaire, le soutien du langage, l’accompagnement orthophonique et le soutien émotionnel.",
    detailsTitle: "Visitez, appelez ou envoyez-nous un message.",
    quickTitle: "Envoyez votre demande rapidement.",
    quickDescription:
      "Choisissez une demande, remplissez vos informations, et WhatsApp s’ouvrira avec le message prêt à envoyer.",
    name: "Nom",
    phone: "Numéro de téléphone",
    email: "Email",
    queryType: "Type de demande",
    message: "Message court",
    namePlaceholder: "Votre nom",
    phonePlaceholder: "Votre numéro",
    emailPlaceholder: "votre@email.com",
    messagePlaceholder:
      "Je souhaite en savoir plus sur la nurserie, l’éducation inclusive ou le soutien du langage...",
    whatsappButton: "WhatsApp",
    emailButton: "Email",
    quickWhatsapp:
      "Bonjour Heaven's Seed International School, je souhaite en savoir plus sur la nurserie, l'éducation inclusive, le soutien primaire, le soutien du langage ou le soutien émotionnel.",
    whatsappIntro:
      "Bonjour Heaven's Seed International School,%0A%0AJe souhaite recevoir plus d'informations.",
    sr:
      "Contact Heaven’s Seed International School à Quatre Bornes, Maurice pour la nurserie, l’éducation inclusive, le soutien primaire, le soutien du langage et le soutien émotionnel.",
    enquiryTypes: [
      "Demande d’admission nurserie",
      "Soutien éducation inclusive",
      "Soutien primaire",
      "Soutien retard de langage",
      "Accompagnement orthophonique",
      "Soutien émotionnel",
      "Frais et disponibilité",
      "Autre",
    ],
  },
};

function getInitialLanguage(): Language {
  if (typeof window === "undefined") return "en";

  const saved =
    window.localStorage.getItem("hsa-language") ||
    window.localStorage.getItem("hsaLang") ||
    window.localStorage.getItem("language");

  if (saved === "fr") return "fr";

  const htmlLang = document.documentElement.lang?.toLowerCase();
  if (htmlLang?.startsWith("fr")) return "fr";

  return "en";
}

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

export default function HomeContact() {
  const [language, setLanguage] = useState<Language>("en");
  const t = content[language];

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    enquiryType: content.en.enquiryTypes[0],
    message: "",
  });

  useEffect(() => {
    const currentLanguage = getInitialLanguage();
    setLanguage(currentLanguage);
    setForm((current) => ({
      ...current,
      enquiryType: content[currentLanguage].enquiryTypes[0],
    }));

    const handleStorage = () => {
      const nextLanguage = getInitialLanguage();
      setLanguage(nextLanguage);
      setForm((current) => ({
        ...current,
        enquiryType: content[nextLanguage].enquiryTypes[0],
      }));
    };

    const handleLanguageChange = (event: Event) => {
      const customEvent = event as CustomEvent<{ language?: Language }>;
      const nextLanguage =
        customEvent.detail?.language === "fr" ||
        customEvent.detail?.language === "en"
          ? customEvent.detail.language
          : getInitialLanguage();

      setLanguage(nextLanguage);
      setForm((current) => ({
        ...current,
        enquiryType: content[nextLanguage].enquiryTypes[0],
      }));
    };

    window.addEventListener("storage", handleStorage);
    window.addEventListener("hsa-language-change", handleLanguageChange);

    return () => {
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener("hsa-language-change", handleLanguageChange);
    };
  }, []);

  function updateField(field: keyof typeof form, value: string) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const message = `${t.whatsappIntro}%0A%0AEnquiry: ${encodeURIComponent(
      form.enquiryType
    )}%0AName: ${encodeURIComponent(form.name)}%0APhone: ${encodeURIComponent(
      form.phone
    )}%0AEmail: ${encodeURIComponent(form.email)}%0AMessage: ${encodeURIComponent(
      form.message
    )}%0A%0AThank you.`;

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  }

  const quickWhatsappMessage = encodeURIComponent(t.quickWhatsapp);

  return (
    <section
      aria-labelledby="home-contact-heading"
      className="relative overflow-hidden px-4 py-7 sm:px-6 sm:py-9 lg:px-8 lg:py-10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[2rem] border border-[#A84F3F]/10 bg-white shadow-[0_26px_85px_rgba(24,53,40,0.12)]">
          <div className="grid items-stretch lg:grid-cols-2">
            {/* Left details */}
            <div className="relative flex h-full flex-col bg-[#A84F3F] p-5 text-white sm:p-7 lg:p-8">
              <div className="absolute -left-20 -top-20 size-60 rounded-full bg-[#F4D77B]/20 blur-3xl" />
              <div className="absolute -bottom-24 right-0 size-64 rounded-full bg-[#7F342B]/28 blur-3xl" />

              <div className="relative flex h-full flex-col">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-[#F4D77B] sm:text-[11px]">
                  {t.eyebrow}
                </p>

                <h2
                  id="home-contact-heading"
                  className="mt-3 text-2xl font-extrabold leading-tight tracking-[-0.04em] text-white sm:text-3xl"
                >
                  {t.title}
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-6 text-white/82">
                  {t.description}
                </p>

                <div className="mt-5 grid gap-2.5">
                  <Link
                    href="tel:57614680"
                    className="flex items-center gap-3 rounded-2xl border border-white/12 bg-white/10 p-3 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white/15"
                  >
                    <Phone size={17} className="text-[#F4D77B]" />
                    57614680
                  </Link>

                  <Link
                    href={`https://wa.me/${whatsappNumber}?text=${quickWhatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-2xl border border-white/12 bg-white/10 p-3 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white/15"
                  >
                    <MessageCircle size={17} className="text-[#F4D77B]" />
                    WhatsApp: 58204613
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
                  aria-label="Open Heaven’s Seed International School location on Google Maps"
                >
                  <iframe
                    title="Heaven’s Seed International School location map"
                    src={`https://www.google.com/maps?q=${encodeURIComponent(
                      address
                    )}&output=embed`}
                    className="h-36 w-full border-0 sm:h-40"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </Link>
              </div>
            </div>

            {/* Right form */}
            <div className="flex h-full flex-col justify-center bg-white p-5 sm:p-7 lg:p-8">
              <div className="mb-4">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-[#A84F3F] sm:text-[11px]">
                  Quick Message
                </p>

                <h3 className="mt-2 text-2xl font-extrabold tracking-[-0.04em] text-[#183528] sm:text-3xl">
                  {t.quickTitle}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#426252]">
                  {t.quickDescription}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="grid gap-3.5">
                <div className="grid gap-3.5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#183528]/70">
                      {t.name}
                    </label>
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={(event) =>
                        updateField("name", event.target.value)
                      }
                      placeholder={t.namePlaceholder}
                      className="h-11 w-full rounded-2xl border border-[#A84F3F]/12 bg-[#fffaf0] px-4 text-sm font-semibold text-[#183528] outline-none transition focus:border-[#F4B321] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#183528]/70">
                      {t.phone}
                    </label>
                    <input
                      required
                      type="tel"
                      value={form.phone}
                      onChange={(event) =>
                        updateField("phone", event.target.value)
                      }
                      placeholder={t.phonePlaceholder}
                      className="h-11 w-full rounded-2xl border border-[#A84F3F]/12 bg-[#fffaf0] px-4 text-sm font-semibold text-[#183528] outline-none transition focus:border-[#F4B321] focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid gap-3.5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#183528]/70">
                      {t.email}
                    </label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(event) =>
                        updateField("email", event.target.value)
                      }
                      placeholder={t.emailPlaceholder}
                      className="h-11 w-full rounded-2xl border border-[#A84F3F]/12 bg-[#fffaf0] px-4 text-sm font-semibold text-[#183528] outline-none transition focus:border-[#F4B321] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#183528]/70">
                      {t.queryType}
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
                        {t.enquiryTypes.map((type) => (
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
                    {t.message}
                  </label>
                  <textarea
                    required
                    value={form.message}
                    onChange={(event) =>
                      updateField("message", event.target.value)
                    }
                    placeholder={t.messagePlaceholder}
                    rows={4}
                    className="w-full resize-none rounded-2xl border border-[#A84F3F]/12 bg-[#fffaf0] px-4 py-3 text-sm font-semibold leading-6 text-[#183528] outline-none transition focus:border-[#F4B321] focus:bg-white"
                  />
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <button
                    type="submit"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#F4B321] px-5 text-sm font-extrabold !text-[#7F342B] shadow-[0_16px_35px_rgba(244,179,33,0.28)] transition duration-300 hover:-translate-y-1 hover:bg-[#FFD46A]"
                  >
                    <span className="text-[#7F342B]">{t.whatsappButton}</span>
                    <Send size={16} className="text-[#7F342B]" />
                  </button>

                  <Link
                    href={`mailto:${emailAddress}`}
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#A84F3F] px-5 text-sm font-extrabold !text-white shadow-[0_16px_35px_rgba(168,79,63,0.28)] transition duration-300 hover:-translate-y-1 hover:bg-[#7F342B]"
                  >
                    <span className="text-white">{t.emailButton}</span>
                    <Mail size={16} className="text-white" />
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {[
            {
              icon: ShieldCheck,
              title: language === "fr" ? "Sécurité & soin" : "Safe & Caring",
              text:
                language === "fr"
                  ? "Un espace rassurant pour les enfants et les parents."
                  : "A nurturing space for children and peace of mind for parents.",
            },
            {
              icon: Speech,
              title:
                language === "fr" ? "Soutien du langage" : "Speech Support",
              text:
                language === "fr"
                  ? "Un soutien pour la parole, la communication et l’expression."
                  : "Support for speech delay, communication and expression.",
            },
            {
              icon: Brain,
              title:
                language === "fr" ? "Soutien global" : "Holistic Guidance",
              text:
                language === "fr"
                  ? "Un accompagnement pour l’apprentissage, le comportement et le bien-être."
                  : "Support for learning, behaviour, confidence and emotional wellbeing.",
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

        <p className="sr-only">{t.sr}</p>
      </div>
    </section>
  );
}
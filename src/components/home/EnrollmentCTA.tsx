"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Baby,
  Brain,
  CalendarCheck,
  CheckCircle2,
  HeartHandshake,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Speech,
} from "lucide-react";
import { useEffect, useState } from "react";

type Language = "en" | "fr";

const content = {
  en: {
    eyebrow: "Admissions Open",
    title: "Start the right support pathway for your child.",
    description:
      "Heaven’s Seed International School welcomes families seeking nursery education, inclusive learning, primary support, speech delay support and emotional development guidance.",
    primaryCta: "Start Enrollment",
    secondaryCta: "Contact Us",
    journeyEyebrow: "Enrollment Journey",
    journeyTitle: "Simple, caring steps for parents.",
    note:
      "Prepare your child’s age, learning level, speech concerns if any, and parent contact details before applying.",
    imageAlt:
      "Heaven’s Seed International School enrollment and inclusive learning support",
    highlights: [
      "Nursery education",
      "Inclusive learning support",
      "Primary learning guidance",
      "Speech delay support",
      "Child psychology support",
      "Parent partnership",
    ],
    steps: [
      {
        icon: MessageCircle,
        title: "Contact Us",
        text: "Share your child’s age, needs and preferred start period.",
      },
      {
        icon: CalendarCheck,
        title: "Guided Discussion",
        text: "We understand your child’s learning, speech and emotional support needs.",
      },
      {
        icon: CheckCircle2,
        title: "Start Enrollment",
        text: "We guide you clearly through the next steps with care.",
      },
    ],
  },
  fr: {
    eyebrow: "Inscriptions ouvertes",
    title: "Commencez le bon parcours de soutien pour votre enfant.",
    description:
      "Heaven’s Seed International School accueille les familles recherchant la nurserie, l’éducation inclusive, le soutien primaire, le soutien du langage et l’accompagnement émotionnel.",
    primaryCta: "Commencer l’inscription",
    secondaryCta: "Nous contacter",
    journeyEyebrow: "Parcours d’inscription",
    journeyTitle: "Des étapes simples et bienveillantes.",
    note:
      "Préparez l’âge de votre enfant, son niveau d’apprentissage, ses besoins de langage si nécessaire, et les contacts des parents.",
    imageAlt:
      "Inscription et soutien inclusif à Heaven’s Seed International School",
    highlights: [
      "Nurserie",
      "Éducation inclusive",
      "Soutien primaire",
      "Soutien du langage",
      "Soutien émotionnel",
      "Partenariat parents",
    ],
    steps: [
      {
        icon: MessageCircle,
        title: "Contactez-nous",
        text: "Partagez l’âge, les besoins et la période souhaitée.",
      },
      {
        icon: CalendarCheck,
        title: "Discussion guidée",
        text: "Nous comprenons les besoins d’apprentissage, de langage et émotionnels.",
      },
      {
        icon: CheckCircle2,
        title: "Inscription",
        text: "Nous vous guidons clairement avec soin et patience.",
      },
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

export default function EnrollmentCTA() {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    setLanguage(getInitialLanguage());

    const handleStorage = () => {
      setLanguage(getInitialLanguage());
    };

    const handleLanguageChange = (event: Event) => {
      const customEvent = event as CustomEvent<{ language?: Language }>;

      if (customEvent.detail?.language === "fr") {
        setLanguage("fr");
        return;
      }

      if (customEvent.detail?.language === "en") {
        setLanguage("en");
        return;
      }

      setLanguage(getInitialLanguage());
    };

    window.addEventListener("storage", handleStorage);
    window.addEventListener("hsa-language-change", handleLanguageChange);

    return () => {
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener("hsa-language-change", handleLanguageChange);
    };
  }, []);

  const t = content[language];

  return (
    <section
      aria-labelledby="enrollment-cta-heading"
      className="relative overflow-hidden px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#A84F3F] shadow-[0_26px_85px_rgba(168,79,63,0.18)]">
          <Image
            src="/images/Home/enrollment-image.webp"
            alt={t.imageAlt}
            fill
            sizes="100vw"
            quality={75}
            loading="lazy"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#7F342B]/88 via-[#A84F3F]/56 to-[#A84F3F]/18" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#7F342B]/58 via-transparent to-white/8" />

          <div className="absolute -left-20 -top-24 size-72 rounded-full bg-[#F4D77B]/20 blur-3xl" />
          <div className="absolute -bottom-28 right-0 size-80 rounded-full bg-[#F4B321]/18 blur-3xl" />

          <div className="relative z-10 grid min-h-[660px] gap-5 p-4 sm:min-h-[580px] sm:p-6 lg:min-h-[520px] lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:p-8 xl:p-10">
            {/* Left Glass Content */}
            <div className="rounded-[1.75rem] border border-white/20 bg-white/14 p-5 text-white shadow-[0_22px_70px_rgba(0,0,0,0.16)] backdrop-blur-xl sm:p-6 lg:p-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/14 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#F4D77B] backdrop-blur-md">
                <Sparkles size={14} />
                {t.eyebrow}
              </div>

              <h2
                id="enrollment-cta-heading"
                className="mt-4 max-w-3xl text-2xl font-extrabold leading-tight tracking-[-0.05em] text-white drop-shadow-xl sm:text-3xl lg:text-4xl xl:text-5xl"
              >
                {t.title}
              </h2>

              <p className="mt-4 max-w-2xl text-sm font-semibold leading-7 text-white/88 sm:text-base">
                {t.description}
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {t.highlights.map((item, index) => {
                  const icons = [
                    Baby,
                    HeartHandshake,
                    ShieldCheck,
                    Speech,
                    Brain,
                    CheckCircle2,
                  ];
                  const Icon = icons[index] ?? ShieldCheck;

                  return (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl border border-white/18 bg-white/14 px-4 py-3 text-xs font-bold text-white shadow-sm backdrop-blur-md sm:text-sm"
                    >
                      <Icon
                        size={17}
                        className="shrink-0 text-[#F4D77B]"
                        strokeWidth={2.5}
                      />
                      {item}
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/admissions"
                  aria-label="Start enrollment at Heaven’s Seed International School"
                  className="enroll-cta-pulse inline-flex items-center justify-center gap-2 rounded-full bg-[#F4B321] px-6 py-3 text-sm font-extrabold !text-[#7F342B] shadow-[0_18px_45px_rgba(244,179,33,0.42)] transition duration-300 hover:-translate-y-1 hover:bg-[#FFD46A]"
                >
                  <span className="text-[#7F342B]">{t.primaryCta}</span>
                  <ArrowRight size={18} className="text-[#7F342B]" />
                </Link>

                <Link
                  href="/contact"
                  aria-label="Contact Heaven’s Seed International School"
                  className="enroll-cta-float inline-flex items-center justify-center gap-2 rounded-full bg-white/16 px-6 py-3 text-sm font-extrabold !text-white ring-1 ring-white/25 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/24"
                >
                  <span className="text-white">{t.secondaryCta}</span>
                  <HeartHandshake size={18} className="text-white" />
                </Link>
              </div>
            </div>

            {/* Right Glass Process */}
            <div className="rounded-[1.75rem] border border-white/20 bg-white/16 p-5 text-white shadow-[0_22px_70px_rgba(0,0,0,0.14)] backdrop-blur-xl sm:p-6 lg:ml-auto lg:max-w-[460px]">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.26em] text-[#F4D77B] sm:text-[11px]">
                {t.journeyEyebrow}
              </p>

              <h3 className="mt-3 text-2xl font-extrabold tracking-[-0.04em] text-white sm:text-3xl">
                {t.journeyTitle}
              </h3>

              <div className="mt-5 grid gap-3">
                {t.steps.map((step, index) => {
                  const Icon = step.icon;

                  return (
                    <div
                      key={step.title}
                      className="group relative overflow-hidden rounded-3xl border border-white/16 bg-white/14 p-4 transition duration-500 hover:bg-white/22"
                    >
                      <div className="absolute -right-10 -top-10 size-24 rounded-full bg-[#F4D77B]/16 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />

                      <div className="relative flex gap-4">
                        <div className="grid size-10 shrink-0 place-items-center rounded-2xl bg-[#F4B321] text-[#7F342B] shadow-[0_14px_35px_rgba(0,0,0,0.14)]">
                          <Icon size={19} strokeWidth={2.4} />
                        </div>

                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-extrabold text-[#F4D77B]">
                              0{index + 1}
                            </span>

                            <h4 className="text-sm font-extrabold text-white sm:text-base">
                              {step.title}
                            </h4>
                          </div>

                          <p className="mt-1 text-xs leading-5 text-white/78 sm:text-sm sm:leading-6">
                            {step.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 rounded-3xl border border-[#F4D77B]/26 bg-[#7F342B]/45 p-4 backdrop-blur-md">
                <p className="text-xs font-bold leading-5 text-white/88 sm:text-sm sm:leading-6">
                  {t.note}
                </p>
              </div>
            </div>
          </div>
        </div>

        <p className="sr-only">
          Heaven’s Seed International School admissions for nursery education,
          inclusive education, primary learning support, speech delay support,
          speech therapy guidance, child psychology support and emotional support.
        </p>
      </div>
    </section>
  );
}
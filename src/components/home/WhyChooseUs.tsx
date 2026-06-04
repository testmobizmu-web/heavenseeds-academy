"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Baby,
  Brain,
  CheckCircle2,
  GraduationCap,
  HeartHandshake,
  ShieldCheck,
  Speech,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Language = "en" | "fr";

const content = {
  en: {
    eyebrow: "Why Choose Us",
    title: "A caring pathway for nursery, inclusive and primary learners.",
    description:
      "Heaven’s Seed International School supports every child with patience, structure and compassion — from early nursery learning to primary support, speech development and emotional wellbeing.",
    cta: "Start Enrollment",
    secondaryCta: "View Programmes",
    imageAlt:
      "Children learning with care at Heaven’s Seed International School",
    points: [
      {
        icon: ShieldCheck,
        title: "Safe & Caring",
        text: "A nurturing space where every child feels protected, valued and supported.",
      },
      {
        icon: Baby,
        title: "Nursery Foundation",
        text: "Gentle early learning through care, routine, play and confidence building.",
      },
      {
        icon: GraduationCap,
        title: "Primary Support",
        text: "Flexible guidance for literacy, numeracy, focus and learning progress.",
      },
      {
        icon: HeartHandshake,
        title: "Inclusive Education",
        text: "Support for children with different learning needs at their own pace.",
      },
      {
        icon: Speech,
        title: "Speech Delay Support",
        text: "Gentle help for speech, language, communication and expression.",
      },
      {
        icon: Brain,
        title: "Emotional Support",
        text: "Child psychology guidance for confidence, behaviour and wellbeing.",
      },
    ],
  },
  fr: {
    eyebrow: "Pourquoi nous choisir",
    title:
      "Un accompagnement bienveillant pour la nurserie, l’inclusion et le primaire.",
    description:
      "Heaven’s Seed International School accompagne chaque enfant avec patience, structure et compassion — de la nurserie au soutien primaire, au langage et au bien-être émotionnel.",
    cta: "Commencer l’inscription",
    secondaryCta: "Voir les programmes",
    imageAlt:
      "Enfants apprenant avec soin à Heaven’s Seed International School",
    points: [
      {
        icon: ShieldCheck,
        title: "Sécurité & soin",
        text: "Un espace rassurant où chaque enfant se sent protégé, valorisé et soutenu.",
      },
      {
        icon: Baby,
        title: "Base nurserie",
        text: "Un apprentissage doux avec soin, routine, jeu et confiance.",
      },
      {
        icon: GraduationCap,
        title: "Soutien primaire",
        text: "Un accompagnement flexible pour la lecture, les nombres et le progrès scolaire.",
      },
      {
        icon: HeartHandshake,
        title: "Éducation inclusive",
        text: "Un soutien adapté aux enfants ayant différents besoins d’apprentissage.",
      },
      {
        icon: Speech,
        title: "Soutien du langage",
        text: "Une aide douce pour la parole, le langage, la communication et l’expression.",
      },
      {
        icon: Brain,
        title: "Soutien émotionnel",
        text: "Un accompagnement pour la confiance, le comportement et le bien-être.",
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

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [scrollShift, setScrollShift] = useState(0);
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

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const progress = 1 - Math.min(Math.max(rect.top / windowHeight, -1), 1);

      setScrollShift(progress * 8);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const t = content[language];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden px-4 py-7 sm:px-6 sm:py-9 lg:px-8 lg:py-12"
      aria-label="Why choose Heaven’s Seed International School"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-6 lg:grid-cols-[0.98fr_0.86fr] lg:gap-10">
          {/* Left Text */}
          <div
            className="relative flex flex-col justify-center overflow-hidden rounded-[2rem] border border-white/45 bg-white/58 p-5 shadow-[0_24px_80px_rgba(24,53,40,0.10)] backdrop-blur-xl transition-transform duration-300 sm:p-7 lg:p-9"
            style={{
              transform: `translateY(${scrollShift * 0.18}px)`,
            }}
          >
            <div className="pointer-events-none absolute -left-16 -top-16 size-44 rounded-full bg-[#F4B321]/14 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 right-0 size-52 rounded-full bg-[#A84F3F]/12 blur-3xl" />

            <div className="relative">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.26em] text-[#A84F3F]">
                {t.eyebrow}
              </p>

              <h2 className="mt-3 max-w-2xl text-2xl font-extrabold leading-tight tracking-[-0.045em] text-[#183528] sm:text-3xl lg:text-4xl">
                {t.title}
              </h2>

              <p className="mt-4 max-w-2xl text-sm font-semibold leading-7 text-[#426252] sm:text-base sm:leading-8">
                {t.description}
              </p>

              <div className="mt-5 grid gap-3 sm:mt-6 sm:grid-cols-2">
                {t.points.map((point) => {
                  const Icon = point.icon;

                  return (
                    <article
                      key={point.title}
                      className="group rounded-3xl border border-[#A84F3F]/10 bg-white/62 p-3.5 shadow-sm transition duration-500 hover:-translate-y-1 hover:bg-white/82 hover:shadow-[0_16px_42px_rgba(24,53,40,0.08)]"
                    >
                      <div className="flex gap-3">
                        <div className="grid size-10 shrink-0 place-items-center rounded-2xl bg-[#A84F3F] text-white shadow-[0_12px_28px_rgba(168,79,63,0.18)] transition duration-500 group-hover:bg-[#7F342B]">
                          <Icon size={18} strokeWidth={2.4} />
                        </div>

                        <div>
                          <h3 className="text-sm font-extrabold tracking-[-0.02em] text-[#183528]">
                            {point.title}
                          </h3>

                          <p className="mt-1 text-xs leading-5 text-[#426252]">
                            {point.text}
                          </p>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/admissions"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F4B321] px-5 py-2.5 text-xs font-extrabold !text-[#7F342B] shadow-[0_14px_35px_rgba(244,179,33,0.28)] transition duration-300 hover:-translate-y-1 hover:bg-[#FFD46A] sm:text-sm"
                >
                  <span className="text-[#7F342B]">{t.cta}</span>
                  <ArrowRight size={16} className="text-[#7F342B]" />
                </Link>

                <Link
                  href="/programmes"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#A84F3F] px-5 py-2.5 text-xs font-extrabold !text-white shadow-[0_14px_35px_rgba(168,79,63,0.24)] transition duration-300 hover:-translate-y-1 hover:bg-[#7F342B] sm:text-sm"
                >
                  <span className="text-white">{t.secondaryCta}</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div
            className="relative mx-auto aspect-[3/2] w-full max-w-[620px] overflow-hidden rounded-[2rem] border border-white/45 bg-[#A84F3F] shadow-[0_24px_80px_rgba(168,79,63,0.16)] transition-transform duration-300 lg:max-w-[560px]"
            style={{
              transform: `translateY(-${scrollShift * 0.25}px)`,
            }}
          >
            <Image
              src="/images/Home/why-choose-us.webp"
              alt={t.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 560px"
              quality={75}
              loading="lazy"
              className="object-cover object-center transition duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#7F342B]/58 via-transparent to-transparent" />

            <div className="absolute bottom-4 left-4 right-4 rounded-3xl border border-white/22 bg-white/18 p-4 text-white shadow-lg backdrop-blur-md">
              <div className="flex items-start gap-3">
                <div className="grid size-10 shrink-0 place-items-center rounded-2xl bg-[#F4B321] text-[#7F342B]">
                  <CheckCircle2 size={19} strokeWidth={2.5} />
                </div>

                <div>
                  <p className="text-sm font-extrabold tracking-[-0.02em] text-white">
                    Heaven’s Seed International School
                  </p>
                  <p className="mt-1 text-xs leading-5 text-white/78">
                    Nursery • Inclusive Education • Primary Support • Speech
                    Delay Support
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="sr-only">
          Heaven’s Seed International School provides nursery education,
          inclusive education, primary learning support, speech delay support,
          speech therapy guidance, child psychology support and emotional support
          for children in Mauritius.
        </p>
      </div>
    </section>
  );
}
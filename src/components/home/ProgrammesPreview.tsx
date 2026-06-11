"use client";

import Link from "next/link";
import {
  ArrowRight,
  Baby,
  BookOpenCheck,
  Brain,
  CheckCircle2,
  HeartHandshake,
  Palette,
  ShieldCheck,
  Speech,
  UsersRound,
} from "lucide-react";
import { useEffect, useState } from "react";

type Language = "en" | "fr";

const content = {
  en: {
    eyebrow: "Our Programmes",
    title: "Nursery, pre-primary and inclusive early childhood education.",
    description:
      "Heaven’s Seed International School supports children through nursery care, pre-primary learning, inclusive education, social development, emotional learning and adapted pedagogical approaches.",
    trustPoints: [
      { icon: ShieldCheck, label: "Safe & Caring" },
      { icon: Baby, label: "Nursery & Pre-Primary" },
      { icon: HeartHandshake, label: "Inclusive Setup" },
      { icon: UsersRound, label: "Social Development" },
      { icon: Brain, label: "Emotional Learning" },
      { icon: Speech, label: "Occupational & Speech Support" },
    ],
    programmes: [
      {
        icon: Baby,
        title: "Nursery Care",
        age: "Early Years",
        description:
          "Nursery care with early stimulation, gentle routines, sensory play and occupational therapy support where needed.",
        highlights: [
          "Safe daily routines",
          "Sensory play activities",
          "Occupational therapy support",
        ],
      },
      {
        icon: UsersRound,
        title: "Social Development",
        age: "Confidence & Interaction",
        description:
          "Social development through play, communication, group activities and confidence-building in an inclusive setup.",
        highlights: [
          "Group interaction",
          "Communication through play",
          "Confidence-building",
        ],
      },
      {
        icon: BookOpenCheck,
        title: "Pre-Primary / Early Childhood Education",
        age: "School Readiness",
        description:
          "Pre-primary learning foundations for school readiness, early literacy, early numeracy, discovery and independent learning habits.",
        highlights: [
          "Early literacy",
          "Early numeracy",
          "School readiness",
        ],
      },
      {
        icon: Brain,
        title: "Emotional Learning & Social Communication",
        age: "Wellbeing",
        description:
          "Emotional learning and social communication support for confidence, behaviour, expression and positive relationships.",
        highlights: [
          "Emotional awareness",
          "Positive behaviour",
          "Social communication",
        ],
      },
      {
        icon: HeartHandshake,
        title: "Inclusive Education",
        age: "Adapted Learning",
        description:
          "An inclusive learning environment with adapted pedagogical approaches to support each child’s pace, needs and potential.",
        highlights: [
          "Adapted pedagogy",
          "Different learning needs",
          "Individual attention",
        ],
      },
      {
        icon: Speech,
        title: "Occupational & Speech Therapy Support",
        age: "Holistic Development",
        description:
          "Occupational and speech therapy support to foster holistic development, communication, participation and daily learning confidence.",
        highlights: [
          "Communication support",
          "Fine motor readiness",
          "Holistic development",
        ],
      },
    ],
    ctaEyebrow: "Admissions Open",
    ctaTitle: "Looking for a nursery in an inclusive setup?",
    ctaText:
      "Speak with us about your child’s age, learning needs, social development, emotional learning, communication and the best next step for enrollment.",
    cta: "View Programmes",
  },
  fr: {
    eyebrow: "Nos Programmes",
    title:
      "Nurserie, pré-primaire et éducation inclusive de la petite enfance.",
    description:
      "Heaven’s Seed International School accompagne les enfants avec la nurserie, le pré-primaire, l’éducation inclusive, le développement social, l’apprentissage émotionnel et des approches pédagogiques adaptées.",
    trustPoints: [
      { icon: ShieldCheck, label: "Sécurité & soin" },
      { icon: Baby, label: "Nurserie & Pré-primaire" },
      { icon: HeartHandshake, label: "Cadre inclusif" },
      { icon: UsersRound, label: "Développement social" },
      { icon: Brain, label: "Apprentissage émotionnel" },
      { icon: Speech, label: "Ergothérapie & orthophonie" },
    ],
    programmes: [
      {
        icon: Baby,
        title: "Nurserie",
        age: "Petite enfance",
        description:
          "Une nurserie avec stimulation précoce, routines douces, jeux sensoriels et soutien en ergothérapie si nécessaire.",
        highlights: [
          "Routines sécurisantes",
          "Jeux sensoriels",
          "Soutien en ergothérapie",
        ],
      },
      {
        icon: UsersRound,
        title: "Développement social",
        age: "Confiance & interaction",
        description:
          "Le développement social à travers le jeu, la communication, les activités de groupe et la confiance dans un cadre inclusif.",
        highlights: [
          "Interaction en groupe",
          "Communication par le jeu",
          "Confiance sociale",
        ],
      },
      {
        icon: BookOpenCheck,
        title: "Pré-primaire / Éducation de la petite enfance",
        age: "Préparation scolaire",
        description:
          "Des bases pré-primaires pour la préparation scolaire, l’éveil à la lecture, aux nombres, à la découverte et à l’autonomie.",
        highlights: [
          "Éveil à la lecture",
          "Éveil aux nombres",
          "Préparation scolaire",
        ],
      },
      {
        icon: Brain,
        title: "Apprentissage émotionnel & communication sociale",
        age: "Bien-être",
        description:
          "Un soutien pour l’apprentissage émotionnel et la communication sociale afin de développer la confiance, l’expression et les relations positives.",
        highlights: [
          "Conscience émotionnelle",
          "Comportement positif",
          "Communication sociale",
        ],
      },
      {
        icon: HeartHandshake,
        title: "Éducation inclusive",
        age: "Apprentissage adapté",
        description:
          "Un environnement inclusif avec des approches pédagogiques adaptées pour soutenir le rythme, les besoins et le potentiel de chaque enfant.",
        highlights: [
          "Pédagogie adaptée",
          "Besoins différents",
          "Attention individuelle",
        ],
      },
      {
        icon: Speech,
        title: "Soutien ergothérapie & orthophonie",
        age: "Développement global",
        description:
          "Un soutien en ergothérapie et en orthophonie pour favoriser le développement global, la communication, la participation et la confiance.",
        highlights: [
          "Soutien communication",
          "Motricité fine",
          "Développement global",
        ],
      },
    ],
    ctaEyebrow: "Inscriptions ouvertes",
    ctaTitle: "Vous cherchez une nurserie dans un cadre inclusif ?",
    ctaText:
      "Parlez-nous de l’âge de votre enfant, de ses besoins d’apprentissage, de son développement social, émotionnel, de sa communication et de la meilleure étape pour l’inscription.",
    cta: "Voir les programmes",
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

export default function ProgrammesPreview() {
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
      aria-labelledby="programmes-preview-heading"
      className="relative overflow-hidden px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* Top Heading */}
        <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.3em] text-[#B86452]">
              {t.eyebrow}
            </p>

            <h2
              id="programmes-preview-heading"
              className="mt-3 max-w-2xl text-3xl font-extrabold leading-tight tracking-[-0.045em] text-[#183528] sm:text-4xl lg:text-5xl"
            >
              {t.title}
            </h2>
          </div>

          <div className="max-w-2xl lg:ml-auto">
            <p className="text-sm font-semibold leading-7 text-[#426252] sm:text-base sm:leading-8">
              {t.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {t.trustPoints.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="inline-flex items-center gap-2 rounded-full border border-[#B86452]/10 bg-white/58 px-3 py-2 text-xs font-extrabold text-[#183528] shadow-sm backdrop-blur-md"
                  >
                    <Icon size={14} className="text-[#B86452]" />
                    {item.label}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Programme Cards */}
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3 lg:mt-10">
          {t.programmes.map((programme, index) => {
            const Icon = programme.icon;

            return (
              <article
                key={programme.title}
                className="group relative overflow-hidden rounded-[2rem] border border-white/45 bg-white/56 p-5 shadow-[0_22px_70px_rgba(24,53,40,0.09)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:bg-white/76 sm:p-6"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute -right-14 -top-14 size-36 rounded-full bg-[#F4B321]/18 blur-3xl transition duration-500 group-hover:bg-[#B86452]/18" />
                <div className="absolute -bottom-16 -left-16 size-40 rounded-full bg-[#B86452]/8 blur-3xl transition duration-500 group-hover:bg-[#944337]/10" />

                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <div className="grid size-13 place-items-center rounded-2xl bg-[#B86452] text-white shadow-[0_16px_38px_rgba(168,79,63,0.22)] transition duration-500 group-hover:-translate-y-1 group-hover:bg-[#944337]">
                      <Icon size={24} strokeWidth={2.4} />
                    </div>

                    <span className="rounded-full border border-[#F4B321]/40 bg-[#FFF4DF]/78 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#944337]">
                      {programme.age}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-extrabold tracking-[-0.035em] text-[#183528] sm:text-2xl">
                    {programme.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#426252]">
                    {programme.description}
                  </p>

                  <div className="mt-5 grid gap-2">
                    {programme.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="flex items-center gap-2 text-sm font-bold text-[#183528]"
                      >
                        <CheckCircle2
                          size={17}
                          className="shrink-0 text-[#F4B321]"
                          strokeWidth={2.6}
                        />
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 overflow-hidden rounded-[2rem] border border-white/45 bg-[#B86452] p-6 text-white shadow-[0_26px_80px_rgba(168,79,63,0.18)] sm:p-8 lg:mt-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#F4D77B]">
                {t.ctaEyebrow}
              </p>

              <h3 className="mt-3 max-w-3xl text-2xl font-extrabold leading-tight tracking-[-0.04em] sm:text-3xl">
                {t.ctaTitle}
              </h3>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-white/82 sm:text-base">
                {t.ctaText}
              </p>
            </div>

            <Link
              href="/programmes"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F4B321] px-6 py-3 text-sm font-extrabold !text-[#944337] shadow-[0_18px_45px_rgba(244,179,33,0.35)] transition duration-300 hover:-translate-y-1 hover:bg-[#FFD46A] sm:px-7 sm:py-4"
              aria-label="View Heaven’s Seed International School programmes"
            >
              <span className="text-[#944337]">{t.cta}</span>
              <ArrowRight size={18} className="text-[#944337]" />
            </Link>
          </div>
        </div>

        <p className="sr-only">
          Heaven’s Seed International School programmes include nursery
          education, pre-primary education, inclusive education, social
          development, emotional learning, social communication, adapted
          pedagogical approaches, occupational therapy support and speech therapy
          guidance.
        </p>
      </div>
    </section>
  );
}

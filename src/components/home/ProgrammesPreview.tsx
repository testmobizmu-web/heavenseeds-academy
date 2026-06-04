"use client";

import Link from "next/link";
import {
  ArrowRight,
  Baby,
  BookOpenCheck,
  Brain,
  CheckCircle2,
  GraduationCap,
  HeartHandshake,
  Palette,
  ShieldCheck,
  Sparkles,
  Speech,
} from "lucide-react";
import { useEffect, useState } from "react";

type Language = "en" | "fr";

const content = {
  en: {
    eyebrow: "Our Programmes",
    title: "Nursery, inclusive education and primary support.",
    description:
      "Heaven’s Seed International School supports children through nursery care, inclusive learning, primary guidance, speech delay support and emotional development.",
    trustPoints: [
      { icon: ShieldCheck, label: "Safe & Caring" },
      { icon: HeartHandshake, label: "Inclusive Education" },
      { icon: Speech, label: "Speech Delay Support" },
      { icon: Brain, label: "Emotional Support" },
    ],
    programmes: [
      {
        icon: Baby,
        title: "Nursery Programme",
        age: "Early Years",
        description:
          "A gentle start where young children learn through routine, care, play, stories and guided discovery.",
        highlights: ["Safe routines", "Play-based learning", "Social confidence"],
      },
      {
        icon: HeartHandshake,
        title: "Inclusive Education",
        age: "All Learners",
        description:
          "Support for children with different learning needs through patience, structure and individual attention.",
        highlights: ["Different learning needs", "Individual support", "Confidence building"],
      },
      {
        icon: GraduationCap,
        title: "Primary Support",
        age: "Primary Level",
        description:
          "Flexible support for reading, writing, numeracy, focus, homework and learning progress.",
        highlights: ["Literacy support", "Numeracy confidence", "Learning progress"],
      },
      {
        icon: Speech,
        title: "Speech Delay Support",
        age: "Communication",
        description:
          "Gentle guidance to support speech, language, vocabulary, expression and communication confidence.",
        highlights: ["Speech confidence", "Vocabulary growth", "Expression support"],
      },
      {
        icon: Brain,
        title: "Child Psychology Support",
        age: "Emotional Care",
        description:
          "Support for emotional wellbeing, confidence, social comfort, behaviour and calm learning.",
        highlights: ["Emotional support", "Behaviour guidance", "Social confidence"],
      },
      {
        icon: Palette,
        title: "Creative Development",
        age: "Daily Growth",
        description:
          "Art, stories, sensory activities and creative expression to help children learn with joy.",
        highlights: ["Creative expression", "Sensory learning", "Imagination"],
      },
    ],
    ctaEyebrow: "Admissions Open",
    ctaTitle:
      "Find the right learning pathway for your child.",
    ctaText:
      "Speak with us about nursery, inclusive education, primary learning support, speech delay support, speech therapy guidance and child psychology support.",
    cta: "View Programmes",
  },
  fr: {
    eyebrow: "Nos Programmes",
    title: "Nurserie, éducation inclusive et soutien primaire.",
    description:
      "Heaven’s Seed International School accompagne les enfants avec la nurserie, l’apprentissage inclusif, le soutien primaire, le soutien du langage et le développement émotionnel.",
    trustPoints: [
      { icon: ShieldCheck, label: "Sécurité & soin" },
      { icon: HeartHandshake, label: "Éducation inclusive" },
      { icon: Speech, label: "Soutien du langage" },
      { icon: Brain, label: "Soutien émotionnel" },
    ],
    programmes: [
      {
        icon: Baby,
        title: "Programme Nurserie",
        age: "Petite enfance",
        description:
          "Un départ doux où l’enfant apprend avec routine, soin, jeu, histoires et découverte guidée.",
        highlights: ["Routines sûres", "Apprentissage par le jeu", "Confiance sociale"],
      },
      {
        icon: HeartHandshake,
        title: "Éducation Inclusive",
        age: "Tous les enfants",
        description:
          "Un soutien pour les enfants ayant différents besoins d’apprentissage avec patience et attention.",
        highlights: ["Besoins différents", "Soutien individuel", "Confiance"],
      },
      {
        icon: GraduationCap,
        title: "Soutien Primaire",
        age: "Niveau primaire",
        description:
          "Un accompagnement flexible pour la lecture, l’écriture, les nombres, la concentration et les devoirs.",
        highlights: ["Lecture", "Numératie", "Progrès scolaire"],
      },
      {
        icon: Speech,
        title: "Soutien du Retard de Langage",
        age: "Communication",
        description:
          "Un accompagnement doux pour la parole, le vocabulaire, l’expression et la communication.",
        highlights: ["Confiance orale", "Vocabulaire", "Expression"],
      },
      {
        icon: Brain,
        title: "Soutien Psychologique",
        age: "Bien-être",
        description:
          "Un soutien pour le bien-être émotionnel, la confiance, le comportement et l’apprentissage calme.",
        highlights: ["Émotionnel", "Comportement", "Confiance sociale"],
      },
      {
        icon: Palette,
        title: "Développement Créatif",
        age: "Éveil quotidien",
        description:
          "Art, histoires, activités sensorielles et expression créative pour apprendre avec joie.",
        highlights: ["Expression", "Sensoriel", "Imagination"],
      },
    ],
    ctaEyebrow: "Inscriptions ouvertes",
    ctaTitle:
      "Trouvez le bon parcours d’apprentissage pour votre enfant.",
    ctaText:
      "Parlez-nous de la nurserie, de l’éducation inclusive, du soutien primaire, du langage et du soutien émotionnel.",
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
            <p className="text-[11px] font-extrabold uppercase tracking-[0.3em] text-[#A84F3F]">
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
                    className="inline-flex items-center gap-2 rounded-full border border-[#A84F3F]/10 bg-white/58 px-3 py-2 text-xs font-extrabold text-[#183528] shadow-sm backdrop-blur-md"
                  >
                    <Icon size={14} className="text-[#A84F3F]" />
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
                <div className="absolute -right-14 -top-14 size-36 rounded-full bg-[#F4B321]/18 blur-3xl transition duration-500 group-hover:bg-[#A84F3F]/18" />
                <div className="absolute -bottom-16 -left-16 size-40 rounded-full bg-[#A84F3F]/8 blur-3xl transition duration-500 group-hover:bg-[#7F342B]/10" />

                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <div className="grid size-13 place-items-center rounded-2xl bg-[#A84F3F] text-white shadow-[0_16px_38px_rgba(168,79,63,0.22)] transition duration-500 group-hover:-translate-y-1 group-hover:bg-[#7F342B]">
                      <Icon size={24} strokeWidth={2.4} />
                    </div>

                    <span className="rounded-full border border-[#F4B321]/40 bg-[#FFF4DF]/78 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#7F342B]">
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
        <div className="mt-8 overflow-hidden rounded-[2rem] border border-white/45 bg-[#A84F3F] p-6 text-white shadow-[0_26px_80px_rgba(168,79,63,0.18)] sm:p-8 lg:mt-10">
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
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F4B321] px-6 py-3 text-sm font-extrabold !text-[#7F342B] shadow-[0_18px_45px_rgba(244,179,33,0.35)] transition duration-300 hover:-translate-y-1 hover:bg-[#FFD46A] sm:px-7 sm:py-4"
              aria-label="View Heaven’s Seed International School programmes"
            >
              <span className="text-[#7F342B]">{t.cta}</span>
              <ArrowRight size={18} className="text-[#7F342B]" />
            </Link>
          </div>
        </div>

        <p className="sr-only">
          Heaven’s Seed International School programmes include nursery
          education, inclusive education, primary learning support, speech delay
          support, speech therapy guidance, child psychology support and
          emotional support.
        </p>
      </div>
    </section>
  );
}
"use client";

import {
  Baby,
  Brain,
  GraduationCap,
  HeartHandshake,
  ShieldCheck,
  Speech,
} from "lucide-react";
import { useEffect, useState } from "react";

type Language = "en" | "fr";

const content = {
  en: {
    eyebrow: "Why families choose Heaven’s Seed",
    title: "A caring, inclusive learning foundation for every child.",
    description:
      "We support nursery learners, primary learners and children with different learning needs through patience, structure and family partnership.",
    trustItems: [
      {
        icon: ShieldCheck,
        title: "Safe & Caring",
        text: "A nurturing environment where children feel protected, valued and encouraged.",
      },
      {
        icon: Baby,
        title: "Nursery Support",
        text: "Gentle early learning foundations through care, routine, play and confidence.",
      },
      {
        icon: GraduationCap,
        title: "Primary Support",
        text: "Flexible learning guidance for literacy, numeracy, focus and school progress.",
      },
      {
        icon: HeartHandshake,
        title: "Inclusive Education",
        text: "Support for children with different learning needs at their own pace.",
      },
      {
        icon: Speech,
        title: "Speech Delay Support",
        text: "Gentle communication guidance for speech, language and expression.",
      },
      {
        icon: Brain,
        title: "Emotional Support",
        text: "Child psychology support for confidence, behaviour and emotional wellbeing.",
      },
    ],
  },
  fr: {
    eyebrow: "Pourquoi les familles choisissent Heaven’s Seed",
    title: "Une base d’apprentissage inclusive et bienveillante pour chaque enfant.",
    description:
      "Nous accompagnons les enfants en nurserie, les élèves du primaire et les enfants ayant différents besoins d’apprentissage avec patience, structure et partenariat familial.",
    trustItems: [
      {
        icon: ShieldCheck,
        title: "Sécurité & bienveillance",
        text: "Un environnement rassurant où chaque enfant se sent protégé, valorisé et encouragé.",
      },
      {
        icon: Baby,
        title: "Soutien nurserie",
        text: "Des bases douces d’apprentissage avec soin, routine, jeu et confiance.",
      },
      {
        icon: GraduationCap,
        title: "Soutien primaire",
        text: "Un accompagnement flexible pour la lecture, les nombres, la concentration et le progrès.",
      },
      {
        icon: HeartHandshake,
        title: "Éducation inclusive",
        text: "Un soutien adapté aux enfants ayant différents besoins d’apprentissage.",
      },
      {
        icon: Speech,
        title: "Soutien du langage",
        text: "Un accompagnement doux pour la parole, le langage et l’expression.",
      },
      {
        icon: Brain,
        title: "Soutien émotionnel",
        text: "Un accompagnement pour la confiance, le comportement et le bien-être émotionnel.",
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

export default function TrustStrip() {
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
      className="relative z-10 px-4 py-7 sm:px-6 sm:py-9 lg:px-8 lg:py-10"
      aria-label="Heaven’s Seed International School trust highlights"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 grid gap-4 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#A84F3F]">
              {t.eyebrow}
            </p>

            <h2 className="mt-3 max-w-2xl text-3xl font-extrabold leading-tight tracking-[-0.045em] text-[#183528] sm:text-4xl">
              {t.title}
            </h2>
          </div>

          <p className="max-w-2xl text-sm font-semibold leading-7 text-[#426252] sm:text-base lg:ml-auto">
            {t.description}
          </p>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-white/45 bg-white/50 shadow-[0_24px_80px_rgba(24,53,40,0.10)] backdrop-blur-xl">
          <div className="grid grid-cols-1 divide-y divide-white/55 md:grid-cols-2 md:divide-x md:divide-y-0 xl:grid-cols-3">
            {t.trustItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group relative overflow-hidden p-5 transition duration-500 hover:bg-white/70 sm:p-6 lg:p-7"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute -right-10 -top-10 size-28 rounded-full bg-[#F4B321]/18 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />
                  <div className="absolute -bottom-10 -left-10 size-28 rounded-full bg-[#A84F3F]/10 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />

                  <div className="relative flex items-start gap-4">
                    <div className="grid size-12 shrink-0 place-items-center rounded-2xl bg-[#A84F3F] text-white shadow-[0_14px_35px_rgba(168,79,63,0.22)] transition duration-500 group-hover:-translate-y-1 group-hover:bg-[#7F342B]">
                      <Icon size={22} strokeWidth={2.4} />
                    </div>

                    <div>
                      <h3 className="text-base font-extrabold tracking-[-0.02em] text-[#183528]">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-[#426252]">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <p className="sr-only">
          Heaven’s Seed International School supports nursery education,
          inclusive education, primary learning support, speech delay support,
          speech therapy guidance, child psychology support and emotional support
          for children in Mauritius.
        </p>
      </div>
    </section>
  );
}
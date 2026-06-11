"use client";

import {
  Baby,
  Brain,
  HeartHandshake,
  ShieldCheck,
  Speech,
  UsersRound,
} from "lucide-react";
import { useEffect, useState } from "react";

type Language = "en" | "fr";

const content = {
  en: {
    eyebrow: "Why families choose Heaven’s Seed",
    title: "A caring, inclusive early childhood foundation for every child.",
    description:
      "We support nursery and pre-primary children through social, emotional and early learning development in an inclusive setup, with adapted pedagogical approaches and family partnership.",
    trustItems: [
      {
        icon: Baby,
        title: "Nursery & Pre-Primary",
        text: "Gentle early childhood foundations through care, routine, play, discovery and confidence-building.",
      },
      {
        icon: HeartHandshake,
        title: "Inclusive Education",
        text: "An inclusive setup where children with different learning needs are supported with patience and structure.",
      },
      {
        icon: UsersRound,
        title: "Social Development",
        text: "Helping children build interaction, participation, social confidence and positive relationships.",
      },
      {
        icon: Brain,
        title: "Emotional Learning",
        text: "Supporting emotional awareness, calm learning, behaviour, confidence and wellbeing.",
      },
      {
        icon: Speech,
        title: "Occupational & Speech Therapy Support",
        text: "Holistic support for communication, participation, sensory readiness and daily learning confidence.",
      },
      {
        icon: ShieldCheck,
        title: "Safe & Caring",
        text: "A nurturing environment where every child feels protected, valued, encouraged and understood.",
      },
    ],
  },
  fr: {
    eyebrow: "Pourquoi les familles choisissent Heaven’s Seed",
    title: "Une base inclusive et bienveillante pour la petite enfance.",
    description:
      "Nous accompagnons les enfants en nurserie et prÃ©-primaire dans leur dÃ©veloppement social, Ã©motionnel et leurs premiers apprentissages, dans un cadre inclusif avec des approches pÃ©dagogiques adaptÃ©es et un partenariat familial.",
    trustItems: [
      {
        icon: Baby,
        title: "Nurserie & PrÃ©-primaire",
        text: "Des bases douces pour la petite enfance avec soin, routine, jeu, dÃ©couverte et confiance.",
      },
      {
        icon: HeartHandshake,
        title: "Ã‰ducation inclusive",
        text: "Un cadre inclusif oÃ¹ les enfants ayant diffÃ©rents besoins sont accompagnÃ©s avec patience et structure.",
      },
      {
        icon: UsersRound,
        title: "DÃ©veloppement social",
        text: "Aider l’enfant Ã  dÃ©velopper l’interaction, la participation, la confiance sociale et les relations positives.",
      },
      {
        icon: Brain,
        title: "Apprentissage Ã©motionnel",
        text: "Soutenir la conscience Ã©motionnelle, le calme, le comportement, la confiance et le bien-Ãªtre.",
      },
      {
        icon: Speech,
        title: "Soutien ergothÃ©rapie & orthophonie",
        text: "Un accompagnement global pour la communication, la participation, la prÃ©paration sensorielle et la confiance quotidienne.",
      },
      {
        icon: ShieldCheck,
        title: "SÃ©curitÃ© & bienveillance",
        text: "Un environnement rassurant oÃ¹ chaque enfant se sent protÃ©gÃ©, valorisÃ©, encouragÃ© et compris.",
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
            <p className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#B86452]">
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
                  <div className="absolute -bottom-10 -left-10 size-28 rounded-full bg-[#B86452]/10 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />

                  <div className="relative flex items-start gap-4">
                    <div className="grid size-12 shrink-0 place-items-center rounded-2xl bg-[#B86452] text-white shadow-[0_14px_35px_rgba(168,79,63,0.22)] transition duration-500 group-hover:-translate-y-1 group-hover:bg-[#944337]">
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
          pre-primary education, inclusive education, social development,
          emotional learning, communication development, adapted pedagogical
          approaches, occupational therapy support and speech therapy guidance
          for children in Mauritius.
        </p>
      </div>
    </section>
  );
}

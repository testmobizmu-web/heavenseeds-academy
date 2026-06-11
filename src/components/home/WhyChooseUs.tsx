"use client";

import Link from "next/link";
import {
  ArrowRight,
  Baby,
  Brain,
  HeartHandshake,
  Play,
  ShieldCheck,
  Speech,
  UsersRound,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Language = "en" | "fr";

const videoCards = [
  {
    youtubeId: "iCVympHwNS8",
    poster: "/images/Home/why-video-1-poster.webp",
    label: "Nursery & Pre-Primary",
    labelFr: "Nurserie & Pré-primaire",
    position: "start",
  },
  {
    youtubeId: "9CcCDTKoIWE",
    poster: "/images/Home/why-video-2-poster.webp",
    label: "Social Development",
    labelFr: "Développement social",
    position: "end",
  },
  {
    youtubeId: "Mn4pZBuDzjc",
    poster: "/images/Home/why-video-3-poster.webp",
    label: "Inclusive Learning",
    labelFr: "Apprentissage inclusif",
    position: "start",
  },
];

const content = {
  en: {
    eyebrow: "Why Choose Us",
    title:
      "A caring inclusive setup for nursery and pre-primary development.",
    description:
      "We support children through social, emotional and early learning development in an inclusive setup, using adapted pedagogical approaches, holistic guidance, occupational therapy support and speech therapy guidance.",
    cta: "Start Enrollment",
    secondaryCta: "View Programmes",
    videoEyebrow: "Learning in Motion",
    videoTitle: "A warm look at care, play and inclusive learning.",
    play: "Play video",
    points: [
      {
        icon: ShieldCheck,
        title: "Safe & Caring",
        text: "A nurturing space where every child feels protected, valued and supported.",
      },
      {
        icon: Baby,
        title: "Nursery & Pre-Primary Foundation",
        text: "Gentle early childhood learning through routine, care, play and discovery.",
      },
      {
        icon: HeartHandshake,
        title: "Inclusive Education",
        text: "An inclusive setup that supports different learning needs with patience and structure.",
      },
      {
        icon: UsersRound,
        title: "Social Development",
        text: "Helping children build confidence, interaction, participation and positive relationships.",
      },
      {
        icon: Brain,
        title: "Emotional Learning",
        text: "Supporting emotional awareness, calm learning, behaviour and self-confidence.",
      },
      {
        icon: Speech,
        title: "Occupational & Speech Therapy Support",
        text: "Holistic support for communication, participation, sensory readiness and daily confidence.",
      },
    ],
  },
  fr: {
    eyebrow: "Pourquoi nous choisir",
    title:
      "Un cadre inclusif et bienveillant pour la nurserie et le pré-primaire.",
    description:
      "Nous accompagnons les enfants dans leur développement social, émotionnel et leurs premiers apprentissages dans un cadre inclusif, avec des approches pédagogiques adaptées, un accompagnement global, un soutien en ergothérapie et en orthophonie.",
    cta: "Commencer l’inscription",
    secondaryCta: "Voir les programmes",
    videoEyebrow: "Apprendre en mouvement",
    videoTitle: "Un aperçu chaleureux du soin, du jeu et de l’inclusion.",
    play: "Lire la vidéo",
    points: [
      {
        icon: ShieldCheck,
        title: "Sécurité & soin",
        text: "Un espace rassurant où chaque enfant se sent protégé, valorisé et soutenu.",
      },
      {
        icon: Baby,
        title: "Base nurserie & pré-primaire",
        text: "Un apprentissage doux de la petite enfance à travers routine, soin, jeu et découverte.",
      },
      {
        icon: HeartHandshake,
        title: "Éducation inclusive",
        text: "Un cadre inclusif qui accompagne différents besoins avec patience et structure.",
      },
      {
        icon: UsersRound,
        title: "Développement social",
        text: "Aider l’enfant à développer la confiance, l’interaction, la participation et les relations positives.",
      },
      {
        icon: Brain,
        title: "Apprentissage émotionnel",
        text: "Soutenir la conscience émotionnelle, le calme, le comportement et la confiance.",
      },
      {
        icon: Speech,
        title: "Soutien ergothérapie & orthophonie",
        text: "Un accompagnement global pour la communication, la participation et la confiance quotidienne.",
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

function getEmbedUrl(youtubeId: string) {
  const params = new URLSearchParams({
    autoplay: "1",
    mute: "0",
    controls: "1",
    rel: "0",
    modestbranding: "1",
    playsinline: "1",
    iv_load_policy: "3",
  });

  return `https://www.youtube-nocookie.com/embed/${youtubeId}?${params.toString()}`;
}

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [language, setLanguage] = useState<Language>("en");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

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
      ref={sectionRef}
      className="relative overflow-hidden px-4 py-7 sm:px-6 sm:py-9 lg:px-8 lg:py-12"
      aria-label="Why choose Heaven’s Seed International School"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-stretch gap-6 lg:grid-cols-[0.98fr_0.92fr] lg:gap-10">
          {/* Left Text */}
          <div className="relative flex flex-col justify-center overflow-hidden rounded-[2rem] border border-white/45 bg-white/58 p-5 shadow-[0_24px_80px_rgba(24,53,40,0.10)] backdrop-blur-xl sm:p-7 lg:p-9">
            <div className="pointer-events-none absolute -left-16 -top-16 size-44 rounded-full bg-[#F4B321]/14 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 right-0 size-52 rounded-full bg-[#B86452]/12 blur-3xl" />

            <div className="relative">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.26em] text-[#B86452]">
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
                      className="group rounded-3xl border border-[#B86452]/10 bg-white/62 p-3.5 shadow-sm transition duration-500 hover:-translate-y-1 hover:bg-white/82 hover:shadow-[0_16px_42px_rgba(24,53,40,0.08)]"
                    >
                      <div className="flex gap-3">
                        <div className="grid size-10 shrink-0 place-items-center rounded-2xl bg-[#B86452] text-white shadow-[0_12px_28px_rgba(168,79,63,0.18)] transition duration-500 group-hover:bg-[#944337]">
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
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F4B321] px-5 py-2.5 text-xs font-extrabold !text-[#944337] shadow-[0_14px_35px_rgba(244,179,33,0.28)] transition duration-300 hover:-translate-y-1 hover:bg-[#FFD46A] sm:text-sm"
                >
                  <span className="text-[#944337]">{t.cta}</span>
                  <ArrowRight size={16} className="text-[#944337]" />
                </Link>

                <Link
                  href="/programmes"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#B86452] px-5 py-2.5 text-xs font-extrabold !text-white shadow-[0_14px_35px_rgba(168,79,63,0.24)] transition duration-300 hover:-translate-y-1 hover:bg-[#944337] sm:text-sm"
                >
                  <span className="text-white">{t.secondaryCta}</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Clean YouTube Players */}
          <div
            className="relative overflow-hidden rounded-[2rem] border border-white/45 bg-white/70 p-4 shadow-[0_24px_80px_rgba(168,79,63,0.13)] backdrop-blur-xl sm:p-5"
            style={{
              backgroundImage: "url('/images/Home/why-choose-video-bg.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-white/88" />
            <div className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-[#F4B321]/18 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 left-0 size-60 rounded-full bg-[#B86452]/12 blur-3xl" />

            <div className="relative flex h-full min-h-[590px] flex-col justify-center gap-5">
              <div className="rounded-[1.5rem] border border-[#B86452]/10 bg-white/82 p-4 shadow-[0_14px_45px_rgba(24,53,40,0.08)] backdrop-blur-md">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#B86452]">
                  {t.videoEyebrow}
                </p>
                <h3 className="mt-2 text-xl font-extrabold tracking-[-0.04em] text-[#183528] sm:text-2xl">
                  {t.videoTitle}
                </h3>
              </div>

              <div className="flex flex-1 flex-col justify-center gap-5">
                {videoCards.map((video, index) => {
                  const isActive = activeIndex === index;

                  const align =
                    video.position === "end"
                      ? "ml-auto w-[90%] sm:w-[84%]"
                      : "mr-auto w-[90%] sm:w-[78%]";

                  const label = language === "fr" ? video.labelFr : video.label;

                  return (
                    <div
                      key={video.youtubeId}
                      className={`${align} transition duration-500 hover:-translate-y-1`}
                    >
                      <div className="group relative aspect-video overflow-hidden rounded-[1.25rem] bg-black shadow-[0_18px_50px_rgba(24,53,40,0.14)] ring-1 ring-[#B86452]/10">
                        {isActive ? (
                          <iframe
                            key={`${video.youtubeId}-player`}
                            src={getEmbedUrl(video.youtubeId)}
                            title={label}
                            allow="autoplay; encrypted-media; picture-in-picture"
                            allowFullScreen
                            className="absolute inset-0 h-full w-full"
                            loading="eager"
                          />
                        ) : (
                          <button
                            type="button"
                            onClick={() => setActiveIndex(index)}
                            aria-label={`${t.play}: ${label}`}
                            className="absolute inset-0 block h-full w-full"
                          >
                            <img
                              src={video.poster}
                              alt={label}
                              loading="lazy"
                              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-black/18 transition duration-300 group-hover:bg-black/10" />

                            <span className="absolute inset-0 grid place-items-center">
                              <span className="grid size-16 place-items-center rounded-full bg-black/58 text-white shadow-[0_18px_45px_rgba(0,0,0,0.25)] backdrop-blur-md transition duration-300 group-hover:scale-105 group-hover:bg-[#F4B321] group-hover:text-[#944337]">
                                <Play
                                  size={25}
                                  className="ml-0.5 fill-current"
                                />
                              </span>
                            </span>
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <p className="sr-only">
          Heaven’s Seed International School provides nursery education,
          pre-primary education, inclusive education, social development,
          emotional learning, communication development, adapted pedagogical
          approaches, occupational therapy support and speech therapy guidance
          for children in Mauritius.
        </p>
      </div>
    </section>
  );
}

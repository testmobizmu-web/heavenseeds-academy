"use client";

import Link from "next/link";
import {
  ArrowRight,
  Baby,
  Brain,
  GraduationCap,
  HeartHandshake,
  ShieldCheck,
  Speech,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Language = "en" | "fr";

const content = {
  en: {
    eyebrow: "Heaven’s Seed International School",
    title: "Nursery, pre-primary and inclusive early childhood education.",
    description:
      "A caring inclusive learning community supporting social, emotional, communication and early learning development through adapted pedagogical approaches.",
    primaryCta: "Start Enrollment",
    secondaryCta: "Explore Programmes",
    badges: [
      "Nursery",
      "Pre-Primary",
      "Primary Support",
      "Inclusive Education",
      "Speech Delay Support",
      "Child Psychology Support",
    ],
    cards: [
      {
        icon: Baby,
        title: "Nursery & Pre-Primary",
        text: "Gentle foundations for early learning.",
      },
      {
        icon: GraduationCap,
        title: "Primary Support",
        text: "Learning guidance for growing children.",
      },
      {
        icon: HeartHandshake,
        title: "Inclusive Care",
        text: "Support for different learning needs.",
      },
    ],
  },
  fr: {
    eyebrow: "Heaven’s Seed International School",
    title: "Nurserie, pré-primaire, primaire & inclusion pour chaque enfant.",
    description:
      "Une communauté d’apprentissage bienveillante offrant la nurserie, le pré-primaire, le soutien primaire, l’éducation inclusive, l’accompagnement du langage et le développement émotionnel.",
    primaryCta: "Commencer l’inscription",
    secondaryCta: "Voir les programmes",
    badges: [
      "Nurserie",
      "Pré-primaire",
      "Primaire",
      "Éducation inclusive",
      "Soutien du langage",
      "Soutien émotionnel",
    ],
    cards: [
      {
        icon: Baby,
        title: "Nurserie & Pré-primaire",
        text: "Des bases douces pour bien apprendre.",
      },
      {
        icon: GraduationCap,
        title: "Soutien primaire",
        text: "Un accompagnement pour progresser.",
      },
      {
        icon: HeartHandshake,
        title: "Soin inclusif",
        text: "Soutien pour différents besoins.",
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

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const lastScrollY = useRef(0);
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    setLanguage(getInitialLanguage());

    const handleStorage = () => setLanguage(getInitialLanguage());

    const handleLanguageChange = (event: Event) => {
      const customEvent = event as CustomEvent<{ language?: Language }>;

      if (
        customEvent.detail?.language === "fr" ||
        customEvent.detail?.language === "en"
      ) {
        setLanguage(customEvent.detail.language);
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
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.playsInline = true;

    const playVideo = async () => {
      try {
        if (video.paused) await video.play();
      } catch {
        // Some browsers delay autoplay until the video is ready.
      }
    };

    const handleCanPlay = () => {
      playVideo();
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY.current + 10;
      const scrollingUp = currentScrollY < lastScrollY.current - 10;

      if (scrollingDown && currentScrollY > 120) {
        video.pause();
      }

      if (scrollingUp && currentScrollY < 900) {
        playVideo();
      }

      lastScrollY.current = currentScrollY;
    };

    video.addEventListener("canplay", handleCanPlay);
    window.addEventListener("scroll", handleScroll, { passive: true });

    playVideo();

    return () => {
      video.removeEventListener("canplay", handleCanPlay);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const t = content[language];

  return (
    <section
      className="relative w-full overflow-hidden bg-white"
      aria-label="Heaven’s Seed International School homepage hero"
    >
      {/* Video */}
      <div className="relative aspect-video w-full overflow-hidden bg-[#A84F3F] lg:aspect-[16/7]">
        <video
          ref={videoRef}
          className="block h-full w-full bg-[#A84F3F] object-cover"
          poster="/images/Hero/heaven-seeds-hero-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="Heaven’s Seed International School nursery pre-primary primary and inclusive education video"
        >
          <source
            src="/Video/Hero/heaven-seeds-hero-optimized.mp4"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-gradient-to-t from-[#7F342B]/52 via-[#7F342B]/8 to-transparent lg:bg-gradient-to-r lg:from-[#7F342B]/88 lg:via-[#A84F3F]/42 lg:to-transparent" />
        <div className="absolute inset-0 hidden bg-gradient-to-t from-[#7F342B]/42 via-transparent to-transparent lg:block" />

        {/* Desktop overlay text */}
        <div className="absolute inset-0 hidden items-center lg:flex">
          <div className="w-full px-10 xl:px-14">
            <div className="max-w-3xl">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/22 bg-white/12 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.24em] text-[#F4D77B] shadow-lg backdrop-blur-md">
                <HeartHandshake size={14} />
                {t.eyebrow}
              </p>

              <h1 className="mt-5 max-w-3xl text-6xl font-extrabold leading-[1.02] tracking-[-0.055em] text-white drop-shadow-2xl xl:text-7xl">
                {t.title}
              </h1>

              <p className="mt-5 max-w-2xl text-xl font-semibold leading-8 text-white/92 drop-shadow-xl">
                {t.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {t.badges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-white/20 bg-white/12 px-3 py-1.5 text-[11px] font-extrabold text-white/88 backdrop-blur-md"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex gap-3">
                <Link
                  href="/admissions"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F4B321] px-7 py-4 text-base font-extrabold !text-[#7F342B] shadow-[0_18px_45px_rgba(244,179,33,0.36)] transition hover:-translate-y-1 hover:bg-[#FFD46A]"
                >
                  <span className="text-[#7F342B]">{t.primaryCta}</span>
                  <ArrowRight size={18} className="text-[#7F342B]" />
                </Link>

                <Link
                  href="/programmes"
                  className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/14 px-7 py-4 text-base font-extrabold !text-white shadow-[0_18px_45px_rgba(127,52,43,0.22)] backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/22"
                >
                  <span className="text-white">{t.secondaryCta}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop cards */}
        <div className="absolute bottom-5 right-5 hidden max-w-[520px] grid-cols-3 gap-3 xl:grid">
          {t.cards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className="rounded-3xl border border-white/18 bg-white/14 p-4 text-white shadow-[0_18px_55px_rgba(0,0,0,0.16)] backdrop-blur-xl"
              >
                <div className="grid size-10 place-items-center rounded-2xl bg-[#F4B321] text-[#7F342B]">
                  <Icon size={19} strokeWidth={2.5} />
                </div>

                <h2 className="mt-3 text-sm font-extrabold tracking-[-0.02em]">
                  {card.title}
                </h2>

                <p className="mt-1 text-xs leading-5 text-white/74">
                  {card.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile text below video */}
      <div className="relative z-10 rounded-b-[2rem] bg-[#A84F3F] px-4 pb-7 pt-5 text-white shadow-[0_18px_55px_rgba(168,79,63,0.20)] sm:px-6 lg:hidden">
        <p className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/12 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#F4D77B]">
          <HeartHandshake size={13} />
          {t.eyebrow}
        </p>

        <h1 className="mt-4 text-[30px] font-extrabold leading-[1.05] tracking-[-0.05em] text-white min-[390px]:text-[34px] sm:text-[42px]">
          {t.title}
        </h1>

        <p className="mt-3 text-sm font-semibold leading-7 text-white/88 sm:text-base sm:leading-8">
          {t.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {t.badges.slice(0, 4).map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-white/16 bg-white/10 px-3 py-1.5 text-[11px] font-extrabold text-white/84"
            >
              {badge}
            </span>
          ))}
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <Link
            href="/admissions"
            className="inline-flex h-[52px] items-center justify-center gap-2 rounded-full bg-[#F4B321] px-6 text-sm font-extrabold !text-[#7F342B] shadow-[0_18px_45px_rgba(244,179,33,0.35)] transition hover:bg-[#FFD46A]"
          >
            <span className="text-[#7F342B]">{t.primaryCta}</span>
            <ArrowRight size={17} className="text-[#7F342B]" />
          </Link>

          <Link
            href="/programmes"
            className="inline-flex h-[52px] items-center justify-center rounded-full border border-white/22 bg-white/12 px-6 text-sm font-extrabold !text-white backdrop-blur-md transition hover:bg-white/20"
          >
            <span className="text-white">{t.secondaryCta}</span>
          </Link>
        </div>
      </div>

      <p className="sr-only">
        Heaven’s Seed International School offers nursery education,
        pre-primary education, primary learning support, inclusive education,
        speech delay support, speech therapy guidance, child psychology support
        and emotional support for children in Mauritius.
      </p>
    </section>
  );
}
"use client";

import Link from "next/link";
import {
  ArrowRight,
  Brain,
  HeartHandshake,
  ShieldCheck,
  Speech,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Language = "en" | "fr";

const content = {
  en: {
    eyebrow: "Heaven’s Seed International School",
    title: "Nursery, inclusive & primary support for every child.",
    description:
      "A caring learning community offering nursery education, inclusive support, primary learning, speech delay guidance and emotional development support.",
    primaryCta: "Start Enrollment",
    secondaryCta: "Explore Programmes",
    badges: [
      "Nursery",
      "Inclusive Education",
      "Speech Delay Support",
      "Child Psychology Support",
    ],
    cards: [
      {
        icon: ShieldCheck,
        title: "Safe & Caring",
        text: "A nurturing space where children feel valued.",
      },
      {
        icon: Speech,
        title: "Speech Support",
        text: "Gentle guidance for speech and expression.",
      },
      {
        icon: Brain,
        title: "Holistic Growth",
        text: "Emotional, social and learning support.",
      },
    ],
  },
  fr: {
    eyebrow: "Heaven’s Seed International School",
    title: "Nurserie, inclusion & soutien primaire pour chaque enfant.",
    description:
      "Une communauté d’apprentissage bienveillante offrant la nurserie, l’éducation inclusive, le soutien primaire, l’accompagnement du langage et le développement émotionnel.",
    primaryCta: "Commencer l’inscription",
    secondaryCta: "Voir les programmes",
    badges: ["Nurserie", "Éducation inclusive", "Soutien du langage", "Soutien émotionnel"],
    cards: [
      {
        icon: ShieldCheck,
        title: "Sécurité & soin",
        text: "Un espace rassurant où l’enfant se sent valorisé.",
      },
      {
        icon: Speech,
        title: "Soutien du langage",
        text: "Un accompagnement doux pour la parole.",
      },
      {
        icon: Brain,
        title: "Développement global",
        text: "Soutien émotionnel, social et scolaire.",
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
      if (customEvent.detail?.language === "fr" || customEvent.detail?.language === "en") {
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
        // Autoplay may wait for user/browser readiness.
      }
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY.current + 8;
      const scrollingUp = currentScrollY < lastScrollY.current - 8;

      if (scrollingDown && currentScrollY > 90) video.pause();
      if (scrollingUp) playVideo();

      lastScrollY.current = currentScrollY;
    };

    video.addEventListener("canplay", playVideo);
    window.addEventListener("scroll", handleScroll, { passive: true });

    playVideo();

    return () => {
      video.removeEventListener("canplay", playVideo);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const t = content[language];

  return (
    <section
      className="relative m-0 w-full overflow-hidden bg-white p-0"
      aria-label="Heaven’s Seed International School homepage hero"
    >
      {/* Mobile: full 16:9 video visible */}
      <div className="relative aspect-video w-full overflow-hidden bg-[#A84F3F] lg:hidden">
        <video
          ref={videoRef}
          className="block h-full w-full bg-[#A84F3F] object-cover"
          poster="/images/Hero/heaven-seeds-hero-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="Heaven’s Seed International School video"
        >
          <source src="/Video/Hero/heaven-seeds-hero-optimized.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-t from-[#7F342B]/48 via-transparent to-transparent" />
      </div>

      {/* Mobile text card below video */}
      <div className="relative z-10 rounded-b-[2rem] bg-[#A84F3F] px-4 pb-7 pt-5 text-white shadow-[0_18px_55px_rgba(168,79,63,0.20)] lg:hidden">
        <p className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/12 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#F4D77B]">
          <HeartHandshake size={13} />
          {t.eyebrow}
        </p>

        <h1 className="mt-4 text-[31px] font-extrabold leading-[1.05] tracking-[-0.05em] text-white min-[390px]:text-[35px]">
          {t.title}
        </h1>

        <p className="mt-3 text-sm font-semibold leading-7 text-white/88">
          {t.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {t.badges.slice(0, 3).map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-white/16 bg-white/10 px-3 py-1.5 text-[11px] font-extrabold text-white/84"
            >
              {badge}
            </span>
          ))}
        </div>

        <div className="mt-5 grid gap-3">
          <Link
            href="/admissions"
            className="inline-flex h-13 items-center justify-center gap-2 rounded-full bg-[#F4B321] px-6 text-sm font-extrabold !text-[#7F342B] shadow-[0_18px_45px_rgba(244,179,33,0.35)] transition hover:bg-[#FFD46A]"
          >
            <span className="text-[#7F342B]">{t.primaryCta}</span>
            <ArrowRight size={17} className="text-[#7F342B]" />
          </Link>

          <Link
            href="/programmes"
            className="inline-flex h-13 items-center justify-center rounded-full border border-white/22 bg-white/12 px-6 text-sm font-extrabold !text-white backdrop-blur-md transition hover:bg-white/20"
          >
            <span className="text-white">{t.secondaryCta}</span>
          </Link>
        </div>
      </div>

      {/* Desktop hero with overlay text */}
      <div className="relative hidden aspect-[16/7] w-full overflow-hidden bg-[#A84F3F] lg:block">
        <video
          ref={videoRef}
          className="block h-full w-full bg-[#A84F3F] object-cover"
          poster="/images/Hero/heaven-seeds-hero-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="Heaven’s Seed International School video"
        >
          <source src="/Video/Hero/heaven-seeds-hero-optimized.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-r from-[#7F342B]/88 via-[#A84F3F]/42 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#7F342B]/52 via-transparent to-transparent" />

        <div className="absolute inset-0 flex items-center">
          <div className="w-full px-10 xl:px-14">
            <div className="hero-copy max-w-3xl">
              <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/22 bg-white/12 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.24em] text-[#F4D77B] shadow-lg backdrop-blur-md">
                <HeartHandshake size={14} />
                {t.eyebrow}
              </p>

              <h1 className="max-w-3xl text-6xl font-extrabold leading-[1.02] tracking-[-0.055em] text-white drop-shadow-2xl xl:text-7xl">
                {t.title}
              </h1>

              <p className="mt-5 max-w-xl text-xl font-semibold leading-8 text-white/92 drop-shadow-xl">
                {t.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {t.badges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-white/20 bg-white/12 px-3 py-1.5 text-[11px] font-extrabold text-white/88 backdrop-blur-md"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex gap-3">
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

      <p className="sr-only">
        Heaven’s Seed International School offers nursery education, inclusive
        education, primary learning support, speech delay support, speech therapy
        guidance, child psychology support and emotional support for children in
        Mauritius.
      </p>
    </section>
  );
}
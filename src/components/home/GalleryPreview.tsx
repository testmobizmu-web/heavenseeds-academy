"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Baby,
  Brain,
  Camera,
  GraduationCap,
  HeartHandshake,
  Images,
  Sparkles,
  Speech,
} from "lucide-react";
import { useEffect, useState } from "react";

type Language = "en" | "fr";

const content = {
  en: {
    eyebrow: "Gallery Preview",
    title: "Moments of care, communication and inclusive learning.",
    description:
      "A warm look inside Heaven’s Seed International School — nursery learning, pre-primary learning, primary support, inclusive education, speech development, emotional care and creative discovery.",
    cta: "View Gallery",
    inclusiveLabel: "Inclusive Care",
    sr:
      "Heaven’s Seed International School gallery preview showing nursery education, pre-primary education, primary support, inclusive education, speech delay support, speech therapy guidance, child psychology support and emotional care.",
    images: [
      {
        src: "/images/Gallery/gallery-01.jpg",
        label: "Nursery Learning",
        alt: "Nursery children learning in a warm caring classroom environment",
        isInclusive: false,
      },
      {
        src: "/images/Gallery/gallery-02.jpg",
        label: "Creative Expression",
        alt: "Children doing art and creative learning activities",
        isInclusive: false,
      },
      {
        src: "/images/Gallery/gallery-03.jpg",
        label: "Speech & Language",
        alt: "Children listening to story time for language and speech development",
        isInclusive: false,
      },
      {
        src: "/images/Gallery/gallery-04.jpg",
        label: "Outdoor Discovery",
        alt: "Children playing safely outdoors in a caring school environment",
        isInclusive: false,
      },
      {
        src: "/images/Gallery/gallery-05.jpg",
        label: "Primary Support",
        alt: "Teacher helping a child with alphabet and early literacy learning",
        isInclusive: false,
      },
      {
        src: "/images/Gallery/gallery-06.jpg",
        label: "Inclusive Learning",
        alt: "Children building blocks together in an inclusive classroom setting",
        isInclusive: true,
      },
      {
        src: "/images/Gallery/gallery-07.jpg",
        label: "Pre-Primary Activities",
        alt: "Children enjoying pre-primary learning activities",
        isInclusive: false,
      },
      {
        src: "/images/Gallery/gallery-08.jpg",
        label: "Healthy Routines",
        alt: "Children learning hygiene and healthy daily routines",
        isInclusive: false,
      },
      {
        src: "/images/Gallery/gallery-09.jpg",
        label: "Emotional Support",
        alt: "Children in a calm caring classroom routine",
        isInclusive: false,
      },
      {
        src: "/images/Gallery/gallery-10.jpg",
        label: "Nature Learning",
        alt: "Children exploring plants and nature in a garden learning activity",
        isInclusive: false,
      },
    ],
    badges: [
      { icon: Baby, label: "Nursery" },
      { icon: GraduationCap, label: "Pre-Primary" },
      { icon: HeartHandshake, label: "Inclusive" },
      { icon: Speech, label: "Speech Support" },
      { icon: Brain, label: "Emotional Care" },
    ],
  },
  fr: {
    eyebrow: "Aperçu Galerie",
    title: "Des moments de soin, de communication et d’apprentissage inclusif.",
    description:
      "Un aperçu chaleureux de Heaven’s Seed International School — nurserie, pré-primaire, soutien primaire, éducation inclusive, développement du langage, soutien émotionnel et découverte créative.",
    cta: "Voir la galerie",
    inclusiveLabel: "Soin inclusif",
    sr:
      "Aperçu de la galerie Heaven’s Seed International School montrant la nurserie, le pré-primaire, le soutien primaire, l’éducation inclusive, le soutien du langage, l’accompagnement émotionnel et le développement de l’enfant.",
    images: [
      {
        src: "/images/Gallery/gallery-01.jpg",
        label: "Nurserie",
        alt: "Enfants en nurserie dans une classe chaleureuse et bienveillante",
        isInclusive: false,
      },
      {
        src: "/images/Gallery/gallery-02.jpg",
        label: "Expression créative",
        alt: "Enfants faisant des activités artistiques et créatives",
        isInclusive: false,
      },
      {
        src: "/images/Gallery/gallery-03.jpg",
        label: "Langage & parole",
        alt: "Enfants écoutant une histoire pour développer le langage",
        isInclusive: false,
      },
      {
        src: "/images/Gallery/gallery-04.jpg",
        label: "Découverte extérieure",
        alt: "Enfants jouant dehors dans un environnement sécurisé",
        isInclusive: false,
      },
      {
        src: "/images/Gallery/gallery-05.jpg",
        label: "Soutien primaire",
        alt: "Enseignant aidant un enfant avec les lettres et la lecture",
        isInclusive: false,
      },
      {
        src: "/images/Gallery/gallery-06.jpg",
        label: "Apprentissage inclusif",
        alt: "Enfants construisant ensemble dans une classe inclusive",
        isInclusive: true,
      },
      {
        src: "/images/Gallery/gallery-07.jpg",
        label: "Activités pré-primaires",
        alt: "Enfants participant à des activités pré-primaires",
        isInclusive: false,
      },
      {
        src: "/images/Gallery/gallery-08.jpg",
        label: "Routines saines",
        alt: "Enfants apprenant les routines d’hygiène et de soin",
        isInclusive: false,
      },
      {
        src: "/images/Gallery/gallery-09.jpg",
        label: "Soutien émotionnel",
        alt: "Enfants dans une routine calme et bienveillante",
        isInclusive: false,
      },
      {
        src: "/images/Gallery/gallery-10.jpg",
        label: "Nature",
        alt: "Enfants explorant les plantes et la nature",
        isInclusive: false,
      },
    ],
    badges: [
      { icon: Baby, label: "Nurserie" },
      { icon: GraduationCap, label: "Pré-primaire" },
      { icon: HeartHandshake, label: "Inclusion" },
      { icon: Speech, label: "Langage" },
      { icon: Brain, label: "Émotionnel" },
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

export default function GalleryPreview() {
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
  const loopImages = [...t.images, ...t.images.slice(0, 5)];

  return (
    <section
      aria-labelledby="gallery-preview-heading"
      className="relative overflow-hidden px-4 py-7 sm:px-6 sm:py-9 lg:px-8 lg:py-10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-5 grid gap-4 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <p className="inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.28em] text-[#A84F3F] sm:text-[11px]">
              <Camera size={14} />
              {t.eyebrow}
            </p>

            <h2
              id="gallery-preview-heading"
              className="mt-2 text-2xl font-extrabold leading-tight tracking-[-0.04em] text-[#183528] sm:text-3xl lg:text-4xl"
            >
              {t.title}
            </h2>
          </div>

          <div className="max-w-2xl lg:ml-auto">
            <p className="text-sm font-semibold leading-6 text-[#426252] sm:text-base">
              {t.description}
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              {t.badges.map((badge) => {
                const Icon = badge.icon;

                return (
                  <span
                    key={badge.label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-[#A84F3F]/10 bg-white/58 px-3 py-1.5 text-[11px] font-extrabold text-[#183528] shadow-sm backdrop-blur-md"
                  >
                    <Icon size={13} className="text-[#A84F3F]" />
                    {badge.label}
                  </span>
                );
              })}

              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 rounded-full bg-[#F4B321] px-5 py-2.5 text-xs font-extrabold !text-[#7F342B] shadow-[0_14px_35px_rgba(244,179,33,0.24)] transition duration-300 hover:-translate-y-1 hover:bg-[#FFD46A] sm:text-sm"
                aria-label="View Heaven’s Seed International School gallery"
              >
                <span className="text-[#7F342B]">{t.cta}</span>
                <ArrowRight size={16} className="text-[#7F342B]" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-14 bg-gradient-to-r from-white/82 to-transparent sm:w-28" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-14 bg-gradient-to-l from-white/82 to-transparent sm:w-28" />

        <div className="hsa-gallery-marquee flex w-max gap-4 py-2">
          {loopImages.map((image, index) => (
            <Link
              key={`${image.src}-${image.label}-${index}`}
              href="/gallery"
              className="group relative aspect-[3/2] w-[282px] shrink-0 overflow-hidden rounded-[1.75rem] bg-[#A84F3F] shadow-[0_20px_65px_rgba(168,79,63,0.14)] ring-1 ring-white/45 transition duration-500 hover:-translate-y-1 sm:w-[370px] lg:w-[430px]"
              aria-label={`Open gallery: ${image.label}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 282px, (max-width: 1024px) 370px, 430px"
                loading="lazy"
                quality={70}
                className="object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#7F342B]/58 via-[#A84F3F]/8 to-transparent transition duration-500 group-hover:from-[#7F342B]/46" />

              {image.isInclusive ? (
                <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-white/35 bg-white/20 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.16em] text-white shadow-lg backdrop-blur-md">
                  <Sparkles size={12} />
                  {t.inclusiveLabel}
                </div>
              ) : null}

              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-2xl border border-white/25 bg-white/18 px-3 py-2 text-white shadow-lg backdrop-blur-md">
                <span className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.14em]">
                  <Images size={14} />
                  {image.label}
                </span>

                <ArrowRight
                  size={15}
                  className="transition duration-300 group-hover:translate-x-1"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>

      <p className="sr-only">{t.sr}</p>
    </section>
  );
}
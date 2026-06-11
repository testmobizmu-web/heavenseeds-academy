"use client";

import Image from "next/image";
import { Brain, HeartHandshake, ShieldCheck, Speech, Star, StarHalf } from "lucide-react";
import { useEffect, useState } from "react";

type Language = "en" | "fr";

const content = {
  en: {
    eyebrow: "Parent Reviews",
    title: "Trusted by families seeking caring, inclusive support.",
    description:
      "English and French parent feedback reflecting nursery care, inclusive education, speech support, emotional guidance and confidence-building learning.",
    sr:
      "Parent testimonials for Heaven’s Seed International School, offering nursery education, inclusive education, primary learning support, speech delay support and child psychology support.",
  },
  fr: {
    eyebrow: "Avis des parents",
    title: "La confiance des familles pour un soutien inclusif et bienveillant.",
    description:
      "Des retours en anglais et en franÃ§ais sur la nurserie, l’Ã©ducation inclusive, le soutien du langage, l’accompagnement Ã©motionnel et la confiance.",
    sr:
      "Avis des parents pour Heaven’s Seed International School, proposant la nurserie, l’Ã©ducation inclusive, le soutien primaire, le soutien du langage et l’accompagnement Ã©motionnel.",
  },
};

const testimonials = [
  {
    name: "James Thompson",
    role: "Parent, Mauritius",
    lang: "EN",
    rating: 5,
    image: "/images/Home/testimonials/man/profileenglish2.png",
    text: "A warm and professional learning environment. My son became more confident with communication and daily routines.",
  },
  {
    name: "Julien Moreau",
    role: "Parent francophone",
    lang: "FR",
    rating: 4.5,
    image: "/images/Home/testimonials/man/profilefrance.png",
    text: "Une Ã©quipe douce et rassurante. Mon enfant progresse avec plus de confiance, surtout dans l’expression.",
  },
  {
    name: "Claire Bennett",
    role: "Parent, Mauritius",
    lang: "EN",
    rating: 5,
    image: "/images/Home/testimonials/women/profileengland1.png",
    text: "The inclusive approach is very reassuring. The teachers are patient, structured and genuinely caring.",
  },
  {
    name: "Camille Martin",
    role: "Maman, Maurice",
    lang: "FR",
    rating: 5,
    image: "/images/Home/testimonials/women/profilefrance.png",
    text: "Un accompagnement trÃ¨s humain pour les petits. On sent que chaque enfant est Ã©coutÃ© et valorisÃ©.",
  },
  {
    name: "Arjun Mehta",
    role: "Parent, Moka",
    lang: "EN",
    rating: 4,
    image: "/images/Home/testimonials/man/profileindia.png",
    text: "A caring place for nursery and primary support. The communication with parents is clear and helpful.",
  },
  {
    name: "Priya Nair",
    role: "Parent, Mauritius",
    lang: "EN",
    rating: 4.5,
    image: "/images/Home/testimonials/women/profileindia.png",
    text: "My daughter feels safe and supported. We appreciate the focus on confidence and emotional wellbeing.",
  },
  {
    name: "Marc Dubois",
    role: "Papa, expatriÃ©",
    lang: "FR",
    rating: 5,
    image: "/images/Home/testimonials/man/profileparis.png",
    text: "Un cadre propre, calme et bien organisÃ©. L’approche inclusive donne beaucoup de confiance aux parents.",
  },
  {
    name: "Ã‰lise Laurent",
    role: "Maman, Grand Baie",
    lang: "FR",
    rating: 4.5,
    image: "/images/Home/testimonials/women/profilefrance1.png",
    text: "Une Ã©cole douce et familiale avec une vraie attention au rythme et aux besoins de chaque enfant.",
  },
  {
    name: "Daniel Tan",
    role: "Parent, Mauritius",
    lang: "EN",
    rating: 5,
    image: "/images/Home/testimonials/man/profilesingapore.png",
    text: "Very reassuring for children who need extra support. The learning feels calm, modern and caring.",
  },
  {
    name: "Anastasia Petrova",
    role: "Expat parent",
    lang: "EN",
    rating: 4,
    image: "/images/Home/testimonials/women/profilerussia.png",
    text: "A peaceful learning space with kind teachers and strong attention to emotional development.",
  },
  {
    name: "Kwame Mensah",
    role: "Parent, Mauritius",
    lang: "EN",
    rating: 4.5,
    image: "/images/Home/testimonials/man/profileafrican.png",
    text: "The team is approachable and professional. Their support for communication and confidence is excellent.",
  },
  {
    name: "Thandiwe Mokoena",
    role: "Parent, Mauritius",
    lang: "EN",
    rating: 5,
    image: "/images/Home/testimonials/women/profilesouthafrica.png",
    text: "A beautiful place for children who need patience, structure and encouragement to grow at their pace.",
  },
  {
    name: "Thomas Bernard",
    role: "Papa, Maurice",
    lang: "FR",
    rating: 4.5,
    image: "/images/Home/testimonials/man/profileparis2.png",
    text: "TrÃ¨s bonne communication avec les parents. L’environnement est calme, joyeux et sÃ©curisant.",
  },
  {
    name: "AmÃ©lie Dubois",
    role: "Maman francophone",
    lang: "FR",
    rating: 5,
    image: "/images/Home/testimonials/women/profilefrance3.png",
    text: "Heaven’s Seed donne une vraie impression de confiance, de douceur et de qualitÃ© dans l’accompagnement.",
  },
  {
    name: "William Parker",
    role: "Parent, Mauritius",
    lang: "EN",
    rating: 4,
    image: "/images/Home/testimonials/man/profileenglish.png",
    text: "A premium learning experience with a family feeling. Very good support for parents and children.",
  },
  {
    name: "Sophie Carter",
    role: "Parent, Mauritius",
    lang: "EN",
    rating: 5,
    image: "/images/Home/testimonials/women/profileengland.png",
    text: "My child became more independent and expressive. We feel very happy with the care and guidance.",
  },
  {
    name: "Ã‰tienne Laurent",
    role: "Parent, Maurice",
    lang: "FR",
    rating: 4.5,
    image: "/images/Home/testimonials/man/profilefrance1.png",
    text: "Une approche humaine, professionnelle et bienveillante. Les enfants sont vraiment encouragÃ©s.",
  },
  {
    name: "Naledi Dlamini",
    role: "Parent, Mauritius",
    lang: "EN",
    rating: 5,
    image: "/images/Home/testimonials/women/profilesouthafrica1.png",
    text: "A safe and joyful environment where children are supported to explore, communicate and shine.",
  },
];

const marqueeItems = [...testimonials.slice(0, 10), ...testimonials.slice(0, 6)];

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

function RatingStars({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  return (
    <div
      className="flex items-center gap-0.5 text-[#F4B321]"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: fullStars }).map((_, index) => (
        <Star
          key={`full-${index}`}
          size={14}
          className="fill-[#F4B321]"
          strokeWidth={2.1}
        />
      ))}

      {hasHalf ? (
        <StarHalf
          size={14}
          className="fill-[#F4B321]"
          strokeWidth={2.1}
        />
      ) : null}

      {Array.from({ length: emptyStars }).map((_, index) => (
        <Star
          key={`empty-${index}`}
          size={14}
          className="text-[#F4B321]/35"
          strokeWidth={2.1}
        />
      ))}

      <span className="ml-2 text-[11px] font-extrabold text-[#944337]/70">
        {rating.toFixed(rating % 1 === 0 ? 0 : 1)}
      </span>
    </div>
  );
}

export default function ParentTestimonials() {
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
      aria-labelledby="parent-testimonials-heading"
      className="relative overflow-hidden px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-9"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-4 grid gap-3 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-[#B86452] sm:text-[11px]">
              {t.eyebrow}
            </p>

            <h2
              id="parent-testimonials-heading"
              className="mt-2 text-2xl font-extrabold leading-tight tracking-[-0.04em] text-[#183528] sm:text-3xl lg:text-4xl"
            >
              {t.title}
            </h2>
          </div>

          <div className="max-w-2xl lg:ml-auto">
            <p className="text-sm font-semibold leading-6 text-[#426252] sm:text-base">
              {t.description}
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              {[
                { icon: ShieldCheck, label: "Safe" },
                { icon: Speech, label: "Speech Support" },
                { icon: Brain, label: "Emotional Care" },
                { icon: HeartHandshake, label: "Inclusive" },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <span
                    key={item.label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-[#B86452]/10 bg-white/58 px-3 py-1.5 text-[11px] font-extrabold text-[#183528] backdrop-blur-md"
                  >
                    <Icon size={13} className="text-[#B86452]" />
                    {item.label}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-white/78 to-transparent sm:w-28" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-l from-white/78 to-transparent sm:w-28" />

        <div className="hsa-testimonial-marquee flex gap-4 py-2">
          {marqueeItems.map((item, index) => (
            <article
              key={`${item.name}-${index}`}
              className="w-[300px] shrink-0 rounded-[1.45rem] border border-white/45 bg-white/50 p-4 shadow-[0_18px_55px_rgba(24,53,40,0.09)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:bg-white/70 sm:w-[350px]"
            >
              <div className="flex items-start gap-3">
                <div className="relative size-13 shrink-0 overflow-hidden rounded-full bg-transparent shadow-[0_10px_28px_rgba(24,53,40,0.14)] ring-2 ring-[#F4B321]/65">
                  <Image
                    src={item.image}
                    alt={`${item.name} parent review avatar`}
                    fill
                    sizes="52px"
                    loading="lazy"
                    quality={65}
                    className="rounded-full object-cover object-center"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <h3 className="truncate text-sm font-extrabold tracking-[-0.02em] text-[#183528]">
                        {item.name}
                      </h3>

                      <p className="mt-0.5 truncate text-xs font-bold text-[#426252]/80">
                        {item.role}
                      </p>
                    </div>

                    <span className="shrink-0 rounded-full bg-[#B86452]/10 px-2 py-1 text-[10px] font-extrabold text-[#944337]">
                      {item.lang}
                    </span>
                  </div>

                  <div className="mt-2">
                    <RatingStars rating={item.rating} />
                  </div>
                </div>
              </div>

              <p className="mt-3 h-[72px] overflow-hidden text-sm leading-6 text-[#426252]">
                “{item.text}”
              </p>
            </article>
          ))}
        </div>
      </div>

      <p className="sr-only">{t.sr}</p>
    </section>
  );
}

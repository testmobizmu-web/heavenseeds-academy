"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Baby,
  BookOpenCheck,
  BookOpenText,
  Brain,
  HeartHandshake,
  Speech,
  UsersRound,
} from "lucide-react";
import { useEffect, useState } from "react";

type Language = "en" | "fr";

const content = {
  en: {
    eyebrow: "Learning Journal",
    title: "Helpful insights for families and young learners.",
    description:
      "Short, practical articles on nursery routines, pre-primary readiness, inclusive learning, social development, emotional learning, communication skills and occupational & speech support.",
    cta: "View Blog",
    read: "Read article",
    sr:
      "Heaven’s Seed International School blog articles covering nursery routines, pre-primary readiness, inclusive learning, social development, emotional learning, communication skills, occupational therapy support and speech therapy guidance.",
    posts: [
      {
        image: "/images/blog/blog-01.webp",
        tag: "Nursery Routines",
        title: "A Calm Morning Routine for Young Learners",
        desc: "Simple habits that help children feel settled, safe and ready to learn with confidence.",
        href: "/blog/calm-morning-routine-pre-primary-children",
      },
      {
        image: "/images/blog/blog-02.webp",
        tag: "Parent Partnership",
        title: "How Parents and Teachers Build Confidence Together",
        desc: "Clear communication between families and educators helps every child feel supported.",
        href: "/blog/parent-teacher-communication-confidence",
      },
      {
        image: "/images/blog/blog-03.webp",
        tag: "Early Discovery",
        title: "Why Movement and Discovery Matter",
        desc: "Fresh air, movement and guided discovery help children develop focus, balance and curiosity.",
        href: "/blog/outdoor-play-early-childhood",
      },
      {
        image: "/images/blog/blog-04.webp",
        tag: "Inclusive Learning",
        title: "Spotting Learning Needs Early with Care",
        desc: "Gentle observation and adapted support can make a meaningful difference in a child’s growth.",
        href: "/blog/spotting-learning-needs-early",
      },
      {
        image: "/images/blog/blog-05.webp",
        tag: "Occupational & Speech Support",
        title: "Sensory Play for Calm, Focus and Communication",
        desc: "Hands-on activities help children build participation, communication, expression and self-control.",
        href: "/blog/sensory-play-calm-focus-language",
      },
      {
        image: "/images/blog/blog-06.webp",
        tag: "Pre-Primary Readiness",
        title: "Building a Love for Books from an Early Age",
        desc: "Short reading routines can strengthen attention, communication, imagination and school readiness.",
        href: "/blog/love-for-books-early-age",
      },
      {
        image: "/images/blog/blog-07.webp",
        tag: "Emotional Learning",
        title: "Creating Safe and Happy Learning Transitions",
        desc: "Children feel more secure when daily routines are predictable, warm and consistent.",
        href: "/blog/safe-happy-school-transitions",
      },
      {
        image: "/images/blog/blog-08.webp",
        tag: "Social Development",
        title: "Learning Together in a Caring Environment",
        desc: "Inclusive learning supports confidence, kindness, communication and social skills.",
        href: "/blog/inclusive-caring-classroom",
      },
      {
        image: "/images/blog/blog-09.webp",
        tag: "Communication Skills",
        title: "Helping Children Express Themselves with Joy",
        desc: "Music, stories, play and guided activities help children communicate with confidence.",
        href: "/blog/helping-children-express-themselves",
      },
    ],
  },
  fr: {
    eyebrow: "Journal d’apprentissage",
    title: "Des conseils utiles pour les familles et les jeunes apprenants.",
    description:
      "Des articles courts et pratiques sur les routines de nurserie, la prÃ©paration prÃ©-primaire, l’apprentissage inclusif, le dÃ©veloppement social, l’apprentissage Ã©motionnel, la communication et le soutien en ergothÃ©rapie & orthophonie.",
    cta: "Voir le blog",
    read: "Lire l’article",
    sr:
      "Articles du blog Heaven’s Seed International School sur les routines de nurserie, la prÃ©paration prÃ©-primaire, l’apprentissage inclusif, le dÃ©veloppement social, l’apprentissage Ã©motionnel, la communication, l’ergothÃ©rapie et l’orthophonie.",
    posts: [
      {
        image: "/images/blog/blog-01.webp",
        tag: "Routines nurserie",
        title: "Une routine du matin calme pour les jeunes enfants",
        desc: "Des habitudes simples pour aider les enfants Ã  se sentir prÃªts, confiants et rassurÃ©s.",
        href: "/blog/calm-morning-routine-pre-primary-children",
      },
      {
        image: "/images/blog/blog-02.webp",
        tag: "Partenariat parents",
        title: "Comment parents et enseignants renforcent la confiance",
        desc: "Une bonne communication aide chaque enfant Ã  se sentir soutenu et compris.",
        href: "/blog/parent-teacher-communication-confidence",
      },
      {
        image: "/images/blog/blog-03.webp",
        tag: "DÃ©couverte",
        title: "Pourquoi le mouvement et la dÃ©couverte sont importants",
        desc: "Le jeu, le mouvement et l’exploration dÃ©veloppent la concentration et la curiositÃ©.",
        href: "/blog/outdoor-play-early-childhood",
      },
      {
        image: "/images/blog/blog-04.webp",
        tag: "Apprentissage inclusif",
        title: "RepÃ©rer les besoins d’apprentissage avec douceur",
        desc: "Une observation bienveillante et un soutien adaptÃ© peuvent faire une grande diffÃ©rence.",
        href: "/blog/spotting-learning-needs-early",
      },
      {
        image: "/images/blog/blog-05.webp",
        tag: "ErgothÃ©rapie & orthophonie",
        title: "Le jeu sensoriel pour le calme, le focus et la communication",
        desc: "Les activitÃ©s pratiques aident l’enfant Ã  dÃ©velopper la participation, l’expression et le calme.",
        href: "/blog/sensory-play-calm-focus-language",
      },
      {
        image: "/images/blog/blog-06.webp",
        tag: "PrÃ©paration prÃ©-primaire",
        title: "CrÃ©er l’amour des livres dÃ¨s le plus jeune Ã¢ge",
        desc: "De petites routines de lecture renforcent l’attention, la communication et l’imagination.",
        href: "/blog/love-for-books-early-age",
      },
      {
        image: "/images/blog/blog-07.webp",
        tag: "Apprentissage Ã©motionnel",
        title: "CrÃ©er des transitions d’apprentissage rassurantes",
        desc: "Les enfants se sentent mieux avec des routines prÃ©visibles, chaleureuses et constantes.",
        href: "/blog/safe-happy-school-transitions",
      },
      {
        image: "/images/blog/blog-08.webp",
        tag: "DÃ©veloppement social",
        title: "Apprendre ensemble dans un cadre bienveillant",
        desc: "L’apprentissage inclusif soutient la confiance, la communication et les compÃ©tences sociales.",
        href: "/blog/inclusive-caring-classroom",
      },
      {
        image: "/images/blog/blog-09.webp",
        tag: "Communication",
        title: "Aider les enfants Ã  s’exprimer avec joie",
        desc: "La musique, les histoires et le jeu aident les enfants Ã  communiquer avec confiance.",
        href: "/blog/helping-children-express-themselves",
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

export default function BlogPreview() {
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
  const loopPosts = [...t.posts, ...t.posts.slice(0, 5)];

  return (
    <section
      aria-labelledby="home-blog-heading"
      className="relative overflow-hidden px-4 py-7 sm:px-6 sm:py-9 lg:px-8 lg:py-10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-5 grid gap-4 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-[#B86452] sm:text-[11px]">
              {t.eyebrow}
            </p>

            <h2
              id="home-blog-heading"
              className="mt-2 text-2xl font-extrabold leading-tight tracking-[-0.04em] text-[#183528] sm:text-3xl lg:text-4xl"
            >
              {t.title}
            </h2>
          </div>

          <div className="max-w-2xl lg:ml-auto">
            <p className="text-sm font-semibold leading-6 text-[#426252] sm:text-base">
              {t.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {[
                {
                  icon: Baby,
                  label: language === "fr" ? "Nurserie" : "Nursery",
                },
                {
                  icon: BookOpenCheck,
                  label:
                    language === "fr" ? "PrÃ©-primaire" : "Pre-Primary",
                },
                {
                  icon: HeartHandshake,
                  label: language === "fr" ? "Inclusion" : "Inclusive",
                },
                {
                  icon: UsersRound,
                  label:
                    language === "fr"
                      ? "DÃ©veloppement social"
                      : "Social Development",
                },
                {
                  icon: Brain,
                  label:
                    language === "fr"
                      ? "Apprentissage Ã©motionnel"
                      : "Emotional Learning",
                },
                {
                  icon: Speech,
                  label:
                    language === "fr"
                      ? "Communication"
                      : "Communication Skills",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <span
                    key={item.label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-[#B86452]/10 bg-white/58 px-3 py-1.5 text-[11px] font-extrabold text-[#183528] shadow-sm backdrop-blur-md"
                  >
                    <Icon size={13} className="text-[#B86452]" />
                    {item.label}
                  </span>
                );
              })}

              <Link
                href="/blog"
                className="inline-flex items-center gap-2 rounded-full bg-[#F4B321] px-5 py-2.5 text-xs font-extrabold !text-[#944337] shadow-[0_14px_35px_rgba(244,179,33,0.24)] transition duration-300 hover:-translate-y-1 hover:bg-[#FFD46A] sm:text-sm"
              >
                <span className="text-[#944337]">{t.cta}</span>
                <ArrowRight size={16} className="text-[#944337]" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-14 bg-gradient-to-r from-white/82 to-transparent sm:w-28" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-14 bg-gradient-to-l from-white/82 to-transparent sm:w-28" />

        <div className="hsa-blog-marquee flex w-max gap-4 py-2">
          {loopPosts.map((post, index) => (
            <Link
              key={`${post.title}-${index}`}
              href={post.href}
              className="group w-[285px] shrink-0 overflow-hidden rounded-[1.6rem] border border-white/45 bg-white/50 shadow-[0_18px_55px_rgba(24,53,40,0.09)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:bg-white/72 sm:w-[330px]"
              aria-label={`Read blog article: ${post.title}`}
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-b-[1.2rem] bg-[#B86452]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 640px) 285px, 330px"
                  loading="lazy"
                  quality={70}
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#944337]/44 via-transparent to-transparent" />

                <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-white/35 bg-white/22 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.16em] text-white shadow-md backdrop-blur-md">
                  <BookOpenText size={12} />
                  {post.tag}
                </div>
              </div>

              <div className="p-4">
                <h3 className="line-clamp-2 text-base font-extrabold leading-snug tracking-[-0.03em] text-[#183528] sm:text-lg">
                  {post.title}
                </h3>

                <p className="mt-2 line-clamp-3 text-sm leading-6 text-[#426252]">
                  {post.desc}
                </p>

                <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#B86452] px-4 py-2 text-sm font-extrabold !text-white transition duration-300 group-hover:bg-[#944337]">
                  <span className="text-white">{t.read}</span>
                  <ArrowRight
                    size={15}
                    className="text-white transition group-hover:translate-x-1"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <p className="sr-only">{t.sr}</p>
    </section>
  );
}

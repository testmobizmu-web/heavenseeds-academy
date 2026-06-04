"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpenText,
  Brain,
  GraduationCap,
  HeartHandshake,
  Sparkles,
  Speech,
} from "lucide-react";
import { useEffect, useState } from "react";

type Language = "en" | "fr";

const content = {
  en: {
    eyebrow: "Learning Journal",
    title: "Helpful insights for families and young learners.",
    description:
      "Short, practical articles on nursery learning, inclusive education, primary support, speech delay, communication, emotional wellbeing and child development.",
    cta: "View Blog",
    read: "Read article",
    sr:
      "Heaven’s Seed International School blog articles covering nursery education, inclusive education, primary learning support, speech delay support, speech therapy guidance and child psychology support.",
    posts: [
      {
        image: "/images/blog/blog-01.webp",
        tag: "Nursery",
        title: "A Calm Morning Routine for Young Learners",
        desc: "Simple habits that help children feel settled, safe and ready to learn with confidence.",
        href: "/blog/calm-morning-routine-pre-primary-children",
      },
      {
        image: "/images/blog/blog-02.webp",
        tag: "Parent Support",
        title: "How Parents and Teachers Build Confidence Together",
        desc: "Clear communication between families and educators helps every child feel supported.",
        href: "/blog/parent-teacher-communication-confidence",
      },
      {
        image: "/images/blog/blog-03.webp",
        tag: "Outdoor Learning",
        title: "Why Movement and Discovery Matter",
        desc: "Fresh air, movement and guided discovery help children develop focus, balance and curiosity.",
        href: "/blog/outdoor-play-early-childhood",
      },
      {
        image: "/images/blog/blog-04.webp",
        tag: "Inclusive Support",
        title: "Spotting Learning Needs Early with Care",
        desc: "Gentle observation and early support can make a meaningful difference in a child’s growth.",
        href: "/blog/spotting-learning-needs-early",
      },
      {
        image: "/images/blog/blog-05.webp",
        tag: "Speech Support",
        title: "Sensory Play for Calm, Focus and Language",
        desc: "Hands-on activities help children build vocabulary, communication and self-control.",
        href: "/blog/sensory-play-calm-focus-language",
      },
      {
        image: "/images/blog/blog-06.webp",
        tag: "Primary Support",
        title: "Building a Love for Books from an Early Age",
        desc: "Short reading routines can strengthen attention, pronunciation and imagination.",
        href: "/blog/love-for-books-early-age",
      },
      {
        image: "/images/blog/blog-07.webp",
        tag: "Emotional Care",
        title: "Creating Safe and Happy Learning Transitions",
        desc: "Children feel more secure when daily routines are predictable, warm and consistent.",
        href: "/blog/safe-happy-school-transitions",
      },
      {
        image: "/images/blog/blog-08.webp",
        tag: "Inclusion",
        title: "Learning Together in a Caring Environment",
        desc: "Inclusive learning supports confidence, kindness, communication and social skills.",
        href: "/blog/inclusive-caring-classroom",
      },
      {
        image: "/images/blog/blog-09.webp",
        tag: "Confidence",
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
      "Des articles courts et pratiques sur la nurserie, l’éducation inclusive, le soutien primaire, le langage, la communication, le bien-être émotionnel et le développement de l’enfant.",
    cta: "Voir le blog",
    read: "Lire l’article",
    sr:
      "Articles du blog Heaven’s Seed International School sur la nurserie, l’éducation inclusive, le soutien primaire, le soutien du langage, l’accompagnement émotionnel et le développement de l’enfant.",
    posts: [
      {
        image: "/images/blog/blog-01.webp",
        tag: "Nurserie",
        title: "Une routine du matin calme pour les jeunes enfants",
        desc: "Des habitudes simples pour aider les enfants à se sentir prêts, confiants et rassurés.",
        href: "/blog/calm-morning-routine-pre-primary-children",
      },
      {
        image: "/images/blog/blog-02.webp",
        tag: "Parents",
        title: "Comment parents et enseignants renforcent la confiance",
        desc: "Une bonne communication aide chaque enfant à se sentir soutenu et compris.",
        href: "/blog/parent-teacher-communication-confidence",
      },
      {
        image: "/images/blog/blog-03.webp",
        tag: "Découverte",
        title: "Pourquoi le mouvement et la découverte sont importants",
        desc: "Le jeu, le mouvement et l’exploration développent la concentration et la curiosité.",
        href: "/blog/outdoor-play-early-childhood",
      },
      {
        image: "/images/blog/blog-04.webp",
        tag: "Inclusion",
        title: "Repérer les besoins d’apprentissage avec douceur",
        desc: "Une observation bienveillante peut faire une grande différence dans le développement.",
        href: "/blog/spotting-learning-needs-early",
      },
      {
        image: "/images/blog/blog-05.webp",
        tag: "Langage",
        title: "Le jeu sensoriel pour le calme, le focus et le langage",
        desc: "Les activités pratiques aident l’enfant à développer le vocabulaire et la communication.",
        href: "/blog/sensory-play-calm-focus-language",
      },
      {
        image: "/images/blog/blog-06.webp",
        tag: "Primaire",
        title: "Créer l’amour des livres dès le plus jeune âge",
        desc: "De petites routines de lecture renforcent l’attention, la prononciation et l’imagination.",
        href: "/blog/love-for-books-early-age",
      },
      {
        image: "/images/blog/blog-07.webp",
        tag: "Émotionnel",
        title: "Créer des transitions d’apprentissage rassurantes",
        desc: "Les enfants se sentent mieux avec des routines prévisibles, chaleureuses et constantes.",
        href: "/blog/safe-happy-school-transitions",
      },
      {
        image: "/images/blog/blog-08.webp",
        tag: "Inclusion",
        title: "Apprendre ensemble dans un cadre bienveillant",
        desc: "L’apprentissage inclusif soutient la confiance, la communication et les compétences sociales.",
        href: "/blog/inclusive-caring-classroom",
      },
      {
        image: "/images/blog/blog-09.webp",
        tag: "Confiance",
        title: "Aider les enfants à s’exprimer avec joie",
        desc: "La musique, les histoires et le jeu aident les enfants à communiquer avec confiance.",
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
            <p className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-[#A84F3F] sm:text-[11px]">
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
                { icon: HeartHandshake, label: language === "fr" ? "Inclusion" : "Inclusive" },
                { icon: Speech, label: language === "fr" ? "Langage" : "Speech" },
                { icon: Brain, label: language === "fr" ? "Émotionnel" : "Emotional" },
                { icon: GraduationCap, label: language === "fr" ? "Primaire" : "Primary" },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <span
                    key={item.label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-[#A84F3F]/10 bg-white/58 px-3 py-1.5 text-[11px] font-extrabold text-[#183528] shadow-sm backdrop-blur-md"
                  >
                    <Icon size={13} className="text-[#A84F3F]" />
                    {item.label}
                  </span>
                );
              })}

              <Link
                href="/blog"
                className="inline-flex items-center gap-2 rounded-full bg-[#F4B321] px-5 py-2.5 text-xs font-extrabold !text-[#7F342B] shadow-[0_14px_35px_rgba(244,179,33,0.24)] transition duration-300 hover:-translate-y-1 hover:bg-[#FFD46A] sm:text-sm"
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

        <div className="hsa-blog-marquee flex w-max gap-4 py-2">
          {loopPosts.map((post, index) => (
            <Link
              key={`${post.title}-${index}`}
              href={post.href}
              className="group w-[285px] shrink-0 overflow-hidden rounded-[1.6rem] border border-white/45 bg-white/50 shadow-[0_18px_55px_rgba(24,53,40,0.09)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:bg-white/72 sm:w-[330px]"
              aria-label={`Read blog article: ${post.title}`}
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-b-[1.2rem] bg-[#A84F3F]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 640px) 285px, 330px"
                  loading="lazy"
                  quality={70}
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#7F342B]/44 via-transparent to-transparent" />

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

                <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#A84F3F] px-4 py-2 text-sm font-extrabold !text-white transition duration-300 group-hover:bg-[#7F342B]">
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
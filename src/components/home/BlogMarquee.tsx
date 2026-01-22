"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

type BlogCard = {
  img: string;
  tag: string;
  title: string;
  desc: string;
  href: string;
};

function clamp(s: string, n: number) {
  if (!s) return "";
  return s.length > n ? s.slice(0, n - 1).trimEnd() + "…" : s;
}

export default function BlogMarquee(props: { locale: string; isFr: boolean }) {
  const { locale, isFr } = props;

  // ✅ 8 Mauritius cards
  const mu: BlogCard[] = [
    {
      img: "/images/blog/blog-01.webp",
      tag: isFr ? "Maurice" : "Mauritius",
      title: isFr ? "Routine du matin : arrivée sereine à l’école" : "Morning Routine: A Calm School Arrival",
      desc: isFr
        ? "Checklist simple pour réduire le stress, sécuriser la transition et créer de bons repères dès la maternelle."
        : "A simple checklist to reduce stress, ease transitions, and build strong early-school habits.",
      href: `/${locale}/blog/mauritius-morning-routine`,
    },
    {
      img: "/images/blog/blog-02.webp",
      tag: isFr ? "Maurice" : "Mauritius",
      title: isFr ? "Parents & enseignants : communication qui marche" : "Parent–Teacher Communication That Works",
      desc: isFr
        ? "Questions clés, suivi rassurant et petites habitudes qui améliorent la progression et la confiance."
        : "Key questions, clear follow-up, and small habits that strengthen progress and confidence.",
      href: `/${locale}/blog/mauritius-parent-teacher-communication`,
    },
    {
      img: "/images/blog/blog-03.webp",
      tag: isFr ? "Maurice" : "Mauritius",
      title: isFr ? "Apprendre dehors : autonomie & curiosité" : "Outdoor Learning: Independence & Curiosity",
      desc: isFr
        ? "Pourquoi le jeu structuré en plein air améliore l’attention, la socialisation et la motricité."
        : "How structured outdoor play boosts attention, social skills, and motor development.",
      href: `/${locale}/blog/mauritius-outdoor-learning`,
    },
    {
      img: "/images/blog/blog-04.webp",
      tag: isFr ? "Maurice" : "Mauritius",
      title: isFr ? "Intervention précoce : repérer & agir tôt" : "Early Intervention: Spot It, Support It",
      desc: isFr
        ? "Signaux à surveiller, actions simples et approche inclusive pour des progrès mesurables."
        : "Signals to watch, simple actions, and inclusive support for measurable progress.",
      href: `/${locale}/blog/mauritius-early-intervention`,
    },
    {
      img: "/images/blog/blog-05.webp",
      tag: isFr ? "Maurice" : "Mauritius",
      title: isFr ? "Jeu sensoriel : calme, focus, langage" : "Sensory Play: Calm, Focus, Language",
      desc: isFr
        ? "Activités premium faciles à faire à la maison pour développer le vocabulaire et l’autorégulation."
        : "Easy premium activities at home to build vocabulary and self-regulation.",
      href: `/${locale}/blog/mauritius-sensory-play`,
    },
    {
      img: "/images/blog/blog-06.webp",
      tag: isFr ? "Maurice" : "Mauritius",
      title: isFr ? "Lecture & phonics : routine du soir efficace" : "Reading & Phonics: A Strong Bedtime Routine",
      desc: isFr
        ? "Une méthode simple pour améliorer la prononciation, la compréhension et l’amour des livres."
        : "A simple method to improve pronunciation, comprehension, and love for books.",
      href: `/${locale}/blog/mauritius-reading-phonics`,
    },
    {
      img: "/images/blog/blog-07.webp",
      tag: isFr ? "Maurice" : "Mauritius",
      title: isFr ? "Sécurité & repères : l’accueil au campus" : "Safety & Structure: Campus Arrival Habits",
      desc: isFr
        ? "Routines d’arrivée, transitions et confiance — pour des enfants plus sereins."
        : "Arrival routines, transitions, and confidence—so children feel safe and settled.",
      href: `/${locale}/blog/mauritius-campus-arrival`,
    },
    {
      img: "/images/blog/blog-08.webp",
      tag: isFr ? "Maurice" : "Mauritius",
      title: isFr ? "Inclusion : apprendre ensemble, progresser mieux" : "Inclusion: Learn Together, Progress Better",
      desc: isFr
        ? "Comment un environnement inclusif renforce le langage, la socialisation et l’estime de soi."
        : "How inclusive classrooms strengthen language, social skills, and self-esteem.",
      href: `/${locale}/blog/mauritius-inclusion-progress`,
    },
  ];

  // ✅ 8 International cards
  const intl: BlogCard[] = [
    {
      img: "/images/blog/blog-09.webp",
      tag: "International",
      title: isFr ? "Anglais kids : routine courte, résultats réels" : "English for Kids: Short Routine, Real Results",
      desc: isFr
        ? "Une structure simple pour vocabulaire, écoute et expression — sans surcharge."
        : "A simple structure for vocabulary, listening, and speaking—without overwhelm.",
      href: `/${locale}/blog/english-kids-routine`,
    },
    {
      img: "/images/blog/blog-10.webp",
      tag: "International",
      title: isFr ? "Anglais pro : parler clair au travail" : "Professional English: Speak Clearly at Work",
      desc: isFr
        ? "Phrases utiles, confiance et progression — idéal pour réunions, emails et appels."
        : "Useful phrases, confidence, and progress—perfect for meetings, emails, and calls.",
      href: `/${locale}/blog/professional-english-speak-clearly`,
    },
    {
      img: "/images/blog/blog-11.webp",
      tag: "International",
      title: isFr ? "Cours en visio : méthode premium, fluide" : "Video Lessons: A Premium, Smooth Method",
      desc: isFr
        ? "Comment apprendre vite avec une méthode claire + guidance d’enseignant."
        : "How to learn faster with a clear method + teacher guidance.",
      href: `/${locale}/blog/video-lessons-premium-method`,
    },
    {
      img: "/images/blog/blog-12.webp",
      tag: "International",
      title: isFr ? "Prononciation : 10 minutes par jour" : "Pronunciation: 10 Minutes a Day",
      desc: isFr
        ? "Exercices ciblés, erreurs fréquentes et routine pour parler plus naturellement."
        : "Targeted drills, common mistakes, and a routine to sound more natural.",
      href: `/${locale}/blog/pronunciation-10-minutes`,
    },
    {
      img: "/images/blog/blog-13.webp",
      tag: "International",
      title: isFr ? "Parents : soutenir l’anglais à la maison" : "Parents: Support English at Home",
      desc: isFr
        ? "Petits rituels efficaces (sans pression) pour progresser en confiance."
        : "Small, pressure-free rituals that build confidence and progress.",
      href: `/${locale}/blog/parents-support-english-home`,
    },
    {
      img: "/images/blog/blog-14.webp",
      tag: "International",
      title: isFr ? "Classe de groupe : parler plus, stresser moins" : "Group Classes: Speak More, Stress Less",
      desc: isFr
        ? "Conversation guidée, feedback premium et progrès mesurable semaine après semaine."
        : "Guided conversation, premium feedback, measurable progress week by week.",
      href: `/${locale}/blog/group-class-speak-more`,
    },
    {
      img: "/images/blog/blog-15.webp",
      tag: "International",
      title: isFr ? "Vocabulaire : méthode flashcards moderne" : "Vocabulary: A Modern Flashcards Method",
      desc: isFr
        ? "Apprendre plus vite avec révision intelligente + mini objectifs quotidiens."
        : "Learn faster with smart review + small daily targets.",
      href: `/${locale}/blog/vocabulary-modern-flashcards`,
    },
    {
      img: "/images/blog/blog-16.webp",
      tag: "International",
      title: isFr ? "Confiance à l’oral : parler naturellement" : "Speaking Confidence: Sound Natural",
      desc: isFr
        ? "Stratégies simples pour gagner en fluidité, clarté et assurance."
        : "Simple strategies to build fluency, clarity, and confidence.",
      href: `/${locale}/blog/speaking-confidence-sound-natural`,
    },
  ];

  const muLoop = [...mu, ...mu];
  const intlLoop = [...intl, ...intl];

  useEffect(() => {
    // If you open browser console, you must see this on homepage.
    console.log("[BlogMarquee] mounted", { locale, mu: mu.length, intl: intl.length });
  }, [locale]);

  const Card = (b: BlogCard, key: string) => (
    <Link key={key} href={b.href} className="hsa-postCard hsa-postCard--force">
      <div className="hsa-postCard__imgWrap">
        <Image
          src={b.img}
          alt={b.title}
          width={520}
          height={520}
          className="hsa-postCard__img"
          sizes="260px"
          loading="lazy"
        />
      </div>

      <div className="hsa-postCard__body">
        <div className="hsa-postCard__meta">
          <span className="hsa-tag">{b.tag}</span>
          <span className="hsa-level">Premium</span>
        </div>

        <div className="hsa-postCard__title">{clamp(b.title, 62)}</div>
        <div className="hsa-postCard__desc">{clamp(b.desc, 120)}</div>

        <div className="hsa-postCard__foot">
          <span className="hsa-readPill">
            {isFr ? "Lire l’article" : "Read article"} <span aria-hidden="true">→</span>
          </span>
        </div>
      </div>
    </Link>
  );

  return (
    <>
      {/* Force-visible minimal CSS (so cards show even if global postCard CSS is missing) */}
      <style>{`
        .hsa-blogRowHead{display:flex;align-items:center;gap:12px;margin:14px 0 6px}
        .hsa-blogRowHead--mt{margin-top:18px}
        .hsa-blogRowPill{font-size:12px;padding:6px 10px;border-radius:999px;border:1px solid rgba(15,23,42,.12);background:rgba(255,255,255,.75)}
        .hsa-blogRowPill--intl{background:rgba(255,255,255,.75)}
        .hsa-blogRowHint{font-size:13px;color:rgba(11,18,32,.62)}

        /* important: ensure marquee area has height */
        .hsa-auto{overflow:hidden;position:relative;mask-image:linear-gradient(90deg, transparent 0%, #000 8%, #000 92%, transparent 100%);}
        .hsa-autoRow{display:flex;gap:12px;padding:10px 0}
        .hsa-autoTrack{display:flex;flex-wrap:nowrap;gap:12px;width:max-content;will-change:transform;animation:hsa-marquee-left 62s linear infinite}
        .hsa-autoTrack--right{animation:hsa-marquee-right 62s linear infinite}
        @keyframes hsa-marquee-left{from{transform:translateX(0)}to{transform:translateX(-50%)}}
        @keyframes hsa-marquee-right{from{transform:translateX(-50%)}to{transform:translateX(0)}}
        @media (prefers-reduced-motion: reduce){.hsa-autoTrack,.hsa-autoTrack--right{animation:none!important;transform:none!important}}

        /* force visible card */
        .hsa-postCard--force{
          min-width:260px;max-width:260px;
          display:flex;flex-direction:column;
          border-radius:18px;
          border:1px solid rgba(15,23,42,.10);
          background:rgba(255,255,255,.85);
          box-shadow:0 14px 40px rgba(2,6,23,.08);
          overflow:hidden;
          text-decoration:none;
          color:inherit;
        }
        .hsa-postCard__imgWrap{padding:12px 12px 0}
        .hsa-postCard__img{
          width:100%;height:auto;aspect-ratio:1/1;object-fit:cover;
          border-radius:14px;border:1px solid rgba(15,23,42,.10);background:rgba(255,255,255,.6);
        }
        .hsa-postCard__body{padding:12px 12px 14px;display:flex;flex-direction:column;gap:8px}
        .hsa-postCard__meta{display:flex;align-items:center;justify-content:space-between;gap:10px}
        .hsa-tag{font-size:12px;padding:5px 9px;border-radius:999px;background:rgba(140,15,26,.10);border:1px solid rgba(140,15,26,.18);color:rgba(140,15,26,.92)}
        .hsa-level{font-size:12px;color:rgba(11,18,32,.55)}
        .hsa-postCard__title{font-weight:800;letter-spacing:-.02em;line-height:1.2}
        .hsa-postCard__desc{font-size:13px;line-height:1.45;color:rgba(11,18,32,.72);min-height:40px}
        .hsa-postCard__foot{margin-top:auto}
        .hsa-readPill{display:inline-flex;align-items:center;gap:6px;font-size:13px;padding:10px 12px;border-radius:999px;border:1px solid rgba(15,23,42,.12);background:rgba(255,255,255,.8)}
        .hsa-blogFoot{margin-top:14px}
      `}</style>

      {/* Debug line: if you see this, component rendered */}
      <div style={{ fontSize: 12, opacity: 0.55, marginBottom: 6 }}>
        BlogMarquee OK • {mu.length + intl.length} posts loaded
      </div>

      {/* Row 1 — Mauritius */}
      <div className="hsa-blogRowHead">
        <span className="hsa-blogRowPill">{isFr ? "Maurice" : "Mauritius"}</span>
        <span className="hsa-blogRowHint">
          {isFr ? "Parents • Petite enfance • Inclusion" : "Parents • Early childhood • Inclusion"}
        </span>
      </div>

      <div className="hsa-auto" aria-label="Mauritius blog row">
        <div className="hsa-autoRow">
          <div className="hsa-autoTrack">{muLoop.map((b, idx) => Card(b, `mu-${b.href}-${idx}`))}</div>
        </div>
      </div>

      {/* Row 2 — International */}
      <div className="hsa-blogRowHead hsa-blogRowHead--mt">
        <span className="hsa-blogRowPill hsa-blogRowPill--intl">International</span>
        <span className="hsa-blogRowHint">{isFr ? "Anglais • Confiance • Progression" : "English • Confidence • Progress"}</span>
      </div>

      <div className="hsa-auto" aria-label="International blog row">
        <div className="hsa-autoRow">
          <div className="hsa-autoTrack hsa-autoTrack--right">
            {intlLoop.map((b, idx) => Card(b, `intl-${b.href}-${idx}`))}
          </div>
        </div>
      </div>

      <div className="hsa-blogFoot">
        <Link className="hsa-btn hsa-btn--dark" href={`/${locale}/blog`}>
          {isFr ? "Voir tous les articles" : "View all articles"}
        </Link>
      </div>
    </>
  );
}




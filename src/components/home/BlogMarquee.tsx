"use client";

import Image from "next/image";

function clamp(s: string, n: number) {
  if (!s) return "";
  return s.length > n ? s.slice(0, n - 1).trimEnd() + "…" : s;
}

export default function BlogMarquee(props: { locale: string; isFr: boolean }) {
  const { locale, isFr } = props;

  // ✅ 8 Mauritius cards — UNIQUE TITLES + UNIQUE DESCRIPTIONS
  const mu = [
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

  // ✅ 8 International cards — UNIQUE TITLES + UNIQUE DESCRIPTIONS
  const intl = [
    {
      img: "/images/blog/blog-09.webp",
      tag: isFr ? "International" : "International",
      title: isFr ? "Anglais kids : routine courte, résultats réels" : "English for Kids: Short Routine, Real Results",
      desc: isFr
        ? "Une structure simple pour vocabulaire, écoute et expression — sans surcharge."
        : "A simple structure for vocabulary, listening, and speaking—without overwhelm.",
      href: `/${locale}/blog/english-kids-routine`,
    },
    {
      img: "/images/blog/blog-10.webp",
      tag: isFr ? "International" : "International",
      title: isFr ? "Anglais pro : parler clair au travail" : "Professional English: Speak Clearly at Work",
      desc: isFr
        ? "Phrases utiles, confiance et progression — idéal pour réunions, emails et appels."
        : "Useful phrases, confidence, and progress—perfect for meetings, emails, and calls.",
      href: `/${locale}/blog/professional-english-speak-clearly`,
    },
    {
      img: "/images/blog/blog-11.webp",
      tag: isFr ? "International" : "International",
      title: isFr ? "Cours en visio : méthode premium, fluide" : "Video Lessons: A Premium, Smooth Method",
      desc: isFr
        ? "Comment apprendre vite avec une méthode claire + guidance d’enseignant."
        : "How to learn faster with a clear method + teacher guidance.",
      href: `/${locale}/blog/video-lessons-premium-method`,
    },
    {
      img: "/images/blog/blog-12.webp",
      tag: isFr ? "International" : "International",
      title: isFr ? "Prononciation : 10 minutes par jour" : "Pronunciation: 10 Minutes a Day",
      desc: isFr
        ? "Exercices ciblés, erreurs fréquentes et routine pour parler plus naturellement."
        : "Targeted drills, common mistakes, and a routine to sound more natural.",
      href: `/${locale}/blog/pronunciation-10-minutes`,
    },
    {
      img: "/images/blog/blog-13.webp",
      tag: isFr ? "International" : "International",
      title: isFr ? "Parents : soutenir l’anglais à la maison" : "Parents: Support English at Home",
      desc: isFr
        ? "Petits rituels efficaces (sans pression) pour progresser en confiance."
        : "Small, pressure-free rituals that build confidence and progress.",
      href: `/${locale}/blog/parents-support-english-home`,
    },
    {
      img: "/images/blog/blog-14.webp",
      tag: isFr ? "International" : "International",
      title: isFr ? "Classe de groupe : parler plus, stresser moins" : "Group Classes: Speak More, Stress Less",
      desc: isFr
        ? "Conversation guidée, feedback premium et progrès mesurable semaine après semaine."
        : "Guided conversation, premium feedback, measurable progress week by week.",
      href: `/${locale}/blog/group-class-speak-more`,
    },
    {
      img: "/images/blog/blog-15.webp",
      tag: isFr ? "International" : "International",
      title: isFr ? "Vocabulaire : méthode flashcards moderne" : "Vocabulary: A Modern Flashcards Method",
      desc: isFr
        ? "Apprendre plus vite avec révision intelligente + mini objectifs quotidiens."
        : "Learn faster with smart review + small daily targets.",
      href: `/${locale}/blog/vocabulary-modern-flashcards`,
    },
    {
      img: "/images/blog/blog-16.webp",
      tag: isFr ? "International" : "International",
      title: isFr ? "Confiance à l’oral : parler naturellement" : "Speaking Confidence: Sound Natural",
      desc: isFr
        ? "Stratégies simples pour gagner en fluidité, clarté et assurance."
        : "Simple strategies to build fluency, clarity, and confidence.",
      href: `/${locale}/blog/speaking-confidence-sound-natural`,
    },
  ];

  const muLoop = [...mu, ...mu];
  const intlLoop = [...intl, ...intl];

  const Card = (b: any, key: string) => (
    <a key={key} href={b.href} className="hsa-postCard hsa-sheen hsa-postCard--pro">
      <div className="hsa-postCard__imgWrap">
        <Image
          src={b.img}
          alt={b.title}
          width={520}
          height={520}
          className="hsa-postCard__img hsa-postCard__img--sq"
          sizes="280px"
          loading="lazy"
        />
        <div className="hsa-postCard__shine" aria-hidden="true" />
      </div>

      <div className="hsa-postCard__body">
        <div className="hsa-postCard__meta">
          <span className="hsa-tag">{b.tag}</span>
          <span className="hsa-level">{isFr ? "Premium" : "Premium"}</span>
        </div>

        <div className="hsa-postCard__title">{clamp(b.title, 62)}</div>
        <div className="hsa-postCard__desc">{clamp(b.desc, 120)}</div>

        <div className="hsa-postCard__foot">
          <span className="hsa-readPill">
            <span className="hsa-readPill__short">{isFr ? "Lire" : "Read"}</span>
            <span className="hsa-readPill__long">{isFr ? "Lire l’article" : "Read article"}</span>
            <span className="hsa-readPill__arrow" aria-hidden="true">→</span>
          </span>
        </div>
      </div>
    </a>
  );

  return (
    <>
      {/* Row 1 — Mauritius */}
      <div className="hsa-blogRowHead">
        <span className="hsa-blogRowPill">{isFr ? "Maurice" : "Mauritius"}</span>
        <span className="hsa-blogRowHint">
          {isFr ? "Parents • Petite enfance • Inclusion" : "Parents • Early childhood • Inclusion"}
        </span>
      </div>

      <div className="hsa-autoRow hsa-autoRow--left hsa-blogRow" aria-label="Mauritius blog row">
        <div className="hsa-autoRow__track">
          {muLoop.map((b, idx) => Card(b, `mu-${b.img}-${idx}`))}
        </div>
      </div>

      {/* Row 2 — International */}
      <div className="hsa-blogRowHead hsa-blogRowHead--mt">
        <span className="hsa-blogRowPill hsa-blogRowPill--intl">{isFr ? "International" : "International"}</span>
        <span className="hsa-blogRowHint">
          {isFr ? "Anglais • Confiance • Progression" : "English • Confidence • Progress"}
        </span>
      </div>

      <div className="hsa-autoRow hsa-autoRow--right hsa-blogRow" aria-label="International blog row">
        <div className="hsa-autoRow__track">
          {intlLoop.map((b, idx) => Card(b, `intl-${b.img}-${idx}`))}
        </div>
      </div>

      <div className="hsa-blogFoot">
        <a className="hsa-btn hsa-btn--dark" href={`/${locale}/blog`}>
          {isFr ? "Voir tous les articles" : "View all articles"}
        </a>
      </div>
    </>
  );
}


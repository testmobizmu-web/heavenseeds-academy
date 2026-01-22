// src/lib/blogData.ts
// HeavenSeeds Academy — Local blog dataset (NO Sanity)
// 16 posts: 8 Mauritius + 8 International
// EN + FR long-form sections, used by /[locale]/blog and /[locale]/blog/[slug]

export type BlogPost = {
  slug: string;
  category: "mauritius" | "international";
  heroImg: string; // used in post page (and cards)
  publishedAt: string; // ISO date

  title_en: string;
  title_fr: string;

  desc_en: string;
  desc_fr: string;

  // rich content sections
  sections_en: { h: string; p: string[] }[];
  sections_fr: { h: string; p: string[] }[];

  // optional tags (nice for pills)
  tags_en?: string[];
  tags_fr?: string[];
};

export const BLOG_POSTS: BlogPost[] = [
  // =========================================================
  // MAURITIUS (8)
  // =========================================================
  {
    slug: "mauritius-morning-routine",
    category: "mauritius",
    heroImg: "/images/blog/blog-01.webp",
    publishedAt: "2026-01-10",
    title_en: "Morning Routine: A Calm School Arrival",
    title_fr: "Routine du matin : arrivée sereine à l’école",
    desc_en:
      "A simple checklist to reduce stress, ease transitions, and build strong early-school habits.",
    desc_fr:
      "Checklist simple pour réduire le stress, sécuriser la transition et créer de bons repères dès la maternelle.",
    tags_en: ["Parents", "Routine", "Transitions"],
    tags_fr: ["Parents", "Routine", "Transitions"],
    sections_en: [
      {
        h: "Why mornings shape the whole day",
        p: [
          "The first 10 minutes on campus can set the emotional tone for learning. When arrival is calm, children feel safe, predictable, and ready to participate.",
          "A consistent routine reduces separation stress and builds independence. Over time, children learn: “I know what happens next, and I can do it.”",
        ],
      },
      {
        h: "The premium 10-minute checklist",
        p: [
          "Prep the night before: uniform/clothes, bag, water bottle, snack. Less rushing = less anxiety.",
          "Give one small choice: “Blue shoes or white shoes?” Choice increases cooperation without overwhelming the child.",
          "Use a short goodbye ritual: hug → one sentence → wave → teacher handover. Keep it consistent, not long.",
        ],
      },
      {
        h: "If your child struggles with transitions",
        p: [
          "Use simple, repeatable language: “I’ll come back after school. You are safe.” Avoid long explanations.",
          "Arrive 5 minutes earlier so you don’t rush. Rushing is one of the biggest hidden stress triggers for children.",
          "Tell the teacher what works at home (music, breathing, comfort object) so home and school can align the approach.",
        ],
      },
      {
        h: "A small habit that builds big confidence",
        p: [
          "At home, practice “mini-separations” (2–5 minutes): you step away, come back, and praise calm waiting. It trains trust.",
          "Celebrate effort, not only results: “You walked in calmly today. I noticed your bravery.” This reinforces progress.",
        ],
      },
    ],
    sections_fr: [
      {
        h: "Pourquoi le matin influence toute la journée",
        p: [
          "Les 10 premières minutes à l’école peuvent définir le ton émotionnel de la journée. Une arrivée sereine aide l’enfant à se sentir en sécurité et prêt à apprendre.",
          "Une routine stable réduit l’anxiété de séparation et renforce l’autonomie. Avec le temps, l’enfant comprend : « Je sais ce qui vient après, je peux le faire. »",
        ],
      },
      {
        h: "La checklist premium (10 minutes)",
        p: [
          "Préparez la veille : tenue, sac, gourde, snack. Moins de précipitation = moins de stress.",
          "Donnez un petit choix : « Chaussures bleues ou blanches ? » Le choix augmente la coopération sans surcharger.",
          "Rituel de séparation court : câlin → phrase → au revoir → passage à l’enseignant. Toujours pareil, pas trop long.",
        ],
      },
      {
        h: "Si l’enfant a du mal avec les transitions",
        p: [
          "Langage simple et répétitif : « Je reviens après l’école. Tu es en sécurité. » Évitez les longues explications.",
          "Arrivez 5 minutes plus tôt pour éviter la précipitation (grand déclencheur de stress).",
          "Partagez avec l’enseignant ce qui aide à la maison (musique, respiration, objet rassurant) pour aligner maison + école.",
        ],
      },
      {
        h: "Une petite habitude pour une grande confiance",
        p: [
          "À la maison, faites des « mini-séparations » (2–5 minutes) : vous partez, revenez, et félicitez l’attente calme.",
          "Valorisez l’effort : « Aujourd’hui tu es entré calmement, j’ai vu ton courage. » Cela consolide la progression.",
        ],
      },
    ],
  },

  {
    slug: "mauritius-parent-teacher-communication",
    category: "mauritius",
    heroImg: "/images/blog/blog-02.webp",
    publishedAt: "2026-01-11",
    title_en: "Parent–Teacher Communication That Works",
    title_fr: "Parents & enseignants : communication qui marche",
    desc_en:
      "Key questions, clear follow-up, and small habits that strengthen progress and confidence.",
    desc_fr:
      "Questions clés, suivi rassurant et petites habitudes qui améliorent la progression et la confiance.",
    tags_en: ["Parents", "Progress", "Partnership"],
    tags_fr: ["Parents", "Progrès", "Partenariat"],
    sections_en: [
      {
        h: "A strong parent–teacher partnership is a child’s superpower",
        p: [
          "When home and school share the same goals and language, children feel secure and supported. Progress becomes faster and more consistent.",
          "You don’t need long meetings—what matters is clarity, respect, and continuity.",
        ],
      },
      {
        h: "3 questions that improve learning immediately",
        p: [
          "“What should we reinforce at home this week?” (one focus only: letters, routines, social skills).",
          "“What works well for my child in class?” (you can mirror it at home).",
          "“What is one small next step?” (small steps create big progress).",
        ],
      },
      {
        h: "The follow-up routine (simple + premium)",
        p: [
          "Pick one weekly habit: 10 minutes reading, 5 minutes phonics, or a calm bedtime routine.",
          "Send a short message to the teacher with one line: “We practiced X—thank you.” This builds continuity without pressure.",
          "Keep a tiny “wins note” at home (2–3 points per week). It helps teachers personalize support faster.",
        ],
      },
      {
        h: "How to talk about difficulties without stress",
        p: [
          "Use facts, not fear: “He struggles to transition after playtime” instead of “He is always difficult.”",
          "Ask for strategies: “What do you do in class that calms him?” Then repeat at home.",
          "Remember: consistent support beats perfect support.",
        ],
      },
    ],
    sections_fr: [
      {
        h: "Un bon partenariat parents–enseignants : un super pouvoir",
        p: [
          "Quand la maison et l’école partagent les mêmes objectifs et le même langage, l’enfant se sent soutenu. Les progrès sont plus rapides et plus stables.",
          "Pas besoin de longues réunions : l’essentiel, c’est la clarté, le respect et la continuité.",
        ],
      },
      {
        h: "3 questions qui améliorent l’apprentissage tout de suite",
        p: [
          "« Que devons-nous renforcer à la maison cette semaine ? » (un seul focus).",
          "« Qu’est-ce qui fonctionne bien en classe pour mon enfant ? » (à reproduire à la maison).",
          "« Quelle est la prochaine petite étape ? » (les petites étapes créent de grands progrès).",
        ],
      },
      {
        h: "Routine de suivi (simple + premium)",
        p: [
          "Choisissez une habitude hebdo : 10 min lecture, 5 min phonics, ou routine du coucher.",
          "Envoyez un message court : « On a travaillé X—merci. » Continuité sans pression.",
          "Gardez une mini liste de “petites victoires” (2–3 points/semaine) pour aider l’équipe à personnaliser.",
        ],
      },
      {
        h: "Parler des difficultés sans stress",
        p: [
          "Utilisez des faits : « Transition difficile après le jeu » plutôt que « toujours compliqué ».",
          "Demandez des stratégies : « Qu’est-ce qui l’aide en classe ? » Puis appliquez à la maison.",
          "La cohérence vaut mieux que la perfection.",
        ],
      },
    ],
  },

  {
    slug: "mauritius-outdoor-learning",
    category: "mauritius",
    heroImg: "/images/blog/blog-03.webp",
    publishedAt: "2026-01-12",
    title_en: "Outdoor Learning: Independence & Curiosity",
    title_fr: "Apprendre dehors : autonomie & curiosité",
    desc_en:
      "How structured outdoor play boosts attention, social skills, and motor development.",
    desc_fr:
      "Pourquoi le jeu structuré en plein air améliore l’attention, la socialisation et la motricité.",
    tags_en: ["Outdoor", "Motor skills", "Confidence"],
    tags_fr: ["Plein air", "Motricité", "Confiance"],
    sections_en: [
      {
        h: "Outdoor learning isn’t “free time”—it’s brain development",
        p: [
          "Outdoor play strengthens balance, coordination, and sensory regulation—essential foundations for reading, writing, and focus.",
          "Children learn risk-awareness in a safe way: stepping carefully, waiting turns, making choices.",
        ],
      },
      {
        h: "3 skills that grow faster outside",
        p: [
          "Attention: movement resets the brain and reduces restlessness.",
          "Social skills: games naturally teach turn-taking, negotiation, and empathy.",
          "Language: children describe what they see and do—this builds vocabulary in a real context.",
        ],
      },
      {
        h: "Structured outdoor play (a premium approach)",
        p: [
          "Use short “missions”: find 3 leaves, sort by color, count steps, name shapes in nature.",
          "Add gentle routines: drink water, wash hands, calm breathing after play.",
          "Praise “process”: “You tried again,” “You waited,” “You helped your friend.”",
        ],
      },
      {
        h: "At home: 15 minutes that make a difference",
        p: [
          "A short walk + simple observation (colors, numbers, shapes) builds focus without screens.",
          "End with one question: “What was your favorite part?” This improves recall and emotional expression.",
        ],
      },
    ],
    sections_fr: [
      {
        h: "Apprendre dehors, ce n’est pas “du temps libre”",
        p: [
          "Le jeu en plein air renforce l’équilibre, la coordination et la régulation sensorielle — bases essentielles pour l’attention et l’écriture.",
          "L’enfant apprend à gérer le risque de façon sécurisée : avancer prudemment, attendre son tour, faire des choix.",
        ],
      },
      {
        h: "3 compétences qui progressent plus vite dehors",
        p: [
          "Attention : le mouvement “réinitialise” le cerveau et réduit l’agitation.",
          "Social : les jeux apprennent naturellement le tour de rôle, la négociation, l’empathie.",
          "Langage : décrire ce qu’on voit et fait enrichit le vocabulaire en contexte réel.",
        ],
      },
      {
        h: "Jeu extérieur structuré (approche premium)",
        p: [
          "Petites “missions” : trouver 3 feuilles, trier par couleur, compter des pas, nommer des formes.",
          "Routines douces : boire, se laver les mains, respirer calmement après le jeu.",
          "Valoriser le “processus” : « Tu as réessayé », « Tu as attendu », « Tu as aidé ton ami ».",
        ],
      },
      {
        h: "À la maison : 15 minutes utiles",
        p: [
          "Une petite marche + observation (couleurs, nombres, formes) améliore la concentration sans écran.",
          "Terminez par une question : « Qu’est-ce que tu as préféré ? » (mémoire + expression émotionnelle).",
        ],
      },
    ],
  },

  {
    slug: "mauritius-early-intervention",
    category: "mauritius",
    heroImg: "/images/blog/blog-04.webp",
    publishedAt: "2026-01-13",
    title_en: "Early Intervention: Spot It, Support It",
    title_fr: "Intervention précoce : repérer & agir tôt",
    desc_en:
      "Signals to watch, simple actions, and inclusive support for measurable progress.",
    desc_fr:
      "Signaux à surveiller, actions simples et approche inclusive pour des progrès mesurables.",
    tags_en: ["Inclusion", "Support", "Progress"],
    tags_fr: ["Inclusion", "Soutien", "Progrès"],
    sections_en: [
      {
        h: "Early support is not a label—it’s a boost",
        p: [
          "Early intervention simply means giving the right support at the right time. It reduces frustration and builds confidence.",
          "Many children just need structured routines, clear language, and consistent practice to thrive.",
        ],
      },
      {
        h: "Common signals worth discussing (without panic)",
        p: [
          "Frequent difficulty with transitions, attention, or emotional regulation.",
          "Language delays: limited words, unclear speech, difficulty following simple instructions.",
          "Social challenges: avoiding peers, difficulty with turn-taking, repetitive play only.",
        ],
      },
      {
        h: "What parents can do immediately",
        p: [
          "Use predictable routines (morning, bedtime, study time). Predictability reduces stress.",
          "Give one instruction at a time + show visually (point, picture, simple gesture).",
          "Practice in micro-moments: 2–5 minutes daily beats 30 minutes once a week.",
        ],
      },
      {
        h: "Inclusive support at school: what it looks like",
        p: [
          "Clear structure, warm guidance, and measurable goals (small steps).",
          "Teacher-parent alignment: same phrases, same routines, same focus for the week.",
          "Celebrating progress: confidence grows when children feel seen and capable.",
        ],
      },
    ],
    sections_fr: [
      {
        h: "Le soutien précoce n’est pas une étiquette : c’est un coup de pouce",
        p: [
          "L’intervention précoce, c’est donner le bon soutien au bon moment. Cela réduit la frustration et renforce la confiance.",
          "Beaucoup d’enfants ont surtout besoin de routines, de langage clair et de cohérence.",
        ],
      },
      {
        h: "Signaux fréquents à discuter (sans panique)",
        p: [
          "Difficultés régulières avec les transitions, l’attention, l’autorégulation.",
          "Retard de langage : peu de mots, articulation difficile, consignes simples compliquées.",
          "Défis sociaux : évite les pairs, difficulté à attendre son tour, jeu très répétitif.",
        ],
      },
      {
        h: "Ce que les parents peuvent faire tout de suite",
        p: [
          "Routines prévisibles (matin, coucher, temps de travail) : la prévisibilité rassure.",
          "Une consigne à la fois + support visuel (montrer, image, geste).",
          "Micro-pratique : 2–5 minutes par jour vaut mieux que 30 minutes une fois/semaine.",
        ],
      },
      {
        h: "Soutien inclusif à l’école : à quoi ça ressemble",
        p: [
          "Structure claire, guidance bienveillante, objectifs mesurables (petites étapes).",
          "Alignement parents–école : mêmes phrases, mêmes routines, même focus de la semaine.",
          "Valoriser les progrès : la confiance grandit quand l’enfant se sent capable.",
        ],
      },
    ],
  },

  {
    slug: "mauritius-sensory-play",
    category: "mauritius",
    heroImg: "/images/blog/blog-05.webp",
    publishedAt: "2026-01-14",
    title_en: "Sensory Play: Calm, Focus, Language",
    title_fr: "Jeu sensoriel : calme, focus, langage",
    desc_en:
      "Easy premium activities at home to build vocabulary and self-regulation.",
    desc_fr:
      "Activités premium faciles à faire à la maison pour développer le vocabulaire et l’autorégulation.",
    tags_en: ["Sensory", "Focus", "Vocabulary"],
    tags_fr: ["Sensoriel", "Concentration", "Vocabulaire"],
    sections_en: [
      {
        h: "Why sensory play helps learning",
        p: [
          "Sensory activities help children regulate emotions and attention. When the body is calm, the brain is ready to learn.",
          "It also supports language: children name textures, actions, feelings—this builds vocabulary naturally.",
        ],
      },
      {
        h: "3 premium sensory ideas (simple at home)",
        p: [
          "Rice/beans tray: hide small objects and ask the child to find and name them (colors, shapes).",
          "Play-dough: roll, press, cut—then describe actions (“soft,” “smooth,” “big/small”).",
          "Water play: cups, funnels, scoops—practice counting, “full/empty,” “more/less.”",
        ],
      },
      {
        h: "How to keep it calm (not messy stress)",
        p: [
          "Use one tray + one towel. Set a timer (10–15 minutes). Clear start and finish.",
          "Give one goal: “Let’s find 5 objects” instead of open-ended chaos.",
          "End with a clean-up ritual—children love predictable closure.",
        ],
      },
      {
        h: "Language booster: 5 words per day",
        p: [
          "Pick 5 words from the activity (texture/action/color) and repeat them across the day.",
          "Consistency turns play into progress.",
        ],
      },
    ],
    sections_fr: [
      {
        h: "Pourquoi le jeu sensoriel aide l’apprentissage",
        p: [
          "Les activités sensorielles aident l’enfant à réguler ses émotions et son attention. Quand le corps se calme, le cerveau apprend mieux.",
          "Cela développe aussi le langage : textures, actions, émotions — le vocabulaire se construit naturellement.",
        ],
      },
      {
        h: "3 idées sensorielles premium (faciles à la maison)",
        p: [
          "Bac de riz/haricots : cacher de petits objets et les retrouver (couleurs, formes).",
          "Pâte à modeler : rouler, presser, découper — puis décrire (“doux”, “lisse”, “grand/petit”).",
          "Jeu d’eau : gobelets, entonnoirs, cuillères — compter, “plein/vide”, “plus/moins”.",
        ],
      },
      {
        h: "Garder l’activité calme (sans stress)",
        p: [
          "Un bac + une serviette. Minuteur 10–15 minutes. Début et fin clairs.",
          "Un seul objectif : « Trouvons 5 objets » au lieu du “grand bazar”.",
          "Terminez avec un rituel de rangement : la clôture rassure.",
        ],
      },
      {
        h: "Booster langage : 5 mots par jour",
        p: [
          "Choisissez 5 mots (texture/action/couleur) et répétez-les dans la journée.",
          "La cohérence transforme le jeu en progrès.",
        ],
      },
    ],
  },

  {
    slug: "mauritius-reading-phonics",
    category: "mauritius",
    heroImg: "/images/blog/blog-06.webp",
    publishedAt: "2026-01-15",
    title_en: "Reading & Phonics: A Strong Bedtime Routine",
    title_fr: "Lecture & phonics : routine du soir efficace",
    desc_en:
      "A simple method to improve pronunciation, comprehension, and love for books.",
    desc_fr:
      "Une méthode simple pour améliorer la prononciation, la compréhension et l’amour des livres.",
    tags_en: ["Reading", "Phonics", "Routine"],
    tags_fr: ["Lecture", "Phonics", "Routine"],
    sections_en: [
      {
        h: "Why bedtime reading works so well",
        p: [
          "At night, children are calmer. Calm brains absorb language faster—sounds, words, and meaning.",
          "A consistent bedtime routine builds trust and makes reading feel safe and enjoyable.",
        ],
      },
      {
        h: "The 15-minute premium routine",
        p: [
          "5 minutes phonics: one sound + 3 examples (“s” → sun, sock, sandwich).",
          "8 minutes story: read slowly, point to key words, let the child repeat one sentence.",
          "2 minutes recap: ask one question (“What happened first?”) and praise effort.",
        ],
      },
      {
        h: "Pronunciation without pressure",
        p: [
          "Model the word once clearly. Avoid repeating “No, wrong” — instead say “Let’s try together.”",
          "Use short playful repetition: whisper voice, robot voice, singing voice (children love it).",
        ],
      },
      {
        h: "If your child doesn’t like books yet",
        p: [
          "Start with picture books and let the child “read” by describing pictures.",
          "Choose topics they love (animals, vehicles, colors). Motivation is the fastest learning tool.",
        ],
      },
    ],
    sections_fr: [
      {
        h: "Pourquoi la lecture du soir fonctionne si bien",
        p: [
          "Le soir, l’enfant est plus calme. Un cerveau calme absorbe mieux les sons, les mots et le sens.",
          "Une routine stable construit la confiance : lire devient agréable et rassurant.",
        ],
      },
      {
        h: "Routine premium (15 minutes)",
        p: [
          "5 minutes phonics : un son + 3 exemples.",
          "8 minutes histoire : lire lentement, pointer des mots, faire répéter une phrase.",
          "2 minutes résumé : une question (“Qu’est-ce qui s’est passé d’abord ?”) + encouragement.",
        ],
      },
      {
        h: "Prononciation sans pression",
        p: [
          "Modélisez le mot une fois clairement. Évitez “Non, c’est faux”. Dites plutôt : « On essaie ensemble. »",
          "Répétition ludique : voix chuchotée, robot, chanson (les enfants adorent).",
        ],
      },
      {
        h: "Si l’enfant n’aime pas encore les livres",
        p: [
          "Commencez avec des livres d’images : l’enfant “lit” en décrivant.",
          "Choisissez un thème aimé (animaux, véhicules, couleurs). La motivation accélère l’apprentissage.",
        ],
      },
    ],
  },

  {
    slug: "mauritius-campus-arrival",
    category: "mauritius",
    heroImg: "/images/blog/blog-07.webp",
    publishedAt: "2026-01-16",
    title_en: "Safety & Structure: Campus Arrival Habits",
    title_fr: "Sécurité & repères : l’accueil au campus",
    desc_en:
      "Arrival routines, transitions, and confidence—so children feel safe and settled.",
    desc_fr:
      "Routines d’arrivée, transitions et confiance — pour des enfants plus sereins.",
    tags_en: ["Safety", "Structure", "Confidence"],
    tags_fr: ["Sécurité", "Structure", "Confiance"],
    sections_en: [
      {
        h: "Children thrive with structure",
        p: [
          "Structure is not strictness—it’s reassurance. When children know the steps, they relax and become more independent.",
          "A safe arrival routine reduces stress for children and parents and improves the start of learning time.",
        ],
      },
      {
        h: "The arrival flow that works",
        p: [
          "Greet → store belongings → short check-in → join activity. Same steps daily.",
          "Transitions are easier when the child has a “job”: carry their bottle, place their bag, choose a book.",
        ],
      },
      {
        h: "Safety habits to build at home too",
        p: [
          "Practice “stop and listen” games: freeze when you hear a word (helps safety awareness).",
          "Teach simple rules: walk indoors, hold hands in parking areas, wait for teacher signal.",
        ],
      },
      {
        h: "Confidence is built through repetition",
        p: [
          "When a child repeats the same safe routine for 2–3 weeks, confidence increases naturally.",
          "Celebrate small wins: calm entry, greeting teacher, joining group activity.",
        ],
      },
    ],
    sections_fr: [
      {
        h: "Les enfants progressent avec des repères",
        p: [
          "La structure n’est pas la rigidité : c’est la sécurité. Quand l’enfant connaît les étapes, il se détend et gagne en autonomie.",
          "Une routine d’accueil claire diminue le stress (parents + enfants) et améliore le début de journée.",
        ],
      },
      {
        h: "Le flow d’arrivée qui marche",
        p: [
          "Accueil → ranger ses affaires → petit check-in → rejoindre une activité. Toujours pareil.",
          "Les transitions deviennent plus faciles quand l’enfant a une “mission” : poser le sac, choisir un livre, etc.",
        ],
      },
      {
        h: "Habitudes sécurité à renforcer à la maison",
        p: [
          "Jeux “stop et écoute” : se figer quand on entend un mot (réflexes sécurité).",
          "Règles simples : marcher à l’intérieur, tenir la main au parking, attendre le signal de l’enseignant.",
        ],
      },
      {
        h: "La confiance vient de la répétition",
        p: [
          "Après 2–3 semaines de routine stable, la confiance grandit naturellement.",
          "Félicitez les petites victoires : entrée calme, bonjour, intégration au groupe.",
        ],
      },
    ],
  },

  {
    slug: "mauritius-inclusion-progress",
    category: "mauritius",
    heroImg: "/images/blog/blog-08.webp",
    publishedAt: "2026-01-17",
    title_en: "Inclusion: Learn Together, Progress Better",
    title_fr: "Inclusion : apprendre ensemble, progresser mieux",
    desc_en:
      "How inclusive classrooms strengthen language, social skills, and self-esteem.",
    desc_fr:
      "Comment un environnement inclusif renforce le langage, la socialisation et l’estime de soi.",
    tags_en: ["Inclusion", "Self-esteem", "Community"],
    tags_fr: ["Inclusion", "Estime de soi", "Communauté"],
    sections_en: [
      {
        h: "Inclusion benefits every child",
        p: [
          "Inclusive classrooms don’t only support children with specific needs—they improve empathy, communication, and teamwork for everyone.",
          "Children learn to help, to wait, to understand differences, and to build true confidence together.",
        ],
      },
      {
        h: "What inclusion looks like in a premium setting",
        p: [
          "Clear routines, calm transitions, and supportive guidance.",
          "Differentiated tasks: the same theme, but different difficulty levels so every child can succeed.",
          "Positive language and measurable goals that focus on progress, not comparisons.",
        ],
      },
      {
        h: "How inclusion improves language and social skills",
        p: [
          "More peer interaction = more real conversation opportunities.",
          "Children mirror each other—good routines and respectful behavior spread quickly.",
          "Social success boosts motivation, and motivated children learn faster.",
        ],
      },
      {
        h: "At home: the inclusion mindset",
        p: [
          "Use simple language about differences: “Everyone learns in their own way.”",
          "Praise kindness and patience. These are foundational life skills.",
        ],
      },
    ],
    sections_fr: [
      {
        h: "L’inclusion profite à tous les enfants",
        p: [
          "Une classe inclusive ne soutient pas seulement les enfants avec besoins spécifiques : elle développe l’empathie, la communication et l’esprit d’équipe pour tous.",
          "Les enfants apprennent à aider, à attendre, à comprendre les différences — et à gagner confiance ensemble.",
        ],
      },
      {
        h: "À quoi ressemble l’inclusion en mode premium",
        p: [
          "Routines claires, transitions calmes, guidance bienveillante.",
          "Tâches différenciées : même thème, niveaux adaptés pour permettre la réussite à chacun.",
          "Langage positif et objectifs mesurables centrés sur le progrès (pas la comparaison).",
        ],
      },
      {
        h: "Pourquoi l’inclusion améliore le langage et le social",
        p: [
          "Plus d’interactions = plus d’occasions de conversation réelle.",
          "Les enfants se copient : les bons comportements se diffusent rapidement.",
          "La réussite sociale renforce la motivation, et la motivation accélère l’apprentissage.",
        ],
      },
      {
        h: "À la maison : l’état d’esprit inclusion",
        p: [
          "Phrase simple : « Chacun apprend à sa façon. »",
          "Valorisez la gentillesse et la patience : ce sont des compétences de vie essentielles.",
        ],
      },
    ],
  },

  // =========================================================
  // INTERNATIONAL (8)
  // =========================================================
  {
    slug: "english-kids-routine",
    category: "international",
    heroImg: "/images/blog/blog-09.webp",
    publishedAt: "2026-01-18",
    title_en: "English for Kids: Short Routine, Real Results",
    title_fr: "Anglais kids : routine courte, résultats réels",
    desc_en:
      "A simple structure for vocabulary, listening, and speaking—without overwhelm.",
    desc_fr:
      "Une structure simple pour vocabulaire, écoute et expression — sans surcharge.",
    tags_en: ["Kids", "Routine", "Confidence"],
    tags_fr: ["Enfants", "Routine", "Confiance"],
    sections_en: [
      {
        h: "Small daily practice beats long weekly sessions",
        p: [
          "Children learn language through repetition and emotional comfort. Short daily routines feel safe and enjoyable.",
          "A 12–15 minute routine builds vocabulary and speaking confidence without fatigue.",
        ],
      },
      {
        h: "The 3-step routine (12 minutes)",
        p: [
          "4 minutes listening: a short audio or video (slow, clear). Repeat one key sentence together.",
          "4 minutes vocabulary: 5 words only (picture cards). Use each word in a simple sentence.",
          "4 minutes speaking: one mini-dialogue: “Hello / My name is / I like …” Keep it playful.",
        ],
      },
      {
        h: "How to keep motivation high",
        p: [
          "Use themes children love: animals, food, colors, superheroes, vehicles.",
          "End with success: choose an easy final question so the child finishes feeling capable.",
        ],
      },
      {
        h: "Parent-friendly tip",
        p: [
          "Don’t correct every mistake. Model the correct sentence naturally and praise effort.",
        ],
      },
    ],
    sections_fr: [
      {
        h: "La petite pratique quotidienne est la plus efficace",
        p: [
          "Les enfants apprennent grâce à la répétition et au confort émotionnel. Une routine courte est rassurante.",
          "12–15 minutes par jour suffisent pour construire vocabulaire et confiance sans fatigue.",
        ],
      },
      {
        h: "Routine en 3 étapes (12 minutes)",
        p: [
          "4 minutes écoute : audio/vidéo courte (lente, claire). Répétez une phrase clé.",
          "4 minutes vocabulaire : 5 mots seulement (images). Une phrase simple par mot.",
          "4 minutes oral : mini dialogue : « Hello / My name is / I like… » Ludique et léger.",
        ],
      },
      {
        h: "Garder la motivation élevée",
        p: [
          "Choisissez des thèmes aimés : animaux, nourriture, couleurs, etc.",
          "Finissez par une réussite : une question facile pour terminer en confiance.",
        ],
      },
      {
        h: "Astuce parent-friendly",
        p: [
          "Ne corrigez pas tout. Modélisez la bonne phrase naturellement et félicitez l’effort.",
        ],
      },
    ],
  },

  {
    slug: "professional-english-speak-clearly",
    category: "international",
    heroImg: "/images/blog/blog-10.webp",
    publishedAt: "2026-01-19",
    title_en: "Professional English: Speak Clearly at Work",
    title_fr: "Anglais pro : parler clair au travail",
    desc_en:
      "Useful phrases, confidence, and progress—perfect for meetings, emails, and calls.",
    desc_fr:
      "Phrases utiles, confiance et progression — idéal pour réunions, emails et appels.",
    tags_en: ["Work", "Meetings", "Emails"],
    tags_fr: ["Travail", "Réunions", "Emails"],
    sections_en: [
      {
        h: "Clarity matters more than advanced vocabulary",
        p: [
          "In professional settings, clear simple English is more effective than complex sentences.",
          "The goal is confidence and correctness in the most common workplace situations.",
        ],
      },
      {
        h: "Meeting phrases you can use immediately",
        p: [
          "“Just to clarify…” / “What I mean is…”",
          "“Can we confirm the next step?”",
          "“I agree, and I’d like to add…”",
        ],
      },
      {
        h: "Email structure (premium simple)",
        p: [
          "Opening: purpose in one line. “I’m writing to…”",
          "Body: 2–3 short points (bullets if needed).",
          "Closing: action + thanks. “Please confirm by…” / “Thank you.”",
        ],
      },
      {
        h: "Fast progress plan (10 minutes/day)",
        p: [
          "3 minutes pronunciation (one tricky sound).",
          "4 minutes phrases (repeat aloud).",
          "3 minutes role-play (record your voice once).",
        ],
      },
    ],
    sections_fr: [
      {
        h: "La clarté est plus importante que le vocabulaire compliqué",
        p: [
          "Au travail, un anglais simple et clair est souvent plus efficace que des phrases complexes.",
          "Le but : confiance + justesse dans les situations les plus fréquentes.",
        ],
      },
      {
        h: "Phrases utiles en réunion",
        p: [
          "« Just to clarify… » / « What I mean is… »",
          "« Can we confirm the next step? »",
          "« I agree, and I’d like to add… »",
        ],
      },
      {
        h: "Structure email (premium simple)",
        p: [
          "Ouverture : objectif en 1 ligne. « I’m writing to… »",
          "Corps : 2–3 points courts (puces si besoin).",
          "Conclusion : action + merci. « Please confirm by… » / « Thank you. »",
        ],
      },
      {
        h: "Plan progrès rapide (10 min/jour)",
        p: [
          "3 min prononciation (un son).",
          "4 min phrases (répéter à voix haute).",
          "3 min mini rôle-play (enregistrer sa voix).",
        ],
      },
    ],
  },

  {
    slug: "video-lessons-premium-method",
    category: "international",
    heroImg: "/images/blog/blog-11.webp",
    publishedAt: "2026-01-20",
    title_en: "Video Lessons: A Premium, Smooth Method",
    title_fr: "Cours en visio : méthode premium, fluide",
    desc_en:
      "How to learn faster with a clear method + teacher guidance.",
    desc_fr:
      "Comment apprendre vite avec une méthode claire + guidance d’enseignant.",
    tags_en: ["Online", "Method", "Teacher guidance"],
    tags_fr: ["En ligne", "Méthode", "Guidance"],
    sections_en: [
      {
        h: "Why video lessons can be faster than traditional classes",
        p: [
          "Video lessons reduce travel time and increase consistency. Consistency is the #1 factor for language progress.",
          "A premium method focuses on clear steps, active speaking, and quick correction.",
        ],
      },
      {
        h: "The HeavenSeeds-style lesson flow",
        p: [
          "Warm-up (2 minutes): short conversation to reduce stress.",
          "Core focus (10 minutes): one skill—pronunciation, grammar, or speaking pattern.",
          "Practice (10 minutes): guided speaking with feedback.",
          "Homework (3 minutes): a tiny task for daily repetition.",
        ],
      },
      {
        h: "How students stay confident online",
        p: [
          "Clear expectations: small achievable goals each session.",
          "Support channel: WhatsApp/email for quick guidance when needed.",
          "Progress tracking: repeated patterns so the learner feels improvement.",
        ],
      },
      {
        h: "Best results tip",
        p: [
          "Schedule your lessons at the same time each week. Routine makes learning automatic.",
        ],
      },
    ],
    sections_fr: [
      {
        h: "Pourquoi la visio peut accélérer l’apprentissage",
        p: [
          "La visio enlève le temps de déplacement et augmente la régularité. La régularité est le facteur #1 des progrès.",
          "Une méthode premium : étapes claires, oral actif, corrections rapides.",
        ],
      },
      {
        h: "Flow de cours façon HeavenSeeds",
        p: [
          "Warm-up (2 min) : petite conversation pour réduire le stress.",
          "Focus (10 min) : une compétence (prononciation, grammaire, pattern).",
          "Pratique (10 min) : oral guidé + feedback.",
          "Devoir (3 min) : micro-tâche à répéter chaque jour.",
        ],
      },
      {
        h: "Garder confiance en ligne",
        p: [
          "Objectifs simples et atteignables à chaque séance.",
          "Support : WhatsApp/email pour guidance rapide.",
          "Suivi : répétition de patterns pour ressentir les progrès.",
        ],
      },
      {
        h: "Astuce résultats",
        p: [
          "Planifiez toujours à la même heure chaque semaine. La routine automatise l’apprentissage.",
        ],
      },
    ],
  },

  {
    slug: "pronunciation-10-minutes",
    category: "international",
    heroImg: "/images/blog/blog-12.webp",
    publishedAt: "2026-01-21",
    title_en: "Pronunciation: 10 Minutes a Day",
    title_fr: "Prononciation : 10 minutes par jour",
    desc_en:
      "Targeted drills, common mistakes, and a routine to sound more natural.",
    desc_fr:
      "Exercices ciblés, erreurs fréquentes et routine pour parler plus naturellement.",
    tags_en: ["Pronunciation", "Routine", "Fluency"],
    tags_fr: ["Prononciation", "Routine", "Fluidité"],
    sections_en: [
      {
        h: "Pronunciation improves confidence instantly",
        p: [
          "Many learners know vocabulary but feel shy because of pronunciation. Improving clarity boosts confidence quickly.",
          "You don’t need hours—just targeted repetition with feedback.",
        ],
      },
      {
        h: "The 10-minute routine",
        p: [
          "2 minutes: pick one sound (th / r / l / v).",
          "4 minutes: repeat 10 words + 3 short sentences.",
          "2 minutes: record your voice once (listen, adjust).",
          "2 minutes: speak freely using the same sound (mini story).",
        ],
      },
      {
        h: "Common mistakes (and quick fixes)",
        p: [
          "Speaking too fast: slow down by 10%. Clarity increases immediately.",
          "No mouth movement: exaggerate slightly during practice. Then return to natural speech.",
          "No rhythm: practice stress in sentences (important words louder).",
        ],
      },
      {
        h: "Premium tip",
        p: [
          "Use the same 1–2 sounds for a week. Repetition creates real change.",
        ],
      },
    ],
    sections_fr: [
      {
        h: "La prononciation boost la confiance immédiatement",
        p: [
          "Beaucoup de personnes connaissent le vocabulaire mais se sentent timides à cause de la prononciation. Améliorer la clarté augmente la confiance.",
          "Pas besoin d’heures : répétition ciblée + feedback.",
        ],
      },
      {
        h: "Routine 10 minutes",
        p: [
          "2 min : choisir un son (th / r / l / v).",
          "4 min : 10 mots + 3 phrases courtes.",
          "2 min : enregistrer sa voix une fois (écouter, ajuster).",
          "2 min : parler librement en utilisant le son (mini histoire).",
        ],
      },
      {
        h: "Erreurs fréquentes (solutions rapides)",
        p: [
          "Parler trop vite : ralentir de 10% = clarté immédiate.",
          "Bouche peu active : exagérer légèrement en pratique puis revenir au naturel.",
          "Rythme absent : travailler l’accentuation (mots importants plus marqués).",
        ],
      },
      {
        h: "Astuce premium",
        p: [
          "Gardez 1–2 sons pour toute la semaine. La répétition crée le vrai changement.",
        ],
      },
    ],
  },

  {
    slug: "parents-support-english-home",
    category: "international",
    heroImg: "/images/blog/blog-13.webp",
    publishedAt: "2026-01-22",
    title_en: "Parents: Support English at Home",
    title_fr: "Parents : soutenir l’anglais à la maison",
    desc_en:
      "Small, pressure-free rituals that build confidence and progress.",
    desc_fr:
      "Petits rituels efficaces (sans pression) pour progresser en confiance.",
    tags_en: ["Parents", "Home practice", "Confidence"],
    tags_fr: ["Parents", "Maison", "Confiance"],
    sections_en: [
      {
        h: "Parents don’t need perfect English to help",
        p: [
          "You support learning through routine, encouragement, and simple repetition—not by being a native speaker.",
          "Your child learns confidence from your calm support.",
        ],
      },
      {
        h: "3 pressure-free rituals",
        p: [
          "“Word of the day”: pick one word and use it 3 times that day.",
          "“2-minute talk”: ask one question daily: “What did you like today?”",
          "“Song time”: one English song per day with simple repetition.",
        ],
      },
      {
        h: "What to avoid",
        p: [
          "Avoid long corrections. Model the correct phrase naturally.",
          "Avoid making English feel like punishment. Keep sessions short and positive.",
        ],
      },
      {
        h: "Premium habit",
        p: [
          "Celebrate consistency: a sticker chart for daily practice (not for perfection).",
        ],
      },
    ],
    sections_fr: [
      {
        h: "Les parents n’ont pas besoin d’un anglais parfait",
        p: [
          "Vous aidez grâce à la routine, l’encouragement, la répétition — pas en étant natif.",
          "L’enfant apprend la confiance grâce à votre soutien calme.",
        ],
      },
      {
        h: "3 rituels sans pression",
        p: [
          "« Mot du jour » : un mot, 3 utilisations dans la journée.",
          "« 2 minutes de discussion » : une question par jour : « Qu’as-tu aimé aujourd’hui ? »",
          "« Chanson » : une chanson anglaise quotidienne, répétition simple.",
        ],
      },
      {
        h: "À éviter",
        p: [
          "Évitez les corrections longues. Modélisez la bonne phrase naturellement.",
          "Évitez que l’anglais devienne une punition. Court + positif.",
        ],
      },
      {
        h: "Habitude premium",
        p: [
          "Récompensez la régularité : tableau de stickers pour la pratique quotidienne (pas la perfection).",
        ],
      },
    ],
  },

  {
    slug: "group-class-speak-more",
    category: "international",
    heroImg: "/images/blog/blog-14.webp",
    publishedAt: "2026-01-23",
    title_en: "Group Classes: Speak More, Stress Less",
    title_fr: "Classe de groupe : parler plus, stresser moins",
    desc_en:
      "Guided conversation, premium feedback, measurable progress week by week.",
    desc_fr:
      "Conversation guidée, feedback premium et progrès mesurable semaine après semaine.",
    tags_en: ["Group", "Speaking", "Confidence"],
    tags_fr: ["Groupe", "Oral", "Confiance"],
    sections_en: [
      {
        h: "Why group classes reduce stress",
        p: [
          "In group settings, learners realize they are not alone. Shared effort reduces fear and increases motivation.",
          "Guided conversation means you speak more naturally, not just memorize grammar rules.",
        ],
      },
      {
        h: "What makes a group class premium",
        p: [
          "Clear speaking roles so everyone participates.",
          "Gentle correction focused on clarity and confidence.",
          "Weekly targets: one speaking pattern repeated until it becomes natural.",
        ],
      },
      {
        h: "How to progress weekly",
        p: [
          "Week 1: introduce yourself + common questions.",
          "Week 2: talk about daily routine and preferences.",
          "Week 3: describe work/study goals and plans.",
          "Week 4: mini presentations with supportive feedback.",
        ],
      },
      {
        h: "If you feel shy",
        p: [
          "Start with short sentences. Fluency comes from repetition, not perfection.",
        ],
      },
    ],
    sections_fr: [
      {
        h: "Pourquoi les classes de groupe réduisent le stress",
        p: [
          "En groupe, l’apprenant comprend qu’il n’est pas seul. L’effort partagé réduit la peur et augmente la motivation.",
          "La conversation guidée fait parler plus naturellement, au-delà des règles de grammaire.",
        ],
      },
      {
        h: "Ce qui rend un groupe premium",
        p: [
          "Rôles clairs pour que chacun participe.",
          "Corrections douces centrées sur la clarté et la confiance.",
          "Objectifs hebdo : un pattern oral répété jusqu’à devenir naturel.",
        ],
      },
      {
        h: "Progresser semaine après semaine",
        p: [
          "Semaine 1 : se présenter + questions de base.",
          "Semaine 2 : parler routine et préférences.",
          "Semaine 3 : objectifs travail/études et plans.",
          "Semaine 4 : mini présentations + feedback.",
        ],
      },
      {
        h: "Si vous êtes timide",
        p: [
          "Commencez avec des phrases courtes. La fluidité vient de la répétition, pas de la perfection.",
        ],
      },
    ],
  },

  {
    slug: "vocabulary-modern-flashcards",
    category: "international",
    heroImg: "/images/blog/blog-15.webp",
    publishedAt: "2026-01-24",
    title_en: "Vocabulary: A Modern Flashcards Method",
    title_fr: "Vocabulaire : méthode flashcards moderne",
    desc_en:
      "Learn faster with smart review + small daily targets.",
    desc_fr:
      "Apprendre plus vite avec révision intelligente + mini objectifs quotidiens.",
    tags_en: ["Vocabulary", "Flashcards", "Review"],
    tags_fr: ["Vocabulaire", "Flashcards", "Révision"],
    sections_en: [
      {
        h: "Vocabulary grows with smart repetition",
        p: [
          "Most learners forget words because they don’t revisit them at the right time.",
          "Modern flashcards work when you keep targets small and review consistently.",
        ],
      },
      {
        h: "The premium flashcards system",
        p: [
          "Choose 10 words for the week (not 100).",
          "Day 1–2: learn + say them aloud.",
          "Day 3–4: use each word in a sentence.",
          "Day 5–6: quick review (mix order).",
          "Day 7: speaking challenge: use 5 words in a short story.",
        ],
      },
      {
        h: "Make words “real”",
        p: [
          "Link each word to a picture, a personal example, or a situation.",
          "The brain remembers meaning more than lists.",
        ],
      },
      {
        h: "Fast progress tip",
        p: [
          "Keep daily reviews under 6 minutes. Speed reduces resistance and increases consistency.",
        ],
      },
    ],
    sections_fr: [
      {
        h: "Le vocabulaire grandit grâce à la répétition intelligente",
        p: [
          "La plupart des apprenants oublient les mots car ils ne les revoient pas au bon moment.",
          "Les flashcards modernes marchent si les objectifs sont petits et la révision régulière.",
        ],
      },
      {
        h: "Système premium flashcards",
        p: [
          "10 mots pour la semaine (pas 100).",
          "Jour 1–2 : apprendre + prononcer à voix haute.",
          "Jour 3–4 : une phrase par mot.",
          "Jour 5–6 : révision rapide (ordre mélangé).",
          "Jour 7 : mini histoire avec 5 mots.",
        ],
      },
      {
        h: "Rendre les mots “réels”",
        p: [
          "Associez le mot à une image, un exemple personnel, ou une situation.",
          "Le cerveau retient le sens plus que les listes.",
        ],
      },
      {
        h: "Astuce progrès rapide",
        p: [
          "Révisions quotidiennes < 6 minutes. Plus c’est court, plus c’est constant.",
        ],
      },
    ],
  },

  {
    slug: "speaking-confidence-sound-natural",
    category: "international",
    heroImg: "/images/blog/blog-16.webp",
    publishedAt: "2026-01-25",
    title_en: "Speaking Confidence: Sound Natural",
    title_fr: "Confiance à l’oral : parler naturellement",
    desc_en:
      "Simple strategies to build fluency, clarity, and confidence.",
    desc_fr:
      "Stratégies simples pour gagner en fluidité, clarté et assurance.",
    tags_en: ["Fluency", "Confidence", "Speaking"],
    tags_fr: ["Fluidité", "Confiance", "Oral"],
    sections_en: [
      {
        h: "Confidence comes from predictable speaking patterns",
        p: [
          "Many learners freeze because they try to create perfect sentences. Natural speech is built from simple patterns repeated often.",
          "When patterns become automatic, confidence rises without effort.",
        ],
      },
      {
        h: "3 patterns that make you sound natural",
        p: [
          "“I think…” / “In my opinion…”",
          "“What I mean is…”",
          "“For example…”",
        ],
      },
      {
        h: "The premium fluency routine (7 minutes)",
        p: [
          "2 minutes: repeat one pattern with 5 different topics.",
          "3 minutes: speak about your day using the same pattern.",
          "2 minutes: listen to your voice once and adjust speed.",
        ],
      },
      {
        h: "If you make mistakes",
        p: [
          "Mistakes are data. Correct one thing at a time (pronunciation OR grammar OR speed). Progress stays smooth.",
        ],
      },
    ],
    sections_fr: [
      {
        h: "La confiance vient des patterns",
        p: [
          "Beaucoup bloquent car ils veulent une phrase parfaite. Le naturel vient de patterns simples répétés souvent.",
          "Quand les patterns deviennent automatiques, la confiance augmente.",
        ],
      },
      {
        h: "3 patterns qui rendent l’oral plus naturel",
        p: [
          "« I think… » / « In my opinion… »",
          "« What I mean is… »",
          "« For example… »",
        ],
      },
      {
        h: "Routine premium fluidité (7 minutes)",
        p: [
          "2 min : répéter un pattern avec 5 sujets.",
          "3 min : parler de sa journée avec le même pattern.",
          "2 min : écouter sa voix une fois et ajuster la vitesse.",
        ],
      },
      {
        h: "Si vous faites des erreurs",
        p: [
          "Les erreurs donnent des infos. Corrigez une chose à la fois (prononciation OU grammaire OU vitesse). Progrès plus fluide.",
        ],
      },
    ],
  },
];

// Optional helpers
export function getBlogPost(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getBlogPostsByCategory(category: BlogPost["category"]) {
  return BLOG_POSTS.filter((p) => p.category === category).sort(
    (a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt)
  );
}

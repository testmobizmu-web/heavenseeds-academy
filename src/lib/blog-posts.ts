export type BlogPost = {
  slug: string;
  image: string;
  tag: string;
  title: string;
  desc: string;
  readTime: string;
  date: string;
  content: {
    intro: string;
    sections: {
      heading: string;
      body: string;
    }[];
    conclusion: string;
  };
};

export const blogPosts: BlogPost[] = [
  {
    slug: "calm-morning-routine-pre-primary-children",
    image: "/images/blog/blog-01.webp",
    tag: "Parent Guide",
    title: "A Calm Morning Routine for Pre-Primary Children",
    desc: "Simple habits that help children arrive at school happy, settled and ready to learn.",
    readTime: "4 min read",
    date: "Parent Guide",
    content: {
      intro:
        "A calm morning routine helps young children feel safe before the school day begins. For pre-primary children, small predictable habits can reduce stress and create a smoother transition from home to school.",
      sections: [
        {
          heading: "Prepare the night before",
          body:
            "Choose clothes, pack the school bag and prepare any important items before bedtime. This helps parents avoid rushing in the morning and gives children a sense of order.",
        },
        {
          heading: "Keep mornings gentle",
          body:
            "Young children respond well to warmth and consistency. A simple wake-up routine, breakfast time and a few reassuring words can help them feel ready for the day.",
        },
        {
          heading: "Create a positive goodbye",
          body:
            "A short, loving goodbye gives children confidence. Long or anxious separations can make the transition harder, while calm reassurance builds trust.",
        },
      ],
      conclusion:
        "At Heaven Seeds Academy, we value routines that help children feel secure, confident and ready to learn each day.",
    },
  },
  {
    slug: "parent-teacher-communication-confidence",
    image: "/images/blog/blog-02.webp",
    tag: "Parent Support",
    title: "How Parents and Teachers Build Confidence Together",
    desc: "Clear communication between parents and educators helps every child feel supported.",
    readTime: "5 min read",
    date: "Parent Support",
    content: {
      intro:
        "Children grow best when parents and teachers work together. Clear communication creates trust, helps identify progress and gives every child stronger support.",
      sections: [
        {
          heading: "Share important details",
          body:
            "Parents know their child deeply. Sharing routines, preferences, fears or changes at home helps teachers respond with care and understanding.",
        },
        {
          heading: "Ask simple, useful questions",
          body:
            "Questions like “How did my child settle today?” or “What activity did they enjoy?” help parents understand their child’s school experience.",
        },
        {
          heading: "Celebrate small progress",
          body:
            "Confidence grows through small wins. When parents and teachers both encourage progress, children feel seen and valued.",
        },
      ],
      conclusion:
        "A strong parent-teacher relationship creates a more reassuring and successful pre-primary journey.",
    },
  },
  {
    slug: "outdoor-play-early-childhood",
    image: "/images/blog/blog-03.webp",
    tag: "Outdoor Learning",
    title: "Why Outdoor Play Matters in Early Childhood",
    desc: "Fresh air, movement and discovery help children develop focus, balance and curiosity.",
    readTime: "4 min read",
    date: "Outdoor Learning",
    content: {
      intro:
        "Outdoor play is more than free time. It supports physical development, social skills, confidence and curiosity in young children.",
      sections: [
        {
          heading: "Movement builds confidence",
          body:
            "Running, climbing, balancing and active play help children understand their bodies and develop coordination.",
        },
        {
          heading: "Nature encourages curiosity",
          body:
            "Plants, leaves, sunlight and outdoor textures help children observe, ask questions and explore the world around them.",
        },
        {
          heading: "Outdoor play supports social skills",
          body:
            "Children learn to take turns, share space, solve small problems and play cooperatively with friends.",
        },
      ],
      conclusion:
        "At Heaven Seeds Academy, outdoor moments are part of a balanced and joyful early learning experience.",
    },
  },
  {
    slug: "spotting-learning-needs-early",
    image: "/images/blog/blog-04.webp",
    tag: "Early Support",
    title: "Spotting Learning Needs Early with Care",
    desc: "Gentle observation and early support can make a meaningful difference in a child’s growth.",
    readTime: "5 min read",
    date: "Early Support",
    content: {
      intro:
        "Every child develops at their own rhythm. Early observation helps parents and educators understand how to support each child with patience and care.",
      sections: [
        {
          heading: "Observe without pressure",
          body:
            "Children should not be rushed or compared. Gentle observation helps identify areas where a child may need encouragement or support.",
        },
        {
          heading: "Look at communication and play",
          body:
            "Speech, interaction, attention, movement and play habits can show how a child is experiencing their environment.",
        },
        {
          heading: "Support early and kindly",
          body:
            "Small adjustments, patient teaching and parent communication can help children progress with confidence.",
        },
      ],
      conclusion:
        "Early support works best when it is kind, respectful and focused on the child’s wellbeing.",
    },
  },
  {
    slug: "sensory-play-calm-focus-language",
    image: "/images/blog/blog-05.webp",
    tag: "Child Development",
    title: "Sensory Play for Calm, Focus and Language",
    desc: "Hands-on activities help young children build vocabulary, confidence and self-control.",
    readTime: "4 min read",
    date: "Child Development",
    content: {
      intro:
        "Sensory play allows young children to learn through touch, sound, movement and exploration. It supports language, focus and emotional regulation.",
      sections: [
        {
          heading: "Hands-on learning feels natural",
          body:
            "Children learn deeply when they can touch, build, pour, sort, squeeze and explore materials safely.",
        },
        {
          heading: "Sensory activities build language",
          body:
            "Words like soft, rough, smooth, heavy, light, warm and cold become easier to understand through real experiences.",
        },
        {
          heading: "Calm play supports self-control",
          body:
            "Gentle sensory activities can help children slow down, focus and feel settled.",
        },
      ],
      conclusion:
        "Sensory play is a powerful part of joyful early childhood learning.",
    },
  },
  {
    slug: "love-for-books-early-age",
    image: "/images/blog/blog-06.webp",
    tag: "Reading Skills",
    title: "Building a Love for Books from an Early Age",
    desc: "Short reading routines can strengthen attention, pronunciation and imagination.",
    readTime: "4 min read",
    date: "Reading Skills",
    content: {
      intro:
        "Reading with young children builds imagination, vocabulary, listening skills and emotional connection.",
      sections: [
        {
          heading: "Keep reading short and joyful",
          body:
            "A few minutes of warm reading every day is more powerful than forcing a long session.",
        },
        {
          heading: "Ask gentle questions",
          body:
            "Questions like “What do you see?” or “What might happen next?” help children think and express themselves.",
        },
        {
          heading: "Repeat favourite stories",
          body:
            "Children love repetition. Familiar stories help build confidence, memory and language.",
        },
      ],
      conclusion:
        "A love for books begins with warm, happy reading moments.",
    },
  },
  {
    slug: "safe-happy-school-transitions",
    image: "/images/blog/blog-07.webp",
    tag: "School Readiness",
    title: "Creating Safe and Happy School Transitions",
    desc: "Children feel more secure when daily routines are predictable, warm and consistent.",
    readTime: "5 min read",
    date: "School Readiness",
    content: {
      intro:
        "Starting school or moving into a new routine can be emotional for young children. A gentle transition helps them feel safe.",
      sections: [
        {
          heading: "Use predictable routines",
          body:
            "Children feel more confident when they know what comes next. Arrival, play, snack and goodbye routines help create security.",
        },
        {
          heading: "Reassure with simple words",
          body:
            "Clear words like “I will come back after school” help children understand and trust the routine.",
        },
        {
          heading: "Allow time to settle",
          body:
            "Some children adapt quickly, while others need more time. Patience is part of the process.",
        },
      ],
      conclusion:
        "A happy school transition is built through trust, consistency and kindness.",
    },
  },
  {
    slug: "inclusive-caring-classroom",
    image: "/images/blog/blog-08.webp",
    tag: "Inclusion",
    title: "Learning Together in a Caring Classroom",
    desc: "Inclusive early learning supports confidence, kindness, language and social skills.",
    readTime: "5 min read",
    date: "Inclusion",
    content: {
      intro:
        "Inclusive classrooms help children learn kindness, respect and confidence. Every child deserves to feel welcomed and valued.",
      sections: [
        {
          heading: "Every child has strengths",
          body:
            "Some children express themselves differently or need more support. A caring environment helps each child participate.",
        },
        {
          heading: "Friendship grows through inclusion",
          body:
            "When children learn together, they develop empathy, patience and social understanding.",
        },
        {
          heading: "Support should feel respectful",
          body:
            "Inclusive support should be gentle and dignified, helping children grow without pressure.",
        },
      ],
      conclusion:
        "At Heaven Seeds Academy, inclusion means creating a warm space where every child can shine.",
    },
  },
  {
    slug: "helping-children-express-themselves",
    image: "/images/blog/blog-09.webp",
    tag: "Confidence",
    title: "Helping Children Express Themselves with Joy",
    desc: "Music, stories, play and guided activities help children communicate with confidence.",
    readTime: "4 min read",
    date: "Confidence",
    content: {
      intro:
        "Self-expression is an important part of early childhood development. Children need safe opportunities to speak, create, move and share ideas.",
      sections: [
        {
          heading: "Expression starts with safety",
          body:
            "Children are more willing to speak and participate when they feel accepted and encouraged.",
        },
        {
          heading: "Creative play opens communication",
          body:
            "Art, music, stories and pretend play give children many ways to express thoughts and feelings.",
        },
        {
          heading: "Celebrate effort",
          body:
            "When adults notice effort, children feel brave enough to try again and grow in confidence.",
        },
      ],
      conclusion:
        "Confidence grows when children are gently encouraged to express who they are.",
    },
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

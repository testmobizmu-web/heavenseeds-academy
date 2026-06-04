import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Baby,
  BookOpenCheck,
  Brain,
  CheckCircle2,
  Heart,
  Leaf,
  MessageCircle,
  Music,
  Palette,
  Puzzle,
  ShieldCheck,
  Sparkles,
  Speech,
  Sun,
  Users,
} from "lucide-react";
import { createMetadata } from "@/lib/seo/metadata";
import { pageSeo } from "@/lib/seo/site";

export const metadata = createMetadata({
  ...pageSeo.programmes,
  title: "Nursery, Inclusive & Primary Programmes",
  description:
    "Explore Heaven’s Seed International School programmes including nursery, inclusive education, primary support, speech delay support, speech therapy guidance and child psychology support.",
});

const programmes = [
  {
    icon: Baby,
    title: "Nursery Programme",
    age: "Early Years",
    description:
      "A warm, gentle and caring nursery environment where young children feel safe, loved and ready to begin their learning journey.",
    points: [
      "Safe daily routines",
      "Early social confidence",
      "Gentle independence",
      "Play-based discovery",
    ],
  },
  {
    icon: BookOpenCheck,
    title: "Primary Learning Support",
    age: "Primary",
    description:
      "Flexible primary learning support focused on confidence, literacy, numeracy, communication and guided academic development.",
    points: [
      "Reading foundations",
      "Number confidence",
      "Homework support",
      "Personal learning pace",
    ],
  },
  {
    icon: Heart,
    title: "Inclusive Education",
    age: "All Learners",
    description:
      "Supportive learning for children with different learning needs, helping every child feel valued, included and empowered.",
    points: [
      "Individual attention",
      "Flexible learning",
      "Different learning needs",
      "Confidence building",
    ],
  },
  {
    icon: Speech,
    title: "Speech Delay Support",
    age: "Language Growth",
    description:
      "Gentle communication support for children who need help with speech development, expression, vocabulary and confidence.",
    points: [
      "Speech confidence",
      "Vocabulary growth",
      "Expression support",
      "Parent guidance",
    ],
  },
  {
    icon: Brain,
    title: "Speech Therapy Guidance",
    age: "Special Support",
    description:
      "A caring pathway to support speech and language development through observation, guided activities and family collaboration.",
    points: [
      "Language activities",
      "Communication goals",
      "Listening skills",
      "Progress support",
    ],
  },
  {
    icon: Sparkles,
    title: "Child Psychology Support",
    age: "Emotional Care",
    description:
      "Support for children’s emotional, social and behavioural development through patience, understanding and caring guidance.",
    points: [
      "Emotional support",
      "Social confidence",
      "Behaviour guidance",
      "Calm learning approach",
    ],
  },
  {
    icon: Palette,
    title: "Creative Development",
    age: "Daily Learning",
    description:
      "Art, craft, storytelling and sensory activities that help children express themselves with joy and imagination.",
    points: [
      "Art and craft",
      "Sensory play",
      "Story expression",
      "Imagination building",
    ],
  },
  {
    icon: Music,
    title: "Music & Movement",
    age: "Active Learning",
    description:
      "Movement, rhythm and guided play to support coordination, body awareness, expression and joyful participation.",
    points: [
      "Rhythm activities",
      "Movement games",
      "Body awareness",
      "Group participation",
    ],
  },
  {
    icon: Puzzle,
    title: "Problem Solving",
    age: "Thinking Skills",
    description:
      "Simple puzzles, shapes, blocks and guided discovery to develop focus, curiosity and independent thinking.",
    points: [
      "Shape recognition",
      "Logical thinking",
      "Hands-on learning",
      "Focus building",
    ],
  },
];

const benefits = [
  {
    icon: ShieldCheck,
    title: "Safe & Caring",
    text: "Children learn in a calm, nurturing and supervised environment.",
  },
  {
    icon: Heart,
    title: "Inclusive Approach",
    text: "We support every child with patience, kindness and respect for their pace.",
  },
  {
    icon: Users,
    title: "Parent Partnership",
    text: "We work closely with families through clear communication and guidance.",
  },
  {
    icon: Brain,
    title: "Holistic Support",
    text: "We focus on academic, emotional, social, creative and communication growth.",
  },
];

const dailyFlow = [
  "Warm welcome and settling-in routine",
  "Circle time, stories and communication moments",
  "Nursery, inclusive or primary learning activities",
  "Speech, language and expression support",
  "Creative learning, sensory play and guided discovery",
  "Movement, music and social confidence building",
  "Reflection, calm time and parent update support",
  "Family guidance for continued progress at home",
];

export default function ProgrammesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[2rem] border border-white/45 bg-white/75 shadow-[0_26px_85px_rgba(24,53,40,0.12)] backdrop-blur-xl">
            {/* Mobile/tablet image: full 16:9 */}
            <div className="relative aspect-video w-full overflow-hidden bg-[#A84F3F] lg:hidden">
              <Image
                src="/images/Programmes/programmes-hero.webp"
                alt="Heaven’s Seed International School nursery inclusive and primary programmes"
                fill
                priority
                quality={80}
                sizes="100vw"
                className="object-contain object-center"
              />
            </div>

            {/* Desktop hero */}
            <div className="relative hidden aspect-[16/7] w-full overflow-hidden bg-[#A84F3F] lg:block">
              <Image
                src="/images/Programmes/programmes-hero.webp"
                alt="Heaven’s Seed International School nursery inclusive and primary programmes"
                fill
                priority
                quality={80}
                sizes="100vw"
                className="object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#7F342B]/88 via-[#A84F3F]/48 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#7F342B]/44 via-transparent to-transparent" />

              <div className="absolute inset-0 flex items-center">
                <div className="max-w-3xl px-10">
                  <p className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/14 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#F4D77B] backdrop-blur-md">
                    <Sun size={14} />
                    Our Programmes
                  </p>

                  <h1 className="mt-5 max-w-3xl text-5xl font-extrabold leading-tight tracking-[-0.055em] text-white drop-shadow-2xl xl:text-6xl">
                    Nursery, inclusive and primary support for every child.
                  </h1>

                  <p className="mt-4 max-w-2xl text-lg font-semibold leading-8 text-white/88">
                    Heaven’s Seed International School supports children through
                    caring nursery, inclusive learning, primary guidance, speech
                    support and holistic development.
                  </p>

                  <div className="mt-7 flex gap-3">
                    <Link
                      href="/admissions"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F4B321] px-6 py-3 text-sm font-extrabold !text-[#7F342B] shadow-[0_18px_45px_rgba(244,179,33,0.36)] transition hover:-translate-y-1 hover:bg-[#FFD46A]"
                    >
                      <span className="text-[#7F342B]">Start Enrollment</span>
                      <ArrowRight size={17} className="text-[#7F342B]" />
                    </Link>

                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-white/16 px-6 py-3 text-sm font-extrabold !text-white ring-1 ring-white/25 backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/24"
                    >
                      <span className="text-white">Ask a Question</span>
                      <MessageCircle size={17} className="text-white" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile/tablet text */}
            <div className="p-5 sm:p-7 lg:hidden">
              <p className="inline-flex items-center gap-2 rounded-full border border-[#A84F3F]/15 bg-[#A84F3F]/8 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#7F342B]">
                <Sun size={14} />
                Our Programmes
              </p>

              <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-[-0.055em] text-[#183528] sm:text-4xl">
                Nursery, inclusive and primary support for every child.
              </h1>

              <p className="mt-3 text-sm font-semibold leading-7 text-[#426252] sm:text-base">
                Heaven’s Seed International School supports children through
                caring nursery, inclusive learning, primary guidance, speech
                support and holistic development.
              </p>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/admissions"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F4B321] px-6 py-3 text-sm font-extrabold !text-[#7F342B] shadow-[0_18px_45px_rgba(244,179,33,0.32)] transition hover:-translate-y-1 hover:bg-[#FFD46A]"
                >
                  <span className="text-[#7F342B]">Start Enrollment</span>
                  <ArrowRight size={17} className="text-[#7F342B]" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#A84F3F] px-6 py-3 text-sm font-extrabold !text-white shadow-[0_18px_45px_rgba(168,79,63,0.32)] transition hover:-translate-y-1 hover:bg-[#7F342B]"
                >
                  <span className="text-white">Ask a Question</span>
                  <MessageCircle size={17} className="text-white" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="rounded-[2rem] border border-white/45 bg-white/62 p-6 shadow-[0_22px_70px_rgba(24,53,40,0.09)] backdrop-blur-xl sm:p-8 lg:p-10">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#A84F3F]">
                Learning With Care
              </p>

              <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-[-0.045em] text-[#183528] sm:text-4xl">
                A flexible programme pathway for learning, speech and emotional growth.
              </h2>

              <p className="mt-5 text-sm leading-7 text-[#426252] sm:text-base sm:leading-8">
                Our programmes are designed to support children at different
                stages of development, from nursery foundations to primary
                learning support. We combine care, structure, creativity,
                communication support and family partnership.
              </p>

              <p className="mt-4 text-sm leading-7 text-[#426252] sm:text-base sm:leading-8">
                We also focus on inclusive education for children with different
                learning needs, including speech delay support, speech therapy
                guidance and child psychology support through compassionate,
                patient and child-centered methods.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="group rounded-[1.75rem] border border-white/45 bg-white/48 p-5 shadow-[0_18px_55px_rgba(24,53,40,0.08)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:bg-white/70 sm:p-6"
                  >
                    <div className="grid size-12 place-items-center rounded-2xl bg-[#A84F3F] text-white shadow-[0_16px_38px_rgba(168,79,63,0.22)] transition duration-500 group-hover:bg-[#7F342B]">
                      <Icon size={22} strokeWidth={2.4} />
                    </div>

                    <h3 className="mt-5 text-lg font-extrabold tracking-[-0.03em] text-[#183528]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#426252]">
                      {item.text}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Programme Cards */}
      <section className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-7 grid gap-4 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#A84F3F]">
                Programme Areas
              </p>

              <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-[-0.045em] text-[#183528] sm:text-4xl">
                What children experience with us.
              </h2>
            </div>

            <p className="max-w-2xl text-sm leading-7 text-[#426252] sm:text-base lg:ml-auto">
              Nursery, inclusive education, primary learning support, speech
              delay guidance, speech therapy support and child psychology
              support — all delivered with compassion and patience.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {programmes.map((programme) => {
              const Icon = programme.icon;

              return (
                <article
                  key={programme.title}
                  className="group relative overflow-hidden rounded-[2rem] border border-white/45 bg-white/52 p-6 shadow-[0_22px_70px_rgba(24,53,40,0.09)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:bg-white/75"
                >
                  <div className="absolute -right-16 -top-16 size-40 rounded-full bg-[#F4B321]/16 blur-3xl transition duration-500 group-hover:bg-[#A84F3F]/16" />

                  <div className="relative">
                    <div className="flex items-start justify-between gap-4">
                      <div className="grid size-13 place-items-center rounded-2xl bg-[#A84F3F] text-white shadow-[0_16px_38px_rgba(168,79,63,0.22)] transition duration-500 group-hover:bg-[#7F342B]">
                        <Icon size={24} strokeWidth={2.4} />
                      </div>

                      <span className="rounded-full border border-[#F4B321]/35 bg-[#FFF4DF]/85 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#7F342B]">
                        {programme.age}
                      </span>
                    </div>

                    <h3 className="mt-6 text-xl font-extrabold tracking-[-0.035em] text-[#183528] sm:text-2xl">
                      {programme.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#426252]">
                      {programme.description}
                    </p>

                    <div className="mt-5 grid gap-2">
                      {programme.points.map((point) => (
                        <div
                          key={point}
                          className="flex items-center gap-2 text-sm font-bold text-[#183528]"
                        >
                          <CheckCircle2
                            size={17}
                            className="shrink-0 text-[#F4B321]"
                            strokeWidth={2.5}
                          />
                          {point}
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Daily Flow */}
      <section className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[2rem] bg-[#A84F3F] p-6 text-white shadow-[0_26px_85px_rgba(168,79,63,0.18)] sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div>
                <p className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#F4D77B]">
                  A Day With Us
                </p>

                <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-[-0.045em] text-white sm:text-4xl">
                  Gentle routines that support learning and communication.
                </h2>

                <p className="mt-4 text-sm leading-7 text-white/82 sm:text-base sm:leading-8">
                  Children feel more secure when learning is warm, predictable
                  and supportive. Our daily rhythm can include nursery learning,
                  primary guidance, speech support, emotional care and creative
                  activities.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {dailyFlow.map((item, index) => (
                  <div
                    key={item}
                    className="rounded-3xl border border-white/12 bg-white/10 p-4 backdrop-blur-md"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-sm font-extrabold text-[#F4D77B]">
                        0{index + 1}
                      </span>

                      <p className="text-sm font-bold leading-6 text-white/86">
                        {item}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parent CTA */}
      <section className="px-4 py-6 pb-12 sm:px-6 sm:py-8 sm:pb-14 lg:px-8 lg:py-10 lg:pb-16">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2rem] border border-white/45 bg-white/60 p-6 shadow-[0_24px_80px_rgba(24,53,40,0.10)] backdrop-blur-xl sm:p-8 lg:p-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#A84F3F]">
                  Admissions Support
                </p>

                <h2 className="mt-3 max-w-3xl text-3xl font-extrabold leading-tight tracking-[-0.045em] text-[#183528] sm:text-4xl">
                  Looking for nursery, inclusive or primary support for your child?
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-[#426252] sm:text-base">
                  Contact Heaven’s Seed International School to discuss your
                  child’s age, learning needs, speech delay concerns, emotional
                  support needs and the best next step for enrollment.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  href="/admissions"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F4B321] px-6 py-3 text-sm font-extrabold !text-[#7F342B] shadow-[0_18px_45px_rgba(244,179,33,0.32)] transition hover:-translate-y-1 hover:bg-[#FFD46A]"
                >
                  <span className="text-[#7F342B]">Start Enrollment</span>
                  <ArrowRight size={17} className="text-[#7F342B]" />
                </Link>

                <Link
                  href="https://wa.me/23058204613"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#A84F3F] px-6 py-3 text-sm font-extrabold !text-white shadow-[0_18px_45px_rgba(168,79,63,0.32)] transition hover:-translate-y-1 hover:bg-[#7F342B]"
                >
                  <span className="text-white">WhatsApp Us</span>
                  <MessageCircle size={17} className="text-white" />
                </Link>
              </div>
            </div>
          </div>

          <p className="sr-only">
            Heaven’s Seed International School programmes include nursery,
            inclusive education, primary learning support, speech delay support,
            speech therapy guidance and child psychology support.
          </p>
        </div>
      </section>
    </main>
  );
}
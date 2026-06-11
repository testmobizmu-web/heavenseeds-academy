import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpenCheck,
  CheckCircle2,
  Globe2,
  GraduationCap,
  Heart,
  Leaf,
  Lightbulb,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { createMetadata } from "@/lib/seo/metadata";
import { pageSeo } from "@/lib/seo/site";

export const metadata = createMetadata({
  ...pageSeo.about,
  title: "About Heaven’s Seed International School",
  description:
    "Learn about Heaven’s Seed International School, an inclusive online learning community nurturing children with care, flexibility, creativity and strong family partnership.",
});

const values = [
  {
    icon: ShieldCheck,
    title: "Safe & Caring",
    text: "A nurturing environment where every learner feels protected, valued and supported.",
  },
  {
    icon: Heart,
    title: "Inclusive Education",
    text: "We welcome children with different learning needs and support each child at their own pace.",
  },
  {
    icon: GraduationCap,
    title: "Nursery & Primary",
    text: "We support early nursery foundations and primary learning through flexible guidance.",
  },
  {
    icon: Sparkles,
    title: "Speech & Emotional Support",
    text: "We focus on speech delay, communication, confidence and child psychology support.",
  },
];

const process = [
  {
    step: "01",
    title: "Parent Enquiry",
    text: "Families contact us to share their child’s age, learning needs, speech concerns and preferred support.",
  },
  {
    step: "02",
    title: "Understanding the Child",
    text: "We listen carefully and learn about the child’s pace, communication, behaviour, strengths and challenges.",
  },
  {
    step: "03",
    title: "Support Pathway",
    text: "We guide families towards nursery, inclusive education, primary support, speech support or emotional support.",
  },
  {
    step: "04",
    title: "Ongoing Guidance",
    text: "Teachers and parents work together so every child feels encouraged, valued and empowered.",
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[2rem] border border-white/45 bg-white/75 shadow-[0_26px_85px_rgba(24,53,40,0.12)] backdrop-blur-xl">
            {/* Mobile image - full 16:9 visible */}
            <div className="relative aspect-video w-full overflow-hidden bg-[#B86452] lg:hidden">
              <Image
                src="/images/About/about-hero.webp"
                alt="Heaven’s Seed International School inclusive online learning community"
                fill
                priority
                quality={80}
                sizes="100vw"
                className="object-contain object-center"
              />
            </div>

            {/* Desktop hero */}
            <div className="relative hidden aspect-[16/7] w-full overflow-hidden bg-[#B86452] lg:block">
              <Image
                src="/images/About/about-hero.webp"
                alt="Heaven’s Seed International School inclusive online learning community"
                fill
                priority
                quality={80}
                sizes="100vw"
                className="object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#944337]/88 via-[#B86452]/48 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#944337]/44 via-transparent to-transparent" />

              <div className="absolute inset-0 flex items-center">
                <div className="max-w-3xl px-10">
                  <p className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/14 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#F4D77B] backdrop-blur-md">
                    <Leaf size={14} />
                    About Heaven’s Seed
                  </p>

                  <h1 className="mt-5 max-w-3xl text-5xl font-extrabold leading-tight tracking-[-0.055em] text-white drop-shadow-2xl xl:text-6xl">
                    Nurturing little minds online and beyond.
                  </h1>

                  <p className="mt-4 max-w-2xl text-lg font-semibold leading-8 text-white/88">
                    Heaven’s Seed International School is an inclusive learning
                    community created to help every child grow with confidence,
                    joy and purpose.
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile/tablet text */}
            <div className="p-5 sm:p-7 lg:hidden">
              <p className="inline-flex items-center gap-2 rounded-full border border-[#B86452]/15 bg-[#B86452]/8 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#944337]">
                <Leaf size={14} />
                About Heaven’s Seed
              </p>

              <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-[-0.055em] text-[#183528] sm:text-4xl">
                Nurturing little minds online and beyond.
              </h1>

              <p className="mt-3 text-sm font-semibold leading-7 text-[#426252] sm:text-base">
                Heaven’s Seed International School is an inclusive learning
                community created to help every child grow with confidence, joy
                and purpose.
              </p>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/admissions"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F4B321] px-6 py-3 text-sm font-extrabold !text-[#944337] shadow-[0_18px_45px_rgba(244,179,33,0.32)] transition hover:-translate-y-1 hover:bg-[#FFD46A]"
                >
                  <span className="text-[#944337]">Start Enrollment</span>
                  <ArrowRight size={17} className="text-[#944337]" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#B86452] px-6 py-3 text-sm font-extrabold !text-white shadow-[0_18px_45px_rgba(168,79,63,0.32)] transition hover:-translate-y-1 hover:bg-[#944337]"
                >
                  <span className="text-white">Contact Us</span>
                  <MessageCircle size={17} className="text-white" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
            <div className="rounded-[2rem] border border-white/45 bg-white/62 p-6 shadow-[0_22px_70px_rgba(24,53,40,0.09)] backdrop-blur-xl sm:p-8 lg:p-10">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#B86452]">
                Who We Are
              </p>

              <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-[-0.045em] text-[#183528] sm:text-4xl">
                An inclusive learning community for every child.
              </h2>

              <p className="mt-5 text-sm leading-7 text-[#426252] sm:text-base sm:leading-8">
                Heaven’s Seed International School is an inclusive learning
                community dedicated to nurturing young minds in a safe, caring
                and inspiring environment. We are a team of passionate educators
                who believe that every child is unique and full of potential.
              </p>

              <p className="mt-4 text-sm leading-7 text-[#426252] sm:text-base sm:leading-8">
               Our academy was created to provide quality education that is
               accessible, flexible and supportive for all learners, including
               children with different learning needs. We support nursery learners,
               primary learners, children with speech delay, and children who need
               gentle emotional, social or behavioural support.

               Through inclusive education, speech therapy guidance, child psychology
               support and personalised learning pathways, we focus on holistic
               development — academic, emotional, social, communication and creative —
               so that children grow with confidence and joy.
              </p>

              <p className="mt-4 text-sm leading-7 text-[#426252] sm:text-base sm:leading-8">
                At Heaven’s Seed, we work hand in hand with families, valuing
                strong partnerships between teachers and parents. Through
                compassion, patience and innovative teaching methods, we help
                each child blossom at their own pace.
              </p>

              <div className="mt-7 hidden flex-col gap-3 sm:flex-row lg:flex">
                <Link
                  href="/admissions"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F4B321] px-6 py-3 text-sm font-extrabold !text-[#944337] shadow-[0_18px_45px_rgba(244,179,33,0.32)] transition hover:-translate-y-1 hover:bg-[#FFD46A]"
                >
                  <span className="text-[#944337]">Start Enrollment</span>
                  <ArrowRight size={17} className="text-[#944337]" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#B86452] px-6 py-3 text-sm font-extrabold !text-white shadow-[0_18px_45px_rgba(168,79,63,0.32)] transition hover:-translate-y-1 hover:bg-[#944337]"
                >
                  <span className="text-white">Contact Us</span>
                  <MessageCircle size={17} className="text-white" />
                </Link>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {values.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="group rounded-[1.75rem] border border-white/45 bg-white/48 p-5 shadow-[0_18px_55px_rgba(24,53,40,0.08)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:bg-white/70 sm:p-6"
                  >
                    <div className="grid size-12 place-items-center rounded-2xl bg-[#B86452] text-white shadow-[0_16px_38px_rgba(168,79,63,0.22)] transition duration-500 group-hover:bg-[#944337]">
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

      {/* Mission / Vision */}
      <section className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="relative overflow-hidden rounded-[2rem] bg-[#B86452] p-6 text-white shadow-[0_26px_85px_rgba(168,79,63,0.18)] sm:p-8 lg:p-10">
              <div className="absolute -left-20 -top-20 size-64 rounded-full bg-[#F4D77B]/22 blur-3xl" />
              <div className="absolute -bottom-24 right-0 size-72 rounded-full bg-[#944337]/25 blur-3xl" />

              <div className="relative">
                <div className="grid size-13 place-items-center rounded-2xl bg-white text-[#944337] shadow-[0_18px_45px_rgba(0,0,0,0.18)]">
                  <BookOpenCheck size={25} />
                </div>

                <p className="mt-6 text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#F4D77B]">
                  Our Mission
                </p>

                <h2 className="mt-3 text-2xl font-extrabold tracking-[-0.04em] text-white sm:text-3xl">
                  To nurture, value and empower every learner.
                </h2>

                <p className="mt-4 text-sm leading-7 text-white/82 sm:text-base sm:leading-8">
                  Our mission is to provide quality, flexible and supportive education
                  for nursery and primary learners, including children with different
                  learning needs, speech delay, communication challenges and emotional
                  development needs. We help children grow academically, socially,
                  emotionally and creatively in an environment filled with care and
                  encouragement.
                </p>
              </div>
            </article>

            <article className="relative overflow-hidden rounded-[2rem] border border-[#B86452]/12 bg-white p-6 shadow-[0_26px_85px_rgba(24,53,40,0.10)] sm:p-8 lg:p-10">
              <div className="absolute -right-20 -top-20 size-64 rounded-full bg-[#F4B321]/20 blur-3xl" />

              <div className="relative">
                <div className="grid size-13 place-items-center rounded-2xl bg-[#F4B321] text-[#944337] shadow-[0_18px_45px_rgba(244,179,33,0.24)]">
                  <Lightbulb size={25} />
                </div>

                <p className="mt-6 text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#B86452]">
                  Our Vision
                </p>

                <h2 className="mt-3 text-2xl font-extrabold tracking-[-0.04em] text-[#183528] sm:text-3xl">
                  To become a trusted online learning home for families.
                </h2>

                <p className="mt-4 text-sm leading-7 text-[#426252] sm:text-base sm:leading-8">
                  Our vision is to be a trusted learning home where little minds are
                  nurtured, valued and empowered — online and beyond. We aim to support
                  children at their own pace through inclusive education, speech support,
                  child psychology guidance, compassion, patience and innovative teaching.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* How We Proceed */}
      <section className="px-4 py-6 pb-12 sm:px-6 sm:py-8 sm:pb-14 lg:px-8 lg:py-10 lg:pb-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 grid gap-4 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#B86452]">
                How We Proceed
              </p>

              <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-[-0.045em] text-[#183528] sm:text-4xl">
                A caring pathway for children and families.
              </h2>
            </div>

            <p className="max-w-2xl text-sm leading-7 text-[#426252] sm:text-base lg:ml-auto">
              From the first enquiry to ongoing learning support, we keep the
              process clear, compassionate and family-focused.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <article
                key={item.step}
                className="group rounded-[1.75rem] border border-white/45 bg-white/52 p-5 shadow-[0_18px_55px_rgba(24,53,40,0.08)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:bg-white/75"
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-extrabold tracking-[-0.06em] text-[#B86452]">
                    {item.step}
                  </span>

                  <CheckCircle2
                    size={22}
                    className="text-[#F4B321]"
                    strokeWidth={2.5}
                  />
                </div>

                <h3 className="mt-5 text-lg font-extrabold tracking-[-0.03em] text-[#183528]">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#426252]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-[2rem] bg-[#B86452] p-6 text-white shadow-[0_26px_85px_rgba(168,79,63,0.18)] sm:p-8">
            <div className="grid gap-5 sm:grid-cols-[1fr_auto] sm:items-center">
              <div>
                <h2 className="text-2xl font-extrabold tracking-[-0.04em]">
                  Ready to speak with us?
                </h2>

                <p className="mt-2 text-sm leading-6 text-white/80">
                  We will gladly guide you through admissions, online learning
                  options and your child’s first steps with Heaven’s Seed.
                </p>
              </div>

              <Link
                href="https://wa.me/23058204613"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F4B321] px-6 py-3 text-sm font-extrabold !text-[#944337] shadow-[0_18px_45px_rgba(244,179,33,0.36)] transition hover:-translate-y-1 hover:bg-[#FFD46A]"
              >
                <span className="text-[#944337]">WhatsApp Us</span>
                <ArrowRight size={17} className="text-[#944337]" />
              </Link>
            </div>
          </div>

          <p className="sr-only">
            Heaven’s Seed International School is an inclusive online learning
            community supporting children with different learning needs,
            holistic development, parent partnership and flexible education.
          </p>
        </div>
      </section>
    </main>
  );
}

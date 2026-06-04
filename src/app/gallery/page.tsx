import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Baby,
  Brain,
  Camera,
  CheckCircle2,
  Heart,
  Images,
  Leaf,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Speech,
} from "lucide-react";
import { createMetadata } from "@/lib/seo/metadata";
import { pageSeo } from "@/lib/seo/site";

export const metadata = createMetadata({
  ...pageSeo.gallery,
  title: "Gallery",
  description:
    "Explore Heaven’s Seed International School gallery showing nursery learning, inclusive education, speech support, creative development, primary support and caring child development moments.",
});

const galleryItems = [
  {
    src: "/images/Gallery/gallery-01.jpg",
    label: "Nursery Learning",
    title: "A gentle start for young learners",
    description:
      "A warm nursery environment where children feel safe, loved and ready to explore learning through play, routine and caring guidance.",
    highlights: ["Nursery care", "Safe routines", "Confidence building"],
    alt: "Nursery children learning in a warm caring classroom environment",
  },
  {
    src: "/images/Gallery/gallery-02.jpg",
    label: "Creative Expression",
    title: "Expression through art and creativity",
    description:
      "Creative activities help children express emotions, build fine motor skills and develop imagination in a joyful, supportive space.",
    highlights: ["Art confidence", "Fine motor skills", "Self-expression"],
    alt: "Children doing art and creative learning activities",
  },
  {
    src: "/images/Gallery/gallery-03.jpg",
    label: "Speech & Language",
    title: "Language growth through stories",
    description:
      "Story time supports listening, vocabulary, communication, expression and early speech development in a calm learning environment.",
    highlights: ["Speech support", "Vocabulary growth", "Listening skills"],
    alt: "Children listening to story time for language and speech development",
  },
  {
    src: "/images/Gallery/gallery-04.jpg",
    label: "Outdoor Discovery",
    title: "Movement, discovery and confidence",
    description:
      "Outdoor play supports social confidence, movement, balance and emotional wellbeing while children explore the world around them.",
    highlights: ["Safe play", "Motor skills", "Social confidence"],
    alt: "Children playing safely outdoors in a caring school environment",
  },
  {
    src: "/images/Gallery/gallery-05.jpg",
    label: "Primary Support",
    title: "Early literacy and primary readiness",
    description:
      "Children receive patient support with letters, sounds, early reading, communication and the foundations needed for primary learning.",
    highlights: ["Early literacy", "Reading support", "Teacher guidance"],
    alt: "Teacher helping a child with alphabet and early literacy learning",
  },
  {
    src: "/images/Gallery/gallery-06.jpg",
    label: "Inclusive Learning",
    title: "Learning together with patience",
    description:
      "Inclusive learning moments help children build teamwork, confidence, focus and problem-solving at their own pace.",
    highlights: ["Inclusive care", "Teamwork", "Problem-solving"],
    alt: "Children building blocks together in an inclusive classroom setting",
  },
  {
    src: "/images/Gallery/gallery-07.jpg",
    label: "Music & Movement",
    title: "Joyful rhythm and movement",
    description:
      "Music and movement activities help children develop coordination, expression, confidence and group participation.",
    highlights: ["Rhythm", "Movement", "Group confidence"],
    alt: "Children enjoying music and movement activities",
  },
  {
    src: "/images/Gallery/gallery-08.jpg",
    label: "Healthy Routines",
    title: "Learning daily habits with care",
    description:
      "Simple routines such as hygiene, self-care and calm transitions help children develop independence and responsibility.",
    highlights: ["Daily routine", "Independence", "Self-care"],
    alt: "Children learning hygiene and healthy daily routines",
  },
  {
    src: "/images/Gallery/gallery-09.jpg",
    label: "Emotional Support",
    title: "Calm routines that support wellbeing",
    description:
      "Children grow best when they feel emotionally safe. Caring routines help build patience, social comfort and emotional security.",
    highlights: ["Emotional care", "Calm routine", "Social comfort"],
    alt: "Children in a calm caring classroom routine",
  },
  {
    src: "/images/Gallery/gallery-10.jpg",
    label: "Nature Learning",
    title: "Exploring with curiosity",
    description:
      "Nature discovery encourages observation, language, curiosity and sensory learning in a safe, inspiring environment.",
    highlights: ["Nature learning", "Curiosity", "Sensory discovery"],
    alt: "Children exploring plants and nature in a garden learning activity",
  },
];

export default function GalleryPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative px-4 py-7 sm:px-6 sm:py-9 lg:px-8 lg:py-10">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[2rem] bg-[#A84F3F] p-6 text-white shadow-[0_26px_85px_rgba(168,79,63,0.18)] sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full border border-white/16 bg-white/10 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#F4D77B] backdrop-blur-md sm:text-[11px]">
                  <Camera size={14} />
                  Heaven’s Seed Gallery
                </p>

                <h1 className="mt-5 max-w-3xl text-3xl font-extrabold leading-tight tracking-[-0.055em] text-white sm:text-5xl lg:text-6xl">
                  Moments of care, growth and inclusive learning.
                </h1>

                <p className="mt-4 max-w-2xl text-sm font-semibold leading-7 text-white/82 sm:text-lg sm:leading-8">
                  Explore the warm learning environment of Heaven’s Seed
                  International School — from nursery care and creative learning
                  to speech support, inclusive education, primary guidance and
                  emotional development.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
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
                    <span className="text-white">Contact Us</span>
                    <MessageCircle size={17} className="text-white" />
                  </Link>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    icon: ShieldCheck,
                    title: "Safe Space",
                    text: "A caring environment where children feel secure.",
                  },
                  {
                    icon: Speech,
                    title: "Speech Support",
                    text: "Gentle guidance for speech, language and expression.",
                  },
                  {
                    icon: Brain,
                    title: "Emotional Care",
                    text: "Support for confidence, behaviour and wellbeing.",
                  },
                  {
                    icon: Heart,
                    title: "Inclusive Learning",
                    text: "Every child is valued and supported at their own pace.",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <article
                      key={item.title}
                      className="rounded-[1.5rem] border border-white/12 bg-white/10 p-5 shadow-[0_18px_55px_rgba(0,0,0,0.12)] backdrop-blur-xl"
                    >
                      <div className="grid size-11 place-items-center rounded-2xl bg-[#F4B321] text-[#7F342B]">
                        <Icon size={20} strokeWidth={2.4} />
                      </div>

                      <h2 className="mt-4 text-lg font-extrabold tracking-[-0.03em] text-white">
                        {item.title}
                      </h2>

                      <p className="mt-2 text-sm leading-6 text-white/76">
                        {item.text}
                      </p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Rows */}
      <section className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 grid gap-4 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#A84F3F]">
                <Images size={15} />
                Learning Moments
              </p>

              <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-[-0.045em] text-[#183528] sm:text-4xl">
                Inside our inclusive learning environment.
              </h2>
            </div>

            <p className="max-w-2xl text-sm leading-7 text-[#426252] sm:text-base lg:ml-auto">
              Each moment reflects our approach: safety, love, speech support,
              creativity, emotional care, primary readiness and joyful learning.
            </p>
          </div>

          <div className="grid gap-8 lg:gap-10">
            {galleryItems.map((item, index) => (
              <article
                key={item.src}
                className="group grid gap-5 rounded-[2rem] border border-white/45 bg-white/58 p-4 shadow-[0_24px_80px_rgba(24,53,40,0.10)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:bg-white/75 sm:p-5 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-8 lg:p-6"
              >
                {/* Text Left */}
                <div className="order-2 flex flex-col justify-center px-1 py-2 lg:order-1 lg:px-4">
                  <div className="flex items-center gap-3">
                    <span className="grid size-10 place-items-center rounded-2xl bg-[#A84F3F] text-sm font-extrabold text-white shadow-[0_14px_35px_rgba(168,79,63,0.18)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="rounded-full border border-[#F4B321]/35 bg-[#FFF4DF]/85 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#7F342B]">
                      {item.label}
                    </p>
                  </div>

                  <h3 className="mt-5 text-2xl font-extrabold leading-tight tracking-[-0.04em] text-[#183528] sm:text-3xl">
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-xl text-sm leading-7 text-[#426252] sm:text-base">
                    {item.description}
                  </p>

                  <div className="mt-5 grid gap-2 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                    {item.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="flex items-center gap-2 rounded-2xl border border-[#A84F3F]/10 bg-white/68 px-3 py-2 text-xs font-extrabold text-[#183528] shadow-sm"
                      >
                        <CheckCircle2
                          size={15}
                          className="shrink-0 text-[#F4B321]"
                          strokeWidth={2.5}
                        />
                        {highlight}
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href="/admissions"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F4B321] px-5 py-2.5 text-sm font-extrabold !text-[#7F342B] shadow-[0_16px_38px_rgba(244,179,33,0.25)] transition hover:-translate-y-1 hover:bg-[#FFD46A]"
                    >
                      <span className="text-[#7F342B]">Start Enrollment</span>
                      <ArrowRight size={16} className="text-[#7F342B]" />
                    </Link>

                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#A84F3F] px-5 py-2.5 text-sm font-extrabold !text-white shadow-[0_16px_38px_rgba(168,79,63,0.28)] transition hover:-translate-y-1 hover:bg-[#7F342B]"
                    >
                      <span className="text-white">Ask About Support</span>
                      <MessageCircle size={16} className="text-white" />
                    </Link>
                  </div>
                </div>

                {/* Image Right */}
                <div className="order-1 lg:order-2">
                  <div className="relative aspect-[3/2] overflow-hidden rounded-[1.75rem] bg-[#A84F3F] shadow-[0_22px_70px_rgba(168,79,63,0.15)]">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 58vw"
                      className="object-cover object-center transition duration-700 group-hover:scale-105"
                      priority={index === 0}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#7F342B]/50 via-transparent to-transparent opacity-80" />

                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl border border-white/25 bg-white/18 px-4 py-3 text-white shadow-lg backdrop-blur-md">
                      <span className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.16em]">
                        <Sparkles size={14} />
                        Heaven’s Seed International School
                      </span>

                      <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-6 pb-12 sm:px-6 sm:py-8 sm:pb-14 lg:px-8 lg:py-10 lg:pb-16">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2rem] bg-[#A84F3F] p-6 text-white shadow-[0_26px_85px_rgba(168,79,63,0.18)] sm:p-8 lg:p-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#F4D77B]">
                  Visit Heaven’s Seed
                </p>

                <h2 className="mt-3 max-w-3xl text-3xl font-extrabold leading-tight tracking-[-0.045em] text-white sm:text-4xl">
                  Want to discuss the right support for your child?
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
                  Contact us to discuss nursery, inclusive learning, primary
                  support, speech delay support, speech therapy guidance and
                  child psychology support.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  href="/admissions"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F4B321] px-6 py-3 text-sm font-extrabold !text-[#7F342B] shadow-[0_18px_45px_rgba(244,179,33,0.36)] transition hover:-translate-y-1 hover:bg-[#FFD46A]"
                >
                  <span className="text-[#7F342B]">Start Enrollment</span>
                  <ArrowRight size={17} className="text-[#7F342B]" />
                </Link>

                <Link
                  href="https://wa.me/23058204613"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white/16 px-6 py-3 text-sm font-extrabold !text-white ring-1 ring-white/25 backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/24"
                >
                  <span className="text-white">WhatsApp Us</span>
                  <MessageCircle size={17} className="text-white" />
                </Link>
              </div>
            </div>
          </div>

          <p className="sr-only">
            Heaven’s Seed International School gallery page showing nursery,
            inclusive education, primary support, speech delay support, speech
            therapy guidance, child psychology support, creative development and
            emotional care.
          </p>
        </div>
      </section>
    </main>
  );
}
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Baby,
  Brain,
  CalendarCheck,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  HeartHandshake,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Speech,
  Users,
} from "lucide-react";
import { createMetadata } from "@/lib/seo/metadata";
import { pageSeo } from "@/lib/seo/site";

export const metadata = createMetadata({
  ...pageSeo.admissions,
  title: "Admissions for Nursery, Inclusive & Primary Support",
  description:
    "Start admissions at Heaven’s Seed International School for nursery, inclusive education, primary support, speech delay support, speech therapy guidance and child psychology support.",
});

const admissionSteps = [
  {
    icon: MessageCircle,
    step: "01",
    title: "Send Your Enquiry",
    text: "Contact us by WhatsApp, phone, email or the contact form with your child’s age, learning needs and preferred start date.",
  },
  {
    icon: CalendarCheck,
    step: "02",
    title: "Initial Parent Discussion",
    text: "We listen carefully to understand your child’s learning level, speech development, emotional needs and family expectations.",
  },
  {
    icon: ClipboardCheck,
    step: "03",
    title: "Programme Guidance",
    text: "We guide you towards nursery, inclusive learning, primary support, speech delay support or emotional development support.",
  },
  {
    icon: FileText,
    step: "04",
    title: "Complete Enrollment",
    text: "Parents receive clear guidance to complete the admission process with confidence and care.",
  },
];

const requiredInfo = [
  "Child’s full name and age",
  "Preferred start date",
  "Nursery, inclusive or primary level required",
  "Speech delay or communication concerns, if any",
  "Learning, health or emotional support needs",
  "Parent or guardian contact details",
  "Emergency contact information",
  "Previous nursery, school or therapy support, if any",
];

const parentReasons = [
  {
    icon: ShieldCheck,
    title: "Safe & Caring",
    text: "A calm, supportive environment where children feel protected, valued and encouraged.",
  },
  {
    icon: Baby,
    title: "Nursery Support",
    text: "A gentle start for young children through routine, care, play and early confidence.",
  },
  {
    icon: Users,
    title: "Inclusive Learning",
    text: "Support for children with different learning needs through patience and individual attention.",
  },
  {
    icon: Speech,
    title: "Speech Delay Focus",
    text: "Communication support for children who need help with speech, language and expression.",
  },
  {
    icon: Brain,
    title: "Psychology Support",
    text: "Careful attention to emotional, social and behavioural development.",
  },
  {
    icon: Sparkles,
    title: "Confidence Building",
    text: "Children are encouraged to grow, express themselves and shine at their own pace.",
  },
];

const faqs = [
  {
    question: "What programmes can I apply for?",
    answer:
      "Parents can enquire for nursery, inclusive education, primary learning support, speech delay support, speech therapy guidance and child psychology support.",
  },
  {
    question: "Can you support children with speech delay?",
    answer:
      "Yes. We provide a caring pathway focused on communication confidence, vocabulary growth, expression support and parent guidance.",
  },
  {
    question: "Do you support children with different learning needs?",
    answer:
      "Yes. Heaven’s Seed International School is an inclusive learning community that supports children with different learning needs at their own pace.",
  },
  {
    question: "Can parents discuss their child before enrolling?",
    answer:
      "Yes. We encourage parents to speak with us first so we can understand the child’s needs, learning level and best support pathway.",
  },
];

export default function AdmissionsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[2rem] border border-white/45 bg-white/75 shadow-[0_26px_85px_rgba(24,53,40,0.12)] backdrop-blur-xl">
            {/* Mobile/tablet image */}
            <div className="relative aspect-video w-full overflow-hidden bg-[#B86452] lg:hidden">
              <Image
                src="/images/Admissions/admissions-hero.webp"
                alt="Heaven’s Seed International School admissions for nursery inclusive and primary support"
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
                src="/images/Admissions/admissions-hero.webp"
                alt="Heaven’s Seed International School admissions for nursery inclusive and primary support"
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
                    <HeartHandshake size={14} />
                    Admissions Open
                  </p>

                  <h1 className="mt-5 max-w-3xl text-5xl font-extrabold leading-tight tracking-[-0.055em] text-white drop-shadow-2xl xl:text-6xl">
                    Begin your child’s learning journey with confidence.
                  </h1>

                  <p className="mt-4 max-w-2xl text-lg font-semibold leading-8 text-white/88">
                    Admissions are open for nursery, inclusive learning, primary
                    support, speech delay support and child development guidance.
                  </p>

                  <div className="mt-7 flex gap-3">
                    <Link
                      href="https://wa.me/23058204613"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F4B321] px-6 py-3 text-sm font-extrabold !text-[#944337] shadow-[0_18px_45px_rgba(244,179,33,0.36)] transition hover:-translate-y-1 hover:bg-[#FFD46A]"
                    >
                      <span className="text-[#944337]">WhatsApp Admissions</span>
                      <ArrowRight size={17} className="text-[#944337]" />
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
              </div>
            </div>

            {/* Mobile/tablet text */}
            <div className="p-5 sm:p-7 lg:hidden">
              <p className="inline-flex items-center gap-2 rounded-full border border-[#B86452]/15 bg-[#B86452]/8 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#944337]">
                <HeartHandshake size={14} />
                Admissions Open
              </p>

              <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-[-0.055em] text-[#183528] sm:text-4xl">
                Begin your child’s learning journey with confidence.
              </h1>

              <p className="mt-3 text-sm font-semibold leading-7 text-[#426252] sm:text-base">
                Admissions are open for nursery, inclusive learning, primary
                support, speech delay support and child development guidance.
              </p>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="https://wa.me/23058204613"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F4B321] px-6 py-3 text-sm font-extrabold !text-[#944337] shadow-[0_18px_45px_rgba(244,179,33,0.32)] transition hover:-translate-y-1 hover:bg-[#FFD46A]"
                >
                  <span className="text-[#944337]">WhatsApp Admissions</span>
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

      {/* Intro / Contact Summary */}
      <section className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
            <div className="rounded-[2rem] border border-white/45 bg-white/60 p-6 shadow-[0_22px_70px_rgba(24,53,40,0.09)] backdrop-blur-xl sm:p-8 lg:p-10">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#B86452]">
                Admissions Guidance
              </p>

              <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-[-0.045em] text-[#183528] sm:text-4xl">
                A caring admissions process for every learner.
              </h2>

              <p className="mt-5 text-sm leading-7 text-[#426252] sm:text-base sm:leading-8">
                Choosing the right learning support for your child is an
                important decision. At Heaven’s Seed International School, we
                help families understand the best pathway for nursery, inclusive
                education, primary support, speech delay support and emotional
                development.
              </p>

              <p className="mt-4 text-sm leading-7 text-[#426252] sm:text-base sm:leading-8">
                Our process is warm, simple and parent-friendly. We listen first,
                understand your child’s needs and guide you with patience,
                compassion and clarity.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <Link
                  href="tel:57614680"
                  className="flex items-center gap-3 rounded-2xl border border-[#B86452]/12 bg-white/70 p-4 text-sm font-extrabold text-[#183528] shadow-sm transition hover:-translate-y-0.5 hover:bg-white"
                >
                  <Phone size={18} className="text-[#B86452]" />
                  57614680
                </Link>

                <Link
                  href="https://wa.me/23058204613"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-[#B86452]/12 bg-white/70 p-4 text-sm font-extrabold text-[#183528] shadow-sm transition hover:-translate-y-0.5 hover:bg-white"
                >
                  <MessageCircle size={18} className="text-[#B86452]" />
                  WhatsApp 58204613
                </Link>

                <Link
                  href="mailto:Heavenseed2126@gmail.com"
                  className="flex items-center gap-3 rounded-2xl border border-[#B86452]/12 bg-white/70 p-4 text-sm font-extrabold text-[#183528] shadow-sm transition hover:-translate-y-0.5 hover:bg-white sm:col-span-2"
                >
                  <Mail size={18} className="text-[#B86452]" />
                  Heavenseed2126@gmail.com
                </Link>

                <Link
                  href="https://www.google.com/maps/search/?api=1&query=111%2C%20Malartic%20Avenue%2C%20Quatre%20Bornes%2C%2075947%2C%20Zone%204%2C%20Mauritius"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 rounded-2xl border border-[#B86452]/12 bg-white/70 p-4 text-sm font-extrabold leading-6 text-[#183528] shadow-sm transition hover:-translate-y-0.5 hover:bg-white sm:col-span-2"
                >
                  <MapPin size={18} className="mt-0.5 shrink-0 text-[#B86452]" />
                  <span>
                    111, Malartic Avenue, Quatre Bornes, 75947, Zone 4,
                    Mauritius
                  </span>
                </Link>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {parentReasons.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="group rounded-[1.75rem] border border-white/45 bg-white/48 p-5 shadow-[0_18px_55px_rgba(24,53,40,0.08)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:bg-white/70"
                  >
                    <div className="flex gap-4">
                      <div className="grid size-12 shrink-0 place-items-center rounded-2xl bg-[#B86452] text-white shadow-[0_16px_38px_rgba(168,79,63,0.22)] transition duration-500 group-hover:bg-[#944337]">
                        <Icon size={22} strokeWidth={2.4} />
                      </div>

                      <div>
                        <h3 className="text-lg font-extrabold tracking-[-0.03em] text-[#183528]">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-[#426252]">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Admission Steps */}
      <section className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-7 grid gap-4 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#B86452]">
                Enrollment Steps
              </p>

              <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-[-0.045em] text-[#183528] sm:text-4xl">
                How admissions work.
              </h2>
            </div>

            <p className="max-w-2xl text-sm leading-7 text-[#426252] sm:text-base lg:ml-auto">
              A clear step-by-step journey from the first parent enquiry to your
              child’s personalised support pathway.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {admissionSteps.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.step}
                  className="group relative overflow-hidden rounded-[2rem] border border-white/45 bg-white/52 p-6 shadow-[0_22px_70px_rgba(24,53,40,0.09)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:bg-white/75"
                >
                  <div className="absolute -right-16 -top-16 size-40 rounded-full bg-[#F4B321]/16 blur-3xl transition duration-500 group-hover:bg-[#B86452]/16" />

                  <div className="relative">
                    <div className="flex items-start justify-between">
                      <span className="text-4xl font-extrabold tracking-[-0.07em] text-[#B86452]">
                        {item.step}
                      </span>

                      <div className="grid size-12 place-items-center rounded-2xl bg-[#B86452] text-white shadow-[0_16px_38px_rgba(168,79,63,0.22)] transition duration-500 group-hover:bg-[#944337]">
                        <Icon size={22} strokeWidth={2.4} />
                      </div>
                    </div>

                    <h3 className="mt-6 text-xl font-extrabold tracking-[-0.035em] text-[#183528]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#426252]">
                      {item.text}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Required Info */}
      <section className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[2rem] bg-[#B86452] p-6 text-white shadow-[0_26px_85px_rgba(168,79,63,0.18)] sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
              <div>
                <p className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#F4D77B]">
                  Prepare Before Applying
                </p>

                <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-[-0.045em] text-white sm:text-4xl">
                  Information parents may prepare.
                </h2>

                <p className="mt-4 text-sm leading-7 text-white/82 sm:text-base sm:leading-8">
                  Preparing a few details helps us understand your child’s needs
                  and guide you towards the right learning or support pathway.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {requiredInfo.map((item) => (
                  <div
                    key={item}
                    className="rounded-3xl border border-white/12 bg-white/10 p-4 backdrop-blur-md"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle2
                        size={19}
                        className="mt-0.5 shrink-0 text-[#F4D77B]"
                        strokeWidth={2.5}
                      />

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

      {/* FAQ */}
      <section className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-7 text-center">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#B86452]">
              Admissions FAQ
            </p>

            <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-[-0.045em] text-[#183528] sm:text-4xl">
              Questions parents often ask.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-[1.75rem] border border-white/45 bg-white/55 p-5 shadow-[0_18px_55px_rgba(24,53,40,0.08)] backdrop-blur-xl sm:p-6"
              >
                <h3 className="text-lg font-extrabold tracking-[-0.03em] text-[#183528]">
                  {faq.question}
                </h3>

                <p className="mt-2 text-sm leading-7 text-[#426252]">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-6 pb-12 sm:px-6 sm:py-8 sm:pb-14 lg:px-8 lg:py-10 lg:pb-16">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2rem] border border-white/45 bg-white/60 p-6 shadow-[0_24px_80px_rgba(24,53,40,0.10)] backdrop-blur-xl sm:p-8 lg:p-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#B86452]">
                  Start Today
                </p>

                <h2 className="mt-3 max-w-3xl text-3xl font-extrabold leading-tight tracking-[-0.045em] text-[#183528] sm:text-4xl">
                  Ready to discuss the right support for your child?
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-[#426252] sm:text-base">
                  Message us today and our team will guide you with nursery,
                  inclusive education, primary support, speech delay concerns,
                  speech therapy guidance and child psychology support.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  href="https://wa.me/23058204613"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F4B321] px-6 py-3 text-sm font-extrabold !text-[#944337] shadow-[0_18px_45px_rgba(244,179,33,0.32)] transition hover:-translate-y-1 hover:bg-[#FFD46A]"
                >
                  <span className="text-[#944337]">WhatsApp Admissions</span>
                  <ArrowRight size={17} className="text-[#944337]" />
                </Link>

                <Link
                  href="mailto:Heavenseed2126@gmail.com"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#B86452] px-6 py-3 text-sm font-extrabold !text-white shadow-[0_18px_45px_rgba(168,79,63,0.32)] transition hover:-translate-y-1 hover:bg-[#944337]"
                >
                  <span className="text-white">Email Us</span>
                  <Mail size={17} className="text-white" />
                </Link>
              </div>
            </div>
          </div>

          <p className="sr-only">
            Heaven’s Seed International School admissions page for nursery,
            inclusive education, primary learning support, speech delay support,
            speech therapy guidance and child psychology support.
          </p>
        </div>
      </section>
    </main>
  );
}

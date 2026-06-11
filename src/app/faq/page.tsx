import type { Metadata } from "next";
import Link from "next/link";
import { HelpCircle, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Heaven Seeds Academy pre-primary school in Mauritius, admissions, visits, contact details and parent support.",
};

const faqs = [
  {
    question: "Where is Heaven Seeds Academy located?",
    answer:
      "Heaven Seeds Academy is located at 111, Malartic Avenue, Quatre Bornes, 75947, Zone 4, Mauritius.",
  },
  {
    question: "How can I contact the academy?",
    answer:
      "You can call 57614680, WhatsApp 58204613, or email Heavenseed2126@gmail.com.",
  },
  {
    question: "How do I start enrollment?",
    answer:
      "You can contact us through the admissions page, WhatsApp, phone, email, or the homepage contact form. Our team will guide you through the next steps.",
  },
  {
    question: "Can parents book a visit?",
    answer:
      "Yes. Parents can request a visit to learn more about the environment, programmes and enrollment process.",
  },
  {
    question: "Is Heaven Seeds Academy focused on Mauritius?",
    answer:
      "Yes. The website and academy communication are focused on Mauritius families looking for early childhood and pre-primary education.",
  },
  {
    question: "Does the academy communicate in English and French?",
    answer:
      "Yes. We support parent communication in English and French to make the enrollment journey easier for families.",
  },
];

export default function FAQPage() {
  return (
    <main className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <section className="mx-auto max-w-5xl">
        <div className="rounded-[2rem] border border-white/45 bg-white/50 p-6 shadow-[0_24px_80px_rgba(24,53,40,0.10)] backdrop-blur-xl sm:p-8 lg:p-10">
          <div className="text-center">
            <p className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#d6a84f]">
              <HelpCircle size={15} />
              FAQ
            </p>

            <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-[-0.045em] text-[#183528] sm:text-4xl lg:text-5xl">
              Frequently Asked Questions
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#426252] sm:text-base">
              Helpful answers for Mauritius parents interested in Heaven Seeds
              Academy admissions, visits and contact options.
            </p>
          </div>

          <div className="mt-8 grid gap-4">
            {faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-3xl border border-[#183528]/10 bg-white/72 p-5 shadow-[0_14px_40px_rgba(24,53,40,0.06)]"
              >
                <h2 className="text-base font-extrabold text-[#183528] sm:text-lg">
                  {faq.question}
                </h2>

                <p className="mt-2 text-sm leading-7 text-[#426252]">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-3xl bg-[#183528] p-5 text-white sm:p-6">
            <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-center">
              <div>
                <h2 className="text-xl font-extrabold tracking-[-0.035em]">
                  Still have a question?
                </h2>
                <p className="mt-2 text-sm leading-6 text-white/76">
                  Send us a message and we will guide you with care.
                </p>
              </div>

              <Link
                href="https://wa.me/23058204613"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f28c28] px-6 py-3 text-sm font-extrabold !text-white shadow-[0_18px_45px_rgba(242,140,40,0.36)] transition hover:-translate-y-1 hover:bg-[#ff9f3f]"
              >
                <span className="text-white">WhatsApp Us</span>
                <MessageCircle size={17} className="text-white" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

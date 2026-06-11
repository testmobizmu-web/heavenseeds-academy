import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Cookie,
  FileText,
  Lock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  UserCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the Heaven Seeds Academy privacy policy for parents, visitors and users in Mauritius. Learn how we collect, use and protect enquiry information.",
};

const contactDetails = [
  {
    icon: Phone,
    label: "Phone",
    value: "57614680 / 58204613",
    href: "tel:57614680",
  },
  {
    icon: Mail,
    label: "Email",
    value: "Heavenseed2126@gmail.com",
    href: "mailto:Heavenseed2126@gmail.com",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "111, Malartic Avenue, Quatre Bornes, 75947, Zone 4, Mauritius",
    href: "https://www.google.com/maps/search/?api=1&query=111%2C%20Malartic%20Avenue%2C%20Quatre%20Bornes%2C%2075947%2C%20Zone%204%2C%20Mauritius",
  },
];

const sections = [
  {
    icon: UserCheck,
    title: "Information We May Collect",
    text: "When you contact Heaven Seeds Academy, we may collect details such as parent or guardian name, phone number, email address, enquiry type, child age range, preferred start date and message content. We only request information that helps us respond to admissions, visits and parent enquiries.",
  },
  {
    icon: FileText,
    title: "How We Use Your Information",
    text: "We use enquiry information to respond to your request, guide you through admissions, arrange school visits, answer programme questions, provide parent support and improve the clarity of our communication.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp, Email and Contact Forms",
    text: "If you submit a form that opens WhatsApp or email, your message is sent using the platform you choose. Please review the privacy settings and policies of WhatsApp, email providers and social media platforms when using those services.",
  },
  {
    icon: Cookie,
    title: "Cookies and Website Analytics",
    text: "Our website may use basic cookies or analytics tools to understand website performance, page usage and visitor experience. These tools help us improve speed, accessibility and content for parents in Mauritius.",
  },
  {
    icon: Lock,
    title: "How We Protect Information",
    text: "We aim to handle personal information carefully and limit access to relevant team members who need it to respond to enquiries or support admissions. We do not sell personal information.",
  },
  {
    icon: ShieldCheck,
    title: "Your Choices and Requests",
    text: "Parents and visitors may contact us to request clarification, correction or deletion of enquiry details where applicable. We will review privacy-related requests with care and respond as reasonably possible.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative px-4 py-7 sm:px-6 sm:py-9 lg:px-8 lg:py-10">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#183528] p-6 text-white shadow-[0_26px_85px_rgba(24,53,40,0.16)] sm:p-8 lg:p-10">
            <div className="absolute -left-24 -top-24 size-72 rounded-full bg-[#f4d77b]/18 blur-3xl" />
            <div className="absolute -bottom-32 right-0 size-96 rounded-full bg-[#f28c28]/14 blur-3xl" />

            <div className="relative grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full border border-white/16 bg-white/10 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#f4d77b] backdrop-blur-md sm:text-[11px]">
                  <ShieldCheck size={14} />
                  Privacy Policy
                </p>

                <h1 className="mt-5 max-w-3xl text-3xl font-extrabold leading-tight tracking-[-0.055em] text-white sm:text-5xl lg:text-6xl">
                  Your privacy matters to Heaven Seeds Academy.
                </h1>

                <p className="mt-4 max-w-2xl text-sm font-semibold leading-7 text-white/78 sm:text-lg sm:leading-8">
                  This page explains how we may collect, use and protect
                  information when parents, guardians and visitors contact us
                  through our website, WhatsApp, email or social media.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#7f1d1d] px-6 py-3 text-sm font-extrabold !text-white shadow-[0_18px_45px_rgba(127,29,29,0.36)] transition hover:-translate-y-1 hover:bg-[#991b1b]"
                  >
                    <span className="text-white">Contact Us</span>
                    <ArrowRight size={17} className="text-white" />
                  </Link>

                  <Link
                    href="mailto:Heavenseed2126@gmail.com"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f28c28] px-6 py-3 text-sm font-extrabold !text-white shadow-[0_18px_45px_rgba(242,140,40,0.36)] transition hover:-translate-y-1 hover:bg-[#ff9f3f]"
                  >
                    <span className="text-white">Email Privacy Request</span>
                    <Mail size={17} className="text-white" />
                  </Link>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    icon: Lock,
                    title: "Careful Handling",
                    text: "We aim to keep enquiry information protected and limited.",
                  },
                  {
                    icon: UserCheck,
                    title: "Parent Control",
                    text: "Parents may contact us about privacy-related requests.",
                  },
                  {
                    icon: FileText,
                    title: "Clear Purpose",
                    text: "Information is used to answer enquiries and support admissions.",
                  },
                  {
                    icon: Sparkles,
                    title: "Trust First",
                    text: "A premium parent experience built on confidence and care.",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <article
                      key={item.title}
                      className="rounded-[1.5rem] border border-white/12 bg-white/10 p-5 shadow-[0_18px_55px_rgba(0,0,0,0.12)] backdrop-blur-xl"
                    >
                      <div className="grid size-11 place-items-center rounded-2xl bg-white text-[#183528]">
                        <Icon size={20} strokeWidth={2.4} />
                      </div>

                      <h2 className="mt-4 text-lg font-extrabold tracking-[-0.03em] text-white">
                        {item.title}
                      </h2>

                      <p className="mt-2 text-sm leading-6 text-white/72">
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

      {/* Policy Content */}
      <section className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-7 grid gap-4 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#d6a84f]">
                How We Handle Information
              </p>

              <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-[-0.045em] text-[#183528] sm:text-4xl">
                Clear, respectful and parent-friendly.
              </h2>
            </div>

            <p className="max-w-2xl text-sm leading-7 text-[#426252] sm:text-base lg:ml-auto">
              This policy is written to help parents and website visitors
              understand what information may be collected and why it may be
              used. It is not a substitute for formal legal advice.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {sections.map((section) => {
              const Icon = section.icon;

              return (
                <article
                  key={section.title}
                  className="group relative overflow-hidden rounded-[2rem] border border-white/45 bg-white/55 p-6 shadow-[0_22px_70px_rgba(24,53,40,0.09)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:bg-white/70"
                >
                  <div className="absolute -right-16 -top-16 size-40 rounded-full bg-[#d6a84f]/16 blur-3xl transition duration-500 group-hover:bg-[#f28c28]/18" />

                  <div className="relative">
                    <div className="grid size-12 place-items-center rounded-2xl bg-[#183528] text-white shadow-[0_16px_38px_rgba(24,53,40,0.22)] transition duration-500 group-hover:bg-[#7f1d1d]">
                      <Icon size={22} strokeWidth={2.4} />
                    </div>

                    <h3 className="mt-5 text-xl font-extrabold tracking-[-0.035em] text-[#183528]">
                      {section.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#426252]">
                      {section.text}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Notes */}
      <section className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <article className="rounded-[2rem] border border-white/45 bg-white/65 p-6 shadow-[0_24px_80px_rgba(24,53,40,0.10)] backdrop-blur-xl sm:p-8 lg:p-10">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#d6a84f]">
                Important Notes
              </p>

              <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-[-0.045em] text-[#183528] sm:text-4xl">
                Privacy in everyday communication.
              </h2>

              <div className="mt-6 grid gap-5">
                {[
                  {
                    title: "Children’s information",
                    text: "If information about a child is shared during an enquiry, it should be provided by a parent or guardian. We encourage families to share only what is necessary for admissions or support.",
                  },
                  {
                    title: "Third-party platforms",
                    text: "Our website may link to WhatsApp, email, Google Maps, Facebook and Instagram. These services are operated by third parties and may process data under their own policies.",
                  },
                  {
                    title: "Retention of enquiries",
                    text: "We may keep enquiry details for a reasonable period to follow up, support admissions and maintain communication history. You may contact us for privacy-related requests.",
                  },
                  {
                    title: "Policy updates",
                    text: "This page may be updated from time to time as our website, communication methods or services evolve.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-[#183528]/10 bg-white/70 p-5 shadow-sm"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle2
                        size={20}
                        className="mt-0.5 shrink-0 text-[#d6a84f]"
                        strokeWidth={2.5}
                      />

                      <div>
                        <h3 className="text-lg font-extrabold tracking-[-0.03em] text-[#183528]">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-sm leading-7 text-[#426252]">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <aside className="rounded-[2rem] bg-[#183528] p-6 text-white shadow-[0_26px_85px_rgba(24,53,40,0.16)] sm:p-8 lg:sticky lg:top-32">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#f4d77b]">
                Contact for Privacy
              </p>

              <h2 className="mt-3 text-2xl font-extrabold leading-tight tracking-[-0.04em] text-white sm:text-3xl">
                Have a privacy question?
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/76">
                Contact Heaven Seeds Academy if you have a question about
                information shared through our website, WhatsApp, email or
                contact forms.
              </p>

              <div className="mt-6 grid gap-3">
                {contactDetails.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      target={item.label === "Address" ? "_blank" : undefined}
                      rel={
                        item.label === "Address"
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="flex items-start gap-3 rounded-2xl border border-white/12 bg-white/10 p-4 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white/15"
                    >
                      <Icon
                        size={18}
                        className="mt-0.5 shrink-0 text-[#f4d77b]"
                      />
                      <span>
                        <span className="block text-white/58">
                          {item.label}
                        </span>
                        <span className="mt-1 block leading-6">
                          {item.value}
                        </span>
                      </span>
                    </Link>
                  );
                })}
              </div>

              <Link
                href="https://wa.me/23058204613"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#f28c28] px-6 py-3 text-sm font-extrabold !text-white shadow-[0_18px_45px_rgba(242,140,40,0.36)] transition hover:-translate-y-1 hover:bg-[#ff9f3f]"
              >
                <span className="text-white">WhatsApp Us</span>
                <MessageCircle size={17} className="text-white" />
              </Link>
            </aside>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-6 pb-12 sm:px-6 sm:py-8 sm:pb-14 lg:px-8 lg:py-10 lg:pb-16">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2rem] border border-white/45 bg-white/55 p-6 shadow-[0_24px_80px_rgba(24,53,40,0.10)] backdrop-blur-xl sm:p-8 lg:p-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#d6a84f]">
                  Parent Support
                </p>

                <h2 className="mt-3 max-w-3xl text-3xl font-extrabold leading-tight tracking-[-0.045em] text-[#183528] sm:text-4xl">
                  We are here to help with care and clarity.
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-[#426252] sm:text-base">
                  For admissions, parent enquiries or privacy questions, you can
                  contact Heaven Seeds Academy directly.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#7f1d1d] px-6 py-3 text-sm font-extrabold !text-white shadow-[0_18px_45px_rgba(127,29,29,0.28)] transition hover:-translate-y-1 hover:bg-[#991b1b]"
                >
                  <span className="text-white">Go to Contact Page</span>
                  <ArrowRight size={17} className="text-white" />
                </Link>

                <Link
                  href="mailto:Heavenseed2126@gmail.com"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f28c28] px-6 py-3 text-sm font-extrabold !text-white shadow-[0_18px_45px_rgba(242,140,40,0.32)] transition hover:-translate-y-1 hover:bg-[#ff9f3f]"
                >
                  <span className="text-white">Email Us</span>
                  <Mail size={17} className="text-white" />
                </Link>
              </div>
            </div>
          </div>

          <p className="sr-only">
            Heaven Seeds Academy privacy policy for Mauritius parents and
            website visitors explaining enquiry data, WhatsApp, email, contact
            forms, cookies, third-party links and privacy contact details.
          </p>
        </div>
      </section>
    </main>
  );
}

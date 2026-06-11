import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  FileText,
  HeartHandshake,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Scale,
  ShieldCheck,
  Sparkles,
  UserCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Read the Heaven Seeds Academy terms and conditions for website visitors, parents and admission enquiries in Mauritius.",
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

const termsSections = [
  {
    icon: FileText,
    title: "Use of This Website",
    text: "This website is provided to share information about Heaven Seeds Academy, our pre-primary learning environment, admissions, contact details, gallery, blog articles and parent support. Visitors should use the website respectfully and only for lawful purposes.",
  },
  {
    icon: UserCheck,
    title: "Admissions Enquiries",
    text: "Submitting an enquiry through the website, WhatsApp, email or contact form does not automatically guarantee admission or placement. Availability, age group, suitability and admission requirements may be discussed directly with parents or guardians.",
  },
  {
    icon: HeartHandshake,
    title: "Parent Communication",
    text: "Parents and guardians are encouraged to provide accurate contact details and relevant information when requesting admissions guidance, visits or programme information. Clear information helps us respond with care and accuracy.",
  },
  {
    icon: ShieldCheck,
    title: "Website Content",
    text: "The information on this website is provided for general guidance. We aim to keep content accurate and helpful, but programme details, availability, policies, fees, schedules or communication methods may change from time to time.",
  },
  {
    icon: Scale,
    title: "Intellectual Property",
    text: "Website content, design elements, written materials, images, logos and branding should not be copied, reproduced or reused without permission from Heaven Seeds Academy or the relevant content owner.",
  },
  {
    icon: AlertCircle,
    title: "External Links",
    text: "This website may link to third-party services such as WhatsApp, email, Google Maps, Facebook, Instagram or other platforms. Heaven Seeds Academy is not responsible for the content, privacy practices or technical behaviour of those external platforms.",
  },
];

const notes = [
  {
    title: "Accuracy of information",
    text: "Parents and visitors should make sure that details submitted through forms, WhatsApp or email are correct. Heaven Seeds Academy may use those details to respond to enquiries and support admissions communication.",
  },
  {
    title: "No misuse of website forms",
    text: "Contact forms and WhatsApp links should not be used for spam, abusive content, false information or unlawful communication.",
  },
  {
    title: "Programme and admission changes",
    text: "Admission steps, programme availability, visit arrangements and academy information may be updated when needed. Parents should contact us directly for the most current details.",
  },
  {
    title: "Limitation of responsibility",
    text: "While we aim to provide a helpful and reliable website experience, Heaven Seeds Academy cannot guarantee that the website will always be uninterrupted, error-free or fully up to date at every moment.",
  },
];

export default function TermsPage() {
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
                  <Scale size={14} />
                  Terms & Conditions
                </p>

                <h1 className="mt-5 max-w-3xl text-3xl font-extrabold leading-tight tracking-[-0.055em] text-white sm:text-5xl lg:text-6xl">
                  Clear terms for a trusted parent experience.
                </h1>

                <p className="mt-4 max-w-2xl text-sm font-semibold leading-7 text-white/78 sm:text-lg sm:leading-8">
                  These terms explain how visitors, parents and guardians may
                  use the Heaven Seeds Academy website and contact us for
                  admissions, visits and parent support.
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
                    href="/privacy-policy"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f28c28] px-6 py-3 text-sm font-extrabold !text-white shadow-[0_18px_45px_rgba(242,140,40,0.36)] transition hover:-translate-y-1 hover:bg-[#ff9f3f]"
                  >
                    <span className="text-white">Privacy Policy</span>
                    <ShieldCheck size={17} className="text-white" />
                  </Link>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    icon: FileText,
                    title: "Website Use",
                    text: "Information is shared for parents and visitors.",
                  },
                  {
                    icon: UserCheck,
                    title: "Parent Enquiries",
                    text: "Admission requests are reviewed with care.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Respectful Use",
                    text: "Forms and links should be used responsibly.",
                  },
                  {
                    icon: Sparkles,
                    title: "Trust & Clarity",
                    text: "We aim to communicate clearly with families.",
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

      {/* Main Terms */}
      <section className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-7 grid gap-4 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#d6a84f]">
                Website Terms
              </p>

              <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-[-0.045em] text-[#183528] sm:text-4xl">
                Simple terms for using our website.
              </h2>
            </div>

            <p className="max-w-2xl text-sm leading-7 text-[#426252] sm:text-base lg:ml-auto">
              These terms are written to be parent-friendly and easy to
              understand. They are not a substitute for formal legal advice.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {termsSections.map((section) => {
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
                Additional Notes
              </p>

              <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-[-0.045em] text-[#183528] sm:text-4xl">
                Important points for parents and visitors.
              </h2>

              <div className="mt-6 grid gap-5">
                {notes.map((item) => (
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
                Need Clarification?
              </p>

              <h2 className="mt-3 text-2xl font-extrabold leading-tight tracking-[-0.04em] text-white sm:text-3xl">
                Contact Heaven Seeds Academy.
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/76">
                For admissions, visits, website terms or parent enquiries, you
                may contact us directly through phone, email or WhatsApp.
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
                  Questions about admissions or website terms?
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-[#426252] sm:text-base">
                  Our team can guide you with care, clarity and kindness.
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
                  href="/privacy-policy"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f28c28] px-6 py-3 text-sm font-extrabold !text-white shadow-[0_18px_45px_rgba(242,140,40,0.32)] transition hover:-translate-y-1 hover:bg-[#ff9f3f]"
                >
                  <span className="text-white">Read Privacy Policy</span>
                  <ShieldCheck size={17} className="text-white" />
                </Link>
              </div>
            </div>
          </div>

          <p className="sr-only">
            Heaven Seeds Academy terms and conditions page for Mauritius parents
            and website visitors explaining admissions enquiries, website use,
            content, external links, intellectual property and contact details.
          </p>
        </div>
      </section>
    </main>
  );
}

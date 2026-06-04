import Image from "next/image";
import Link from "next/link";
import {
  Baby,
  Brain,
  Heart,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Speech,
} from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Programmes", href: "/programmes" },
  { label: "Admissions", href: "/admissions" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const supportLinks = [
  { label: "Nursery", href: "/programmes" },
  { label: "Inclusive Education", href: "/programmes" },
  { label: "Primary Support", href: "/programmes" },
  { label: "Speech Delay Support", href: "/programmes" },
  { label: "Child Psychology Support", href: "/programmes" },
];

const policyLinks = [
  { label: "FAQ", href: "/faq" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
];

const address =
  "111, Malartic Avenue, Quatre Bornes, 75947, Zone 4, Mauritius";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#A84F3F] text-white">
      {/* Luxury background glows */}
      <div className="pointer-events-none absolute -left-28 -top-28 size-80 rounded-full bg-[#F4D77B]/22 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-36 right-[-80px] size-[28rem] rounded-full bg-[#7F342B]/38 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/8 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        {/* Top premium strip */}
        <div className="mb-8 grid gap-3 rounded-[2rem] border border-white/14 bg-white/10 p-4 shadow-[0_22px_70px_rgba(0,0,0,0.10)] backdrop-blur-xl sm:grid-cols-3 sm:p-5">
          {[
            {
              icon: Baby,
              title: "Nursery",
              text: "Gentle early learning",
            },
            {
              icon: Speech,
              title: "Speech Support",
              text: "Language & expression",
            },
            {
              icon: Brain,
              title: "Emotional Care",
              text: "Confidence & wellbeing",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex items-center gap-3 rounded-2xl bg-white/8 p-3"
              >
                <div className="grid size-11 shrink-0 place-items-center rounded-2xl bg-[#F4B321] text-[#7F342B] shadow-[0_14px_35px_rgba(0,0,0,0.14)]">
                  <Icon size={20} strokeWidth={2.4} />
                </div>

                <div>
                  <p className="text-sm font-extrabold text-white">
                    {item.title}
                  </p>
                  <p className="text-xs font-semibold text-white/70">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr_0.85fr_0.95fr]">
          {/* Column 1 */}
          <div>
            <Link href="/" className="inline-flex" aria-label="Go to homepage">
              <Image
                src="/images/Logo/logo-heavenseedsacademy.png"
                alt="Heaven’s Seed International School"
                width={210}
                height={100}
                className="h-20 w-auto rounded-3xl bg-white/95 p-2 shadow-[0_18px_45px_rgba(0,0,0,0.18)] sm:h-24"
                priority={false}
              />
            </Link>

            <p className="mt-5 max-w-md text-sm font-semibold leading-7 text-white/78">
              Heaven’s Seed International School is an inclusive learning
              community supporting nursery learners, primary learners and
              children with different learning needs through care, patience and
              family partnership.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {["Nursery", "Inclusive", "Primary", "Speech", "Emotional"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/14 bg-white/10 px-3 py-1.5 text-[11px] font-extrabold text-white/82"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-[0.24em] text-[#F4D77B]">
              Quick Links
            </h3>

            <nav className="mt-5 grid grid-cols-2 gap-3 sm:max-w-md lg:grid-cols-1">
              {quickLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group inline-flex items-center gap-2 text-sm font-bold text-white/78 transition hover:text-white"
                >
                  <span className="size-1.5 rounded-full bg-[#F4B321] opacity-70 transition group-hover:scale-125 group-hover:opacity-100" />
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-[0.24em] text-[#F4D77B]">
              Support
            </h3>

            <div className="mt-5 grid gap-3">
              {supportLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-sm font-bold text-white/82 backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/14 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-[0.24em] text-[#F4D77B]">
              Contact & Help
            </h3>

            <div className="mt-5 grid gap-3 text-sm font-bold text-white/85">
              <Link
                href="tel:57614680"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/8 p-3 transition hover:bg-white/14 hover:text-white"
              >
                <Phone size={17} className="shrink-0 text-[#F4D77B]" />
                57614680
              </Link>

              <Link
                href="https://wa.me/23058204613"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/8 p-3 transition hover:bg-white/14 hover:text-white"
              >
                <MessageCircle size={17} className="shrink-0 text-[#F4D77B]" />
                WhatsApp: 58204613
              </Link>

              <Link
                href="mailto:Heavenseed2126@gmail.com"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/8 p-3 transition hover:bg-white/14 hover:text-white"
              >
                <Mail size={17} className="shrink-0 text-[#F4D77B]" />
                <span className="break-all">Heavenseed2126@gmail.com</span>
              </Link>

              <Link
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  address
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/8 p-3 leading-6 transition hover:bg-white/14 hover:text-white"
              >
                <MapPin
                  size={17}
                  className="mt-0.5 shrink-0 text-[#F4D77B]"
                />
                <span>{address}</span>
              </Link>
            </div>

            <div className="mt-5 rounded-3xl border border-[#F4D77B]/24 bg-[#7F342B]/24 p-4">
              <div className="flex gap-3">
                <ShieldCheck
                  size={20}
                  className="mt-0.5 shrink-0 text-[#F4D77B]"
                />
                <p className="text-sm font-bold leading-6 text-white/84">
                  Need help with enrollment or support options? Contact us and
                  our team will guide you step by step.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Policies row */}
        <div className="mt-8 flex flex-wrap gap-3 border-t border-white/10 pt-6">
          {policyLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full border border-white/12 bg-white/8 px-4 py-2 text-xs font-extrabold text-white/76 transition hover:bg-white/14 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-6 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm font-semibold text-white/72 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Heaven’s Seed International School.
            All rights reserved.
          </p>

          <p className="flex flex-wrap items-center gap-2">
            Built By{" "}
            <Link
              href="https://mobiz.mu"
              target="_blank"
              rel="noopener noreferrer"
              className="font-extrabold text-[#F4D77B] transition hover:text-white"
            >
              Mobiz.mu
            </Link>{" "}
            with Love
            <Heart
              size={30}
              className="hsa-footer-heart fill-[#dc2626] text-[#dc2626] drop-shadow-[0_8px_18px_rgba(220,38,38,0.55)]"
            />
          </p>
        </div>
      </div>
    </footer>
  );
}
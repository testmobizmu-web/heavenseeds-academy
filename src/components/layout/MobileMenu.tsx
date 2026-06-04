"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Baby,
  Brain,
  ChevronRight,
  GraduationCap,
  HeartHandshake,
  MessageCircle,
  Speech,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

type Language = "en" | "fr";

const navContent = {
  en: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Programmes", href: "/programmes" },
    { label: "Admissions", href: "/admissions" },
    { label: "Gallery", href: "/gallery" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  fr: [
    { label: "Accueil", href: "/" },
    { label: "À propos", href: "/about" },
    { label: "Programmes", href: "/programmes" },
    { label: "Admissions", href: "/admissions" },
    { label: "Galerie", href: "/gallery" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
};

const text = {
  en: {
    menu: "Menu",
    follow: "Follow",
    enroll: "Enroll Now",
    whatsapp: "WhatsApp Us",
    schoolName: "Heaven’s Seed International School",
    description:
      "Nursery, inclusive education, primary support, speech delay support and emotional care.",
    supportTitle: "Learning Support",
    supports: [
      { icon: Baby, label: "Nursery" },
      { icon: HeartHandshake, label: "Inclusive Education" },
      { icon: GraduationCap, label: "Primary Support" },
      { icon: Speech, label: "Speech Delay Support" },
      { icon: Brain, label: "Emotional Support" },
    ],
  },
  fr: {
    menu: "Menu",
    follow: "Suivre",
    enroll: "Inscrire maintenant",
    whatsapp: "WhatsApp",
    schoolName: "Heaven’s Seed International School",
    description:
      "Nurserie, éducation inclusive, soutien primaire, soutien du langage et soutien émotionnel.",
    supportTitle: "Soutien d’apprentissage",
    supports: [
      { icon: Baby, label: "Nurserie" },
      { icon: HeartHandshake, label: "Éducation inclusive" },
      { icon: GraduationCap, label: "Soutien primaire" },
      { icon: Speech, label: "Soutien du langage" },
      { icon: Brain, label: "Soutien émotionnel" },
    ],
  },
};

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4 fill-current" aria-hidden="true">
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.23.2 2.23.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.77l-.44 2.91h-2.33V22C18.34 21.24 22 17.08 22 12.06Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4 fill-current" aria-hidden="true">
      <path d="M7.8 2h8.4A5.81 5.81 0 0 1 22 7.8v8.4a5.81 5.81 0 0 1-5.8 5.8H7.8A5.81 5.81 0 0 1 2 16.2V7.8A5.81 5.81 0 0 1 7.8 2Zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6Zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
    </svg>
  );
}

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

function getInitialLanguage(): Language {
  if (typeof window === "undefined") return "en";

  const saved =
    window.localStorage.getItem("hsa-language") ||
    window.localStorage.getItem("hsaLang") ||
    window.localStorage.getItem("language");

  if (saved === "fr") return "fr";

  const htmlLang = document.documentElement.lang?.toLowerCase();
  if (htmlLang?.startsWith("fr")) return "fr";

  return "en";
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    setLanguage(getInitialLanguage());

    const handleLanguageChange = (event: Event) => {
      const customEvent = event as CustomEvent<{ language?: Language }>;

      if (customEvent.detail?.language === "fr") {
        setLanguage("fr");
        return;
      }

      if (customEvent.detail?.language === "en") {
        setLanguage("en");
        return;
      }

      setLanguage(getInitialLanguage());
    };

    window.addEventListener("storage", () => setLanguage(getInitialLanguage()));
    window.addEventListener("hsa-language-change", handleLanguageChange);

    return () => {
      window.removeEventListener("hsa-language-change", handleLanguageChange);
    };
  }, []);

  function changeLanguage(nextLanguage: Language) {
    setLanguage(nextLanguage);

    window.localStorage.setItem("hsa-language", nextLanguage);
    window.localStorage.setItem("hsaLang", nextLanguage);

    document.documentElement.lang = nextLanguage === "fr" ? "fr-MU" : "en-MU";

    window.dispatchEvent(
      new CustomEvent("hsa-language-change", {
        detail: { language: nextLanguage },
      })
    );
  }

  const navItems = navContent[language];
  const t = text[language];

  return (
    <div
      className={`fixed inset-0 z-[100] lg:hidden ${
        open ? "pointer-events-auto" : "pointer-events-none"
      }`}
      aria-hidden={!open}
    >
      {/* Premium overlay */}
      <button
        type="button"
        aria-label="Close menu overlay"
        onClick={onClose}
        className={`absolute inset-0 bg-[#7F342B]/42 backdrop-blur-sm transition-opacity duration-500 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Left drawer */}
      <aside
        className={`absolute left-0 top-0 h-full w-[88%] max-w-[410px] overflow-y-auto bg-white shadow-[35px_0_95px_rgba(127,52,43,0.25)] transition-transform duration-500 ease-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="relative min-h-full overflow-hidden">
          <div className="absolute -left-24 -top-24 size-72 rounded-full bg-[#F4B321]/18 blur-3xl" />
          <div className="absolute -bottom-28 right-[-70px] size-80 rounded-full bg-[#A84F3F]/14 blur-3xl" />

          <div className="relative p-5">
            {/* Drawer header */}
            <div className="flex items-center justify-between border-b border-[#A84F3F]/10 pb-4">
              <Link href="/" onClick={onClose} className="flex items-center">
                <Image
                  src="/images/Logo/logo-heavenseedsacademy.png"
                  alt="Heaven’s Seed International School"
                  width={160}
                  height={75}
                  className="h-16 w-auto object-contain"
                />
              </Link>

              <button
                type="button"
                aria-label="Close menu"
                onClick={onClose}
                className="grid size-10 place-items-center rounded-full bg-[#A84F3F] text-white shadow-[0_14px_35px_rgba(168,79,63,0.25)] transition hover:bg-[#7F342B]"
              >
                <X size={18} />
              </button>
            </div>

            {/* School intro */}
            <div className="mt-5 rounded-[1.6rem] border border-[#A84F3F]/10 bg-[#FFF4DF]/70 p-4 shadow-[0_14px_40px_rgba(24,53,40,0.06)]">
              <p className="text-sm font-extrabold text-[#183528]">
                {t.schoolName}
              </p>
              <p className="mt-1 text-xs font-semibold leading-5 text-[#426252]">
                {t.description}
              </p>
            </div>

            {/* Nav */}
            <div className="mt-5">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-[#A84F3F]">
                {t.menu}
              </p>

              <nav className="mt-4 grid gap-2">
                {navItems.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    style={{ animationDelay: `${index * 0.06}s` }}
                    className={`hsa-mobile-menu-item group flex items-center justify-between rounded-2xl border border-[#A84F3F]/10 bg-white px-4 py-3.5 text-sm font-extrabold text-[#183528] shadow-[0_12px_30px_rgba(24,53,40,0.06)] transition duration-300 hover:-translate-y-0.5 hover:border-[#F4B321]/60 hover:bg-[#FFF4DF] ${
                      open ? "animate-hsa-mobile-item" : ""
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="grid size-7 place-items-center rounded-full bg-[#F4B321]/18 text-[#7F342B] transition group-hover:bg-[#F4B321]">
                      <ChevronRight size={15} />
                    </span>
                  </Link>
                ))}
              </nav>
            </div>

            {/* CTA card */}
            <div className="mt-5 rounded-[1.6rem] border border-[#A84F3F]/10 bg-white p-4 shadow-[0_14px_40px_rgba(24,53,40,0.08)]">
              <Link
                href="/admissions"
                onClick={onClose}
                className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[#F4B321] px-5 text-sm font-extrabold !text-[#7F342B] shadow-[0_18px_45px_rgba(244,179,33,0.28)] transition hover:-translate-y-0.5 hover:bg-[#FFD46A]"
              >
                <span className="text-[#7F342B]">{t.enroll}</span>
              </Link>

              <Link
                href="https://wa.me/23058204613"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#A84F3F] px-5 text-sm font-extrabold !text-white shadow-[0_18px_45px_rgba(168,79,63,0.24)] transition hover:-translate-y-0.5 hover:bg-[#7F342B]"
              >
                <span className="text-white">{t.whatsapp}</span>
                <MessageCircle size={17} className="text-white" />
              </Link>

              <div className="mt-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#426252]">
                    {t.follow}
                  </span>

                  <a
                    href="https://www.facebook.com/share/1CKUaPFuv4/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="grid size-9 place-items-center rounded-full bg-[#A84F3F] text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#7F342B]"
                  >
                    <FacebookIcon />
                  </a>

                  <a
                    href="https://www.instagram.com/heavenseedsacademy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="grid size-9 place-items-center rounded-full bg-[#A84F3F] text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#7F342B]"
                  >
                    <InstagramIcon />
                  </a>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    aria-label="Switch to English"
                    onClick={() => changeLanguage("en")}
                    className={`grid size-9 place-items-center rounded-full bg-white shadow-sm ring-1 transition ${
                      language === "en"
                        ? "ring-[#F4B321]"
                        : "ring-[#A84F3F]/10"
                    }`}
                  >
                    <Image
                      src="/images/Flags/en.png"
                      alt="English"
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                  </button>

                  <button
                    type="button"
                    aria-label="Switch to French"
                    onClick={() => changeLanguage("fr")}
                    className={`grid size-9 place-items-center rounded-full bg-white shadow-sm ring-1 transition ${
                      language === "fr"
                        ? "ring-[#F4B321]"
                        : "ring-[#A84F3F]/10"
                    }`}
                  >
                    <Image
                      src="/images/Flags/fr.png"
                      alt="French"
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Support card */}
            <div className="mt-5 rounded-[1.6rem] bg-[#A84F3F] p-4 text-white shadow-[0_18px_45px_rgba(168,79,63,0.18)]">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#F4D77B]">
                {t.supportTitle}
              </p>

              <div className="mt-3 grid gap-2">
                {t.supports.map((support) => {
                  const Icon = support.icon;

                  return (
                    <div
                      key={support.label}
                      className="flex items-center gap-2 rounded-2xl border border-white/12 bg-white/10 px-3 py-2 text-xs font-bold text-white/88"
                    >
                      <Icon size={15} className="text-[#F4D77B]" />
                      {support.label}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
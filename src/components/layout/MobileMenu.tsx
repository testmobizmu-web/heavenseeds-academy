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
      { icon: HeartHandshake, label: "Inclusive" },
      { icon: GraduationCap, label: "Primary" },
      { icon: Speech, label: "Speech" },
      { icon: Brain, label: "Emotional" },
    ],
  },
  fr: {
    menu: "Menu",
    follow: "Suivre",
    enroll: "Inscrire",
    whatsapp: "WhatsApp",
    schoolName: "Heaven’s Seed International School",
    description:
      "Nurserie, éducation inclusive, soutien primaire, langage et soutien émotionnel.",
    supportTitle: "Soutien",
    supports: [
      { icon: Baby, label: "Nurserie" },
      { icon: HeartHandshake, label: "Inclusion" },
      { icon: GraduationCap, label: "Primaire" },
      { icon: Speech, label: "Langage" },
      { icon: Brain, label: "Émotionnel" },
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

    const handleStorage = () => setLanguage(getInitialLanguage());

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

    window.addEventListener("storage", handleStorage);
    window.addEventListener("hsa-language-change", handleLanguageChange);

    return () => {
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener("hsa-language-change", handleLanguageChange);
    };
  }, []);

  useEffect(() => {
    if (!open) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [open]);

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
      className={`fixed inset-0 z-[999] lg:hidden ${
        open ? "pointer-events-auto" : "pointer-events-none"
      }`}
      aria-hidden={!open}
    >
      {/* Overlay */}
      <button
        type="button"
        aria-label="Close menu overlay"
        onClick={onClose}
        className={`absolute inset-0 bg-[#7F342B]/55 backdrop-blur-md transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Premium full mobile panel */}
      <aside
        className={`absolute inset-x-0 top-0 h-[100dvh] overflow-hidden bg-white shadow-[0_30px_100px_rgba(24,53,40,0.22)] transition-transform duration-500 ease-out ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="relative flex h-full flex-col overflow-hidden">
          <div className="absolute -left-24 -top-24 size-72 rounded-full bg-[#F4B321]/18 blur-3xl" />
          <div className="absolute -bottom-28 right-[-70px] size-80 rounded-full bg-[#A84F3F]/14 blur-3xl" />

          {/* Header */}
          <div className="relative flex h-[92px] shrink-0 items-center justify-between border-b border-[#A84F3F]/10 px-5 pt-[env(safe-area-inset-top)]">
            <Link href="/" onClick={onClose} className="flex items-center">
              <Image
                src="/images/Logo/logo-heavenseedsacademy.png"
                alt="Heaven’s Seed International School"
                width={170}
                height={80}
                priority
                className="h-[64px] w-auto object-contain"
              />
            </Link>

            <button
              type="button"
              aria-label="Close menu"
              onClick={onClose}
              className="grid size-12 place-items-center rounded-full bg-[#A84F3F] text-white shadow-[0_14px_35px_rgba(168,79,63,0.25)] transition hover:bg-[#7F342B]"
            >
              <X size={21} />
            </button>
          </div>

          {/* Scrollable content */}
          <div className="relative flex-1 overflow-y-auto px-5 py-5">
            <div className="rounded-[1.6rem] border border-[#A84F3F]/10 bg-[#FFF4DF]/70 p-4 shadow-[0_14px_40px_rgba(24,53,40,0.06)]">
              <p className="text-sm font-extrabold text-[#183528]">
                {t.schoolName}
              </p>
              <p className="mt-1 text-xs font-semibold leading-5 text-[#426252]">
                {t.description}
              </p>
            </div>

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
                    style={{ animationDelay: `${index * 0.055}s` }}
                    className={`group flex items-center justify-between rounded-2xl border border-[#A84F3F]/10 bg-white px-4 py-3 text-sm font-extrabold text-[#183528] shadow-[0_12px_30px_rgba(24,53,40,0.06)] transition duration-300 hover:border-[#F4B321]/70 hover:bg-[#FFF4DF] ${
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

            <div className="mt-5 grid grid-cols-2 gap-2">
              {t.supports.map((support) => {
                const Icon = support.icon;

                return (
                  <div
                    key={support.label}
                    className="flex items-center gap-2 rounded-2xl border border-[#A84F3F]/10 bg-white/78 px-3 py-2.5 text-xs font-extrabold text-[#183528] shadow-sm"
                  >
                    <Icon size={15} className="shrink-0 text-[#A84F3F]" />
                    <span className="truncate">{support.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom sticky CTA */}
          <div className="relative shrink-0 border-t border-[#A84F3F]/10 bg-white/95 px-5 pb-[calc(env(safe-area-inset-bottom)+16px)] pt-4 backdrop-blur-xl">
            <div className="grid gap-3">
              <Link
                href="/admissions"
                onClick={onClose}
                className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[#F4B321] px-5 text-sm font-extrabold !text-[#7F342B] shadow-[0_18px_45px_rgba(244,179,33,0.28)] transition hover:bg-[#FFD46A]"
              >
                <span className="text-[#7F342B]">{t.enroll}</span>
              </Link>

              <Link
                href="https://wa.me/23058204613"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#A84F3F] px-5 text-sm font-extrabold !text-white shadow-[0_18px_45px_rgba(168,79,63,0.24)] transition hover:bg-[#7F342B]"
              >
                <span className="text-white">{t.whatsapp}</span>
                <MessageCircle size={17} className="text-white" />
              </Link>
            </div>

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
                  className="grid size-9 place-items-center rounded-full bg-[#A84F3F] text-white shadow-md transition hover:bg-[#7F342B]"
                >
                  <FacebookIcon />
                </a>

                <a
                  href="https://www.instagram.com/heavenseedsacademy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="grid size-9 place-items-center rounded-full bg-[#A84F3F] text-white shadow-md transition hover:bg-[#7F342B]"
                >
                  <InstagramIcon />
                </a>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  aria-label="Switch to English"
                  onClick={() => changeLanguage("en")}
                  className={`grid size-9 place-items-center rounded-full bg-white shadow-sm ring-2 transition ${
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
                  className={`grid size-9 place-items-center rounded-full bg-white shadow-sm ring-2 transition ${
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
        </div>
      </aside>
    </div>
  );
}
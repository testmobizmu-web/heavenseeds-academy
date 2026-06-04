"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";

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

const announcementText = {
  en: "Planted with love, growing under Heaven’s light...",
  fr: "Planté avec amour, grandissant sous la lumière du ciel...",
};

const enrollText = {
  en: {
    short: "Enroll",
    full: "Now",
  },
  fr: {
    short: "Inscrire",
    full: "Maintenant",
  },
};

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-3.5 fill-current" aria-hidden="true">
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.23.2 2.23.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.77l-.44 2.91h-2.33V22C18.34 21.24 22 17.08 22 12.06Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-3.5 fill-current" aria-hidden="true">
      <path d="M7.8 2h8.4A5.81 5.81 0 0 1 22 7.8v8.4a5.81 5.81 0 0 1-5.8 5.8H7.8A5.81 5.81 0 0 1 2 16.2V7.8A5.81 5.81 0 0 1 7.8 2Zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6Zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
    </svg>
  );
}

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

export default function Header() {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState<Language>("en");
  const [languageOpen, setLanguageOpen] = useState(false);

  useEffect(() => {
    setLanguage(getInitialLanguage());
  }, []);

  function changeLanguage(nextLanguage: Language) {
    setLanguage(nextLanguage);
    setLanguageOpen(false);

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

  return (
    <>
      {/* Announcement Bar */}
      <div className="relative z-[70] border-b border-white/10 bg-[#A84F3F] text-white shadow-[0_10px_30px_rgba(168,79,63,0.22)]">
        <div className="grid h-10 w-full grid-cols-[1fr_auto] items-center px-4 sm:px-6 lg:grid-cols-[1fr_auto_1fr] lg:px-8">
          {/* Left Socials */}
          <div className="flex animate-hsa-fade items-center justify-start gap-3">
            <span className="hidden text-[10px] font-extrabold uppercase tracking-[0.28em] text-white/75 sm:inline">
              Follow Us
            </span>

            <a
              href="https://www.facebook.com/share/1CKUaPFuv4/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="grid size-7 place-items-center rounded-full bg-white/12 text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#F4D77B] hover:text-[#7F342B]"
            >
              <FacebookIcon />
            </a>

            <a
              href="https://www.instagram.com/heavenseedsacademy/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid size-7 place-items-center rounded-full bg-white/12 text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#F4D77B] hover:text-[#7F342B]"
            >
              <InstagramIcon />
            </a>
          </div>

          {/* Desktop Center Message */}
          <div className="hidden min-w-[620px] items-center justify-center lg:flex">
            <p className="hsa-typewriter overflow-hidden whitespace-nowrap text-sm font-extrabold tracking-[0.06em] text-[#F4D77B]">
              {announcementText[language]}
            </p>
          </div>

          {/* Language Dropdown */}
          <div className="relative flex animate-hsa-fade items-center justify-end">
            <button
              type="button"
              onClick={() => setLanguageOpen((value) => !value)}
              aria-label="Change language"
              className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/12 px-2.5 py-1.5 text-xs font-extrabold text-white shadow-sm backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:bg-white/18"
            >
              <Image
                src={language === "fr" ? "/images/Flags/fr.png" : "/images/Flags/en.png"}
                alt={language === "fr" ? "French" : "English"}
                width={21}
                height={21}
                className="rounded-full object-cover"
              />
              <span className="hidden sm:inline">{language.toUpperCase()}</span>
              <ChevronDown
                size={14}
                className={`transition duration-300 ${languageOpen ? "rotate-180" : ""}`}
              />
            </button>

            {languageOpen ? (
              <div className="absolute right-0 top-10 z-[90] w-36 overflow-hidden rounded-2xl border border-white/18 bg-white p-2 text-[#183528] shadow-[0_20px_55px_rgba(24,53,40,0.18)]">
                <button
                  type="button"
                  onClick={() => changeLanguage("en")}
                  className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-xs font-extrabold transition hover:bg-[#FFF4DF]"
                >
                  <Image
                    src="/images/Flags/en.png"
                    alt="English"
                    width={22}
                    height={22}
                    className="rounded-full"
                  />
                  English
                </button>

                <button
                  type="button"
                  onClick={() => changeLanguage("fr")}
                  className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-xs font-extrabold transition hover:bg-[#FFF4DF]"
                >
                  <Image
                    src="/images/Flags/fr.png"
                    alt="French"
                    width={22}
                    height={22}
                    className="rounded-full"
                  />
                  Français
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-[60] m-0 border-b border-[#A84F3F]/10 bg-white/92 shadow-[0_14px_45px_rgba(24,53,40,0.08)] backdrop-blur-2xl">
        {/* Desktop background image */}
        <div className="absolute inset-0 hidden overflow-hidden lg:block">
          <Image
            src="/images/header/header-bg.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-white/82 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/76 to-white/95" />
        </div>

        {/* Mobile/tablet clean background */}
        <div className="absolute inset-0 bg-white/96 backdrop-blur-xl lg:hidden" />

        <div className="relative z-10 grid h-22 w-full grid-cols-[auto_1fr_auto] items-center gap-3 px-4 sm:h-24 sm:gap-4 sm:px-6 lg:grid-cols-[240px_1fr_190px] lg:px-8">
          {/* Mobile Menu Button */}
          <div className="flex items-center justify-start lg:hidden">
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
              className="grid size-11 place-items-center rounded-full border border-[#A84F3F]/12 bg-white text-[#7F342B] shadow-[0_12px_30px_rgba(24,53,40,0.12)] transition hover:bg-[#FFF4DF]"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Logo */}
          <Link
            href="/"
            aria-label="Heaven’s Seed International School homepage"
            className="flex h-full items-center justify-center lg:justify-start"
          >
            <Image
              src="/images/Logo/logo-heavenseedsacademy.png"
              alt="Heaven’s Seed International School"
              width={230}
              height={100}
              priority
              className="h-[70px] w-auto object-contain min-[390px]:h-[76px] sm:h-[86px] lg:h-[92px]"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center justify-center gap-1.5 lg:flex xl:gap-3"
          >
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                style={{ animationDelay: `${index * 0.08}s` }}
                className="animate-hsa-menu-fade group relative px-3 py-3 text-sm font-extrabold text-[#183528]/90 transition duration-300 hover:text-[#7F342B] xl:px-4"
              >
                <span className="relative z-10">{item.label}</span>

                {/* Turmeric animated underline */}
                <span className="absolute bottom-1.5 left-1/2 h-[3px] w-0 -translate-x-1/2 rounded-full bg-[#F4B321] shadow-[0_6px_18px_rgba(244,179,33,0.55)] transition-all duration-300 group-hover:w-[62%]" />

                {/* tiny premium hover glow */}
                <span className="absolute inset-x-1 bottom-0 h-7 rounded-full bg-[#F4B321]/0 blur-xl transition duration-300 group-hover:bg-[#F4B321]/16" />
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center justify-end">
            <Link
              href="/admissions"
              className="inline-flex items-center justify-center rounded-full bg-[#F4B321] px-4 py-2.5 text-xs font-extrabold !text-[#7F342B] shadow-[0_16px_35px_rgba(244,179,33,0.34)] ring-1 ring-[#F4D77B]/45 transition duration-300 hover:-translate-y-0.5 hover:bg-[#FFD46A] sm:px-5 sm:py-3 sm:text-sm"
            >
              <span className="text-[#7F342B]">{enrollText[language].short}</span>
              <span className="hidden text-[#7F342B] sm:inline">
                {" "}
                {enrollText[language].full}
              </span>
            </Link>
          </div>
        </div>

        <MobileMenu open={open} onClose={() => setOpen(false)} />
      </header>
    </>
  );
}
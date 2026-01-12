"use client";

import { usePathname } from "next/navigation";

export default function WhatsAppFloat() {
  const pathname = usePathname();
  const isFr = pathname.startsWith("/fr");

  const phone = "23058204613";

  const message = isFr
    ? "Bonjour 👋 Je souhaite avoir des informations sur HeavenSeeds Academy."
    : "Hello 👋 I would like more information about HeavenSeeds Academy.";

  const link = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-lg hover:scale-105 transition"
    >
      <svg
        viewBox="0 0 32 32"
        width="22"
        height="22"
        fill="currentColor"
        aria-hidden
      >
        <path d="M16 0C7.164 0 0 7.164 0 16c0 2.82.738 5.58 2.14 8.01L0 32l8.24-2.14A15.93 15.93 0 0016 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm0 29.09a13.02 13.02 0 01-6.64-1.82l-.47-.28-4.89 1.27 1.3-4.77-.31-.49A13.05 13.05 0 1129.05 16 13.07 13.07 0 0116 29.09zm7.61-9.76c-.41-.21-2.44-1.2-2.82-1.33-.38-.14-.66-.21-.94.21-.27.41-1.08 1.33-1.32 1.6-.24.27-.49.31-.9.1-.41-.21-1.74-.64-3.32-2.05-1.23-1.1-2.06-2.45-2.3-2.86-.24-.41-.02-.63.19-.84.19-.19.41-.49.62-.74.21-.24.28-.41.42-.69.14-.27.07-.52-.03-.73-.1-.21-.94-2.26-1.29-3.09-.34-.82-.69-.71-.94-.72-.24-.01-.52-.01-.8-.01-.27 0-.73.1-1.11.52-.38.41-1.45 1.42-1.45 3.47s1.48 4.03 1.69 4.31c.21.27 2.92 4.46 7.07 6.26.99.43 1.76.69 2.36.88.99.31 1.89.27 2.6.16.79-.12 2.44-1 2.79-1.97.34-.97.34-1.8.24-1.97-.1-.17-.38-.27-.79-.48z"/>
      </svg>

      <span className="hidden sm:block text-sm font-semibold">
        WhatsApp
      </span>
    </a>
  );
}

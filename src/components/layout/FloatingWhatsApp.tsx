import Image from "next/image";
import Link from "next/link";

const whatsappNumber = "23058204613";

const whatsappMessage = encodeURIComponent(
  "Hello Heaven Seeds Academy, I need help with admissions or programme information."
);

export default function FloatingWhatsApp() {
  return (
    <Link
      href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Heaven Seeds Academy on WhatsApp"
      className="hsa-floating-whatsapp fixed bottom-5 right-4 z-[90] flex flex-col items-center gap-1 sm:bottom-6 sm:right-6"
    >
      <span className="hsa-floating-help rounded-full bg-white/90 px-3 py-1 text-[11px] font-extrabold text-[#183528] shadow-[0_10px_30px_rgba(24,53,40,0.18)] backdrop-blur-md">
        Need Help ?
      </span>

      <span className="relative block size-[72px] sm:size-[82px]">
        <Image
          src="/images/whatsapp-hsa.png"
          alt="WhatsApp Heaven Seeds Academy"
          fill
          sizes="82px"
          loading="lazy"
          className="object-contain drop-shadow-[0_18px_35px_rgba(24,53,40,0.28)]"
      />
     </span>
    </Link>
  );
}

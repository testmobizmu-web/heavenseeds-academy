"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type Props = {
  isFr?: boolean;
};

type Slot = "top" | "mid" | "bot";

/**
 * Renders all 3 images at once.
 * Every interval: rotates which image occupies top/mid/bot.
 * Motion: transform/opacity/blur swap for premium "depth" feeling (no jump).
 */
export default function WhySplitCrossfadeCollage({ isFr }: Props) {
  const items = useMemo(
    () => [
      {
        src: "/images/why/why-1.webp",
        alt: isFr
          ? "Cours interactif — HeavenSeeds Academy"
          : "Interactive lesson — HeavenSeeds Academy",
      },
      {
        src: "/images/why/why-2.webp",
        alt: isFr ? "Accompagnement & pratique — HeavenSeeds" : "Guidance & practice — HeavenSeeds",
      },
      {
        src: "/images/why/why-3.webp",
        alt: isFr ? "Concentration & progrès — HeavenSeeds" : "Focus & progress — HeavenSeeds",
      },
    ],
    [isFr]
  );

  // slotMap[i] tells which slot image i is currently in (top/mid/bot)
  const [slotMap, setSlotMap] = useState<Record<number, Slot>>({
    0: "top",
    1: "mid",
    2: "bot",
  });

  // small "phase" to make the swap feel like a crossfade + depth swap
  const [phase, setPhase] = useState<"idle" | "swap">("idle");

  useEffect(() => {
    const intervalMs = 4200;
    const swapMs = 520; // must match CSS transition feel

    const t = setInterval(() => {
      // start swap (slight fade/blur)
      setPhase("swap");

      // after a short fade, rotate positions
      window.setTimeout(() => {
        setSlotMap((prev) => {
          // rotate: top -> bot, mid -> top, bot -> mid
          const next: Record<number, Slot> = { ...prev };
          const inv: Record<Slot, number> = {
            top: Object.keys(prev).find((k) => prev[+k] === "top") as any,
            mid: Object.keys(prev).find((k) => prev[+k] === "mid") as any,
            bot: Object.keys(prev).find((k) => prev[+k] === "bot") as any,
          } as any;

          const topIdx = Number(inv.top);
          const midIdx = Number(inv.mid);
          const botIdx = Number(inv.bot);

          next[topIdx] = "bot";
          next[midIdx] = "top";
          next[botIdx] = "mid";

          return next;
        });

        // end swap
        window.setTimeout(() => setPhase("idle"), swapMs);
      }, 260);
    }, intervalMs);

    return () => clearInterval(t);
  }, []);

  return (
    <div className="hsa-whySplit__right" aria-label="Learning moments collage">
      <div className={`hsa-whyXfade ${phase === "swap" ? "is-swap" : ""}`}>
        {/* ALL THREE images are always rendered */}
        {items.map((it, i) => {
          const slot = slotMap[i]; // top/mid/bot
          return (
            <div key={it.src} className={`hsa-whyXfade__item is-${slot}`}>
              <Image
                src={it.src}
                alt={it.alt}
                width={1200}
                height={800}
                className="hsa-whyXfade__img"
                sizes="(max-width: 900px) 100vw, 50vw"
                priority={i === 0}
              />
              <span className="hsa-whyXfade__glow" aria-hidden="true" />
            </div>
          );
        })}

        {/* premium floating orbs */}
        <span className="hsa-whyXfade__orb is-a" aria-hidden="true" />
        <span className="hsa-whyXfade__orb is-b" aria-hidden="true" />
      </div>
    </div>
  );
}


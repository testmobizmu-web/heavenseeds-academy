"use client";

import { useEffect, useRef, useState } from "react";

export default function Reveal(props: {
  children: React.ReactNode;
  className?: string;
  once?: boolean;
}) {
  const { children, className = "", once = true } = props;
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (reduce) {
      setVisible(true);
      return;
    }

    let didShow = false;

    const io = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        if (!e) return;

        if (e.isIntersecting) {
          if (!didShow) setVisible(true);
          didShow = true;
          if (once) io.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  return (
    <div ref={ref} className={`hsa-reveal-io ${visible ? "is-visible" : ""} ${className}`}>
      {children}
    </div>
  );
}


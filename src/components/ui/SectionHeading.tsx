import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  children?: ReactNode;
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  children,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mx-auto max-w-3xl",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      {eyebrow ? (
        <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.28em] text-[#d6a84f]">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="text-3xl font-extrabold leading-tight tracking-[-0.04em] text-[#183528] sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description ? (
        <p className="mt-5 text-base leading-8 text-[#426252] sm:text-lg">
          {description}
        </p>
      ) : null}

      {children ? <div className="mt-6">{children}</div> : null}
    </div>
  );
}

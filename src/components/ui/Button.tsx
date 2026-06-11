import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

type ButtonVariant = "primary" | "secondary" | "danger" | "outline";
type ButtonSize = "sm" | "md" | "lg";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[#183528] text-white shadow-[0_16px_35px_rgba(24,53,40,0.22)] hover:bg-[#244b39]",
  secondary:
    "bg-[#f28c28] text-white shadow-[0_16px_35px_rgba(242,140,40,0.28)] hover:bg-[#ff9f3f]",
  danger:
    "bg-[#7f1d1d] text-white shadow-[0_16px_35px_rgba(127,29,29,0.28)] hover:bg-[#991b1b]",
  outline:
    "border border-[#183528]/15 bg-white text-[#183528] shadow-sm hover:bg-[#fff4df]",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-xs",
  md: "px-5 py-3 text-sm",
  lg: "px-7 py-4 text-base",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full font-extrabold transition duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-[#d6a84f]/25 disabled:pointer-events-none disabled:opacity-60";

type CommonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

type ButtonAsLinkProps = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className"> & {
    href: string;
  };

type ButtonAsButtonProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
    href?: never;
  };

type ButtonProps = ButtonAsLinkProps | ButtonAsButtonProps;

export default function Button(props: ButtonProps) {
  const variant = props.variant ?? "primary";
  const size = props.size ?? "md";
  const className = props.className ?? "";

  const classes = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if ("href" in props && props.href) {
    const {
      href,
      children,
      variant: _variant,
      size: _size,
      className: _className,
      ...linkProps
    } = props as ButtonAsLinkProps;

    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  const {
    children,
    variant: _variant,
    size: _size,
    className: _className,
    type,
    ...buttonProps
  } = props as ButtonAsButtonProps;

  return (
    <button {...buttonProps} className={classes} type={type ?? "button"}>
      {children}
    </button>
  );
}

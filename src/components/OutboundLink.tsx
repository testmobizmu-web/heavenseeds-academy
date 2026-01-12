"use client";

import React from "react";

type Props = React.PropsWithChildren<{
  href: string;
  className?: string;
  target?: string;
  rel?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}>;

export default function OutboundLink({
  href,
  className,
  target = "_blank",
  rel = "noreferrer",
  onClick,
  children,
}: Props) {
  return (
    <a href={href} target={target} rel={rel} className={className} onClick={onClick}>
      {children}
    </a>
  );
}

"use client";

import Link, { type LinkProps } from "next/link";
import { type MouseEvent, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { useTransition } from "./PageTransition";

type JournalLinkProps = LinkProps & {
  children: ReactNode;
  className?: string;
};

export default function JournalLink({
  href,
  children,
  className,
  ...props
}: JournalLinkProps) {
  const router = useRouter();
  const { beginTransition } = useTransition();

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    const destination =
      typeof href === "string" ? href : href.pathname;

    if (!destination || destination.startsWith("http")) {
      return;
    }

    event.preventDefault();
    beginTransition();

    window.setTimeout(() => {
      router.push(destination);
    }, 280);
  }

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={className}
      {...props}
    >
      {children}
    </Link>
  );
}
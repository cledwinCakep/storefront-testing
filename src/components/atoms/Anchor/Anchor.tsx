import React from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface AnchorProps {
  children: React.ReactNode;
  href: string;
  isExternal?: boolean;
  className?: string;
}

const Anchor = ({ children, href, isExternal, className }: AnchorProps) => {
  const isExternalProps = {
    target: "_blank",
    rel: "noopener noreferrer",
  };

  const aStyle =
    "text-stone-700 py-4 px-2 inline-block font-medium hover:text-orange-500 active:bg-orange-50";

  if (isExternal) {
    return (
      <a
        href={href}
        {...(isExternal && isExternalProps)}
        className={twMerge(aStyle, className)}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={twMerge(aStyle, className)}>
      {children}
    </Link>
  );
};

export default Anchor;

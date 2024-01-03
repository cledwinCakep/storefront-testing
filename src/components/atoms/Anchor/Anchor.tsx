import React, { HTMLAttributes } from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface AnchorProps extends HTMLAttributes<HTMLAnchorElement> {
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
    "text-white py-5 px-2 inline-block font-medium hover:text-orange-500";

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

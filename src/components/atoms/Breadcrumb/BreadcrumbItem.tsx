import React from "react";
import Link from "next/link";

// icons
import Home from "@/components/icons/Home";

// atoms
import Text from "@/components/atoms/Text/Text";

// interfaces
interface BreadcrumbItemProps {
  children?: React.ReactNode;
  isCurrentlyActive?: boolean;
  isHome?: boolean;
  href?: string;
}

const BreadcrumbItem = ({
  children,
  isCurrentlyActive = false,
  isHome = false,
  href = "#",
}: BreadcrumbItemProps) => {
  if (isHome) {
    return (
      <Link href="/">
        <Home size={16} className="text-orange-600" />
      </Link>
    );
  }

  if (isCurrentlyActive) {
    return (
      <Text
        as="body1"
        className="font-normal text-orange-400 before:inline-block before:pr-3 before:content-[url('/chevron-right.svg')]"
      >
        {children}
      </Text>
    );
  }

  return (
    <Text
      as="body1"
      className="font-medium text-orange-600 before:mr-3 before:inline-block before:content-[url('/chevron-right.svg')]"
    >
      <a href={href} className="inline">
        {children}
      </a>
    </Text>
  );
};

export default BreadcrumbItem;

import React from "react";
import { twMerge } from "tailwind-merge";

// interfaces
interface TextProps {
  children: React.ReactNode;
  className?: string;
  as?:
    | "h1"
    | "h2"
    | "h3"
    | "subHeading1"
    | "subHeading2"
    | "body1"
    | "body2"
    | "small";
}

const Text = ({ children, className, as = "body1" }: TextProps) => {
  const TEXT_VARIANTS = {
    h1: "text-[54px] leading-[122%]",
    h2: "text-[44px] leading-[115%]",
    h3: "text-[32px] leading-[42px]",
    subHeading1: "text-2xl leading-[130%]",
    subHeading2: "text-xl leading-[140%]",
    body1: "text-base leading-[150%]",
    body2: "text-sm leading-[150%]",
    small: "text-[13px]",
  };

  const combinedClasses = twMerge(
    TEXT_VARIANTS[as as keyof typeof TEXT_VARIANTS],
    className
  );

  const handleElement = (as: string) => {
    let element = "";

    switch (as) {
      case "h1":
        element = "h1";
        break;
      case "h2":
        element = "h2";
        break;
      case "h3":
        element = "h3";
        break;
      case "subHeading1":
        element = "p";
        break;
      case "subHeading2":
        element = "p";
        break;
      case "small":
        element = "p";
        break;
      case "body2":
        element = "p";
        break;
      case "body1":
      default:
        element = "p";
        break;
    }

    return element;
  };

  return React.createElement(
    handleElement(as),
    { className: combinedClasses },
    children
  );
};

export default Text;

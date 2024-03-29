import React from "react";
import { twMerge } from "tailwind-merge";

// interfaces
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  color?: "orange" | "black" | "white" | "transparent";
  size?: "xs" | "sm" | "md" | "lg";
  iconRight?: React.ReactNode;
  iconLeft?: React.ReactNode;
  disabled?: boolean;
}

const Button = ({
  disabled = false,
  children,
  onClick,
  className,
  color = "orange",
  size = "md",
  iconRight,
  iconLeft,
}: ButtonProps) => {
  const BUTTON_COLORS = {
    orange:
      "bg-orange-500 text-slate-50 text-based text-white hover:bg-orange-500/90 hover:border-orange-500",
    black:
      "bg-gray-800 text-slate-50 hover:bg-[#121417] border-gray-800 hover:border-gray-900",
    white:
      "bg-slate-50 text-gray-900 hover:bg-slate-50 border-slate-50 hover:border-slate-50",
    transparent:
      "bg-transparent text-white font-medium hover:bg-transparent border border-orange-500 hover:bg-orange-500/10",
  };

  const BUTTON_SIZES = {
    xs: "py-3",
    sm: "py-[14.67px]",
    md: "py-[16.67px]",
    lg: "py-4",
  };

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={twMerge(
        `${BUTTON_COLORS[color as keyof typeof BUTTON_COLORS]} ${
          BUTTON_SIZES[size as keyof typeof BUTTON_SIZES]
        } group flex items-center justify-center gap-2 rounded-lg px-6`,
        className
      )}
    >
      {iconLeft && (
        <span
          className={`${
            color === "orange"
              ? "text-slate-50 group-hover:text-orange-500"
              : "text-slate-50"
          }`}
        >
          {iconLeft}
        </span>
      )}
      {children}
      {iconRight && (
        <span
          className={`${
            color === "orange" ? "text-slate-50 " : "text-slate-50"
          }`}
        >
          {iconRight}
        </span>
      )}
    </button>
  );
};

export default Button;

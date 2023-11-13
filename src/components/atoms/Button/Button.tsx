import React from "react";
import { twMerge } from "tailwind-merge";

// interfaces
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  color?: "orange" | "black" | "white";
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
      "bg-orange-500 text-slate-50 hover:bg-transparent hover:border-orange-500 hover:text-orange-500",
    black:
      "bg-gray-800 text-slate-50 hover:bg-gray-700 border-gray-800 hover:border-gray-700",
    white:
      "bg-slate-50 text-gray-900 hover:bg-slate-50 border-slate-50 hover:border-slate-50",
  };

  const BUTTON_SIZES = {
    xs: "py-[10.67px]",
    sm: "py-[14.67px]",
    md: "py-[16.67px]",
    lg: "py-[20.67px]",
  };

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={twMerge(
        `${BUTTON_COLORS[color as keyof typeof BUTTON_COLORS]} ${
          BUTTON_SIZES[size as keyof typeof BUTTON_SIZES]
        } group flex items-center justify-center gap-2 rounded-[40px] px-6 font-bold`,
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
            color === "orange"
              ? "text-slate-50 group-hover:text-orange-500"
              : "text-slate-50"
          }`}
        >
          {iconRight}
        </span>
      )}
    </button>
  );
};

export default Button;

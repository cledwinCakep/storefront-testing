"use client";

import React from "react";

// atoms
import Text from "../Text/Text";

// interfaces
interface RadioProps {
  children?: React.ReactNode;
  label: string;
  value: string | number;
  isDisabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => any;
  name?: string;
  current?: string;
}

const Radio = ({
  current,
  children,
  label,
  value,
  isDisabled = false,
  onChange,
  name = undefined,
}: RadioProps) => {
  return (
    <div
      className={`relative flex w-fit items-center gap-x-6 px-4 py-[12px] ${
        isDisabled ? "pointer-events-none" : "pointer-events-auto"
      }`}
    >
      <input
        id={label}
        type="radio"
        name={name ?? "radio"}
        value={value}
        disabled={isDisabled}
        onChange={onChange}
        checked={value === current}
        className={`peer/radio absolute left-0 top-0 z-10 h-full w-full opacity-0 ${
          isDisabled ? "cursor-default" : "cursor-pointer"
        }`}
      />
      <span
        className={`absolute left-0 top-0 z-0 h-full w-full rounded-lg border-[1px] peer-checked/radio:border-[#9A3412] peer-checked/radio:bg-[#431407] peer-hover/radio:border-[#9A3412] ${
          isDisabled ? "border-0 bg-[#121417]" : "border-gray-500"
        }`}
      />

      <label
        htmlFor={label}
        className={`z-10 cursor-pointer whitespace-nowrap font-medium peer-checked/radio:text-[#F97316] peer-hover/radio:text-[#F97316] ${
          isDisabled ? "text-gray-100" : "text-gray-500"
        }`}
      >
        <Text as="body1">{label}</Text>
      </label>
    </div>
  );
};

export default Radio;

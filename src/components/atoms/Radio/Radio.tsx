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
        className={`absolute left-0 top-0 z-0 h-full w-full rounded-lg border-[1px] peer-checked/radio:border-gray-500 peer-checked/radio:bg-gray-900 peer-hover/radio:border-gray-500 ${
          isDisabled ? "border-0 bg-gray-900" : "border-gray-500"
        }`}
      />

      <label
        htmlFor={label}
        className={`z-10 cursor-pointer whitespace-nowrap font-medium peer-checked/radio:text-gray-100 peer-hover/radio:text-gray-100 ${
          isDisabled ? "text-gray-100" : "text-gray-500"
        }`}
      >
        <Text as="body1">{label}</Text>
      </label>

      <span
        className={`relative block h-4 w-4 rounded-full border-[1px] p-1 peer-checked/radio:hidden peer-hover/radio:border-orange-500 ${
          isDisabled ? "border-gray-500" : "border-gray-400"
        }`}
      />

      <span className="relative hidden h-4 w-4 rounded-full border-[1px] border-gray-500 p-1 peer-checked/radio:block peer-checked/radio:border-orange-500 peer-hover/radio:border-orange-500">
        <span className="absolute left-1/2 top-1/2 h-[10px] w-[10px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500" />
      </span>
    </div>
  );
};

export default Radio;

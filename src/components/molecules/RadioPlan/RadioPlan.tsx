"use client";

import React, { useEffect, useState } from "react";

// components
import Text from "@/components/atoms/Text/Text";
import Radio from "@/components/atoms/Radio/Radio";
import { usePlanContext } from "@/lib/context/plan";
import { currentSelectedProps } from "@/lib/context/plan";
// interfaces
interface RadioPlanData {
  label: string;
  value: string;
}

interface RadioPlanProps {
  title: string;
  name: string;
  data: RadioPlanData[];
}

const RadioPlan = ({ title, name, data }: RadioPlanProps) => {
  const { selectDataPlan, currentSelected, setCurrentSelect } =
    usePlanContext();

  useEffect(() => {}, [currentSelected]);

  const handleSelectRadio = (
    label: string,
    name: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    let temp = {
      ...currentSelected,
      [name]: { id: e.target.id, value: e.target.value },
    };

    setCurrentSelect(temp);
    selectDataPlan(label, e.target.value);
  };

  return (
    <div>
      <div className="mb-5 flex gap-x-3">
        <Text as="body1" className="font-bold text-stone-700">
          {title}
        </Text>

        <Text as="body1" className="font-medium text-stone-500">
          {currentSelected[name as keyof currentSelectedProps]?.id}
        </Text>
      </div>

      <div className="no-scrollbar flex gap-x-4 overflow-scroll sm:max-w-[559px] sm:flex-wrap sm:gap-y-4">
        {data.map((data) => (
          <Radio
            current={currentSelected[name as keyof currentSelectedProps].value}
            key={data.label}
            name={name}
            label={data.label}
            value={data.value}
            onChange={(e) => handleSelectRadio(data.label, name, e)}
          />
        ))}
      </div>
    </div>
  );
};

export default RadioPlan;

"use client";

import React, { useEffect, useState } from "react";

// components
import Text from "@/components/atoms/Text/Text";
import Radio from "@/components/atoms/Radio/Radio";
import { usePlanContext } from "@/lib/context/plan";
import { currentSelectedProps } from "@/lib/context/plan";
import { addParametersToUrl } from "@/lib/utils/addParamsToUrl";
import usePlanHook from "@/lib/hooks/usePlanHooks";
// interfaces
interface RadioPlanData {
  title: string;
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
    if (name === "type") {
      if (currentSelected.type?.value !== e.target.value) {
        setCurrentSelect({
          type: {
            id: "-",
            value: "",
          },
          plan: {
            id: "-",
            value: "",
          },
          data: {
            id: "-",
            value: "",
          },
          duration: {
            id: "-",
            value: "",
          },
          unlimitedPlanDuration: {
            id: "-",
            value: "-",
            price: 0,
          },
        });
      }
    }

    let temp = {
      ...currentSelected,
      [name]: { id: e.target.id, value: e.target.value },
    };

    if (name === "type" && currentSelected.type?.value !== e.target.value) {
      temp = { ...temp, duration: { id: "-", value: "" } };
    }

    console.log({ temp });
    console.log({ name: e.target.name, value: e.target.value });

    setCurrentSelect(temp);
    selectDataPlan(e.target.name, e.target.value);
  };

  return (
    <div>
      <div className="mb-4 flex gap-x-3">
        <Text as="body1" className="font-bold text-gray-100">
          {title}
        </Text>

        {/* <Text as="body1" className="font-medium text-gray-400">
          {currentSelected[name as keyof currentSelectedProps]?.id}
        </Text> */}
      </div>

      <div className="no-scrollbar flex gap-x-4 overflow-scroll sm:max-w-[559px] sm:flex-wrap sm:gap-y-4">
        {data.map((data) => (
          <Radio
            // isDisabled={data.label === "Local"}
            current={currentSelected[name as keyof currentSelectedProps]?.value}
            key={data.label}
            name={name}
            label={data.label}
            value={String(data.value)}
            onChange={(e) => handleSelectRadio(data.label, name, e)}
          />
        ))}
      </div>
    </div>
  );
};

export default RadioPlan;

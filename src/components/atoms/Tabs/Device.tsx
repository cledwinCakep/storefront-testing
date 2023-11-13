import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// atoms
import Text from "@/components/atoms/Text/Text";

// interfaces
interface DeviceDataProps {
  label: string;
  content: any;
}

interface DeviceProps {
  data: DeviceDataProps[];
}

const Device = ({ data }: DeviceProps) => {
  const [currentlySelected, setCurrentlySelected] = useState<string | number>(
    0
  );

  const handleCurrentlyActiveTab = (id: string | number) => {
    setCurrentlySelected(id);
  };

  return (
    <div className="w-full">
      <div className="flex w-full border-b-[1px] border-b-gray-200 text-gray-400">
        {data.map((data, i) => (
          <button
            key={i}
            className={`w-full py-6 font-bold ${
              i === currentlySelected
                ? "border-b-2 border-gray-900 text-gray-900"
                : "border-b-[1px] border-b-gray-200 text-gray-400"
            }`}
            onClick={() => handleCurrentlyActiveTab(i)}
          >
            <Text as="body2">{data.label}</Text>
          </button>
        ))}
      </div>

      <div className="w-full py-6 [&>ul>li]:mb-1 [&>ul>li]:list-disc [&>ul]:mb-4 [&>ul]:pl-5">
        {
          data
            .filter((_, i) => i === currentlySelected)
            .map((data) => data.content)[0]
        }
      </div>
    </div>
  );
};

export default Device;

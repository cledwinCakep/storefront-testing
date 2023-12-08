import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// atoms
import Text from "@/components/atoms/Text/Text";

// interfaces
interface TabsDataProps {
  label: string;
  content: any;
}

interface TabsProps {
  data: TabsDataProps[];
}

const Tabs = ({ data }: TabsProps) => {
  const [currentlySelected, setCurrentlySelected] = useState<string | number>(
    0
  );

  const handleCurrentlyActiveTab = (id: string | number) => {
    setCurrentlySelected(id);
  };

  return (
    <div className="w-full">
      <div className="flex w-full border-b-[1px] border-b-zinc-500 text-gray-100">
        {data.map((data, i) => (
          <button
            key={i}
            className={`w-full py-4 px-6 font-bold ${
              i === currentlySelected
                ? "border-b-2 border-b-gray-200 text-gray-100"
                : "text-[#BDBDBD]"
            }`}
            onClick={() => handleCurrentlyActiveTab(i)}
          >
            <Text as="body1">{data.label}</Text>
          </button>
        ))}
      </div>

      <div className="w-full py-4 px-6 text-gray-100 [&>ul>li]:mb-1 [&>ul>li]:list-disc [&>ul]:mb-4 [&>ul]:pl-5">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {
            data
              .filter((_, i) => i === currentlySelected)
              .map((data) => data.content)[0]
          }
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default Tabs;

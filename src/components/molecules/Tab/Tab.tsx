import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// atoms
import Text from "@/components/atoms/Text/Text";
import Image from "next/image";
import { Button } from "@tremor/react";
import { useModalStore } from "@/lib/stores/useModalStore";
import { useTranslations } from "next-intl";

// interfaces
interface TabsDataProps {
  label: string;
  content: any;
}

interface TabsProps {
  data: TabsDataProps[];
}

const Tab = ({ data }: TabsProps) => {
  const [currentlySelected, setCurrentlySelected] = useState<string | number | any>(0);
  const {
      setOpenSupportedCountry,
      openSupportedCountry
  } = useModalStore();
  const t = useTranslations("PlanDetail");

  const handleCurrentlyActiveTab = (id: string | number) => {
    setCurrentlySelected(id);
  };

  const handleOpenModal = ()=>{
    setOpenSupportedCountry(!openSupportedCountry)
  }

  return (
    <div className="w-full">
      <div className="flex w-full overflow-x-auto border-b-[1px] border-b-zinc-500 text-gray-100">
        {data.map((data, i) => (
          <button
            key={i}
            className={`w-full px-6 py-4 font-bold ${
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

      <div className="w-full px-6 py-4 text-gray-100 [&>ul>li]:mb-1 [&>ul>li]:list-disc [&>ul]:mb-4 [&>ul]:pl-5">
        {data[currentlySelected] && (
          <div>
            {typeof data[currentlySelected].content === "object" ? (
              <div className="flex w-full flex-col gap-4">
                {Object.keys(data[currentlySelected].content).map((key, i) => (
                  <div key={i} className="flex-colh-full flex w-full gap-4">
                    {key !== "Description" ? (
                      <>
                        <div className="w-8">
                          <Image
                            src={`/assets/${key.toLowerCase()}-icon.png`}
                            alt={"country.png"}
                            width={32}
                            height={32}
                            className="h-8 w-8"
                          />
                        </div>
                        <div className="w-fit">
                          <Text as="body1">{key}</Text>
                          {data[currentlySelected].content[key] ==
                          "See available provider" ? (
                            <button onClick={handleOpenModal} className="border-b border-[#F47325] bg-transparent text-[#F47325]">
                              {data[currentlySelected].content[key]}
                            </button>
                          ) : (
                            <Text as="body1" className="text-[#BDBDBD]">
                              {data[currentlySelected].content[key]}
                            </Text>
                          )}
                        </div>
                      </>
                    ) : (
                      <div className="mt-4 w-fit">
                        <Text as="body1">
                          {data[currentlySelected].content[key]}
                        </Text>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              // Render string content
              <div>{data[currentlySelected].content}</div>
            )}
          </div>
        )}

        {currentlySelected == 0 && (
          <div className="mt-4 w-fit">
            <Text as="body1" className="text-[#BDBDBD]">
              {t('planDetail_notification')}
            </Text>
          </div>
        )}       
      </div>
    </div>
  );
};

export default Tab;

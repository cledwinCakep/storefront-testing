import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// atoms
import Text from "@/components/atoms/Text/Text";
import Image from "next/image";
import { Button } from "@tremor/react";
import { useModalStore } from "@/lib/stores/useModalStore";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

// interfaces
interface TabsDataProps {
  label: string;
  content: any;
}

interface TabsProps {
  data: TabsDataProps[];
}

const Tab = ({ data }: TabsProps) => {
  const router = usePathname();
  const parts = router.split("/");
  const country_code = parts.length > 3 ? parts[3] : parts[2];
  let notification = false;

  const [currentlySelected, setCurrentlySelected] = useState<
    string | number | any
  >(0);
  const { setOpenSupportedCountry, openSupportedCountry } = useModalStore();
  const t = useTranslations("PlanDetail");

  const handleCurrentlyActiveTab = (id: string | number) => {
    setCurrentlySelected(id);
  };

  const handleOpenModal = () => {
    setOpenSupportedCountry(!openSupportedCountry);
  };

  if (
    country_code === "TW" ||
    country_code === "HK_MO" ||
    country_code === "MO" ||
    country_code === "HK"
  ) {
    notification = true;
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
        {currentlySelected == 0 && notification == true && (
          <div className="mb-4 flex w-full gap-2 rounded-md bg-[#121417] p-4">
            <div className="w-fit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6 text-blue-500"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <Text as="body1" className="text-gray-300">
              {t("planDetail_warn")}
            </Text>
          </div>
        )}
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
                            <button
                              onClick={handleOpenModal}
                              className="border-b border-[#F47325] bg-transparent text-[#F47325]"
                            >
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
              {t("planDetail_notification")}
            </Text>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tab;

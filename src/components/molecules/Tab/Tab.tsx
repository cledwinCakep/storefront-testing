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
import { convertTextToList } from "@/lib/utils/convertToList";
import NotificationTab from "./NotificationTab";
import DescriptionTab from "./DescriptionTab";
import PolicyTab from "./PolicyTab";

// interfaces
interface TabsDataProps {
  label: string;
  content: any;
}

interface TabsProps {
  data: TabsDataProps[];
}

const notifiedCountry = [
  "WW_146",
  "WW_54",
  "AP",
];

const Tab = ({ data }: TabsProps) => {
  const router = usePathname();
  const parts = router.split("/");
  const country_code = parts.length > 3 ? parts[3] : parts[2];
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

  // check if the notification includes the country code in url params
  const notification = notifiedCountry.includes(country_code)
  
  return (
    <div className="w-full">
      {/* Head menu */}
      <div className="flex w-full overflow-x-auto border-b-[1px] border-b-zinc-500 text-gray-100">
        {data.map((data, i) => (
          <button
            key={i}
            className={`w-full px-4 py-4 font-bold ${
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

      <div className="w-full py-4 text-gray-100 [&>ul>li]:mb-1 [&>ul>li]:list-disc [&>ul]:mb-4 [&>ul]:pl-5">

        {/* Notification */}
        {currentlySelected == 0 && notification == true && (
          <NotificationTab text={`${t("planDetail_warn")}`}/>
        )}

        {/* Description */}
        {data[currentlySelected].label == "Description" && (
          <DescriptionTab description={data[currentlySelected]} handleOpenModal={handleOpenModal}/>
        )}

        {/* Instructions */}
        {data[currentlySelected].label == "Instructions" && (
          <div className="flex w-full flex-col gap-4">
            {convertTextToList(data[currentlySelected].content)}
          </div>
        )}

        {/* Policy */}
        <PolicyTab policy={data[currentlySelected]}/>

        {/* Bottom Notification */}
        {data[currentlySelected].label == "Description" && (
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

{
  /* {data[currentlySelected] && (
          <div>
            {typeof data[currentlySelected].content === "object" ? (
              <div className="flex w-full flex-col gap-4">
                {Object.keys(data[currentlySelected].content).map((key, i) => (
                  <div key={i} className="flex-colh-full flex w-full gap-4">
                    {key !== "Description" ? (
                      <>
                        <div className="w-8">
                          <Image
                            src={`/assets/${
                              key == "eKYC (Identity Verification)"
                                ? "ekyc"
                                : key.toLocaleLowerCase()
                            }-icon.png`}
                            alt={"provider-icon.png"}
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
              <div>
                {data[currentlySelected].label == "Instructions"
                  ? convertTextToList(data[currentlySelected].content)
                  : data[currentlySelected].content}
              </div>
            )}
          </div>
        )} */
}

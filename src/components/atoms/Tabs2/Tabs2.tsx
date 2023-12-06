import React, { useState, useRef, useEffect } from "react";
import PriceInfoCards from "@/components/organisms/PriceInfoCards/PriceInfoCards";
import Shimmer from "../Shimmer/Shimmer";
import Button from "../Button/Button";

interface PriceInfo {
  code: string;
  image: string;
  title: string;
  price: string;
}

interface Tabs2Props {
  data: PriceInfo[];
  onShowLessClicked: () => void;
}

const Tabs2: React.FC<Tabs2Props> = ({ data, onShowLessClicked }) => {
  const [activeTab, setActiveTab] = useState<"local" | "global">("local");
  const [showAllLocal, setShowAllLocal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [filteredData, setFilteredData] = useState<PriceInfo[]>([]);

  useEffect(() => {
    const globalCodes = ["WW", "EU", "GU_MP", "HK_MO", "AU_NZ", "US_CA", "AP"];
    const popularLocalCodes = [
      "JP",
      "TW",
      "TH",
      "VN",
      "CN",
      "US",
      "SG",
      "MY",
      "PH",
    ];
    const getFilteredData = (isGlobal: boolean): PriceInfo[] => {
      let filtered = data.filter((item) =>
        isGlobal
          ? globalCodes.includes(item.code)
          : !globalCodes.includes(item.code)
      );

      if (!isGlobal) {
        if (showAllLocal) {
          filtered = filtered.sort((a, b) => a.title.localeCompare(b.title));
        } else {
          filtered = filtered.filter((item) =>
            popularLocalCodes.includes(item.code)
          );
        }
      }
      return filtered;
    };

    setFilteredData(getFilteredData(activeTab === "global"));

    if (data && data.length > 0) {
      setIsLoading(false);
    }
  }, [activeTab, showAllLocal, data]);

  const toggleShowAllLocal = () => {
    setShowAllLocal(!showAllLocal);
    if (showAllLocal) {
      onShowLessClicked();
    }
  };

  return (
    <div>
      <div className="start-center mb-6 flex w-full md:justify-center">
        <div className="gap-2 rounded-full border border-[#222222] bg-[#121417] p-1">
          <button
            className={`rounded-full px-4 py-2 text-[#9CA3AF] hover:bg-black/40 ${
              activeTab === "local"
                ? "rounded-full border border-[#E5E7EB] bg-black text-white hover:bg-white/5"
                : ""
            }`}
            onClick={() => setActiveTab("local")}
          >
            Local eSIMs
          </button>
          <button
            className={`rounded-full px-4 py-2 text-[#9CA3AF] hover:bg-black/40 ${
              activeTab === "global"
                ? "rounded-full border border-[#E5E7EB] bg-black text-white hover:bg-white/5"
                : ""
            }`}
            onClick={() => setActiveTab("global")}
          >
            Global eSIMs
          </button>
        </div>
      </div>
      <div>
        {isLoading ? <Shimmer /> : <PriceInfoCards data={filteredData} />}
      </div>
      {activeTab === "local" && (
        <div className="text-centers mt-8 flex justify-center">
          <Button
            color="transparent"
            size="xs"
            className=" max-w-fit md:w-full"
            onClick={toggleShowAllLocal}
          >
            {showAllLocal ? "Show Less" : "Show All Countries"}
          </Button>
        </div>
      )}
    </div>
  );
};

export default Tabs2;

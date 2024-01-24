import React from "react";
import Link from "next/link";

// molecules
import PriceInfo from "@/components/molecules/PriceInfo/PriceInfo";

// interaces
interface PriceInfoCardsData {
  image: string;
  title: string;
  price: string;
  code: string;
}

interface PriceInfoCardsProps {
  data: PriceInfoCardsData[];
}

const i: any = {
  CN: "CN",
  SG: "SG",
  MY: "MY",
  TH: "TH",
  JP: "JP",
  KR: "KR",
};

const PriceInfoCards = ({ data }: PriceInfoCardsProps) => {
  return (
    <div className="grid w-full gap-y-3 sm:gap-x-3 sm:gap-y-2 md:w-auto md:grid-cols-3 md:gap-x-3 md:gap-y-3 ">
      {data.map((data) => (
        <a
          key={data.code}
          // href={`/plans/${data.code}?plan=UNLIMITED&dataType=&data=&duration=`}
          href={`/plans/${data.code}`}
        >
          <div
            key={data.title}
            className="w-full rounded-lg border border-gray-800 bg-[#121417] p-4 transition-all duration-200 ease-in-out sm:hover:border-orange-500 sm:hover:shadow-2xl sm:hover:shadow-orange-500/30 md:min-w-[272px]"
          >
            <PriceInfo
              image={data.image}
              title={data.title}
              price={data.price}
            />
          </div>
        </a>
      ))}
    </div>
  );
};

export default PriceInfoCards;

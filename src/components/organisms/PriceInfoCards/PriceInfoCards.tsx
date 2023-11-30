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
  const countryName = data.filter((item) => i[item.code]);

  return (
    <div className="grid w-full gap-y-4 sm:gap-x-3 sm:gap-y-2 md:w-auto md:grid-cols-4 md:gap-x-[18px] md:gap-y-6 ">
      {data.map((data, index) => {
        console.log(
          "iss",
          i[data.code])
        
        return (
          <Link
            key={data.code}
            href={`/plans/${data.code}?plan=UNLIMITED&data=500MB&duration=1`}
          >
            <div
              key={data.title}
              className="w-full rounded-lg border border-gray-800 bg-[#121417] p-4 transition-all duration-200 ease-in-out hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-500/30 md:min-w-[272px]"
            >
              
              <PriceInfo
              image={i[data.code] == data.code ? data.image :"/china.png"}
              title={data.title}
              price={data.price}
            />
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default PriceInfoCards;

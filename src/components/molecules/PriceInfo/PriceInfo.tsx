import React from "react";
import Image from "next/image";
import { ArrowRight } from "react-feather";

// components
import Text from "@/components/atoms/Text/Text";
import { useTranslations } from "next-intl";

// interfaces
interface PriceInfoProps {
  image: string;
  title: string;
  price: string | number;
}

const PriceInfo = ({ image, title, price }: PriceInfoProps) => {
  const t = useTranslations("Homepage");
  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex items-center gap-2">
        <Image
          src={image}
          alt={image}
          width={40}
          height={40}
          priority
          className="rounded-md"
        />
        <div>
          <Text as="body1" className="font-medium text-gray-200">
            {title}
          </Text>
        </div>
        {/* <Text as="small" className="mb-3 font-normal text-gray-400">
          {t("hero_destinationStart")}
        </Text> */}
        {/* <span className="flex items-end gap-x-1">
          <Text as="subHeading2" className="font-black text-gray-100">
            {price}
          </Text>
          <Text as="body2" className="font-normal uppercase text-gray-400">
            IDR
          </Text>
        </span> */}
      </div>
      <ArrowRight size={24} className=" text-gray-500" />
    </div>
  );
};

export default PriceInfo;

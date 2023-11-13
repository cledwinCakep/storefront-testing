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
    <div className="relative flex w-full items-center gap-5 sm:flex-col sm:items-start">
      <Image src={image} alt={image} width={64} height={64} priority/>
      <div>
        <Text as="subHeading1" className="mb-6 font-medium text-gray-200">
          {title}
        </Text>
        <Text as="small" className="mb-3 font-normal text-gray-400">
          {t("hero_destinationStart")}
        </Text>
        <span className="flex items-end gap-x-1">
          <Text as="subHeading2" className="font-black text-gray-100">
            {price}
          </Text>
          <Text as="body2" className="font-normal uppercase text-gray-400">
            IDR
          </Text>
        </span>
      </div>
      <ArrowRight size={24} className="absolute right-0 top-0 text-gray-200" />
    </div>
  );
};

export default PriceInfo;

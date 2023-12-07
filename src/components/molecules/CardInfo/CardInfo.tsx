import React from "react";

// components
import Text from "@/components/atoms/Text/Text";

// interfaces
interface CardInfoProps {
  image: string | React.ReactNode | React.ReactElement;
  title: string;
  subtitle: string;
  additional?: React.ReactElement;
}

const CardInfo = ({ image, title, subtitle, additional }: CardInfoProps) => {
  return (
    <>
      <div className="mb-8 flex content-center items-center justify-center rounded-full border border-gray-800 bg-[#121417] p-5">
        {image}
      </div>
      <div className="flex flex-col items-center lg:h-[150px]">
        <Text
          as="subHeading1"
          className="text-center font-semibold text-gray-100"
        >
          {title}
        </Text>
        <Text as="body1" className="mb-4 py-6 text-center text-[#BDBDBD]">
          {subtitle}
        </Text>
        {additional}
      </div>
    </>
  );
};

export default CardInfo;

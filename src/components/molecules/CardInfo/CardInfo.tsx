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
      {image}
      <div className="flex  h-[150px] flex-col">
        <Text as="subHeading1" className="text-center font-bold text-gray-100">
          {title}
        </Text>
        <Text as="body1" className="py-6 text-center text-[#BDBDBD]">
          {subtitle}
        </Text>
        {additional}
      </div>
    </>
  );
};

export default CardInfo;

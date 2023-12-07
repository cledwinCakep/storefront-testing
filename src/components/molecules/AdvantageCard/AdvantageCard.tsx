import React from "react";

// atoms
import Text from "@/components/atoms/Text/Text";

// interfaces
interface AdvantageCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const AdvantageCard = ({ icon, title, description }: AdvantageCardProps) => {
  return (
    <div className="mx-auto flex max-w-[230px] flex-col items-center justify-center py-3 text-center">
      <div className="mb-5 flex items-center justify-center rounded-full border border-gray-800 bg-[#121417] p-2">
        {icon}
      </div>
      <div className="h-full">
        <Text
          as="subHeading2"
          className=" font-semibold text-gray-100 sm:text-2xl"
        >
          {title}
        </Text>
        <Text as="body1" className="mt-2 font-normal text-[#767676]">
          {description}
        </Text>
      </div>
    </div>
  );
};

export default AdvantageCard;

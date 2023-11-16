import React from "react";

// atoms
import Text from "@/components/atoms/Text/Text";

// icons
import { Rocket } from "@/components/icons/landingpage";

// interfaces
interface AdvantageCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const AdvantageCard = ({ icon, title, description }: AdvantageCardProps) => {
  return (
    <div className="mx-auto flex max-w-[230px] flex-col items-center justify-center gap-6 py-4 text-center">
      <div className="flex items-center justify-center rounded-full border border-gray-800 bg-gray-900 p-2">
        {icon}
      </div>
     <div className="h-full">
     <Text as="subHeading2" className="font-bold text-gray-100 sm:text-2xl">
        {title} 
      </Text>
     </div>
      <Text as="body1" className="h-9font-medium text-gray-400">
        {description}
      </Text>
    </div>
  );
};

export default AdvantageCard;

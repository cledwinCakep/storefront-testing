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
      {icon}
      <Text as="subHeading2" className="font-bold text-orange-800 sm:text-2xl">
        {title}
      </Text>
      <Text as="body1" className="h-9font-medium text-orange-600">
        {description}
      </Text>
    </div>
  );
};

export default AdvantageCard;

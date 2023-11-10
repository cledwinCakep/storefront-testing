import React from "react";

// atoms
import Layout from "@/components/atoms/Layout/Layout";

// molecules
import AdvantageCard from "@/components/molecules/AdvantageCard/AdvantageCard";

// icons
import {
  Money,
  Network,
  Rocket,
  Simcard,
} from "@/components/icons/landingpage";
import { useTranslations } from "next-intl";

const Partners = () => {
  const t = useTranslations("Homepage");
  return (
    <div className="h-full w-full bg-orange-100 py-14">
      <Layout className="grid grid-cols-2 gap-[10px] sm:grid-cols-2 md:grid-cols-4">
        <AdvantageCard
          icon={<Rocket />}
          title={t("hero_benefitOneTitle")}
          description={t("hero_benefitOneDesc")}
        />
        <AdvantageCard
          icon={<Money />}
          title={t("hero_benefitTwoTitle")}
          description={t("hero_benefitTwoDesc")}
        />
        <AdvantageCard
          icon={<Simcard />}
          title={t("hero_benefitThreeTitle")}
          description={t("hero_benefitThreeDesc")}
        />
        <AdvantageCard
          icon={<Network />}
          title={t("hero_benefitFourTitle")}
          description={t("hero_benefitFourDesc")}
        />
      </Layout>
    </div>
  );
};

export default Partners;

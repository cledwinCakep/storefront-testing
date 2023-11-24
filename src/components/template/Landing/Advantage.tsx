import React from "react";

// atoms
import Layout from "@/components/atoms/Layout/Layout";

// molecules
import AdvantageCard from "@/components/molecules/AdvantageCard/AdvantageCard";

// icons
import {
  CustomerService,
  Money,
  Network,
  Simcard,
} from "@/components/icons/landingpage";
import { useTranslations } from "next-intl";

const Partners = () => {
  const t = useTranslations("Homepage");
  return (
    <div className="h-full w-full  bg-black py-20">
      <Layout className="grid grid-cols-2 gap-[10px] bg-black sm:grid-cols-2 md:grid-cols-4">
        <AdvantageCard
          icon={<Network />}
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
          icon={<CustomerService />}
          title={t("hero_benefitFourTitle")}
          description={t("hero_benefitFourDesc")}
        />
      </Layout>
    </div>
  );
};

export default Partners;

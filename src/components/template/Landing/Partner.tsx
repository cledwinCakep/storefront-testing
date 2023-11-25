import React from "react";

// components
import Text from "@/components/atoms/Text/Text";
import Layout from "@/components/atoms/Layout/Layout";
import Partnerbanner from "@/components/organisms/Partner/Partner";
import { useTranslations } from "next-intl";

const Partners = () => {
  const t = useTranslations("Homepage");
  return (
    <div className="h-full bg-[#121417]" id="payment">
      <Layout className="flex flex-col items-center justify-center gap-10 py-14">
        <Text
          as="subHeading1"
          className="text-center font-medium leading-[32px] text-gray-100 "
        >
          {t("hero_paymentMethodTitle")}
        </Text>

        <Partnerbanner width={100} height={48} spacing={10} justify="center" />
      </Layout>
    </div>
  );
};

export default Partners;

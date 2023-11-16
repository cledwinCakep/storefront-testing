import React from "react";

// components
import Text from "@/components/atoms/Text/Text";
import Layout from "@/components/atoms/Layout/Layout";
import Partnerbanner from "@/components/organisms/Partner/Partner";
import { useTranslations } from "next-intl";

const Partners = () => {
  const t = useTranslations("Homepage");
  return (
    <div className="h-full bg-gray-900" id="payment">
      <Layout className="flex flex-col items-center justify-center gap-12 py-10">
        <Text as="subHeading1" className="font-medium leading-[32px] text-center text-gray-100 ">
          {t("hero_paymentMethodTitle")}
        </Text>

        <Partnerbanner width={96} height={48} spacing={10} justify="center" />
      </Layout>
    </div>
  );
};

export default Partners;

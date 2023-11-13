import React from "react";
import Image from "next/image";
import { ArrowRight } from "react-feather";

// components
import Text from "@/components/atoms/Text/Text";
import Layout from "@/components/atoms/Layout/Layout";
import Button from "@/components/atoms/Button/Button";

//library
import { useTranslations } from "next-intl";

const Partners = () => {
  const t = useTranslations("Homepage");
  return (
    <Layout>
      <div className="mt-[80px] flex h-full w-full flex-col items-center justify-between gap-14 py-10 sm:py-0 lg:mt-0 lg:h-screen lg:flex-row bg-black">
        <div className="flex max-w-[580px] flex-col items-center justify-center gap-[40px] md:items-start bg-black">
          <Text
            as="h1"
            className="text-center text-[2.75rem] font-bold sm:text-start md:text-[56px] text-gray-100"
          >
            {t("hero_heroTitle")}
          </Text>
          <Text
            as="body1"
            className="text-center font-medium sm:text-start md:text-xl text-gray-300"
          >
            {t("hero_heroDesc")}
          </Text>
          <a href="#destination">
            <Button
              color="orange"
              size="lg"
              iconRight={<ArrowRight size={24} />}
              className="w-max sm:mr-auto h-12"
            >
              {t("hero_heroButton")}
            </Button>
          </a>
        </div>
        <Image
          src="/illustratio Hero eSIM.png"
          alt="Hero Illust"
          width={480}
          height={480}
          priority
        />
      </div>
    </Layout>
  );
};

export default Partners;

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
      <div className="mb-10 mt-[118px] flex h-full w-full flex-col items-center justify-between gap-14 sm:py-0 lg:mt-0 lg:h-screen lg:flex-row ">
        <div className="flex max-w-[600px] flex-col items-center justify-center lg:items-start ">
          <Text
            as="h1"
            className="mb-4 text-center text-[49px] font-bold leading-[53px] text-gray-100 md:text-[54px] md:leading-[72px] lg:text-start"
          >
            {t("hero_heroTitle")}
          </Text>
          <Text
            as="body1"
            className="font-regular mb-12 text-center leading-[24px] text-[#BDBDBD] sm:text-start md:text-lg"
          >
            {t("hero_heroDesc")}
          </Text>
          <a href="#destination">
            <Button
              color="orange"
              size="lg"
              iconRight={<ArrowRight size={24} />}
              className="h-12 w-max sm:mr-auto"
            >
              {t("hero_heroButton")}
            </Button>
          </a>
        </div>
        <Image
          className=""
          src="/esim_3d_superalink-min.png"
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

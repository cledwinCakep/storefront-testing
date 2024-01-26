import React from "react";

// atoms
import Layout from "@/components/atoms/Layout/Layout";
import Text from "@/components/atoms/Text/Text";
import Button from "@/components/atoms/Button/Button";

// icons
import Whatsapp from "@/components/icons/Whatsapp";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Email from "@/components/icons/Email";

const CallToAction = () => {
  const t = useTranslations("CTA");
  return (
    <div className="bg-lightgray w-full  border-t-[1px] border-[#222222] bg-cover bg-[right_-10rem_bottom] bg-no-repeat md:bg-bottom">
      <Layout className="flex flex-col items-center justify-between gap-10 py-10 md:flex-col">
        <Text
          as="h3"
          className="max-w-[628px] text-center font-bold text-gray-100 md:text-start"
        >
          {t("cta_ctaTitle")}
        </Text>
        <a
          href={
            "https://api.whatsapp.com/send?phone=821089850158&text=Hello,%20%20I%20want%20to%20buy%20eSIM%20for%20traveling!"
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button color="transparent" size="xs" iconLeft={<Email />}>
            {t("cta_ctaButton")}
          </Button>
        </a>
      </Layout>
    </div>
  );
};

export default CallToAction;

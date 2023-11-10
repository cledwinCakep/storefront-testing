import React from "react";

// atoms
import Layout from "@/components/atoms/Layout/Layout";
import Text from "@/components/atoms/Text/Text";
import Button from "@/components/atoms/Button/Button";

// icons
import Whatsapp from "@/components/icons/Whatsapp";
import { useTranslations } from "next-intl";
import Link from "next/link";

const CallToAction = () => {
  const t = useTranslations("CTA");
  return (
    <div
      className="bg-lightgray w-full  bg-cover bg-[right_-10rem_bottom] bg-no-repeat md:bg-bottom "
      style={{ backgroundImage: "url(/background-cta.png)" }}
    >
      <Layout className="flex flex-col items-center justify-between gap-10 py-20 md:flex-row">
        <Text
          as="h2"
          className="max-w-[628px] text-center font-bold text-white md:text-start"
        >
          {t("cta_ctaTitle")}
        </Text>
        <Link
          href={
            "https://api.whatsapp.com/send?phone=6282339909564&text=Hallo%20min%2C%20saya%20mau%20beli%20eSIM%20untuk%20traveling"
          }
        >
          <Button color="white" size="sm" iconLeft={<Whatsapp color="black" />}>
            {t("cta_ctaButton")}
          </Button>
        </Link>
      </Layout>
    </div>
  );
};

export default CallToAction;

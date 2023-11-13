"use client";
import React, { useEffect, useState } from "react";

// atoms
import Text from "@/components/atoms/Text/Text";
import Layout from "@/components/atoms/Layout/Layout";

// oganisms
import PriceInfoCards from "@/components/organisms/PriceInfoCards/PriceInfoCards";

//API
import { utilityApi } from "@/lib/api/GetApi";
import { useTranslations } from "next-intl";

const Partners = () => {
  const [data, setData] = useState<any>();
  const t = useTranslations("Homepage");
  useEffect(() => {
    const getData = async () => {
      const res = await utilityApi.getCountryList();
      setData(res.data);
    };

    getData();
  }, []);

  function capitalizeFirstLetter(word: string) {
    if (typeof word !== "string" || word.length === 0) {
      return word; // Return the input as-is if it's not a string or an empty string.
    }

    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  if (!data) {
    return;
  }
  return (
    <Layout id="destination">
      <div className="flex h-full flex-col items-center justify-center gap-10 py-20">
        <div className="flex flex-col gap-8">
          <Text as="h3" className="text-center font-bold sm:text-[2.75rem] text-gray-100">
            {t("hero_destinationTitle")}
          </Text>
          <Text as="body1" className="text-center text-gray-300">
            {t("hero_destinationDesc")}
          </Text>
        </div>

        <div className="flex w-full flex-col gap-6">
          <div className="flex w-full flex-col items-center justify-center gap-4 gap-y-4 md:flex-row">
            <PriceInfoCards
              data={[
                {
                  code: data[0].country_code,
                  image: `/${data[0].country_name.trim().toLowerCase()}.png`,
                  title: capitalizeFirstLetter(data[0].country_name.trim()),
                  price: data[0].idr_price.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  }),
                },
                {
                  code: data[1].country_code,
                  image: `/${data[1].country_name.trim().toLowerCase()}.png`,
                  title: capitalizeFirstLetter(data[1].country_name.trim()),
                  price: data[1].idr_price.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  }),
                },
                {
                  code: data[2].country_code,
                  image: `/${data[2].country_name.trim().toLowerCase()}.png`,
                  title: capitalizeFirstLetter(data[2].country_name.trim()),
                  price: data[2].idr_price.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  }),
                },
                {
                  code: data[3].country_code,
                  image: `/${data[3].country_name.trim().toLowerCase()}.png`,
                  title: capitalizeFirstLetter(data[3].country_name.trim()),
                  price: data[3].idr_price.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  }),
                },
                {
                  code: data[4].country_code,
                  image: `/${data[4].country_name.trim().toLowerCase()}.png`,
                  title: capitalizeFirstLetter(data[4].country_name.trim()),
                  price: data[4].idr_price.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  }),
                },
                {
                  code: data[5].country_code,
                  image: `/${data[5].country_name.trim().toLowerCase()}.png`,
                  title: capitalizeFirstLetter(data[5].country_name.trim()),
                  price: data[5].idr_price.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  }),
                },
              ]}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Partners;

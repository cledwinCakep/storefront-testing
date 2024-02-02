"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

// atoms
const Text = dynamic(() => import("@/components/atoms/Text/Text"));
const Layout = dynamic(() => import("@/components/atoms/Layout/Layout"));
const Tabs2 = dynamic(() => import("@/components/atoms/Tabs2/Tabs2"));

//API
import { utilityApi } from "@/lib/api/GetApi";
import { useTranslations } from "next-intl";
import { Loader, LoaderIcon } from "lucide-react";

const Partners = () => {
  const router = useRouter();
  // const url = window.location.href;

  const [data, setData] = useState<any>([]);
  const [searched, setSearched] = useState<any>([]);
  const ref = useRef<HTMLDivElement>(null);

  const t = useTranslations("Homepage");

  const scrollToLayout = () => {
    const layoutElement = document.getElementById("destination");
    if (layoutElement) {
      layoutElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSearch = async (e: any) => {
    const body = {
      name: e.target.value,
    };

    if (body.name !== "") {
      const res = await utilityApi.searchCountry(body);

      if (res.status >= 200 && res.data.length > 0) {
        setSearched(res.data);
      } else {
        setSearched([
          {
            code: "404",
            name: "Not items found.",
          },
        ]);
      }
    } else {
      setSearched([]);
    }
  };

  const handleClickCountry = (name: string) => () => {
    if (name !== "404") router.push(`/plans/${name}`);
  };

  useEffect(() => {
    const getData = async () => {
      const res = await utilityApi.getCountryList();

      setData(res.data);
    };

    getData();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setSearched([]);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
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
    <Layout id="destination" className="pt-[98px]">
      <div className="flex h-full flex-col items-center justify-center">
        <div className="mb-14 flex flex-col gap-8 px-4">
          <Text
            as="h2"
            className="text-center font-semibold text-gray-100 sm:text-[2.75rem]"
          >
            {t("hero_destinationTitle")}
          </Text>
          <Text as="body1" className="text-center text-[#BDBDBD]">
            {t("hero_destinationDesc")}
          </Text>
        </div>

        {/* search country */}
        <div className="relative mb-8 h-auto w-full rounded-lg bg-[#374151] px-5 py-2">
          <input
            className="min-w-full bg-transparent pl-8 text-white outline-none "
            placeholder={t("hero_search_destination")}
            onChange={handleSearch}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className="absolute top-2.5"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.33329 3.33341C5.57187 3.33341 3.33329 5.57199 3.33329 8.33342C3.33329 11.0948 5.57187 13.3334 8.33329 13.3334C11.0947 13.3334 13.3333 11.0948 13.3333 8.33342C13.3333 5.57199 11.0947 3.33341 8.33329 3.33341ZM1.66663 8.33342C1.66663 4.65152 4.65139 1.66675 8.33329 1.66675C12.0152 1.66675 15 4.65152 15 8.33342C15 9.87401 14.4774 11.2925 13.5998 12.4215L18.0892 16.9108C18.4147 17.2363 18.4147 17.7639 18.0892 18.0893C17.7638 18.4148 17.2361 18.4148 16.9107 18.0893L12.4213 13.6C11.2924 14.4775 9.87389 15.0001 8.33329 15.0001C4.65139 15.0001 1.66663 12.0153 1.66663 8.33342Z"
              fill="#9CA3AF"
            />
          </svg>

          <div
            className={`absolute left-0 top-full mt-1 w-full rounded-lg bg-[#374151] shadow-lg`}
          >
            {searched.map((dt: any, index: number) => {
              return (
                <p
                  key={index}
                  onClick={handleClickCountry(dt.code)}
                  className={`cursor-pointer px-4 py-2 text-base text-white hover:bg-slate-600 ${
                    index !== searched.length - 1
                      ? "rounded-none border-b border-[#52525B]"
                      : "rounded-b-md border-none"
                  }`}
                >
                  {dt.name}
                </p>
              );
            })}
          </div>
        </div>

        <div className="flex w-full flex-col gap-4">
          {/* put in here */}
          <Tabs2
            data={data.map(
              (item: {
                country_code: any;
                country_name: string;
                price_in_usd: {
                  toLocaleString: (
                    arg0: string,
                    arg1: { style: string; currency: string }
                  ) => any;
                };
              }) => ({
                code: item.country_code,
                image:
                  `/flag/${item.country_code.trim().toUpperCase()}.png` ||
                  "/default.png",
                title: capitalizeFirstLetter(item.country_name.trim()),
                price: item.price_in_usd.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                }),
              })
            )}
            onShowLessClicked={scrollToLayout}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Partners;

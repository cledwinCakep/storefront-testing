"use client";

import Image from "next/image";
import { useState, useEffect, useRef, Fragment } from "react";
import { ChevronRight } from "react-feather";
import { useModalStore } from "@/lib/stores/useModalStore";

// atoms
import Text from "@/components/atoms/Text/Text";
import Layout from "@/components/atoms/Layout/Layout";
import Tabs from "@/components/atoms/Tabs/Tabs";
import Divider from "@/components/atoms/Divider/Divider";
import Button from "@/components/atoms/Button/Button";

// molecules
import RadioPlan from "@/components/molecules/RadioPlan/RadioPlan";

// utils
import { usePlanContext } from "@/lib/context/plan";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import { useCallback } from "react";
import GlobeIcon from "@/components/atoms/SVG/GlobeIcon";

const PlanDetails = ({ params }: { params: { [x: string]: string } }) => {
  const {
    openSupportedCountry,
    globalCode,
    setOpenSupportedCountry,
    setGlobalCode,
  } = useModalStore();
  const {
    data,
    isLoading,
    parameter,
    handleOrder,
    order,
    subtotal,
    increaseButton,
    currentSelected,
    handleBuy,
    country,
    isError,
  } = usePlanContext();

  const t = useTranslations("PlanDetail");
  const router = location.pathname;
  const country_code = router.split("/")[2];

  const z: any = {
    WW_146: "Global 146 Countries",
    WW_54: "Global 54 Countries",
    KH: "Cambodia",
    US_CA: "United States/Canada",
    AE: "United Arab Emirates",
    QA: "Qatar",
    SA: "Saudi Arabia",
    IN: "India",
    MX: "Mexico",
    AR: "Argentina",
    BR: "Brazil",
    NP: "Nepal",
    ZA: "South Africa",
    AU: "Australia",
    GU: "Guam",
    AP: "13 Asian Countries",
    CN: "China",
    PH: "Philippines",
    US: "United States",
    MY: "Malaysia",
    SG: "Singapore",
    TH: "Thailand",
    JP: "Japan",
    TW: "Taiwan",
    MO: "Macau",
    GU_MP: "Guam/Saipan",
    DE: "Germany",
    FR: "France",
    ES: "Spain",
    GB: "United Kingdom",
    PT: "Portugal",
    IT: "Italy",
    IE: "Ireland",
    SE: "Sweden",
    DK: "Denmark",
    AT: "Austria",
    EU_42: "42 European Countries",
    EU_33: "33 European Countries",
    ID: "Indonesia",
    VN: "Vietnam",
    HK: "Hong Kong",
    HK_MO: "Hong Kong/Macau",
    MN: "Mongolia",
    KR: "Korea",
    CA: "Canada",
    AU_NZ: "Australia/New Zealand",
  };

  const globalCodes = [
    "WW_146",
    "WW_54",
    "AP",
    "EU_42",
    "EU_33",
    "US_CA",
    "GU_MP",
    "HK_MO",
    "AU_NZ",
  ];

  const i: any = {
    CN: "China",
    SG: "Singapore",
    MY: "Malaysia",
    TH: "Thailand",
    JP: "Japan",
    KR: "Korea",
  };

  const countryName = z[country_code];

  useEffect(() => {
    if (globalCodes.includes(country_code)) {
      setGlobalCode(country_code);
    }
  }, [globalCode, country_code]);

  const getPlanDataType = useCallback(() => {
    const planArr: any[][] = Object.values(data[parameter.plan] ?? []);

    const dataTypeArr = planArr.flatMap((type) =>
      type.map((type) => type.plan_type)
    );

    const capitalizeSetValue = (text: string) => {
      return (
        String(text).charAt(0).toUpperCase() +
        String(text).toLocaleLowerCase().substring(1)
      );
    };

    return Array.from(new Set(dataTypeArr), (value) => ({
      label: capitalizeSetValue(value),
      value: capitalizeSetValue(value),
    }));
  }, [data, parameter]);

  const getPlanDuration = useCallback(() => {
    const planArr: any = data[parameter.plan] ?? [];

    const result = planArr[parameter.data]
      ?.filter(
        (planDuration: any) =>
          planDuration.plan_type === parameter.dataType.toLocaleUpperCase()
      )
      .map((planDuration: any) => ({
        label: planDuration.duration_in_days + " Day(s)",
        value: planDuration.duration_in_days,
      }));

    return result ?? [];
  }, [data, parameter]);

  return (
    <div className="sm:relative">
      {countryName ? (
        <Image
          src={`/destination/${countryName
            .toLowerCase()
            .replace(/\//g, " ")}.png`}
          alt={countryName.toLowerCase()}
          width={600}
          height={280}
          className="max-h-[280px] sm:hidden"
          style={{
            objectFit: "cover",
          }}
          priority
        />
      ) : (
        <Image
          src={"/default_destination.png"}
          alt={"country.png"}
          width={600}
          height={280}
          className="max-h-[280px] sm:hidden"
          style={{
            objectFit: "cover",
          }}
          priority
        />
      )}
      <Layout className="space-y-8 border-b-[1px] border-gray-500 sm:grid sm:grid-cols-3 sm:gap-5 sm:space-y-0 md:grid-cols-4">
        <div className="relative hidden h-full w-full  border-gray-300 sm:col-span-2 sm:col-start-1 sm:block md:col-span-1 md:col-start-1 md:row-start-1 md:h-[430px] md:w-full">
          {countryName ? (
            <Image
              src={`/destination/${countryName
                .toLowerCase()
                .replace(/\//g, " ")}.png`}
              alt={countryName.toLowerCase()}
              priority
              fill
              style={{
                objectFit: "cover",
              }}
              className="rounded-3xl"
            />
          ) : (
            <Image
              src={"/default_destination.png"}
              alt={"country.png"}
              priority
              fill
              style={{
                objectFit: "cover",
              }}
              className="rounded-3xl"
            />
          )}
        </div>

        <div className="space-y-8 px-6 sm:col-span-2 sm:col-start-1 md:col-span-2 md:col-start-2 md:row-start-1">
          <div className="sm:mt-8 md:mt-0">
            <div className="flex w-full flex-col gap-2">
              <Text as="subHeading1" className="font-bold text-gray-100">
                {countryName ? countryName : ""} eSim Data Plan
              </Text>
              <Text as="small" className="font-medium text-gray-400">
                {t("planDetail_detailDesc")}
              </Text>
            </div>
            {globalCodes.includes(country_code) && (
              <button
                type="button"
                onClick={() => {
                  setOpenSupportedCountry(!openSupportedCountry);
                }}
                className="mt-5 inline-flex w-full items-center justify-start gap-2 rounded-lg bg-neutral-900 px-2 py-2 shadow sm:mt-6 sm:w-fit"
              >
                <div className="flex w-full items-center justify-between gap-2">
                  <div className="flex items-center justify-start gap-2">
                    <GlobeIcon className="h-6 w-6" />
                    <div className="inline-flex flex-col items-start justify-center gap-4">
                      <div className="self-stretch text-base font-normal leading-7 text-stone-50">
                        Supported country
                      </div>
                    </div>
                  </div>

                  <ChevronRight className="text-stone-50" />
                </div>
              </button>
            )}
          </div>

          {!isLoading && (
            <>
              <RadioPlan
                name="plan"
                title={t("planDetail_selectPlanTitle")}
                data={Object.keys(data).map((key) => ({
                  label:
                    key == "UNLIMITED" ? "Daily Unlimited Plan" : "Quota Plan",
                  value: key, // Generate a value based on the label
                }))}
              />

              <RadioPlan
                name="dataType"
                title="Select Type:"
                data={getPlanDataType()}
                // data={[{ label: "Roaming", value: "Roaming" }]}
              />
              <RadioPlan
                name="data"
                title={t("planDetail_selectDataTitle")}
                data={Object.keys(data[parameter.plan]).map((key, index) => ({
                  label: parameter.plan === "QUOTA" ? key : `${key}/day`,
                  value: key, // Generate a value based on the label
                }))}
              />
              <RadioPlan
                name="duration"
                title={t("planDetail_selectDurationTitle")}
                // data={Object.values(
                //   data[parameter.plan][parameter.data]
                //     ? data[parameter.plan][parameter.data]
                //     : data[parameter.plan]["15GB"]
                // ).map((key: any) => ({
                //   label: `${key["duration_in_days"]} Day(s)`,
                //   value: `${key["duration_in_days"]}`,
                // }))}
                data={getPlanDuration()}
              />
            </>
          )}
          <Tabs
            data={
              countryName
                ? countryName.toLowerCase() == "china"
                  ? [
                      {
                        label: t("planDetail_descriptionTitle"),
                        content: `${t("planDetail_descriptionCNOne")}${t(
                          "planDetail_descriptionCNTwo"
                        )}${t("planDetail_descriptionCNThree")}${t(
                          "planDetail_descriptionCNFour"
                        )}${t("planDetail_descriptionCNFive")}${t(
                          "planDetail_descriptionCNSix"
                        )}${t("planDetail_descriptionCNSeven")}`,
                      },
                      {
                        label: t("planDetail_howtouseTitle"),
                        content: `${t("planDetail_howtouseOne")}${t(
                          "planDetail_howtouseTwo"
                        )}${t("planDetail_howtouseThree")}${t(
                          "planDetail_howtouseFour"
                        )}${t("planDetail_howtouseFive")}${t(
                          "planDetail_howtouseSix"
                        )}${t("planDetail_howtouseSeven")}`,
                      },
                      {
                        label: t("planDetail_policyTitle"),
                        content: `${t("planDetail_policyOne")}${t(
                          "planDetail_policyTwo"
                        )}`,
                      },
                    ]
                  : [
                      {
                        label: t("planDetail_descriptionTitle"),
                        content: `${t("planDetail_descriptionOne")}${t(
                          "planDetail_descriptionTwo"
                        )}${t("planDetail_descriptionThree")}${t(
                          "planDetail_descriptionFour"
                        )}${t("planDetail_descriptionFive")}${t(
                          "planDetail_descriptionSix"
                        )}`,
                      },

                      {
                        label: t("planDetail_howtouseTitle"),
                        content: `${t("planDetail_howtouseOne")}${t(
                          "planDetail_howtouseTwo"
                        )}${t("planDetail_howtouseThree")}${t(
                          "planDetail_howtouseFour"
                        )}${t("planDetail_howtouseFive")}${t(
                          "planDetail_howtouseSix"
                        )}${t("planDetail_howtouseSeven")}`,
                      },
                      {
                        label: t("planDetail_policyTitle"),
                        content: `${t("planDetail_policyOne")}${t(
                          "planDetail_policyTwo"
                        )}`,
                      },
                    ]
                : [
                    {
                      label: t("planDetail_descriptionTitle"),
                      content: `${t("planDetail_descriptionOne")}${t(
                        "planDetail_descriptionTwo"
                      )}${t("planDetail_descriptionThree")}${t(
                        "planDetail_descriptionFour"
                      )}${t("planDetail_descriptionFive")}${t(
                        "planDetail_descriptionSix"
                      )}`,
                    },

                    {
                      label: t("planDetail_howtouseTitle"),
                      content: `${t("planDetail_howtouseOne")}${t(
                        "planDetail_howtouseTwo"
                      )}${t("planDetail_howtouseThree")}${t(
                        "planDetail_howtouseFour"
                      )}${t("planDetail_howtouseFive")}${t(
                        "planDetail_howtouseSix"
                      )}${t("planDetail_howtouseSeven")}`,
                    },
                    {
                      label: t("planDetail_policyTitle"),
                      content: `${t("planDetail_policyOne")}${t(
                        "planDetail_policyTwo"
                      )}`,
                    },
                  ]
            }
          />
        </div>

        <div className="sticky top-0 hidden h-full sm:col-start-3 sm:row-start-1 sm:block md:col-start-4   ">
          <div className="sticky top-2 w-full rounded-lg border-[1px] border-[#222] bg-[#121417] px-4 py-5">
            <div className="space-y-6">
              <Text as="subHeading2" className="font-bold text-[#F9F9F9]">
                {t("planDetail_orderInformation")}
              </Text>
              <Text as="small" className="font-medium text-[#9CA3AF]">
                {`${
                  currentSelected.plan.value === "UNLIMITED"
                    ? "Daily Unlimited Plan"
                    : "Quota Plan"
                } ${
                  currentSelected.data.id !== "-"
                    ? currentSelected.data.value
                    : ""
                } ${
                  currentSelected.duration.id !== "-"
                    ? currentSelected.duration.value + " " + "Days"
                    : ""
                }`}
              </Text>
            </div>

            <Divider />

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <button
                  className={`flex h-7 w-7 items-center rounded-lg font-bold ${
                    order <= 1 ? "bg-[#BDBDBD]" : "bg-[#FD9B62]"
                  } select-none text-black`}
                  disabled={order <= 1 ? true : false}
                  onClick={() => handleOrder("decrease")}
                >
                  <Text
                    as="body1"
                    className="flex h-full w-full flex-col justify-center"
                  >
                    -
                  </Text>
                </button>
                <Text
                  as="body1"
                  className="min-w-1 flex justify-center font-bold text-white"
                >
                  {order}
                </Text>
                <button
                  className={`flex h-7 w-7 items-center rounded-lg font-bold ${
                    increaseButton ? "bg-[#BDBDBD]" : "bg-[#FD9B62]"
                  } select-none text-black`}
                  disabled={increaseButton ? true : false}
                  onClick={() => handleOrder("increase")}
                >
                  <Text
                    as="body1"
                    className="flex h-full w-full flex-col justify-center"
                  >
                    +
                  </Text>
                </button>
              </div>

              <div className="flex w-full flex-col justify-between lg:flex-row lg:items-center">
                <Text as="body1" className="font-medium text-gray-500">
                  Subtotal
                </Text>
                <Text as="body1" className="text-xl font-black text-[#F9F9F9]">
                  {subtotal.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </Text>
              </div>
            </div>

            <Divider />

            <Button
              color="orange"
              className={`w-full ${
                order <= 0
                  ? "bg-orange-200 hover:border-0 hover:bg-orange-200 hover:text-slate-50"
                  : "bg-orange-500"
              }`}
              onClick={handleBuy}
            >
              {t("planDetail_buyButton")}
            </Button>
            {isError ? (
              !parameter.data || !parameter.duration || !parameter.dataType ? (
                <Text className="mt-2 text-red-500">
                  Please select {!parameter.dataType ? "type," : ""}{" "}
                  {!parameter.data ? "data," : ""} and{" "}
                  {!parameter.duration ? "duration" : ""}.
                </Text>
              ) : null
            ) : null}
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default PlanDetails;

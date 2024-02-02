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
import { useRouter, usePathname } from "next/navigation";
import { useCallback } from "react";
import GlobeIcon from "@/components/atoms/SVG/GlobeIcon";
import CardPlan from "@/components/molecules/CardPlan/CardPlan";
import { addParametersToUrl } from "@/lib/utils/addParamsToUrl";
import MobileCheckout from "@/components/organisms/MobileCheckout/MobileCheckout";
import { usePlanDetailsStore } from "@/lib/stores/usePlanDetailsStore";
import Tab from "@/components/molecules/Tab/Tab";

const PlanDetails = ({ params }: { params: { [x: string]: string } }) => {
  const [plan, setPlan] = useState("unlimited");
  const [type, setType] = useState("roaming");
  const [planData, setPlanData] = useState("limited");
  const [quota, setQuota] = useState("1GB");

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
    setCurrentSelect,
    handleBuy,
    country,
    isError,
    selectDataPlan,
  } = usePlanContext();

  const { planDescription } = usePlanDetailsStore();

  const t = useTranslations("PlanDetail");
  const router = usePathname();

  const parts = router.split("/");
  const country_code = parts.length > 3 ? parts[3] : parts[2];

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
  }, [country_code]);

  const lowerCaseSetValue = (text: string) => {
    return text.toLocaleLowerCase();
  };

  const capitalizeSetValue = (text: string | undefined = "") => {
    return (
      String(text).charAt(0).toUpperCase() +
      String(text).toLocaleLowerCase().substring(1)
    );
  };

  const getPlan = useCallback(() => {
    const plan: any = Object.keys(data);

    const planPayload = plan.filter(
      (plan: any) => Object.keys(data[plan]).length > 0
    );

    return planPayload.map((plan: any) => ({
      title: "plan",
      label: capitalizeSetValue(plan),
      value: lowerCaseSetValue(plan),
    }));
  }, [data]);

  const getType = useCallback(() => {
    const type = data[plan];

    if (type) {
      return Object.keys(type).map((type) => ({
        title: "type",
        label: capitalizeSetValue(type),
        value: lowerCaseSetValue(type),
      }));
    }
  }, [data, plan]);

  const getQuota = useCallback(() => {
    const quota = data[plan]?.[type];

    if (Object.keys(quota?.[planData] || []).length) {
      // window.history.replaceState(
      //   null,
      //   "",
      //   window.location.href + `&data=${Object.keys(quota?.[planData])[0]}`
      // );

      return Object.keys(quota?.[planData]).map((quota: any) => ({
        title: "quota",
        label: quota.toString().toUpperCase(),
        value: quota.toString().toUpperCase(),
      }));
    }
  }, [data, plan, type, planData]);

  const getPlanDuration = useCallback(() => {
    const duration = data[plan]?.[type]?.[planData]?.[quota];

    // if (duration) {
    //   window.history.replaceState(
    //     null,
    //     "",
    //     window.location.href + `&duration=${duration[0].duration_in_days}`
    //   );
    // }

    return duration?.map((duration: any) => ({
      title: "duration",
      label: `${duration.duration_in_days} Day(s)`,
      value: duration.duration_in_days,
    }));
  }, [data, plan, type, planData, quota]);

  useEffect(() => {
    const quota = data[plan]?.[type] ?? [];

    if (Object.keys(quota).length) {
      setPlanData(Object.keys(quota.limited).length ? "limited" : "unlimited");
    }
  }, [data, type, plan]);

  useEffect(() => {
    setCurrentSelect({
      ...currentSelected,
      data: {
        id: "-",
        value: "",
      },
      duration: {
        id: "-",
        value: "",
      },
      unlimitedPlanDuration: {
        id: "-",
        value: "",
        price: 0,
      },
      quota: {
        id: "-",
        value: "",
      },
    });

    selectDataPlan("plan", "");
    selectDataPlan("planData", "");
    selectDataPlan("duration", "");
    selectDataPlan("type", "");
    selectDataPlan("unlimitedPlanDuration", "");
  }, [currentSelected.type?.value]);

  return (
    <>
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
                className="rounded-lg"
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

          <div className="space-y-8 sm:col-span-2 sm:col-start-1 md:col-span-2 md:col-start-2 md:row-start-1 md:px-6">
            <div className="sm:mt-8 md:mt-0">
              <div className="flex w-full flex-col gap-2">
                <Text as="subHeading1" className="font-bold text-gray-100">
                  {countryName ? countryName : ""}{" "}
                  {planData === "unlimited" ? "UNLIMITED" : ""} eSim Data Plan
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

            {!isLoading ? (
              <>
                <RadioPlan
                  name="plan"
                  title={t("planDetail_selectPlanTitle")}
                  data={getPlan()}
                  setPlan={setPlan}
                  setType={setType}
                  setPlanData={setPlanData}
                  setQuota={setQuota}
                />

                <RadioPlan
                  name="type"
                  title={t("planDetail_selectPlanType")}
                  data={getType()}
                  setPlan={setPlan}
                  setType={setType}
                  setPlanData={setPlanData}
                  setQuota={setQuota}
                />

                {plan === "unlimited" && planData === "unlimited" && (
                  <>
                    <div>
                      <Text as="body1" className="mb-4 font-bold text-gray-100">
                        {t("planDetail_selectPlanUnlimitedPlan")}
                      </Text>

                      <CardPlan
                        data={
                          data?.unlimited?.roaming?.unlimited["0UNLIMITED"] ??
                          []
                        }
                      />
                    </div>
                  </>
                )}

                {plan === "quota" || planData === "limited" ? (
                  <>
                    <RadioPlan
                      name="quota"
                      title={t("planDetail_selectDataTitle")}
                      data={getQuota()}
                      setPlan={setPlan}
                      setType={setType}
                      setPlanData={setPlanData}
                      setQuota={setQuota}
                      isDisabled={currentSelected.type?.value ? false : true}
                    />

                    <RadioPlan
                      name="duration"
                      title={t("planDetail_selectDurationTitle")}
                      data={getPlanDuration()}
                      setPlan={setPlan}
                      setType={setType}
                      setPlanData={setPlanData}
                      setQuota={setQuota}
                      isDisabled={currentSelected.quota?.value ? false : true}
                    />
                  </>
                ) : null}
              </>
            ) : null}

            {/* <Tabs
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
                          content:
                            planData === "unlimited"
                              ? `${t("planDetailUnlimited_descriptionOne")}${t(
                                  "planDetailUnlimited_descriptionTwo"
                                )}${t(
                                  "planDetailUnlimited_descriptionThree"
                                )}${t("planDetailUnlimited_descriptionFour")}`
                              : `${t("planDetail_descriptionOne")}${t(
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
                        content:
                          planData === "unlimited"
                            ? `${t("planDetailUnlimited_descriptionOne")}${t(
                                "planDetailUnlimited_descriptionTwo"
                              )}${t("planDetailUnlimited_descriptionThree")}${t(
                                "planDetailUnlimited_descriptionFour"
                              )}`
                            : `${t("planDetail_descriptionOne")}${t(
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
            /> */}
            <Tab
              data={[
                {
                  label: t("planDetail_descriptionTitle"),
                  content: planDescription.description.Description,
                },
                {
                  label: t("planDetail_howtouseTitle"),
                  content: `${t("planDetail_howtouseOne")}${t(
                    "planDetail_howtouseTwo"
                  )}${t("planDetail_howtouseThree")}${t(
                    "planDetail_howtouseFour"
                  )}${t("planDetail_howtouseFive")}${t(
                    "planDetail_howtouseSix"
                  )}${t("planDetail_howtouseSeven")}
                
                `,
                },
                {
                  label: t("planDetail_policyTitle"),
                  content: `${planDescription.description.Policy}`,
                },
              ]}
            />
            
          </div>

          <div className="sticky top-0 hidden h-full sm:col-start-3 sm:row-start-1 sm:block md:col-start-4   ">
            <div className="sticky top-2 w-full rounded-lg border-[1px] border-[#222] bg-[#121417] px-4 py-5">
              <div className="space-y-6">
                <Text as="subHeading2" className="font-bold text-[#F9F9F9]">
                  {t("planDetail_orderInformation")}
                </Text>
                <Text as="body1" className="font-medium text-[#9CA3AF]">
                  {currentSelected.plan?.value === "unlimited"
                    ? "Unlimited Plan, "
                    : "Quota Plan, "}

                  {currentSelected.type?.value &&
                  currentSelected.type?.id !== "-"
                    ? capitalizeSetValue(currentSelected.type?.value) + ", "
                    : ""}

                  {currentSelected.unlimitedPlanDuration?.value &&
                  currentSelected.unlimitedPlanDuration?.id !== "-"
                    ? currentSelected.unlimitedPlanDuration?.value +
                      " " +
                      "Day(s)"
                    : ""}

                  {currentSelected.quota?.value &&
                  currentSelected.quota?.id !== "-"
                    ? currentSelected.quota?.value + ", "
                    : ""}

                  {currentSelected.duration?.value &&
                  currentSelected.duration?.id !== "-"
                    ? currentSelected.duration?.value + " " + "Days"
                    : ""}

                  {/* {type === "roaming" ? (
                  <>
                    {`${
                      currentSelected.plan?.value === "unlimited"
                        ? "Unlimited Plan, "
                        : "Quota Plan, "
                    }${
                      currentSelected.type?.id !== "-"
                        ? capitalizeSetValue(currentSelected.type?.value) + ", "
                        : ""
                    }
                  ${
                    currentSelected.unlimitedPlanDuration?.id !== "-"
                      ? currentSelected.unlimitedPlanDuration?.value +
                        " " +
                        "Day(s)"
                      : ""
                  }
                  `}
                  </>
                ) : (
                  <>
                    {`${
                      currentSelected.plan?.value === "unlimited"
                        ? "Unlimited Plan, "
                        : "Quota Plan, "
                    }${
                      currentSelected.type?.id !== "-"
                        ? capitalizeSetValue(currentSelected.type!.value) + ", "
                        : ""
                    }${
                      currentSelected.quota?.id !== "-"
                        ? currentSelected.quota?.value + ", "
                        : ""
                    }${
                      currentSelected.duration?.id !== "-"
                        ? currentSelected.duration?.value + " " + "Days"
                        : ""
                    }`}
                  </>
                )} */}
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
                  <Text
                    as="body1"
                    className="text-xl font-black text-[#F9F9F9]"
                  >
                    {subtotal?.toLocaleString("en-US", {
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
                  subtotal! <= 0
                    ? "bg-neutral-500 font-medium text-neutral-800 hover:border-0 hover:bg-neutral-500"
                    : "bg-orange-500 hover:bg-orange-800"
                }`}
                onClick={() => handleBuy({ planData })}
                disabled={subtotal! <= 0}
              >
                {t("planDetail_buyButton")}
              </Button>
              {isError ? (
                planData === "unlimited" ? (
                  !parameter.unlimitedPlanDuration ? (
                    <Text className="mt-2 text-red-500">
                      Please select data duration.
                    </Text>
                  ) : null
                ) : !parameter.type ||
                  !parameter.quota ||
                  !parameter.duration ? (
                  <Text className="mt-2 text-red-500">
                    Please select {!parameter.type ? "type," : ""}{" "}
                    {!parameter.quota ? "data," : ""} and{" "}
                    {!parameter.duration ? "duration" : ""}.
                  </Text>
                ) : null
              ) : null}
            </div>
          </div>
        </Layout>
      </div>
      <MobileCheckout planData={planData} />
    </>
  );
};

export default PlanDetails;

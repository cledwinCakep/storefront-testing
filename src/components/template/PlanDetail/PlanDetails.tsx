"use client";

import Image from "next/image";

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

const PlanDetails = ({ params }: { params: { [x: string]: string } }) => {
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
  } = usePlanContext();
  const t = useTranslations("PlanDetail");
  const router = location.pathname;
  const country_code = router.split("/")[2];

  const i: any = {
    CN: "China",
    SG: "Singapore",
    MY: "Malaysia",
    TH: "Thailand",
    JP: "Japan",
    KR: "Korea",
  };

  const countryName = i[country_code];

  return (
    <div className="sm:relative">
      {countryName ? (
        <Image
          src={`/${countryName}_plan.png`}
          alt={countryName}
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
          src={``}
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
              src={`/${countryName}_plan.png`}
              alt={countryName}
              priority
              fill
              style={{
                objectFit: "cover",
              }}
              className="rounded-3xl"
            />
          ) : (
            <Image
              src={``}
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
        </div>

        <div className="space-y-8 sm:col-span-2 sm:col-start-1 md:col-span-2 md:col-start-2 md:row-start-1">
          <div className="sm:mt-8 md:mt-0">
            <Text as="subHeading1" className="font-bold text-gray-100">
              {countryName ? countryName : ""} eSim Data Plan
            </Text>
            <Text as="small" className="font-medium text-gray-400">
              {t("planDetail_detailDesc")}
            </Text>
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
                name="data"
                title={t("planDetail_selectDataTitle")}
                data={Object.keys(data[parameter.plan]).map((key, index) => ({
                  label: `${key}/day`,
                  value: key, // Generate a value based on the label
                }))}
              />
              <RadioPlan
                name="duration"
                title={t("planDetail_selectDurationTitle")}
                data={Object.values(
                  data[parameter.plan][parameter.data]
                    ? data[parameter.plan][parameter.data]
                    : data[parameter.plan]["15GB"]
                ).map((key: any) => ({
                  label: `${key["duration_in_days"]} Day(s)`,
                  value: `${key["duration_in_days"]}`, // Generate a value based on the label
                }))}
              />
            </>
          )}
          <Tabs
            data={
              countryName
                ? countryName == "china"
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
          <div className="sticky top-2 w-full rounded-lg border-[1px] border-gray-300 bg-white px-4 py-5">
            <div className="space-y-6">
              <Text as="subHeading2" className="font-bold text-gray-900">
                {t("planDetail_orderInformation")}
              </Text>
              <Text as="small" className="font-medium text-gray-500">
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
              <div className="flex items-center gap-4">
                <button
                  className={`flex items-center rounded-lg px-3 py-1 font-bold ${
                    order <= 1 ? "bg-gray-300" : "bg-orange-500"
                  } text-white`}
                  disabled={order <= 1 ? true : false}
                  onClick={() => handleOrder("decrease")}
                >
                  <Text as="body1">-</Text>
                </button>
                <Text as="body1" className="flex w-1 justify-center font-bold">
                  {order}
                </Text>
                <button
                  className={`flex items-center rounded-lg px-3 py-1 font-bold ${
                    increaseButton ? "bg-gray-300" : "bg-orange-500"
                  } text-white`}
                  disabled={increaseButton ? true : false}
                  onClick={() => handleOrder("increase")}
                >
                  <Text as="body1">+</Text>
                </button>
              </div>

              <div className="flex w-full flex-col justify-between lg:flex-row lg:items-center">
                <Text as="body1" className="font-medium text-gray-500">
                  Subtotal
                </Text>
                <Text as="body1" className="text-xl font-black text-gray-900">
                  {subtotal.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
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
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default PlanDetails;

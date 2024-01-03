"use client";
import React from "react";
import { ArrowRight, X } from "react-feather";

// atoms
import Text from "@/components/atoms/Text/Text";

// icons
import {
  Phonecompatibility,
  Scan,
  Shoppingcart,
} from "@/components/icons/landingpage";

// molecules
import CardInfo from "@/components/molecules/CardInfo/CardInfo";
import { Dialog } from "@headlessui/react";
import Device from "@/components/atoms/Tabs/Device";
import { useTranslations } from "next-intl";

const Apple = [
  "iPhone 15 Pro & Pro Max",
  "iPhone 15 Plus",
  "iPhone 15",
  "iPhone 14 Pro & Pro Max",
  "iPhone 14 Plus",
  "iPhone 14",
  "iPhone 13 Pro & Pro Max",
  "iPhone 13 Mini",
  "iPhone 13",
  "iPhone 12 Pro & Pro Max",
  "iPhone 12 Mini",
  "iPhone 12",
  "iPhone 11 Pro & Pro Max",
  "iPhone 11",
  "iPhone XS & XS Max",
  "iPhone XR",
  "iPhone SE (2020 & 2022)",
  "iPad 7",
  "iPad Mini 5",
  "iPad Pro (11”)",
  "iPad Pro 2 (11”)",
  "iPad Air 3",
  "iPad Air 4",
];

const Samsung = [
  "Galaxy S 20",
  "Galaxy S 20+",
  "Galaxy S 20 Ultra",
  "Galaxy S 21 5G",
  "Galaxy S 21+ 5G",
  "Galaxy S 21 Ultra 5G",
  "Galaxy S 22 5G",
  "Galaxy S 22+ 5G",
  "Galaxy S 22 Ultra 5G",
  "Galaxy S 23 5G",
  "Galaxy S 23+ 5G",
  "Galaxy S 23 Ultra 5G",
  "Galaxy Note 20",
  "Galaxy Note 20 Ultra 5G",
  "Galaxy Z Flip",
  "Galaxy Z Flip 3 5G",
  "Galaxy Z Flip 4 5G",
  "Galaxy Z Fold",
  "Galaxy Z Fold 2 5G",
  "Galaxy Z Fold 3 5G",
  "Galaxy Z Fold 4 5G",
];

const Oppo = ["Oppo Find X5", "Oppo Find X5 Pro"];

const Huawei = ["Huawei P40", "Huawei P40 Pro", "Huawei Mate P40 Pro"];

// You can now use the `huaweiModels` array in your code.

// You can now use the `oppoModels` array in your code.

// You can now use the `samsungGalaxyModels` array in your code.

const Guide = () => {
  let [isOpen, setIsOpen] = React.useState(false);
  const t = useTranslations("CTA");
  const c = useTranslations("Compatibility");
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50 "
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center bg-black/30 p-4">
          <Dialog.Panel className=" w-full max-w-[780px]  rounded-md bg-white p-6">
            <div className="flex w-full flex-col gap-5">
              <div className="flex flex-row justify-between">
                <Text as="subHeading1" className="font-bold">
                  {c("compatibility_title")}
                </Text>
                <div
                  className=" h-8 w-8  hover:cursor-pointer"
                  onClick={closeModal}
                >
                  <X />
                </div>
              </div>
              <Device
                data={[
                  {
                    label: "Apple",
                    content: (
                      <div className="flex max-h-[340px] flex-col gap-3 overflow-auto">
                        <Text as="body1" className="font-bold">
                          {c("compatibility_subTitleApple")}
                        </Text>
                        <div className="flex flex-col overflow-auto">
                          {Apple.map((dt) => (
                            <div
                              key={dt}
                              className="border-b-[1px] border-gray-200 py-5"
                            >
                              <Text as="body1" className="font-medium">
                                {dt}
                              </Text>
                            </div>
                          ))}
                        </div>
                      </div>
                    ),
                  },
                  {
                    label: "Samsung",
                    content: (
                      <div className="flex max-h-[340px] flex-col gap-3 overflow-auto">
                        <Text as="body1" className="font-bold">
                          {c("compatibility_subTitleSamsung")}
                        </Text>
                        <div className="flex flex-col overflow-auto">
                          {Samsung.map((dt) => (
                            <div
                              key={dt}
                              className="border-b-[1px] border-gray-200 py-5"
                            >
                              <Text as="body1" className="font-medium">
                                {dt}
                              </Text>
                            </div>
                          ))}
                        </div>
                      </div>
                    ),
                  },
                  {
                    label: "Huawei",
                    content: (
                      <div className="flex max-h-[340px] flex-col gap-3 overflow-auto">
                        <Text as="body1" className="font-bold">
                          {c("compatibility_subTitleHuawei")}
                        </Text>
                        <div className="flex flex-col overflow-auto">
                          {Huawei.map((dt) => (
                            <div
                              key={dt}
                              className="border-b-[1px] border-gray-200 py-5"
                            >
                              <Text as="body1" className="font-medium">
                                {dt}
                              </Text>
                            </div>
                          ))}
                        </div>
                      </div>
                    ),
                  },
                  {
                    label: "Oppo",
                    content: (
                      <div className="flex max-h-[340px] flex-col gap-3 overflow-auto">
                        <Text as="body1" className="font-bold">
                          {c("compatibility_subTitleOppo")}
                        </Text>
                        <div className="flex flex-col overflow-auto">
                          {Oppo.map((dt) => (
                            <div
                              key={dt}
                              className="border-b-[1px] border-gray-200 py-5"
                            >
                              <Text as="body1" className="font-medium">
                                {dt}
                              </Text>
                            </div>
                          ))}
                        </div>
                      </div>
                    ),
                  },
                ]}
              />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
      <div
        id="how-it-works"
        className="bg-lightgray flex h-full w-full flex-col bg-cover bg-bottom bg-no-repeat px-4"
      >
        <div className="flex flex-col items-center justify-center gap-12 pb-14 pt-[98px]">
          <div className="gap-8 space-y-8">
            <Text
              as="h2"
              className="text-center text-[44px] font-bold text-gray-100"
            >
              {t("cta_howToUseTitle")}
            </Text>
            <Text
              as="body1"
              className="font-regular text-center text-[#BDBDBD]"
            >
              {t("cta_howToUseDesc")}
            </Text>
          </div>
          <div className="flex h-full flex-col items-center justify-center md:h-[483px] md:flex-row">
            <div className="flex max-w-[324px] flex-col items-center justify-center py-10">
              <CardInfo
                image={<Phonecompatibility />}
                title={t("cta_tutorTitleOne")}
                subtitle={t("cta_tutorDescOne")}
                additional={
                  <div
                    className="flex h-12 w-fit flex-row items-center justify-center gap-3 rounded-lg bg-orange-500  px-5 hover:cursor-pointer"
                    onClick={openModal}
                  >
                    <Text
                      as="body1"
                      className="flex h-12 items-center justify-center text-center text-slate-50"
                    >
                      {t("cta_checkCompabilityButton")}
                    </Text>
                    <ArrowRight size={24} className="text-slate-50" />
                  </div>
                }
              />
            </div>
            <div className="flex max-w-[324px] flex-col items-center justify-center py-10">
              <CardInfo
                image={<Shoppingcart />}
                title={t("cta_tutorTitleTwo")}
                subtitle={t("cta_tutorDescTwo")}
              />
            </div>
            <div className="flex max-w-[324px] flex-col items-center justify-center py-10">
              <CardInfo
                image={<Scan />}
                title={t("cta_tutorTitleThree")}
                subtitle={t("cta_tutorDescThree")}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Guide;

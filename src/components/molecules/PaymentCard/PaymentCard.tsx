import React from "react";

// components
import Text from "@/components/atoms/Text/Text";
import Button from "@/components/atoms/Button/Button";
import Partnerbanner from "@/components/organisms/Partner/Partner";
import { CheckmarkFailed, CheckmarkSucess } from "@/components/icons/Checkmark";
import { ArrowLeft } from "react-feather";
import Link from "next/link";
import { useTranslations } from "next-intl";

export const PaymentCardSuccess = () => {
  const t = useTranslations("Payment");
  return (
    <>
      <div className="max-w-[445px] rounded-md bg-white px-11 py-14">
        <div className="flex flex-col items-center justify-center gap-14">
          <div className=" flex w-max items-center justify-center rounded-md bg-zinc-100 p-3">
            <CheckmarkSucess />
          </div>
          <div className="flex flex-col gap-3">
            <Text as="subHeading1" className="text-center font-bold">
              {t("payment_paymentSuccessTitle")}
            </Text>
            <Text as="body1" className="text-center text-stone-500">
              {t("payment_paymentSuccessDesc")}
            </Text>
          </div>
          <Link href="/">
            <Button color="orange" size="sm" className="w-full">
              {t("payment_backHomeButton")}
            </Button>
          </Link>
          <div className="max-w-[300px]">
            <Text as="body1" className="text-center text-stone-500">
              {t("payment_detailsContactUs")}{" "}
              <Link
                href={
                  "https://api.whatsapp.com/send?phone=6282339909564&text=Hallo%20min%2C%20saya%20mau%20beli%20eSIM%20untuk%20traveling"
                }
              >
                <span className="font-bold text-blue-800 hover:cursor-pointer">
                  {t("payment_contactUs")}
                </span>
              </Link>
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export const PaymentCardFailed = () => {
  const t = useTranslations("Payment");
  return (
    <>
      <div className="max-w-[445px] rounded-md bg-white px-11 py-14">
        <div className="flex flex-col items-center justify-center gap-14">
          <div className=" flex w-max items-center justify-center rounded-md bg-zinc-100 p-3">
            <CheckmarkFailed />
          </div>
          <div className="flex flex-col gap-3">
            <Text as="subHeading1" className="text-center font-bold">
              {t("payment_paymentFailedTitle")}
            </Text>
            <Text as="body1" className="text-center text-stone-500">
              {t("payment_paymentFailedDesc")}
            </Text>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-6">
            <Link
              href={
                " https://api.whatsapp.com/send?phone=6282339909564&text=Hallo%20min%2C%20saya%20mau%20beli%20eSIM%20untuk%20traveling"
              }
            >
              <Button color="orange" size="sm" className="w-full">
                {t("payment_contactUs")}
              </Button>
            </Link>
            <Link href="/">
              <div className="flex flex-row gap-2">
                <ArrowLeft color="#3B82F6" />
                <Text
                  as="body1"
                  className="text-center font-bold text-blue-500"
                >
                  {t("payment_backHomeButton")}
                </Text>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

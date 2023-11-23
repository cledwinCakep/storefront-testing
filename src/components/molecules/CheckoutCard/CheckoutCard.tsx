import React, { ChangeEventHandler } from "react";

// components
import Text from "@/components/atoms/Text/Text";
import Button from "@/components/atoms/Button/Button";
import Partnerbanner from "@/components/organisms/Partner/Partner";
import { useTranslations } from "next-intl";

type CheckoutCardProps = {
  handlePayment: () => void;
  handleInputEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isEmpty: string;
  code: string | null;
};

const CheckoutCard = ({
  isEmpty,
  handlePayment,
  handleInputEmail,
  code,
}: CheckoutCardProps) => {
  const t = useTranslations("Checkout");
  return (
    <div className="flex w-full max-w-[380px] flex-col rounded-lg border border-gray-600 bg-[#121417] px-4 py-5">
      <input
        placeholder={t("checkout_email")}
        onChange={(e) => handleInputEmail(e)}
        className={`bg-black text-gray-100
          ${
            isEmpty
              ? "mb-4 rounded-lg border border-gray-500 px-3 py-2"
              : "mb-4 rounded-md border border-gray-400 px-3 py-2"
          }`}
      />
      {code && (
        <Text as="body2" className="mt-4 px-2 text-[#BDBDBD]">
          Affiliate Code: <span className="font-bold uppercase">{code}</span>
        </Text>
      )}
      {isEmpty && <div className="px-2 text-red-500">{isEmpty}</div>}
      <Text as="body2" className=" mt-4 px-2 text-[#BDBDBD]">
        {t("checkout_emailDesc")}
      </Text>
      <Button
        color="orange"
        size="sm"
        className="my-8 h-12 w-full"
        onClick={handlePayment}
      >
        {t("checkout_continueToPayment")}
      </Button>
      <Text as="small" className="mb-3 text-center text-gray-400">
        {t("checkout_checkoutSecurely")}
      </Text>
      <div className="max-w-[384px]">
        <Partnerbanner width={44} height={24} spacing={4} justify="center" />
      </div>
    </div>
  );
};

export default CheckoutCard;

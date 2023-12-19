// atoms
import Text from "@/components/atoms/Text/Text";
import Button from "@/components/atoms/Button/Button";
import { useTranslations } from "next-intl";
import { usePlanContext } from "@/lib/context/plan";

const MobileCheckout = () => {
  const {
    isError,
    data,
    isLoading,
    parameter,
    handleOrder,
    order,
    subtotal,
    increaseButton,
    currentSelected,
    handleBuy,
  } = usePlanContext();
  const t = useTranslations("PlanDetail");
  return (
    <div className="fixed bottom-0 left-0 right-0 z-10 bg-[#121417] px-4 pb-4 pt-4 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] sm:hidden">
      <div className="mb-4 flex items-end justify-between">
        <div>
          <Text as="subHeading2" className="font-black text-white">
            {subtotal.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </Text>
          <Text as="small" className="font-medium text-gray-500">
            {`${
              currentSelected.plan.value === "UNLIMITED"
                ? "Daily Unlimited Plan"
                : "Quota Plan"
            } ${
              currentSelected.data.id !== "-" ? currentSelected.data.value : ""
            } ${
              currentSelected.duration.id !== "-"
                ? currentSelected.duration.value + " " + "Days"
                : ""
            }`}
          </Text>
        </div>

        <div className="flex items-center gap-4">
          <button
            className={`flex items-center rounded-lg px-3 py-1 font-bold ${
              order <= 1 ? "bg-[#BDBDBD]" : "bg-[#FD9B62]"
            } select-none text-black`}
            disabled={order <= 1 ? true : false}
            onClick={() => handleOrder("decrease")}
          >
            <Text as="body1">-</Text>
          </button>
          <Text as="subHeading2" className="font-black text-white">
            {order}
          </Text>
          <button
            className={`flex items-center rounded-lg px-3 py-1 font-bold ${
              increaseButton ? "bg-[#BDBDBD]" : "bg-[#FD9B62]"
            } select-none text-black`}
            disabled={increaseButton ? true : false}
            onClick={() => handleOrder("increase")}
          >
            <Text as="body1">+</Text>
          </button>
        </div>
      </div>

      <Button
        color="orange"
        className={`h-12 w-full ${
          subtotal<=0
            ? "bg-orange-200 hover:border-0 hover:bg-orange-200 hover:text-slate-50"
            : "bg-orange-500"
        }`}
        disabled={subtotal<=0}
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
  );
};

export default MobileCheckout;

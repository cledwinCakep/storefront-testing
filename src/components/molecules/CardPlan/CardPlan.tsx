import { useEffect, useState } from "react";

import Text from "@/components/atoms/Text/Text";
import { usePlanContext } from "@/lib/context/plan";
import usePlanHook from "@/lib/hooks/usePlanHooks";

import { addParametersToUrl } from "@/lib/utils/addParamsToUrl";

const PLAN = [
  {
    UNLIMITED: {
      "0UNLIMITED": [
        {
          id: 627,
          country_code: "CN",
          plan_option: "UNLIMITED",
          data_amount: 0,
          data_unit: "UNLIMITED",
          duration_in_days: 1,
          option_id: "0CABDBD5-12B6-EE11-B65E-6045BD45CB1E",
          price_in_usd: 3.5,
          created_at: "2024-01-22T11:13:42.746048Z",
          updated_at: "2024-01-22T11:13:42.746048Z",
          plan_type: "ROAMING",
          supply_price: {
            Float64: 0,
            Valid: true,
          },
          country_name: "China",
        },
        {
          id: 628,
          country_code: "CN",
          plan_option: "UNLIMITED",
          data_amount: 0,
          data_unit: "UNLIMITED",
          duration_in_days: 2,
          option_id: "0DABDBD5-12B6-EE11-B65E-6045BD45CB1E",
          price_in_usd: 5.4,
          created_at: "2024-01-22T11:13:42.746048Z",
          updated_at: "2024-01-22T11:13:42.746048Z",
          plan_type: "ROAMING",
          supply_price: {
            Float64: 0,
            Valid: true,
          },
          country_name: "China",
        },
        {
          id: 629,
          country_code: "CN",
          plan_option: "UNLIMITED",
          data_amount: 0,
          data_unit: "UNLIMITED",
          duration_in_days: 3,
          option_id: "0EABDBD5-12B6-EE11-B65E-6045BD45CB1E",
          price_in_usd: 6.7,
          created_at: "2024-01-22T11:13:42.746048Z",
          updated_at: "2024-01-22T11:13:42.746048Z",
          plan_type: "ROAMING",
          supply_price: {
            Float64: 0,
            Valid: true,
          },
          country_name: "China",
        },
        {
          id: 630,
          country_code: "CN",
          plan_option: "UNLIMITED",
          data_amount: 0,
          data_unit: "UNLIMITED",
          duration_in_days: 4,
          option_id: "0FABDBD5-12B6-EE11-B65E-6045BD45CB1E",
          price_in_usd: 9.2,
          created_at: "2024-01-22T11:13:42.746048Z",
          updated_at: "2024-01-22T11:13:42.746048Z",
          plan_type: "ROAMING",
          supply_price: {
            Float64: 0,
            Valid: true,
          },
          country_name: "China",
        },
        {
          id: 631,
          country_code: "CN",
          plan_option: "UNLIMITED",
          data_amount: 0,
          data_unit: "UNLIMITED",
          duration_in_days: 5,
          option_id: "10ABDBD5-12B6-EE11-B65E-6045BD45CB1E",
          price_in_usd: 10.4,
          created_at: "2024-01-22T11:13:42.746048Z",
          updated_at: "2024-01-22T11:13:42.746048Z",
          plan_type: "ROAMING",
          supply_price: {
            Float64: 0,
            Valid: true,
          },
          country_name: "China",
        },
        {
          id: 632,
          country_code: "CN",
          plan_option: "UNLIMITED",
          data_amount: 0,
          data_unit: "UNLIMITED",
          duration_in_days: 7,
          option_id: "11ABDBD5-12B6-EE11-B65E-6045BD45CB1E",
          price_in_usd: 12.7,
          created_at: "2024-01-22T11:13:42.746048Z",
          updated_at: "2024-01-22T11:13:42.746048Z",
          plan_type: "ROAMING",
          supply_price: {
            Float64: 0,
            Valid: true,
          },
          country_name: "China",
        },
        {
          id: 633,
          country_code: "CN",
          plan_option: "UNLIMITED",
          data_amount: 0,
          data_unit: "UNLIMITED",
          duration_in_days: 10,
          option_id: "12ABDBD5-12B6-EE11-B65E-6045BD45CB1E",
          price_in_usd: 15.2,
          created_at: "2024-01-22T11:13:42.746048Z",
          updated_at: "2024-01-22T11:13:42.746048Z",
          plan_type: "ROAMING",
          supply_price: {
            Float64: 0,
            Valid: true,
          },
          country_name: "China",
        },
        {
          id: 634,
          country_code: "CN",
          plan_option: "UNLIMITED",
          data_amount: 0,
          data_unit: "UNLIMITED",
          duration_in_days: 12,
          option_id: "13ABDBD5-12B6-EE11-B65E-6045BD45CB1E",
          price_in_usd: 18.5,
          created_at: "2024-01-22T11:13:42.746048Z",
          updated_at: "2024-01-22T11:13:42.746048Z",
          plan_type: "ROAMING",
          supply_price: {
            Float64: 0,
            Valid: true,
          },
          country_name: "China",
        },
        {
          id: 635,
          country_code: "CN",
          plan_option: "UNLIMITED",
          data_amount: 0,
          data_unit: "UNLIMITED",
          duration_in_days: 15,
          option_id: "14ABDBD5-12B6-EE11-B65E-6045BD45CB1E",
          price_in_usd: 22.3,
          created_at: "2024-01-22T11:13:42.746048Z",
          updated_at: "2024-01-22T11:13:42.746048Z",
          plan_type: "ROAMING",
          supply_price: {
            Float64: 0,
            Valid: true,
          },
          country_name: "China",
        },
        {
          id: 636,
          country_code: "CN",
          plan_option: "UNLIMITED",
          data_amount: 0,
          data_unit: "UNLIMITED",
          duration_in_days: 20,
          option_id: "15ABDBD5-12B6-EE11-B65E-6045BD45CB1E",
          price_in_usd: 28.5,
          created_at: "2024-01-22T11:13:42.746048Z",
          updated_at: "2024-01-22T11:13:42.746048Z",
          plan_type: "ROAMING",
          supply_price: {
            Float64: 0,
            Valid: true,
          },
          country_name: "China",
        },
        {
          id: 637,
          country_code: "CN",
          plan_option: "UNLIMITED",
          data_amount: 0,
          data_unit: "UNLIMITED",
          duration_in_days: 30,
          option_id: "16ABDBD5-12B6-EE11-B65E-6045BD45CB1E",
          price_in_usd: 39.2,
          created_at: "2024-01-22T11:13:42.746048Z",
          updated_at: "2024-01-22T11:13:42.746048Z",
          plan_type: "ROAMING",
          supply_price: {
            Float64: 0,
            Valid: true,
          },
          country_name: "China",
        },
      ],
    },
  },
];

const CardPlan = (data: any) => {
  const [currentPlan, setCurrentPlan] = useState(0);
  const { selectDataPlan, currentSelected, setCurrentSelect } =
    usePlanContext();

  useEffect(() => {
    setCurrentPlan(data.data[0].id);
  }, []);

  const handleActivePlan = (id: number, duration: number, price: number) => {
    setCurrentPlan(id);

    const temp = {
      ...currentSelected,
      unlimitedPlanDuration: {
        id: String(id),
        value: String(duration),
        price,
      },
    };

    setCurrentSelect(temp);
  };

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
      {data.data.map(
        (arr: {
          id: number;
          duration_in_days: number;
          price_in_usd: number;
        }) => (
          <button
            key={arr.id}
            className={`cursor-pointer rounded-md border px-5 py-4 text-left ${
              currentPlan === arr.id
                ? "border-[#9A3412] bg-[#431407]"
                : "border-gray-500 bg-[#121417]"
            }`}
            onClick={() =>
              handleActivePlan(arr.id, arr.duration_in_days, arr.price_in_usd)
            }
          >
            <Text
              as="body1"
              className={`font-bold ${
                currentPlan === arr.id ? "text-orange-500" : "text-[#F9F9F9]"
              }`}
            >
              {arr.duration_in_days} Day
            </Text>
            <Text
              as="body2"
              className={`${
                currentPlan === arr.id ? "text-orange-600" : "text-[#BDBDBD]"
              }`}
            >
              Unlimited Data
            </Text>
          </button>
        )
      )}
    </div>
  );
};

export default CardPlan;

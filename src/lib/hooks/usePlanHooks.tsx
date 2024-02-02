import { useState, useEffect, useRef } from "react";

import { utilityApi } from "@/lib/api/GetApi";

import { currentSelectedProps } from "@/lib/context/plan";
import { useRouter } from "next/navigation";
import { usePlanDetailsStore } from "../stores/usePlanDetailsStore";

interface DataPlan {
  [planOption: string]: {
    [dataAmount: string]: any[];
  };
}

const usePlanHook = (params: { slug: string }) => {
  const [data, setData] = useState<any>([]);
  const [buy, setBuy] = useState<any>();
  const [increaseButton, setIncreaseButton] = useState<boolean>(true);
  const [rawData, setRawData] = useState<any>();
  const [rawDataDetails, setRawDataDetails] = useState<any>();
  const [country, setCountry] = useState<any>();
  const [subtotal, setSubtotal] = useState<number | undefined>(0);
  const [order, setOrder] = useState<number>(1);
  const [history, setHistory] = useState<any>([]);
  const pageOrigins = useRef<Array<string>>([]);
  const [parameter, setParameter] = useState({
    plan: "UNLIMITED",
    planData: "",
    duration: "",
    type: "",
    unlimitedPlanDuration: "",
  });
  const [isError, setIsError] = useState(false);
  const [isLoading, setLoading] = useState<boolean>(true);
  const dataPlan: DataPlan = {};
  const [currentSelected, setCurrentSelect] = useState<currentSelectedProps>({
    type: {
      id: "-",
      value: "",
    },
    plan: {
      id: "-",
      value: "",
    },
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
  const [plansId, setPlansId] = useState<any>(null);
  const { setPlanDescription } = usePlanDetailsStore();

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);

    const plan = urlSearchParams.get("plan") || "";
    const type = urlSearchParams.get("type") || "";

    // const data = urlSearchParams.get("data") || "";
    // const duration = urlSearchParams.get("duration") || "";
    // const type = urlSearchParams.get("type") || "";
    // setParameter({ plan, data, duration, type });

    // setCurrentSelect({
    //   plan: {
    //     id:
    //       plan == ""
    //         ? "-"
    //         : plan == "unlimited"
    //         ? "Daily Unlimited Plan"
    //         : "Quota Plan", // Set the id to "plan" or any other identifier you prefer
    //     value: plan,
    //   },
    //   type: {
    //     id: type == "" ? "" : type,
    //     value: type == "" ? "" : type,
    //   },
    //   // quota: {
    //   //   id: qouta == "" ? "" : type,
    //   //   value: quota == "" ? "" : type,
    //   // },
    //   //   data: {
    //   //     id: data == "" ? "-" : data, // Set the id to "data" or any other identifier you prefer
    //   //     value: data,
    //   //   },
    //   //   duration: {
    //   //     id: duration == "" ? "-" : duration + " Day(s)", // Set the id to "duration" or any other identifier you prefer
    //   //     value: duration,
    //   //   },
    // });
  }, []);

  useEffect(() => {
    const filterPlan = (plan: any) => {
      const obj: any = [];

      for (let i = 0; i < plan.length; i++) {
        const dataKey = plan[i].data_amount + plan[i].data_unit;

        if (!obj[dataKey]) {
          obj[dataKey] = [];
        }

        obj[dataKey].push(plan[i]);
      }

      return obj;
    };

    const getData = async () => {
      const res = await utilityApi.getProductListByCountry(params.slug[0]);

      setRawData(res.data);
      setCountry(res.data[0].country_name.String);

      // check if unlimited or quota
      const unlimitedPlan = res.data.filter(
        (plan: any) => plan.plan_option === "UNLIMITED"
      );

      // local plan
      const localPlan = unlimitedPlan.filter(
        (data: any) => data.plan_type !== "ROAMING"
      );

      const localUnlimited = localPlan.filter(
        (localPlan: any) => localPlan.data_unit === "UNLIMITED"
      );

      const localLimited = localPlan.filter(
        (localPlan: any) => localPlan.data_unit !== "UNLIMITED"
      );

      // roaming plan
      const roamingPlan = unlimitedPlan.filter(
        (data: any) => data.plan_type === "ROAMING"
      );

      const roamingUnlimited = roamingPlan.filter(
        (roamingPlan: any) => roamingPlan.data_unit === "UNLIMITED"
      );

      const roamingLimited = roamingPlan.filter(
        (roamingPlan: any) => roamingPlan.data_unit !== "UNLIMITED"
      );

      // quota
      const quotaPlan = res.data.filter(
        (plan: any) => plan.plan_option === "QUOTA"
      );

      // local plan
      const localQuotaPlan = quotaPlan.filter(
        (data: any) => data.plan_type !== "ROAMING"
      );

      const localQuotaUnlimited = localQuotaPlan.filter(
        (localQuotaPlan: any) => localQuotaPlan.data_unit === "UNLIMITED"
      );

      const localQuotaLimited = localQuotaPlan.filter(
        (localQuotaPlan: any) => localQuotaPlan.data_unit !== "UNLIMITED"
      );

      // roaming plan
      const roamingQuotaPlan = quotaPlan.filter(
        (data: any) => data.plan_type === "ROAMING"
      );

      const roamingQuotaUnlimited = roamingQuotaPlan.filter(
        (roamingQuotaPlan: any) => roamingQuotaPlan.data_unit === "UNLIMITED"
      );

      const roamingQuotaLimited = roamingQuotaPlan.filter(
        (roamingQuotaPlan: any) => roamingQuotaPlan.data_unit !== "UNLIMITED"
      );

      const payload = {
        unlimited: {
          ...(isNotEmpty(filterPlan(roamingLimited)) ||
          isNotEmpty(filterPlan(roamingUnlimited))
            ? {
                roaming: {
                  limited: { ...filterPlan(roamingLimited) },
                  unlimited: { ...filterPlan(roamingUnlimited) },
                },
              }
            : {}),
          ...(isNotEmpty(filterPlan(localLimited)) ||
          isNotEmpty(filterPlan(localUnlimited))
            ? {
                local: {
                  limited: { ...filterPlan(localLimited) },
                  unlimited: { ...filterPlan(localUnlimited) },
                },
              }
            : {}),
        },
        quota: {
          ...(isNotEmpty(filterPlan(roamingQuotaLimited)) ||
          isNotEmpty(filterPlan(roamingQuotaUnlimited))
            ? {
                roaming: {
                  limited: { ...filterPlan(roamingQuotaLimited) },
                  unlimited: { ...filterPlan(roamingQuotaUnlimited) },
                },
              }
            : {}),
          ...(isNotEmpty(filterPlan(localQuotaLimited)) ||
          isNotEmpty(filterPlan(localQuotaUnlimited))
            ? {
                local: {
                  limited: { ...filterPlan(localQuotaLimited) },
                  unlimited: { ...filterPlan(localQuotaUnlimited) },
                },
              }
            : {}),
        },
      };

      function isNotEmpty(obj: any) {
        return Object.keys(obj).length !== 0;
      }

      if (payload.unlimited) {
        setCurrentSelect({
          ...currentSelected,
          plan: {
            id: "plan",
            value: "unlimited",
          },
        });
      }

      setData(payload);
    };

    setLoading(false);

    getData();
  }, [params.slug]); // removing data plan resolves the infinite request issue, but the data is not updated on change

  useEffect(() => {
    const fetch = async () => {
      if (rawData) {
        const resDetail = await utilityApi.getProductListById(
          plansId == null ? rawData[0].id : plansId
        );
        setPlanDescription(resDetail.data);
      }
    };
    fetch();
  }, [plansId, rawData]);

  useEffect(() => {
    function findSubtotal() {
      if (rawData) {
        for (const person of rawData) {
          if (
            person["id"] === Number(currentSelected.unlimitedPlanDuration?.id)
          ) {
            const newBod = {
              country_code: person["country_code"],
              country_name: person["country_name"],
              created_at: person["created_at"],
              data_amount: person["data_amount"],
              data_unit: person["data_unit"],
              duration_in_days: person["duration_in_days"],
              id: person["id"],
              option_id: person["option_id"],
              plan_option: person["plan_option"],
              plan_type: currentSelected.type?.value,
              price_in_usd: person["price_in_usd"],
              updated_at: person["updated_at"],
            };
            setPlansId(person["id"]);
            setBuy(newBod);
            setSubtotal(
              order * Number(currentSelected.unlimitedPlanDuration?.price)
            );

            return;
          }

          if (
            person["plan_option"].toLowerCase() ==
              currentSelected["plan"]?.value &&
            person["data_amount"] ==
              currentSelected["quota"]?.value.substring(
                0,
                currentSelected["quota"].value.length - 2
              ) &&
            person["duration_in_days"] == currentSelected["duration"]?.value &&
            person["plan_type"].toLowerCase() == currentSelected["type"]?.value
          ) {
            const newBod = {
              country_code: person["country_code"],
              country_name: person["country_name"],
              created_at: person["created_at"],
              data_amount: person["data_amount"],
              data_unit: person["data_unit"],
              duration_in_days: person["duration_in_days"],
              id: person["id"],
              option_id: person["option_id"],
              plan_option: person["plan_option"],
              plan_type: currentSelected.type?.value,
              price_in_usd: person["price_in_usd"],
              updated_at: person["updated_at"],
            };
            setPlansId(person["id"]);
            setBuy(newBod);
            let temp = order * person["price_in_usd"];
            setSubtotal(temp);

            return;
          }
        }

        setSubtotal(0);
        return null;
      }
    }

    function handleButtonState() {
      for (let i in currentSelected) {
        if (
          currentSelected.duration?.value !== "" ||
          currentSelected.unlimitedPlanDuration?.value !== ""
        ) {
          setIncreaseButton(false);
        } else {
          setIncreaseButton(true);
        }
      }
    }

    findSubtotal();
    handleButtonState();
    // addParametersToUrl();
  }, [order, currentSelected, parameter, rawData, plansId]);

  // const handleButtonClick = (locale: string) => {
  //   let baseUrl;
  //   if (locale == "en") {
  //     baseUrl = `/en/${window.location.pathname.split("/")[2]}/${
  //       window.location.pathname.split("/")[3]
  //     }?${parameterUrl}`;
  //   } else {
  //     baseUrl = `/id/${window.location.pathname.split("/")[2]}/${
  //       window.location.pathname.split("/")[3]
  //     }?${parameterUrl}`;
  //   }
  //   router.push(baseUrl);
  // };

  function selectDataPlan(options: string, value: string) {
    let temp = { ...parameter };

    if (value == "unlimited") {
      temp = {
        plan: "UNLIMITED",
        planData: "",
        duration: "",
        type: "",
        unlimitedPlanDuration: "",
      };
      setSubtotal(0);
      setOrder(1);
      setCurrentSelect((prevState) => ({
        ...prevState,
        data: {
          id: "-",
          value: "",
        },
        duration: {
          id: "-",
          value: "",
        },
        type: {
          id: "-",
          value: "",
        },
      }));
    } else if (value == "quota") {
      temp = {
        plan: "QUOTA",
        planData: "",
        duration: "",
        type: "",
        unlimitedPlanDuration: "",
      };
      setSubtotal(0);
      setOrder(1);
      setCurrentSelect((prevState) => ({
        ...prevState,
        data: {
          id: "-",
          value: "",
        },
        duration: {
          id: "-",
          value: "",
        },
        type: {
          id: "-",
          value: "",
        },
      }));
    } else if (options === "subtotal") {
      setSubtotal(0);
    }

    temp = { ...temp, [options]: value };

    setParameter(temp);
  }

  function handleOrder(method: string) {
    let temp = order;
    if (method == "increase") {
      temp = temp + 1;
      setOrder(temp);
    } else {
      temp = temp - 1;
      setOrder(temp);
    }
  }

  function handleBuy({ planData }: { planData: string }) {
    if (order <= 0) {
      setIsError(true);
      return;
    }

    if (!parameter.type) return;

    if (planData === "unlimited") {
      if (!parameter.unlimitedPlanDuration) {
        setIsError(true);
        return;
      }
    }

    if (planData === "limited") {
      if (!parameter.plan || !parameter.duration) {
        setIsError(true);
        return;
      }
    }

    const jsonString = JSON.stringify(buy);

    // Save the JSON string to localStorage
    localStorage.setItem("buy", jsonString);
    localStorage.setItem("order", order.toString());
    window.location.href = "/checkout";
  }

  return {
    data,
    isLoading,
    selectDataPlan,
    parameter,
    currentSelected,
    setCurrentSelect,
    order,
    handleOrder,
    subtotal,
    increaseButton,
    handleBuy,
    country,
    isError,
    setSubtotal,
  };
};

export default usePlanHook;

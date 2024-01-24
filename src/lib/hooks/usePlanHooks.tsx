import { useState, useEffect, useRef } from "react";

import { utilityApi } from "@/lib/api/GetApi";

import { currentSelectedProps } from "@/lib/context/plan";
import { useRouter } from "next/navigation";

interface DataPlan {
  [planOption: string]: {
    [dataAmount: string]: number[];
  };
}

const usePlanHook = (params: { slug: string }) => {
  const [data, setData] = useState<any>([]);
  const [buy, setBuy] = useState<any>();
  const [increaseButton, setIncreaseButton] = useState<boolean>(true);
  const [rawData, setRawData] = useState<any>();
  const [country, setCountry] = useState<any>();
  const [subtotal, setSubtotal] = useState<number | undefined>(0);
  const [order, setOrder] = useState<number>(1);
  const [history, setHistory] = useState<any>([]);
  const pageOrigins = useRef<Array<string>>([]);
  const [parameter, setParameter] = useState({
    plan: "UNLIMITED",
    data: "",
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
      value: "-",
      price: 0,
    },
  });

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);

    const plan = urlSearchParams.get("plan") || "";
    const type = urlSearchParams.get("type") || "";

    // const data = urlSearchParams.get("data") || "";
    // const duration = urlSearchParams.get("duration") || "";
    // const type = urlSearchParams.get("type") || "";
    // setParameter({ plan, data, duration, type });

    setCurrentSelect({
      plan: {
        id:
          plan == ""
            ? "-"
            : plan == "UNLIMITED"
            ? "Daily Unlimited Plan"
            : "Quota Plan", // Set the id to "plan" or any other identifier you prefer
        value: plan,
      },
      type: {
        id: type == "" ? "" : type,
        value: type == "" ? "" : type,
      },
      //   data: {
      //     id: data == "" ? "-" : data, // Set the id to "data" or any other identifier you prefer
      //     value: data,
      //   },
      //   duration: {
      //     id: duration == "" ? "-" : duration + " Day(s)", // Set the id to "duration" or any other identifier you prefer
      //     value: duration,
      //   },
    });
  }, []);

  useEffect(() => {
    const getData = async () => {
      const res = await utilityApi.getProductListByCountry(params.slug[0]);
      setRawData(res.data);
      setCountry(res.data[0].country_name.String);
      res.data.forEach((dt: any) => {
        const dataKey = dt.data_amount + dt.data_unit;

        if (!dataPlan[dt.plan_option]) {
          dataPlan[dt.plan_option] = {};
        }

        if (!dataPlan[dt.plan_option][dataKey]) {
          dataPlan[dt.plan_option][dataKey] = [];
        }

        dataPlan[dt.plan_option][dataKey].push(dt);
      });

      setData(dataPlan);
      setLoading(false);
    };

    getData();
  }, [dataPlan, params.slug]); // removing data plan resolves the infinite request issue, but the data is not updated on change

  useEffect(() => {
    function findSubtotal() {
      if (currentSelected.type?.value === "roaming") {
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

              setBuy(newBod);
              setSubtotal(
                order * Number(currentSelected.unlimitedPlanDuration?.price)
              );
            }
          }
        }
      }

      if (currentSelected.type?.value === "local") {
        if (rawData) {
          for (const person of rawData) {
            if (
              person["plan_option"] == currentSelected["plan"]?.value &&
              person["data_amount"] ==
                currentSelected["data"]?.value.replace(/[^0-9]/g, "") &&
              person["duration_in_days"] == currentSelected["duration"]?.value
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

              setBuy(newBod);
              let temp = order * person["price_in_usd"];
              setSubtotal(temp);
            }
          }
          return null;
        }
      }
    }

    function handleButtonState() {
      for (let i in currentSelected) {
        if (currentSelected[i as keyof currentSelectedProps]?.value == "") {
          setIncreaseButton(true);
        } else {
          setIncreaseButton(false);
        }
      }
    }

    findSubtotal();
    handleButtonState();
    // addParametersToUrl();
  }, [order, currentSelected, parameter, rawData]);

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

    if (value == "UNLIMITED") {
      temp = {
        plan: "UNLIMITED",
        data: "",
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
    } else if (value == "QUOTA") {
      temp = {
        plan: "QUOTA",
        data: "",
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

  function handleBuy() {
    if (order <= 0) {
      setIsError(true);
      return;
    }

    if (!parameter.type) return;

    if (parameter.type === "roaming") {
      if (!parameter.unlimitedPlanDuration) {
        setIsError(true);
        return;
      }
    }

    if (parameter.type === "local") {
      if (!parameter.data || !parameter.duration) {
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

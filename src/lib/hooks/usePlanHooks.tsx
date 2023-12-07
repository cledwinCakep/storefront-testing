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
  const [subtotal, setSubtotal] = useState<number>(0);
  const [order, setOrder] = useState<number>(1);
  const [history, setHistory] = useState<any>([]);
  const pageOrigins = useRef<Array<string>>([]);
  const [parameter, setParameter] = useState({
    plan: "UNLIMITED",
    data: "",
    duration: "",
    dataType: "",
  });
  const [isError, setIsError] = useState(false);

  const [isLoading, setLoading] = useState<boolean>(true);
  const dataPlan: DataPlan = {};
  const [currentSelected, setCurrentSelect] = useState<currentSelectedProps>({
    dataType: {
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
  });

  useEffect(() => {
    // Parse the query parameters from the URL
    const urlSearchParams = new URLSearchParams(window.location.search);
    const plan = urlSearchParams.get("plan") || "";
    const data = urlSearchParams.get("data") || "";
    const duration = urlSearchParams.get("duration") || "";
    const dataType = urlSearchParams.get("dataType") || "";

    setParameter({ plan, data, duration, dataType });

    // Update the currentSelected state with the parsed parameters
    setCurrentSelect({
      dataType: {
        id: dataType == "" ? "" : dataType,
        value: dataType == "" ? "" : dataType,
      },
      plan: {
        id:
          plan == ""
            ? "-"
            : plan == "UNLIMITED"
            ? "Daily Unlimited Plan"
            : "Quota Plan", // Set the id to "plan" or any other identifier you prefer
        value: plan,
      },
      data: {
        id: data == "" ? "-" : data, // Set the id to "data" or any other identifier you prefer
        value: data,
      },
      duration: {
        id: duration == "" ? "-" : duration + " Day(s)", // Set the id to "duration" or any other identifier you prefer
        value: duration,
      },
    });
  }, []);

  useEffect(() => {
    const getData = async () => {
      const res = await utilityApi.getProductListByCountry(params.slug);
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
  }, []);

  useEffect(() => {
    function findSubtotal() {
      if (rawData) {
        for (const person of rawData) {
          if (
            person["plan_option"] == currentSelected["plan"].value &&
            person["data_amount"] ==
              currentSelected["data"].value.replace(/[^0-9]/g, "") &&
            person["duration_in_days"] == currentSelected["duration"].value
          ) {
            setBuy(person);
            let temp = order * person["price_in_usd"];
            setSubtotal(temp);
          }
        }
        return null;
      }
    }

    function handleButtonState() {
      for (let i in currentSelected) {
        if (currentSelected[i as keyof currentSelectedProps].value == "") {
          setIncreaseButton(true);
        } else {
          setIncreaseButton(false);
        }
      }
    }

    function addParametersToUrl() {
      // Get the current URL
      const baseUrl = window.location.origin + window.location.pathname;

      // Construct the query string from the parameters object
      const queryString = Object.keys(currentSelected)
        .map(
          (key: any) =>
            `${encodeURIComponent(key)}=${encodeURIComponent(
              currentSelected[key as keyof currentSelectedProps].value
            )}`
        )
        .join("&");

      // Check if the URL already has query parameters
      // Combine the host URL and query string
      const newUrl = queryString ? `${baseUrl}?${queryString}` : baseUrl;

      // Update the URL without triggering a page reload
      window.history.replaceState({ path: newUrl }, "", newUrl);
    }

    findSubtotal();
    handleButtonState();
    addParametersToUrl();
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
        dataType: "",
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
        dataType: {
          id: "-",
          value: "",
        },
      }));
    } else if (value == "QUOTA") {
      temp = {
        plan: "QUOTA",
        data: "",
        duration: "",
        dataType: "",
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
        dataType: {
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
    console.log({ order });
    console.log({ buy });
    console.log({ parameter });

    if (order <= 0) {
      setIsError(true);
      return;
    }

    if (!parameter.data || !parameter.dataType || !parameter.duration) {
      setIsError(true);
      return;
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
  };
};

export default usePlanHook;

"use client";
import React, { useEffect, useState } from "react";
import { payPalApi } from "@/lib/api/PayPalApi";
import { Dialog } from "@headlessui/react";
import { X } from "react-feather";

//Component
import Navbar from "@/components/organisms/Navbar/Navbar";
import CTA from "@/components/template/Landing/CTA";
import Layout from "@/components/atoms/Layout/Layout";
import Text from "@/components/atoms/Text/Text";
import Breadcrumb from "@/components/atoms/Breadcrumb/Breadcrumb";
import BreadcrumbItem from "@/components/atoms/Breadcrumb/BreadcrumbItem";
import Purchaseinfo from "@/components/molecules/PurchaseInfo/Purchaseinfo";
import CheckoutCard from "@/components/molecules/CheckoutCard/CheckoutCard";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

// utils
// import Itemcarrier from "@/components/icons/Itemcarrier";
import Button from "@/components/atoms/Button/Button";
import Box from "@/components/icons/Box";
// import { utilityApi } from "@/lib/api/GetApi";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
// import Divider from "@/components/atoms/Divider/Divider";
import {
  CreateOrderActions,
  CreateOrderData,
  OnApproveActions,
  OnApproveData,
} from "@paypal/paypal-js";
import { PayPalButtons } from "@paypal/react-paypal-js";

const i: any = {
  CN: "CN",
  SG: "SG",
  MY: "MY",
  TH: "TH",
  JP: "JP",
  KR: "KR",
};

export default function Checkout({ params }: { params: { locale: string } }) {
  const router = useRouter();
  const t = useTranslations("Checkout");
  // let [isOpen, setIsOpen] = React.useState(false);

  // function closeModal() {
  //   setIsOpen(false);
  // }

  // function openModal() {
  //   setIsOpen(true);
  // }

  const [retrievedData, setRetrievedData] = useState({
    country_code: "",
    country_name: "",
    created_at: "",
    data_amount: 0,
    data_unit: "",
    duration_in_days: 0,
    id: 0,
    price_in_usd: 0,
    option_id: "",
    plan_option: "",
    updated_at: "",
    plan_type: "",
  });
  const [subtotal, setSubtotal] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [order, setOrder] = useState<number>(1);
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState("");
  const [code, setCode] = useState<string>("");

  useEffect(() => {
    const code = localStorage.getItem("affiliate_code") ?? "";
    setCode(code);
    // Retrieve the JSON string from localStorage
    const storedData = localStorage.getItem("buy");
    let orderData = parseInt(localStorage.getItem("order")!);

    let parsedData;
    if (storedData) {
      // Parse the JSON string back to an object
      parsedData = JSON.parse(storedData);

      setRetrievedData(parsedData);
      setOrder(orderData);
      setSubtotal(orderData * parsedData["price_in_usd"]);
    }

    setIsLoading(false);
  }, []);

  const handlePayment = () => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    // if( emailRegex.test(email!)) return

    if (email.trim() == "") {
      setEmailError(t("checkout_errorEmailEmpty"));
      return;
    } else if (!emailRegex.test(email)) {
      setEmailError(t("checkout_errorEmailIncorrect"));
      return;
    }

    setIsOpen(true);
    // window.history.pushState({}, "Home", "/");
  };

  function handleInputEmail(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    setEmailError(""); // Clear the error message if the input is not empty
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
    setSubtotal(temp * retrievedData!["price_in_usd"]);
  }

  function handleDelete() {
    setRetrievedData({
      country_code: "",
      country_name: "",
      created_at: "",
      data_amount: 0,
      data_unit: "",
      duration_in_days: 0,
      id: 0,
      price_in_usd: 0,
      option_id: "",
      plan_option: "",
      updated_at: "",
      plan_type: "",
    });
  }

  const createOrder = (data: CreateOrderData, actions: CreateOrderActions) => {
    const id = retrievedData!["id"];

    return payPalApi.createOrder({
      esim_id: id,
      quantity: order,
      email: email,
      user_code: code,
    });
  };

  const onApprove = (data: OnApproveData, actions: OnApproveActions) => {
    return payPalApi.onApprove({
      orderId: data.orderID,
      actions,
    });
  };

  let [isOpen, setIsOpen] = React.useState(false);

  function capitalizeFirstLetter(inputString: string): string {
    return (
      inputString.charAt(0).toUpperCase() + inputString.slice(1).toLowerCase()
    );
  }

  return (
    <>
      <Dialog
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
        className="relative z-50 "
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center bg-black/30 p-4">
          <Dialog.Panel className="max-h-[600px] w-full max-w-[480px] rounded-md bg-white p-6">
            <div>
              <div className="mb-8 flex flex-row justify-between">
                <Text as="subHeading1" className="font-bold">
                  {/* {t("Checkout")} */}
                  Select Payment Method
                </Text>
                <div
                  className=" h-8 w-8  hover:cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  <X />
                </div>
              </div>

              <div className="max-h-[400px] overflow-y-auto">
                <PayPalButtons
                  createOrder={createOrder}
                  onApprove={onApprove}
                />
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>

      <Navbar params={params} />
      <div className="flex h-screen flex-col">
        <Layout className="mb-20 mt-20 flex h-fit w-full grow flex-col py-4 md:h-full">
          {retrievedData.data_amount > 0 ? (
            <Breadcrumb>
              <BreadcrumbItem isHome />

              <BreadcrumbItem href="/#destination">Destination</BreadcrumbItem>

              <BreadcrumbItem
                href={`/plans/${retrievedData.country_code}?plan=${retrievedData.plan_option}&data=${retrievedData.data_amount}${retrievedData.data_unit}&duration=${retrievedData.duration_in_days}`}
              >
                {retrievedData.country_name}
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentlyActive>Checkout</BreadcrumbItem>
            </Breadcrumb>
          ) : (
            <Breadcrumb>
              <BreadcrumbItem isHome />

              <BreadcrumbItem href="/#destination">Destination</BreadcrumbItem>

              <BreadcrumbItem isCurrentlyActive>Checkout</BreadcrumbItem>
            </Breadcrumb>
          )}
          <Text
            as="h1"
            className="mb-7 text-[26px] font-bold text-gray-100 sm:mb-14"
          >
            {t("checkout_checkoutTitle")}
          </Text>
          {!isLoading ? (
            retrievedData.data_amount > 0 ? (
              <div className="flex w-full flex-col items-center justify-center gap-10 md:flex-row md:items-start">
                <div className="flex w-full flex-col">
                  <Text as="subHeading2" className="font-bold text-gray-100">
                    {t("checkout_purchasedItems")}
                  </Text>
                  <Purchaseinfo
                    handleDelete={handleDelete}
                    order={order}
                    handleOrder={handleOrder}
                    image={`/destination/${retrievedData.country_name
                      .toLowerCase()
                      .replace(/\//g, " ")}.png`}
                    destination={`${retrievedData.country_name} eSim data plans`}
                    packages={`${
                      retrievedData!["plan_option"] == "UNLIMITED"
                        ? "Unlimited"
                        : "Quota"
                    },
                     ${capitalizeFirstLetter(retrievedData!["plan_type"])}
                    ,
                    ${
                      retrievedData!["data_amount"] +
                      retrievedData!["data_unit"]
                    }, ${retrievedData!["duration_in_days"]} Day`}
                    price={subtotal.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  />
                </div>
                <CheckoutCard
                  isEmpty={emailError}
                  handlePayment={handlePayment}
                  handleInputEmail={handleInputEmail}
                  code={code}
                />
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center">
                <Box />
                <Text as="body1" className="mb-3 mt-6 font-bold">
                  {t("checkout_orderEmptyTitle")}
                </Text>
                <Text as="body2" className="mb-8 text-center text-gray-500">
                  {t("checkout_orderEmptyDesc")}
                </Text>
                <Button
                  color="black"
                  size="sm"
                  className="my-8 w-full max-w-[290px]"
                  onClick={() => {
                    router.push("/");
                  }}
                >
                  {t("checkout_findPlanButton")}
                </Button>
              </div>
            )
          ) : (
            <ProgressBar
              height="4px"
              color="#f97316"
              options={{ showSpinner: true }}
              shallowRouting
            />
          )}
        </Layout>
        <div className="bottom-0 flex-none">
          <CTA />
        </div>
      </div>
    </>
  );
}

"use client";
import React, { useEffect, useState } from "react";

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
import Itemcarrier from "@/components/icons/Itemcarrier";
import Button from "@/components/atoms/Button/Button";
import Box from "@/components/icons/Box";
import { utilityApi } from "@/lib/api/GetApi";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

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

  const [retrievedData, setRetrievedData] = useState(null);
  const [subtotal, setSubtotal] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [order, setOrder] = useState<number>(1);
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState("");
  useEffect(() => {
    // Retrieve the JSON string from localStorage
    const storedData = localStorage.getItem("buy");
    let orderData = parseInt(localStorage.getItem("order")!);

    let parsedData;
    if (storedData) {
      // Parse the JSON string back to an object
      parsedData = JSON.parse(storedData);

      setRetrievedData(parsedData);
      setOrder(orderData);
      setSubtotal(orderData * parsedData["idr_price"]);
    }

    setIsLoading(false);
  }, []);

  const handlePayment = () => {
    const id = retrievedData!["id"];
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    // if( emailRegex.test(email!)) return

    if (email.trim() == "") {
      setEmailError(t("checkout_errorEmailEmpty"));
      return;
    } else if (!emailRegex.test(email)) {
      setEmailError(t("checkout_errorEmailIncorrect"));
      return;
    }

    if (email) {
      let body = {
        esim_id: id,
        quantity: order,
        email: email,
      };
      utilityApi.postBuyesim(body).then((response) => {
        // Handle the response here
        // Remove "buy" item from localStorage
        localStorage.removeItem("buy");

        // Remove "order" item from localStorage
        localStorage.removeItem("order");

        window.location.href = response.data.invoice_url;
      });
    }
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
    setSubtotal(temp * retrievedData!["idr_price"]);
  }

  function handleDelete() {
    setRetrievedData(null);
  }
  return (
    <>
      {/* <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50 "
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center bg-black/30 p-4">
          <Dialog.Panel className="w-full max-w-[530px] rounded bg-white p-8">
            <div className="flex flex-col gap-8">
              <div className="flex h-full w-full flex-row gap-4">
                <div className="h-[90px] w-[90px]">
                  <Itemcarrier />
                </div>
                <div className="flex max-w-[360px] flex-col gap-6">
                  <Text as="subHeading2" className="font-bold">
                    Oops! Out of stocks
                  </Text>

                  <Text as="body2">
                    {`We're sorry, but it appears that the plan eSIM you are looking for
                is currently out of stock.`}
                  </Text>
                </div>
              </div>
              <div className="flex flex-row items-center justify-end gap-8">
                <Text as="body2" className="md:text- text-blue-500">
                  Back to home
                </Text>
                <Button
                  color="black"
                  size="sm"
                  className="h-full w-[240px] md:max-h-[42px]"
                >
                  Find other plan
                </Button>
              </div>
            </div>
          </Dialog.Panel> 
        </div>
      </Dialog>*/}
      <Navbar params={params} />
      <Layout className="mb-20 mt-[160px] flex h-full flex-col">
        <Breadcrumb>
          <BreadcrumbItem isHome />

          <BreadcrumbItem href="/#destination">Destination</BreadcrumbItem>

          <BreadcrumbItem isCurrentlyActive>Checkout</BreadcrumbItem>
        </Breadcrumb>

        <Text
          as="h1"
          className="mb-10 mt-7 text-center text-[36px] font-bold sm:mb-14 "
        >
          {t("checkout_checkoutTitle")}
        </Text>
        {!isLoading ? (
          retrievedData ? (
            <div className="flex w-full flex-col items-center justify-center gap-5 md:flex-row md:items-start">
              <div className="flex w-full flex-col">
                <Text as="subHeading2" className="font-bold">
                  {t("checkout_purchasedItems")}
                </Text>
                <Purchaseinfo
                  handleDelete={handleDelete}
                  order={order}
                  handleOrder={handleOrder}
                  image="/purchased-placeholder.png"
                  destination={`${retrievedData["country_name"]["String"]} eSim data plans`}
                  packages={`${
                    retrievedData!["plan_option"] == "UNLIMITED"
                      ? "Daily Unlimited"
                      : "Quota"
                  }, ${
                    retrievedData!["data_amount"] + retrievedData!["data_unit"]
                  } , ${retrievedData!["duration_in_days"]} Day`}
                  price={subtotal.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}
                />
              </div>
              <CheckoutCard
                isEmpty={emailError}
                handlePayment={handlePayment}
                handleInputEmail={handleInputEmail}
              />
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center">
              <Box />
              <Text as="body1" className="mb-3 mt-6 font-bold">
                {t("checkout_orderEmptyTitle")}
              </Text>
              <Text as="body2" className="mb-8 text-center text-stone-500">
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
      <CTA />
    </>
  );
}

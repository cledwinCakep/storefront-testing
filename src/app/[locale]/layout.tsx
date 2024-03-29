"use client";

import { NextIntlClientProvider } from "next-intl";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import en from "@/messages/en.json";
import id from "@/messages/id.json";
import ko from "@/messages/ko.json";
import "./globals.css";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import Smartlook from "smartlook-client";
import GoogleAnalytics from "../../../GoogleAnalytics";

export const dynamic = "force-dynamic";

let cache: { [key: string]: typeof en | typeof ko } = {};

// export async function generateStaticParams() {
//   return ["id", "en"].map((locale) => ({ locale }));
// }

const dictionaries: {
  [key: string]: typeof en | typeof ko;
} = {
  ko,
  en,
};

function getMessages(locale: string) {
  if (cache[locale]) {
    return cache[locale];
  }

  try {
    const messages = dictionaries[locale];
    if (messages) {
      cache[locale] = messages;
      return messages;
    } else {
      redirect("/"); // Return an empty object or handle the missing locale as needed.
    }
  } catch (error) {
    redirect("/"); // Return an empty object or handle the error as needed.
  }
}

export default function RootLayout({
  children,
  params,
}: {
  children?: React.ReactNode;
  params: { locale: string };
}) {
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      Smartlook.init(process.env.NEXT_PUBLIC_SMARTLOOK!);
    }
  }, []);

  const [messages, setMessages] = useState(getMessages(params.locale));

  return (
    <html lang={params.locale} className="scroll-smooth">
      <head>
        <title>Superalink – Local eSIM for Traveler</title>
        <meta
          name="description"
          content="Data packs with local rates. Buy affordable eSIM packages in Superalink."
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/RY2Gz3H/Base-Thumbnail.jpg"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </head>

      <body className="bg-black">
        {process.env.NODE_ENV === "production" && (
          <GoogleAnalytics keys={process.env.NEXT_PUBLIC_GA} />
        )}
        <PayPalScriptProvider
          options={{
            // disableFunding: ["credit", "card"],
            currency: "USD",
            clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID!,
          }}
        >
          <NextIntlClientProvider locale={"en"} messages={messages}>
            {children}
          </NextIntlClientProvider>
        </PayPalScriptProvider>
        <ProgressBar
          height="4px"
          color="#f97316"
          options={{ showSpinner: false }}
          shallowRouting
        />
      </body>
    </html>
  );
}

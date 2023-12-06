"use client";

import { NextIntlClientProvider } from "next-intl";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import en from "@/messages/en.json";
import id from "@/messages/id.json";
import "./globals.css";
import { redirect } from "next/navigation";
import { useState } from "react";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

export const dynamic = "force-dynamic";

export async function generateStaticParams() {
  return ["en"].map((locale) => ({ locale }));
}

const dictionaries: {
  [key: string]: typeof en;
} = {
  en,
};

function getMessages(locale: string) {
  try {
    const messages = dictionaries[locale];
    if (messages) {
      return messages;
    } else {
      console.log(`Locale '${locale}' not found in dictionaries.`);
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
  const [messages, setMessages] = useState(getMessages(params.locale));
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>Superalink – Local eSIM for Traveler</title>
        <meta
          name="description"
          content="Data packs with local rates. Buy the affordable eSIM package in Superalink."
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
        <link rel="manifest" href="/site.webmanifest" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,400&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="bg-black">
        {/* <GoogleAnalytics keys={process.env.NEXT_PUBLIC_GOOGLE_ID} /> */}
        <PayPalScriptProvider
          options={{
            // disableFunding: ["credit", "card"],
            currency: "USD",
            clientId:
              "AWxV0e0JdVy-elqSzzmza_PuRd3A6lqKztayVoVORTGfkjsiGvmXFYptYFaJeTLAtYKb-uy8xieyerKs",
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

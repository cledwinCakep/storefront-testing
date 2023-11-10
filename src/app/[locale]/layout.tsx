"use client";

import { NextIntlClientProvider } from "next-intl";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import en from "@/messages/en.json";
import id from "@/messages/id.json";
import "./globals.css";
import { redirect } from "next/navigation";
import { useState } from "react";
import GoogleAnalytics from "../../../GoogleAnalytics";
import Smartlook from "smartlook-client";
import { pageview } from "../../../gtag";

export const dynamic = "force-dynamic";

export async function generateStaticParams() {
  return ["en", "id"].map((locale) => ({ locale }));
}

const dictionaries: {
  [key: string]: typeof en | typeof id;
} = {
  en,
  id,
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
  Smartlook.init(process.env.NEXT_PUBLIC_SMARTLOOK!);

  const [messages, setMessages] = useState(getMessages(params.locale));
  return (
    <html lang="en" className="scroll-smooth">
      <head>
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

      <body>
        <GoogleAnalytics keys={process.env.NEXT_PUBLIC_GOOGLE_ID} />
        <NextIntlClientProvider locale={params.locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
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

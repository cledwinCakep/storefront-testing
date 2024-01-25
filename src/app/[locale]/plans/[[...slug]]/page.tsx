"use client";
import React from "react";

// atoms
import Layout from "@/components/atoms/Layout/Layout";
import Breadcrumb from "@/components/atoms/Breadcrumb/Breadcrumb";
import BreadcrumbItem from "@/components/atoms/Breadcrumb/BreadcrumbItem";

// organisms
import Navbar from "@/components/organisms/Navbar/Navbar";
import Footer from "@/components/organisms/Footer/Footer";
import CallToAction from "@/components/organisms/CallToAction/CallToAction";
import Guide from "@/components/organisms/Guide/Guide";
import MobileCheckout from "@/components/organisms/MobileCheckout/MobileCheckout";

// templates
import PlanDetails from "@/components/template/PlanDetail/PlanDetails";

// utils
import { capitalizeSentences } from "@/lib/utils/capitalize";
import { PlanContext } from "@/lib/context/plan";
import usePlanHook from "@/lib/hooks/usePlanHooks";
import { useTranslations } from "next-intl";

const PlanDetail = ({ params }: { params: any }) => {
  const planHook = usePlanHook(params);
  const t = useTranslations("PlanDetail");

  const z: any = {
    WW_146: "Global 146 Countries",
    WW_54: "Global 54 Countries",
    KH: "Cambodia",
    US_CA: "United States/Canada",
    AE: "United Arab Emirates",
    QA: "Qatar",
    SA: "Saudi Arabia",
    IN: "India",
    MX: "Mexico",
    AR: "Argentina",
    BR: "Brazil",
    NP: "Nepal",
    ZA: "South Africa",
    AU: "Australia",
    GU: "Guam",
    AP: "13 Asian Countries",
    CN: "China",
    PH: "Philippines",
    US: "United States",
    MY: "Malaysia",
    SG: "Singapore",
    TH: "Thailand",
    JP: "Japan",
    TW: "Taiwan",
    MO: "Macau",
    GU_MP: "Guam/Saipan",
    DE: "Germany",
    FR: "France",
    ES: "Spain",
    GB: "United Kingdom",
    PT: "Portugal",
    IT: "Italy",
    IE: "Ireland",
    SE: "Sweden",
    DK: "Denmark",
    AT: "Austria",
    EU_42: "42 European Countries",
    EU_33: "33 European Countries",
    ID: "Indonesia",
    VN: "Vietnam",
    HK: "Hong Kong",
    HK_MO: "Hong Kong/Macau",
    MN: "Mongolia",
    KR: "Korea",
    CA: "Canada",
    AU_NZ: "Australia/New Zealand",
  };

  const countryName = z[params.slug];

  return (
    <PlanContext.Provider value={planHook}>
      <div className="relative space-y-6 pb-[139px] sm:pb-0 ">
        <Navbar params={params} />
        <div className="pt-3 sm:pt-[54px]">
          <Layout>
            <Breadcrumb>
              <BreadcrumbItem isHome />

              <BreadcrumbItem href="/#destination">
                {t("planDetail_destination")}
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentlyActive>
                {capitalizeSentences(countryName)}
              </BreadcrumbItem>
            </Breadcrumb>
          </Layout>
          <PlanDetails params={params} />
          {/* <MobileCheckout /> */}

          <div>
            <Guide />
            <CallToAction />
            <Footer />
          </div>
        </div>
      </div>
    </PlanContext.Provider>
  );
};

export default PlanDetail;

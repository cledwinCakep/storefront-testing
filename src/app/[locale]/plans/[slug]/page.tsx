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

  return (
    <PlanContext.Provider value={planHook}>
      <div className="relative space-y-6 pb-[139px] sm:pb-0 ">
        <Navbar params={params} />
        <div className="pt-[54px]">
          <Layout>
            <Breadcrumb>
              <BreadcrumbItem isHome />

              <BreadcrumbItem href="/#destination">
                {t("planDetail_destination")}
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentlyActive>
                {capitalizeSentences(params.slug)}
              </BreadcrumbItem>
            </Breadcrumb>
          </Layout>
          <PlanDetails params={params} />
          <MobileCheckout />

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

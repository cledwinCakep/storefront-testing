import React from "react";

// organisms
import CallToAction from "@/components/organisms/CallToAction/CallToAction";
import Footer from "@/components/organisms/Footer/Footer";

interface CTAprops {
  CtaSection?: boolean;
}

const CTA = ({ CtaSection = true }: CTAprops) => {
  return (
    <div className="h-full">
      {CtaSection && <CallToAction />}
      <Footer />
    </div>
  );
};

export default CTA;

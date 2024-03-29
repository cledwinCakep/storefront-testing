import React from "react";
import Image from "next/image";

interface PartnerBannerData {
  width: number;
  height: number;
  spacing: number;
  justify: string;
}

const Partnerbanner = ({
  width,
  height,
  spacing,
  justify,
}: PartnerBannerData) => {
  const partnerBank = ["mastercard", "paypal", "visa"];
  return (
    <>
      <div
        className={`hidden flex-row flex-wrap items-center md:flex justify-${justify} gap-${spacing}`}
      >
        {partnerBank.map((dt, index) => (
          <Image
            key={index}
            src={`/${dt}.png`}
            alt={`${dt} icon`}
            width={width}
            height={height}
            priority
          />
        ))}
      </div>

      <div className="relative flex w-full md:hidden">
        <Image
          src="/partner-logo-container.png"
          alt="partner bank image"
          width={398}
          height={192}
          style={{ width: "100%", objectFit: "cover" }}
          priority
        />
      </div>
    </>
  );
};

export default Partnerbanner;

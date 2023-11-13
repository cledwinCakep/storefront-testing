import React, { useState } from "react";
import Image from "next/image";

// components
import Text from "@/components/atoms/Text/Text";
import { Trash } from "@/components/icons/Trash";
import { Minus } from "@/components/icons/Minus";
import { Plus } from "@/components/icons/Plus";

// interfaces
interface PurchaseInfoProps {
  image: string;
  destination: string;
  packages: string;
  price: string;
  order: number;
  handleOrder: (type: string) => void;
  handleDelete: () => void;
}

const Purchaseinfo = ({
  image,
  destination,
  packages,
  price,
  order,
  handleOrder,
  handleDelete,
}: PurchaseInfoProps) => {
  return (
    <div className="mt-8 flex flex-col border-b px-1 pb-6">
      <div className="mb-4 flex flex-row gap-3">
        <Image
          src={image}
          alt="Purchased items plaeholder"
          width={100}
          height={100}
          style={{ objectFit: "contain", maxHeight: "100px" }}
          priority
        />
        <div className="flex flex-col">
          <Text as="body2" className="text-gray-500">
            {destination}
          </Text>
          <Text
            as="body1"
            className="mb-6 mt-3 font-medium sm:text-xl sm:leading-none"
          >
            {packages}
          </Text>
          <Text as="body1" className="font-bold sm:text-xl">
            {price}
          </Text>
        </div>
      </div>
      <div className="flex flex-row self-end">
        <div onClick={handleDelete}>
          <Trash />
        </div>

        <span className="mx-4 border-[1px] border-slate-200" />
        <div className="flex items-center gap-4">
          <button
            className={`flex h-6 w-6 items-center justify-center rounded-md font-bold ${
              order <= 1 ? "bg-orange-200" : "bg-orange-500"
            } text-white`}
            disabled={order <= 1 ? true : false}
            onClick={() => handleOrder("decrease")}
          >
            <Text as="body1">-</Text>
          </button>
          <Text as="body1" className="flex w-1 justify-center font-bold">
            {order}
          </Text>
          <button
            className={`flex  h-6 w-6 items-center justify-center rounded-md font-bold ${"bg-orange-500"} text-white`}
            onClick={() => handleOrder("increase")}
          >
            <Text as="body1">+</Text>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Purchaseinfo;

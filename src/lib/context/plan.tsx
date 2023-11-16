"use client";
import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
} from "react";

interface DataPlan {
  [planOption: string]: {
    [dataAmount: string]: number[];
  };
}

type PlanType = {
  id: string;
  value: string;
};

type DataType = {
  id: string;
  value: string;
};

type DurationType = {
  id: string;
  value: string;
};

export interface currentSelectedProps {
  plan: PlanType;
  data: DataType;
  duration: DurationType;
}

export interface PlanHooks {
  data: DataPlan;
  isLoading: boolean;
  selectDataPlan: (options: string, value: string) => void;
  parameter: any;
  currentSelected: currentSelectedProps;
  setCurrentSelect: Dispatch<SetStateAction<currentSelectedProps>>;
  handleOrder: (method: string) => void;
  order: number;
  subtotal: number;
  increaseButton: boolean;
  handleBuy: () => void;
  country: string;
}

export const PlanContext = createContext<PlanHooks>(undefined!);

export const usePlanContext = () => {
  const context = useContext(PlanContext);
  if (context === undefined) {
    throw new Error("usePlanContext must be used within a PlanProvider");
  }
  return context;
};

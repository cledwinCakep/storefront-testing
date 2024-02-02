import { create } from "zustand";

interface PlanDetailsProps {
  planDescription: {
    description: {
      Description: {
        Description: [string];
        Network: string;
        Provider: string;
        Supported: string;
      };
      Policy: [];
    };
  };
  setPlanDescription: (planDescription: any) => void;
}

export const usePlanDetailsStore = create<PlanDetailsProps>((set) => ({
  planDescription: {
    description: {
      Description: {
        Description: [""],
        Network: "",
        Provider: "",
        Supported: "",
      },
      Policy: [],
    },
  },
  setPlanDescription: (planDescription) => set({ planDescription }),
}));

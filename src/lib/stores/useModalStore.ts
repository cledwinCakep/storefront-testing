import { create } from "zustand";


interface ModalStoreProps {
  openSupportedCountry: boolean;
  globalCode: string;
  setOpenSupportedCountry: (openSupportedCountry: boolean) => void;
  setGlobalCode: (globalCode: string) => void;
}

export const useModalStore = create<ModalStoreProps>((set) => ({
  openSupportedCountry: false,
  globalCode: "WW",
  setOpenSupportedCountry: (openSupportedCountry) => set({ openSupportedCountry }),
  setGlobalCode: (globalCode) => set({ globalCode }),
}));

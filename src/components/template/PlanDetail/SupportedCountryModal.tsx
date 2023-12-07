import { Fragment, useRef, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { X } from "react-feather";
import { useModalStore } from "@/lib/stores/useModalStore";
import Image from "next/image";
import { globalData } from "@/lib/utils/globalData";

export default function SupportedCountryModal() {
  const { openSupportedCountry, globalCode, setOpenSupportedCountry } =
    useModalStore();
  const [searchTerm, setSearchTerm] = useState("");
  const [country, setCountry] = useState("");
  const [visible, setVisible] = useState(false);

  interface CountryData {
    [key: string]: string;
  }

  const handleClick = (name: string) => {
    setVisible(false);
    setCountry(name);
  };

  let temp: CountryData;
  if (globalCode == "WW_146") temp = globalData["WW_146"];
  else if (globalCode == "WW_54") temp = globalData["WW_54"];
  else if (globalCode == "AP") temp = globalData["AP"];
  else if (globalCode == "EU_42") temp = globalData["EU_42"];
  else if (globalCode == "EU_33") temp = globalData["EU_33"];
  else if (globalCode == "AU_NZ") temp = globalData["AU_NZ"];
  else if (globalCode == "US_CA") temp = globalData["US_CA"];
  else if (globalCode == "HK_MO") temp = globalData["HK_MO"];
  else if (globalCode == "GU_MP") temp = globalData["GU_MP"];
  else temp = globalData["WW_146"];

  const dataArray = Object.entries(temp).map(([key, name]) => {
    return { key, name };
  });

  const filteredCountries = dataArray.filter((destination) =>
    destination.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredAfterClick = dataArray.filter((destination) =>
    destination.name.toLowerCase().includes(country.toLowerCase())
  );

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    setVisible(!!term);
    if(!term) setCountry('')
  };

  useEffect(() => {
    return () => {
      setSearchTerm('');
      setCountry('');
      setVisible(false);
    };
  }, [openSupportedCountry]);

  return (
    <Transition.Root show={openSupportedCountry} as={Fragment}>
      <Dialog
        as="div"
        className="absolute z-50"
        onClose={setOpenSupportedCountry}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center sm:items-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative h-fit w-full transform overflow-hidden rounded-t-lg bg-black p-4 text-left shadow-xl transition-all sm:max-w-[526px] sm:rounded-lg">
                <div className="flex h-[90vh] w-full flex-col gap-3 sm:h-fit sm:max-h-[626px] sm:items-start">
                  <button
                    className=""
                    type="button"
                    onClick={() => setOpenSupportedCountry(false)}
                  >
                    <X className="text-white" />
                  </button>
                  <div className="w-full text-2xl font-semibold leading-loose text-white sm:font-medium sm:leading-[30px]">
                    Supported country
                  </div>
                  <div className="relative mb-8 h-auto w-full rounded-lg bg-[#374151] px-5 py-2">
                    <input
                      className="min-w-full bg-transparent pl-8 text-white outline-none "
                      placeholder="Search destination..."
                      onChange={handleInputChange}
                      value={searchTerm}
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      className="absolute top-2.5"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.33329 3.33341C5.57187 3.33341 3.33329 5.57199 3.33329 8.33342C3.33329 11.0948 5.57187 13.3334 8.33329 13.3334C11.0947 13.3334 13.3333 11.0948 13.3333 8.33342C13.3333 5.57199 11.0947 3.33341 8.33329 3.33341ZM1.66663 8.33342C1.66663 4.65152 4.65139 1.66675 8.33329 1.66675C12.0152 1.66675 15 4.65152 15 8.33342C15 9.87401 14.4774 11.2925 13.5998 12.4215L18.0892 16.9108C18.4147 17.2363 18.4147 17.7639 18.0892 18.0893C17.7638 18.4148 17.2361 18.4148 16.9107 18.0893L12.4213 13.6C11.2924 14.4775 9.87389 15.0001 8.33329 15.0001C4.65139 15.0001 1.66663 12.0153 1.66663 8.33342Z"
                        fill="#9CA3AF"
                      />
                    </svg>

                    {visible && (
                      <div
                        className={`absolute left-0 top-full mt-1 w-full rounded-md bg-[#374151] shadow-lg overflow-y-auto`}
                      >
                        {filteredCountries.map((dt: any, index: number) => {
                          return (
                            <p
                              key={index}
                              onClick={() => {
                                handleClick(dt.name);
                              }}
                              className={`cursor-pointer px-4 py-2 text-base text-white hover:bg-slate-600 ${
                                index !== filteredCountries.length - 1
                                  ? "border-b border-[#52525B]"
                                  : "border-none"
                              }`}
                            >
                              {dt.name}
                            </p>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  <div className="flex h-full w-full flex-col gap-2 overflow-y-auto text-start">
                    {filteredAfterClick.map((destination, index) => (
                      <div
                        key={index}
                        className="inline-flex w-full items-center justify-start rounded-lg bg-neutral-900 px-5 py-4 shadow"
                      >
                        <div className="flex shrink grow basis-0 items-center justify-start gap-4">
                          <Image
                            src={`/flag/${destination.key}.png`}
                            width={40}
                            height={26}
                            alt={destination.name}
                            className="rounded border border-zinc-100"
                          />
                          <div className="inline-flex shrink grow basis-0 flex-col items-start justify-center gap-4">
                            <div className="self-stretch text-base font-semibold leading-normal text-stone-50">
                              {destination.name}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { X } from "react-feather";
import { useModalStore } from "@/lib/stores/useModalStore";
import { Search } from "react-feather";
import { TextInput } from "@tremor/react";
import Image from "next/image"

export default function SupportedCountryModal() {
  const { openSupportedCountry, setOpenSupportedCountry } = useModalStore();
  const [selectedOption, setSelectedOption] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSelectChange = (selectedOption:any) => {
    setSelectedOption(selectedOption);
  };

  const cancelButtonRef = useRef(null);

  const data = [
    { img: 'https://via.placeholder.com/40x26', country: 'Singapore' },
    { img: 'https://via.placeholder.com/40x26', country: 'Japan' },
    { img: 'https://via.placeholder.com/40x26', country: 'Indonesia' },
  ];

  const handleInputChange = (e:any) => {
    setSearchTerm(e.target.value);
  }

  const filteredCountries = data.filter(destination =>
    destination.country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Transition.Root show={openSupportedCountry} as={Fragment}>
      <Dialog
        as="div"
        className="absolute z-50"
        initialFocus={cancelButtonRef}
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
              <Dialog.Panel className="h-fit relative transform overflow-hidden rounded-t-lg sm:rounded-lg bg-black p-4 text-left shadow-xl transition-all w-full sm:max-w-[526px]">
                <div className="w-full h-[90vh] sm:h-fit sm:max-h-[626px] flex flex-col sm:items-start gap-3">
                    <button
                        className=""
                        type="button"
                        onClick={()=>setOpenSupportedCountry(false)}
                    >
                        <X className="text-white"/>
                    </button>
                    <div className="w-full text-white text-2xl font-semibold sm:font-medium leading-loose sm:leading-[30px]">Supported country</div>
                    <TextInput
                        icon={Search}
                        placeholder="Search destination"
                        // value={searchTerm}
                        onChange={handleInputChange}
                        className="px-4 py-1 bg-gray-700 rounded-lg border-none text-white text-lg font-normal leading-7 gap-2"
                    />
                  <div className="w-full h-full text-start overflow-y-auto flex flex-col gap-2">
                    {/* {filteredCountries.map((destination) => (
                        <div className="w-full px-5 py-4 bg-neutral-900 rounded-lg shadow justify-start items-center inline-flex">
                            <div className="grow shrink basis-0 justify-start items-center gap-4 flex">
                                <img className="w-10 h-[26px] relative rounded border border-zinc-100" src={destination.img} />
                                <div className="grow shrink basis-0 flex-col justify-center items-start gap-4 inline-flex">
                                    <div className="self-stretch text-stone-50 text-base font-semibold leading-normal">{destination.country}</div>
                                </div>
                            </div>
                        </div>
                    ))} */}
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

import Image from "next/image";

// context
import Anchor from "@/components/atoms/Anchor/Anchor";
import { useEffect, useState } from "react";
import Text from "@/components/atoms/Text/Text";
import { ChevronDown, ChevronUp, X } from "react-feather";
import Button from "@/components/atoms/Button/Button";
import Whatsapp from "@/components/icons/Whatsapp";
import { useTranslations } from "next-intl";
import { usePathname } from "next-intl/client";
import { Translation } from "@/components/icons/Translation";
import Link from "next-intl/link";

export const NavbarMobileMenu = ({
  params,
}: {
  params: { locale: string };
}) => {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState<boolean>(true);
  const t = useTranslations("Navbar");
  const [isOpen, setOpen] = useState(false);
  const pathname = usePathname();
  // const url = new URL(window.location.href);
  // const test = new URLSearchParams(url.search);

  // const plan = test.get("plan");
  // const data = test.get("data");
  // const duration = test.get("duration");

  function handleChangeLanguage() {
    setOpen(!isOpen);
  }
  const handleHamburgerMenuState = () => {
    setIsHamburgerMenuOpen(!isHamburgerMenuOpen);
  };

  useEffect(() => {
    setIsHamburgerMenuOpen(false);
  }, []);

  return (
    <div className="relative z-50 flex h-[78px] w-full items-center justify-center border-b-[1px]  border-gray-600 bg-black px-4 py-3 lg:hidden ">
      <div className="flex h-full w-full flex-row items-center justify-between md:max-w-[1180px]">
        <Anchor href="/" className="px-[0px] py-[0px]">
          <Image
            src="/logo-superalink.svg"
            alt="superalink logo"
            width={151.77}
            height={21.95}
            priority
          />
        </Anchor>

        <button
          aria-label="hamburger menu"
          className="[&>div:nth-child(2)]:my-1 [&>div]:h-[2px] [&>div]:w-6 [&>div]:rounded-2xl [&>div]:bg-gray-100"
          onClick={handleHamburgerMenuState}
        >
          <div></div>
          <div></div>
          <div></div>
        </button>
      </div>

      <div
        className={`${
          isHamburgerMenuOpen ? "block " : "hidden"
        } fixed bottom-0 left-0 right-0 top-0 z-10  w-full overflow-auto bg-black `}
      >
        <div className="flex h-full flex-col">
          <div className="flex h-full flex-col ">
            <div className="flex flex-row items-center justify-between  px-6 py-6">
              <Text as="subHeading1" className="font-bold text-white">
                Menu
              </Text>
              <X onClick={handleHamburgerMenuState} className="text-white" />
            </div>
            <div className="flex flex-col gap-3  border-gray-200  px-6 py-6">
              {/* <div
              className="flex w-full cursor-pointer flex-row justify-between rounded-[124px] border-[1px] border-gray-300 p-4 text-white "
              onClick={handleChangeLanguage}
            >
              <div className="flex max-w-[179px] flex-row items-center justify-center">
                <Translation />
                <Text as="body2" className="mx-2 font-bold">
                  {params.locale == "id" ? "Indonesia" : "English"}
                </Text>
              </div>
              {isOpen ? <ChevronDown /> : <ChevronUp />}
            </div> */}
              <div
                className={`h-full flex-col ${
                  isOpen ? "flex" : "hidden"
                } left-0 top-[50px] z-50 rounded-[4px] bg-[#555] text-white transition-all ease-in-out`}
              >
                {/* <Link
                locale="en"
                href={`${
                  pathname.split("/").includes("plans")
                    ? pathname +
                      "?" +
                      `plan=${plan}&data=${data}&duration=${duration}`
                    : pathname
                }`}
              >
                <div className="w-full cursor-pointer p-[20px] hover:bg-[#DDDDDE] hover:text-black">
                  English
                </div>
              </Link> */}
                {/* <Link
                locale="id"
                href={`${
                  pathname.split("/").includes("plans")
                    ? pathname +
                      "?" +
                      `plan=${plan}&data=${data}&duration=${duration}`
                    : pathname
                }`}
              >
                <div className="w-full cursor-pointer p-[20px] hover:bg-[#DDDDDE] hover:text-black">
                  Indonesia
                </div>
              </Link> */}
              </div>
            </div>
            <div
              className="flex flex-col border-b-[1px] border-gray-200 px-3 text-2xl font-bold"
              onClick={handleHamburgerMenuState}
            >
              <Anchor
                href={pathname.split("/")[1] != "" ? "/" : "#destination"}
              >
                {t("navbar_destination")}
              </Anchor>
            </div>
            <div
              className="flex flex-col border-b-[1px] border-gray-200 px-3 text-2xl font-bold "
              onClick={handleHamburgerMenuState}
            >
              <Anchor href={pathname.split("/")[1] != "" ? "/" : "#payment"}>
                {t("navbar_payment")}
              </Anchor>
            </div>
            <div
              className="flex flex-col border-b-[1px] border-gray-200 px-3 text-2xl font-bold"
              onClick={handleHamburgerMenuState}
            >
              <Anchor
                href={pathname.split("/")[1] != "" ? "/" : "#how-it-works"}
              >
                {t("navbar_howItWorks")}
              </Anchor>
            </div>
            <Link
              href={
                "https://api.whatsapp.com/send?phone=6282339909564&text=Hallo%20min%2C%20saya%20mau%20beli%20eSIM%20untuk%20traveling"
              }
              className="w-full"
            >
              <div className="mt-6 px-5">
                <Button
                  color="transparent"
                  size="xs"
                  iconLeft={<Whatsapp color="white" />}
                  className="w-full"
                >
                  {t("navbar_contactUs")}
                </Button>
              </div>
            </Link>
          </div>
          <div className="bottom-0 flex-none pb-5 text-center text-[13px] text-[#6B7280]">
            &copy; {new Date().getFullYear()}. Gadgetkorea INC. ALL RIGHTS
            RESERVED
          </div>
        </div>
      </div>
    </div>
  );
};

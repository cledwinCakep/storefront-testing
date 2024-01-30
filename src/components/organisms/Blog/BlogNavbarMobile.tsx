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
import Esim from "@/components/icons/esim";

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
    <div className="relative z-50 flex min-h-[78px] w-full items-center justify-center overflow-hidden border-b border-[#222222] bg-black px-4 py-3 lg:hidden">
      <div className="flex h-full w-full flex-row items-center justify-between md:max-w-[1180px]">
        <a
          href="/blog"
          className="px-[0px] py-[0px]"
          aria-label="go to blog"
        >
          <Image
            src="/logo-superalink.svg"
            alt="superalink logo"
            width={151.77}
            height={21.95}
            priority
          />
        </a>

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
          isHamburgerMenuOpen ? "fixed " : "hidden"
        }  bottom-0 left-0 right-0 top-0 z-50 min-h-screen w-full overflow-auto bg-black `}
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
              <div
                className="flex w-full cursor-pointer flex-row justify-between rounded-[124px] border-[1px] border-gray-300 p-4 text-white "
                onClick={handleChangeLanguage}
              >
                <div className="flex max-w-[179px] flex-row items-center justify-center">
                  <Translation />
                  <Text as="body2" className="mx-2 font-bold">
                    {params.locale == "ko" ? "한글" : "English"}
                  </Text>
                </div>
                {isOpen ? (
                  <ChevronDown className="text-white" />
                ) : (
                  <ChevronUp className="text-white" />
                )}
              </div>
              <div
                className={`h-full flex-col ${
                  isOpen ? "flex" : "hidden"
                } left-0 top-[50px] z-50 rounded-[4px] bg-[#555] text-white transition-all ease-in-out`}
              >
                <Link locale="en" href={pathname}>
                  <div className="w-full cursor-pointer p-[20px] hover:bg-[#DDDDDE] hover:text-black">
                    English
                  </div>
                </Link>
                <Link locale="ko" href={pathname}>
                  <div className="w-full cursor-pointer p-[20px] hover:bg-[#DDDDDE] hover:text-black">
                    한글
                  </div>
                </Link>
              </div>
            </div>
            <Anchor
              href="/"
              className="flex px-[0px] py-[0px]"
              aria-label="go to blog"
            >
              <div className="mt-6 px-5">
                <Button
                  color="transparent"
                  size="xs"
                  iconLeft={<Esim />}
                  className="w-full"
                >
                  {t("navbar_buyEsim")}
                </Button>
              </div>
            </Anchor>
          </div>
        </div>
        <div className="bottom-0 h-auto flex-none pb-5 text-center text-[13px] text-[#6B7280]">
          &copy; Copyright {new Date().getFullYear()}. All Rights Reserved Supera link
        </div>
      </div>
    </div>
  );
};

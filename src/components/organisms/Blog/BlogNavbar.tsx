"use client";
import SupportedCountryModal from "@/components/template/PlanDetail/SupportedCountryModal";
// context
import NavbarDesktop from "./BlogNavbarDesktop";
import { NavbarMobileMenu } from "./BlogNavbarMobile";

export const Navbar = ({ params }: { params: { locale: string } }) => {
  return (
    <div className="fixed left-0 right-0 top-0 z-50 ">
      <SupportedCountryModal />
      <NavbarDesktop params={params} />
      <NavbarMobileMenu params={params} />
    </div>
  );
};

export default Navbar;

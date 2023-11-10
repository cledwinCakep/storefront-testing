"use client";
// context
import NavbarDesktop from "./NavbarDesktop";
import { NavbarMobileMenu } from "./NavbarMobile";

export const Navbar = ({ params }: { params: { locale: string } }) => {
  return (
    <div className="fixed top-0 right-0 left-0 z-50 ">
      <NavbarDesktop params={params} />
      <NavbarMobileMenu params={params} />
    </div>
  );
};

export default Navbar;

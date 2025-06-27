"use client";
import React, { useState } from "react";
import { Icon } from "./Icon";
import Link from "next/link";
import MenuIcon from "./MenuIcon/MenuIcon";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="w-full h-[72px] font-inter px-[41.5px] bg-[#000075] flex items-center justify-between max-[800px]:px-[18px]">
      <Link href={"/"}>
        <Icon.Logo />
      </Link>
      <div className="flex items-center gap-8 max-[807px]:hidden">
        <ul className="flex items-center gap-8 font-inter text-[#ECECEC] text-base font-normal ">
          <li>
            <Link className="p-3" href={"/"}>
              Features
            </Link>
          </li>
          <li>
            <Link className="p-3" href={"/careers"}>
              Careers
            </Link>
          </li>
        </ul>
        <div className="flex items-center gap-[15px]">
          <Link
            className="text-base font-medium text-[#0B081C] bg-[#ECECEC] border border-[#ECECEC] px-5 py-2 rounded-[50px] hover:bg-[#D9D9D9] transition-colors duration-300"
            href={"https://forms.fillout.com/t/9QDQgUUtsSus"}
          >
            Try BETA for Free
          </Link>
          <Link
            className="text-base font-medium text-[#ECECEC] bg-transparent px-5 py-2 border border-[#ECECEC] rounded-[50px] hover:bg-[#1A1629] transition-colors duration-300"
            href={"/"}
          >
            Watch Demo
          </Link>
        </div>
      </div>
      <MenuIcon
        handleMenuToggle={handleMenuToggle}
        menuActive={isMenuOpen}
        setMenuActive={setIsMenuOpen}
      />

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-[rgba(0,0,0,0.7)] z-50 transition-opacity ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={handleMenuToggle}
      />

      {/* Mobile Menu Content */}
      <div
        className={`fixed top-[72px] right-0 h-[calc(100vh-72px)] w-[300px] bg-[#0A0A0A] border-l border-[rgba(236,236,236,0.1)] shadow-lg transition-transform duration-300 z-50 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col pt-8 pb-10 px-6 space-y-6 font-montserrat text-[#ECECEC]">
          <li>
            <Link
              className="block py-2 hover:text-[#000075] transition-colors"
              href={"/"}
              onClick={handleMenuToggle}
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              className="block py-2 hover:text-[#000075] transition-colors"
              href={"/careers"}
              onClick={handleMenuToggle}
            >
              Careers
            </Link>
          </li>
          <li>
            <Link
              className="block py-2 hover:text-[#000075] transition-colors"
              href={"/help-support"}
              onClick={handleMenuToggle}
            >
              Help & Support
            </Link>
          </li>

          <li className="mt-8 pt-6 border-t border-[rgba(236,236,236,0.1)]">
            <Link
              className="block w-full text-center text-[#0A0A0A] bg-[#ECECEC] px-5 py-3 rounded-[50px] hover:bg-[#D9D9D9] transition-colors mb-4"
              href={"https://forms.fillout.com/t/9QDQgUUtsSus"}
              onClick={handleMenuToggle}
            >
              Try BETA for Free
            </Link>
            <Link
              className="block w-full text-center text-[#ECECEC] border border-[#ECECEC] px-5 py-3 rounded-[50px] hover:bg-[rgba(0,0,117,0.1)] transition-colors"
              href={"/"}
              onClick={handleMenuToggle}
            >
              Watch Demo
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

"use client";
import React, { useEffect, useState } from "react";
import { Icon } from "./Icon";
import Link from "next/link";
import MenuIcon from "./MenuIcon/MenuIcon";
import { usePathname, useRouter } from "next/navigation";

const Navbar = ({ scrollToJoinWaitlist }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Calculate offset for fixed navbar (adjust height as needed)
      const navbarHeight = 72; // Replace with your navbar height
      const elementPosition = element.offsetTop - navbarHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  const handleSectionClick = (sectionId) => {
    if (pathname === "/") {
      // Already on homepage, just scroll
      scrollToSection(sectionId);
    } else {
      // Navigate to homepage with section hash
      router.push(`/#${sectionId}`);
    }
  };

  // Handle scrolling when arriving at homepage with hash
  useEffect(() => {
    if (pathname === "/" && window.location.hash) {
      const sectionId = window.location.hash.substring(1);
      // Small delay to ensure page is fully loaded
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    }
  }, [pathname]);

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
            <button
              className="p-3 cursor-pointer"
              onClick={() => handleSectionClick("features")}
            >
              Features
            </button>
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
            href={"https://vimeo.com/1097645084/fb9ff61017?share=copy"}
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
              href={"/faqs"}
              onClick={handleMenuToggle}
            >
              Faqs
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
              href={"https://vimeo.com/1097645084/fb9ff61017?share=copy"}
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

import React from "react";
import { Icon } from "./Icon";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black pt-[151.08px]  max-[1186px]:px-10 mx-auto font-inter max-[722px]:px-4">
      <div className="max-w-[1440px] flex flex-col gap-16 w-[80%] mx-auto max-[1186px]:w-full">
        <div className="flex justify-between max-[1008px]:grid max-[1008px]:grid-cols-2 max-[1008px]:gap-40 max-[722px]:grid-cols-1 max-[722px]:gap-10  ">
          <div>
            <p className="font-inter text-sm text-[#ECECEC] font-normal">
              ...your
            </p>
            <Icon.Logo className="mt-[10px]" />
            {/* <div className="flex items-center gap-2 mt-9 max-[462px]:flex-col max-[462px]:items-start">
              <input
                type="email"
                placeholder="Email address"
                className="w-[238px] max-[722px]:w-full h-[56px] outline-0  rounded-[6px] border border-[#00008B] p-4 text-white placeholder:text-[#98A2B3] font-inter text-sm font-normal"
              />
              <button className="font-inter text-base font-medium text-[rgba(11,8,28,0.8)] w-[123px] h-[55px] py-4 px-6 bg-white rounded-[60px]">
                Subscribe
              </button>
            </div> */}
          </div>
          <div className="flex flex-col gap-6 ">
            <p className="text-base font-normal text-[#ECECEC]">Company</p>
            <ul className="flex flex-col gap-4">
              <li>
                <Link
                  className="text-base font-medium text-[#909DAC]"
                  href={"/faqs"}
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  className="text-base font-medium text-[#909DAC]"
                  href={"/careers"}
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  className="text-base font-medium text-[#909DAC]"
                  href={"/earnings"}
                >
                  Earn With AceBuddy
                </Link>
              </li>
              {/* <li>
                <Link
                  className="text-base font-medium text-[#909DAC]"
                  href={"/"}
                >
                  Blog
                </Link>
              </li> */}
            </ul>
          </div>
          {/* <div className="flex flex-col gap-6">
            <p className="text-base font-normal text-[#ECECEC]">Products</p>
            <ul className="flex flex-col gap-4">
              <li>
                <Link
                  className="text-base font-medium text-[#909DAC]"
                  href={"/"}
                >
                  Focus Today
                </Link>
              </li>
              <li>
                <Link
                  className="text-base font-medium text-[#909DAC]"
                  href={"/"}
                >
                  Ace cards
                </Link>
              </li>
              <li>
                <Link
                  className="text-base font-medium text-[#909DAC]"
                  href={"/"}
                >
                  AceBuddy For Institutions
                </Link>
              </li>
            </ul>
          </div> */}
          <div className="flex flex-col gap-6">
            <p className="text-base font-normal text-[#ECECEC]">Contact Us</p>
            <ul className="flex flex-col gap-4">
              <li>
                <Link
                  className="text-base font-medium text-[#909DAC]"
                  href={"/help-and-support"}
                >
                  Help & Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-between pt-8 pb-9 border-t border-[#E4E7EC] max-[615px]:flex-col max-[615px]:gap-6 text-center">
          <div className="flex items-center gap-8">
            <Link
              className="text-sm font-medium text-[#909DAC]"
              href={"/terms-of-service"}
            >
              Terms of Service
            </Link>
            <Link
              className="text-sm font-medium text-[#909DAC]"
              href={"/privacy-policy"}
            >
              Privacy Policy
            </Link>
          </div>
          <p className="text-sm font-medium text-[#909DAC]">
            © 2025 AceBuddy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

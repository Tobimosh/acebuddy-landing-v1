"use client";
import React, { useState } from "react";
import { Icon } from "./Icon";

const AceCard = ({
  title,
  subtitle,
  author,
  width = "299px",
  height = "385px",
  hoverHeight = "435px",
  backgroundImage,
  className
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [displayText, setDisplayText] = useState({ title, subtitle, author });
  const [dummyText] = useState({
    title: "New Challenge Unlocked",
    subtitle: "Master Security Concepts",
    author: "Jane Doe",
  });

  const handleHover = () => {
    setIsHovered(true);

    // setTimeout(() => {
    //   setDisplayText(dummyText);
    // }, 10);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // setDisplayText({ title, subtitle, author });
  };

  return (
    <div className={`relative mx-auto ${className}`} style={{ maxWidth: width }}>
      <div
        className="absolute z-0 left-[25.6px] bg-accent-color rounded-[20px] top-[-20px] rotate-[5.21deg]"
        style={{
          width: "92.5%",
          height: "192.5px",
          maxWidth: width,
        }}
      ></div>

      <div
        className="relative cursor-pointer flex justify-center items-end rounded-[20px] bg-cover bg-no-repeat overflow-hidden transition-all duration-500 ease-in-out"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: isHovered ? "center right" : "center center",
          //   transform: isHovered ? "translateY(-50px)" : "translateY(0)",
          height: isHovered ? hoverHeight : height,
          width: width,
          backgroundSize: isHovered && "500px",
        }}
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      >
        {/* Blur overlay */}
        <div
          className={`absolute inset-0 bg-black transition-all duration-500 ease-in-out ${
            isHovered
              ? "opacity-30 backdrop-blur-[700px]"
              : "opacity-0 backdrop-blur-none"
          }`}
        ></div>

        <Icon.CursorDefaultClick
          className={`absolute !w-[26px] !h-[26px] left-1/2 top-1/2 -translate-x-1/2 transition-all duration-500 ease-in-out  ${
            isHovered ? "-translate-y-[70px] " : "-translate-y-1/2 opacity-100"
          }`}
        />

        <div className="flex flex-col gap-3 w-full p-[26px] z-10">
          <div
            className={`flex flex-col gap-2 transition-all duration-500 ease-in-out ${
              isHovered ? "opacity-0" : "opacity-100"
            }`}
          >
            <p className="font-inter text-[12px] font-normal text-white">
              ACE CARDs
            </p>
            <h5 className="font-inter font-bold text-[25px] text-white transition-all duration-300 w-[190px] h-[75px]">
              {displayText.subtitle}
            </h5>
          </div>
          <p
            className={`font-inter text-[12px] font-normal text-white transition-all duration-300 ${
              isHovered ? "opacity-0" : "opacity-100"
            }`}
          >
            {displayText.author}
          </p>
        </div>

        {/* New AceBuddy section that appears on hover */}
        <div
          className={`absolute bottom-[26px] left-[26px] transition-all duration-500 ease-in-out z-10 ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="flex flex-col">
            <p className="font-inter text-[12px] font-normal text-white">
              A PRODUCT OF
            </p>
            <h5 className="font-inter font-bold text-[25px] text-white transition-all duration-300 w-[190px]">
              AceBuddy
            </h5>
          </div>
        </div>

        <Icon.ArrowRight
          className={`!w-[50px] !h-[36px] absolute bottom-[26px] transition-all duration-500 ease-in-out ${
            isHovered ? "left-[110%] opacity-0" : "-left-1/2 opacity-100"
          }`}
        />
      </div>
    </div>
  );
};

export default AceCard;

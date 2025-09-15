import Link from "next/link";
import React from "react";
import bg1 from "@/../public/assets/ace-bg1.png";
import bg2 from "@/../public/assets/ace-bg2.png";
import bg3 from "@/../public/assets/ace-bg3.png";
import AceCard from "../AceCard";

const StudySection = () => {
  return (
    <section className="pt-[53.92px]   overflow-x-hidden">
      <div className="max-w-[1440px] mx-auto  flex flex-col items-center gap-10 max-[915px]:px-10 max-[600px]:px-[18px]">
        <h3 className="font-petrona text-[64px] leading-normal text-[#ECECEC] flex flex-col items-center text-center font-medium max-[915px]:text-4xl">
          Study 10x Faster with
          <span
            style={{
              background:
                "linear-gradient(90deg, #ECECEC 0%, rgba(236, 236, 236, 0) 120%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            className="font-roboto font-bold"
          >
            ACE CARDS
          </span>
        </h3>
        <p className="font-inter text-[20px] leading-normal text-[#909DAC] font-normal max-w-[641px] text-center max-[915px]:text-base">
          A specialized flashcard model with built-in{" "}
          <b>Spaced Retrieval Practice</b> Never forget key concepts. Learning
          retention that last months to years.
        </p>
      </div>
      <div
        style={{
          background:
            "linear-gradient(180deg, #007AFF 0%, rgba(153, 153, 153, 0) 100%)",
        }}
        className="max-w-[1440px]  w-[80%] min-[1020px]:max-h-[631px] mx-auto mt-[116.73px] rounded-[30px] flex items-end justify-between gap-8 px-8 pt-[95px] pb-[60px] max-[1300px]:w-[90%] max-[1131px]:px-0 max-[1131px]:scale-75   max-[1131px]:w-full max-[1020px]:flex-col  max-[1020px]:scale-100  max-[1020px]:w-[90%]   max-[800px]:w-full max-[800px]:rounded-none  "
      >
        <AceCard
          title="CFA Level III Essentials"
          subtitle="CFA Level III Essentials"
          author="Jefferson Brown"
          width="280px"
          height="424px"
          hoverHeight="444px"
          backgroundImage={bg1.src}
          className={"max-[404px]:scale-75"}
        />
        <AceCard
          title="Complete USMLE Step 1"
          subtitle="Complete USMLE Step 1"
          author="Timi Adetona"
          width="312px"
          height="476px"
          hoverHeight="496px"
          backgroundImage={bg2.src}
          className={"max-[404px]:scale-75 "}
        />
        <AceCard
          title="GRE Physics"
          subtitle="GRE Physics Essentials"
          author="Priyanka Sindh"
          width="280px"
          height="424px"
          hoverHeight="444px"
          backgroundImage={bg3.src}
          className={"max-[404px]:scale-75 "}
        />
      </div>
      <div className="mt-[91.27px] bg-[#000025] py-[60px] px-5 flex flex-col items-center gap-6">
        <div
          style={{
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 100%)",
            boxShadow:
              "0px 0.5px 0px 0px rgba(255, 255, 255, 0.5) inset, 0px -2px 40px 0px rgba(0, 0, 139, 0.15), 0px -2px 10px 0px rgba(0, 0, 139, 0.3)",
          }}
          className="max-w-[1440px] flex flex-col gap-6 text-center items-center justify-center px-5 py-[60px] w-[80%] mx-auto rounded-[20px] max-[600px]:w-full"
        >
          <h6 className="font-petrona font-semibold text-5xl text-[#ECECEC] max-[800px]:text-3xl">
            Get Early Access Now
          </h6>
          <p className="font-inter text-lg font-normal text-[#909DAC] max-[800px]:text-sm">
            100% free beta. No credit card. Full features.
          </p>
        </div>
        <Link
          target="_blank"
          href={"https://app.acebuddy.so/invite-code"}
          className="font-inter text-base text-[#0B081C] font-medium rounded-[60px] py-3 px-6 max-h-12 bg-[#ECECEC] max-[800px]:text-sm"
        >
          Sign Up for BETA
        </Link>
      </div>
    </section>
  );
};

export default StudySection;

import React from "react";
import { Icon } from "../Icon";
import Link from "next/link";
import banner from "@/../public/assets/features-banner.png";
import Image from "next/image";

const Features = () => {
  return (
    <section className="pt-[114px] max-w-[1440px]  pb-[53.08px] flex flex-col gap-[178px] max-[790px]:gap-16 w-[80%] mx-auto max-[915px]:w-full max-[915px]:px-10 max-[600px]:px-[18px] overflow-x-hidden">
      <div className="flex flex-col items-center gap-[34px] text-center">
        <h3 className="font-roboto text-[62px] leading-normal text-[#ECECEC] font-medium max-[915px]:text-4xl">
          Smarter Features. Faster Mastery.
        </h3>
        <p className="font-inter text-lg text-[#909DAC] font-normal max-[915px]:text-base max-w-[642px]">
          AceBuddy helps you master your entire exam syllabus with precision,
          speed, and clarity.
        </p>
      </div>
      <div className="flex flex-col gap-[82.29px]">
        <div className="flex items-center justify-between max-[790px]:flex-col">
          <div
            className="spinner"
            style={{
              animation: "rotate 9s linear infinite",
              animationPlayState: "running",
            }}
          >
            <Icon.BlueCircles />
          </div>

          <div className="flex flex-col gap-[24.27px] max-w-[453px] max-[790px]:max-w-full max-[790px]:items-center">
            <div className="flex flex-col gap-[3.73px] max-[790px]:items-center">
              <h6 className="font-roboto fonnt-medium text-[32px] leading-normal text-[#ECECEC] max-[790px]:text-center">
                Generate Your Free AI plan
              </h6>
              <p className="font-inter text-sm text-[#909DAC] font-normal max-[790px]:text-center">
                Learn PRECISELY what you need to, at the pace that suits you
                best. Get tailored, AI-curated, up-to-date{" "}
                <i className="font-medium">
                  summaries, video tutorials and textbook references
                </i>{" "}
                that covers your entire syllabus for free.
              </p>
            </div>
            <button className="max-h-[46px] border-[0.5px] border-white py-3 px-8 w-fit flex items-center gap-4 rounded-[55px] text-lg max-[790px]:text-sm text-white font-medium bg-transparent ">
              Start Generating
              <Icon.Sparkle />
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between max-[790px]:flex-col gap-16 ">
          <div className="flex flex-col gap-10 max-w-[453px] max-[790px]:items-center">
            <div className="flex flex-col gap-[3.73px] max-[790px]:text-center max-[790px]:items-center">
              <h6 className="font-roboto fonnt-medium text-[32px] leading-normal text-[#ECECEC] ">
                Access Seamless Prep{" "}
              </h6>
              <p className="font-inter text-sm text-[#909DAC] font-normal">
                Visualize your progress, tackle weak spots, and explore
                structured content—all in one smart dashboard.
              </p>
            </div>
            <Link
              href={"https://forms.fillout.com/t/9QDQgUUtsSus"}
              className="border-[0.5px] max-h-[46px] max-[1000px]:text-sm border-white py-3 px-8 w-fit flex items-center gap-4 rounded-[55px] text-lg text-white font-medium bg-transparent "
            >
              Sign Up for Free
              <Icon.ArrowRight />
            </Link>
          </div>
          <Image
            src={banner}
            alt="Features Banner"
            className="max-w-[583px] max-[1124px]:max-w-[450px] max-[486px]:max-w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;

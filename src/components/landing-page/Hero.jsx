import Link from "next/link";
import heroBg from "./hero-bg.png";
import { Icon } from "../Icon";
import logos from "@/../public/assets/Logos.png";
import logosMobile from "@/../public/assets/logos-mobile.png";

import Image from "next/image";

const Hero = () => {
  return (
    <section
      className="flex items-end justify-center relative min-h-[calc(100vh-72px)] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${heroBg.src})`,
      }}
    >
      <div className="flex flex-col gap-[80px] mt-20 max-w-[1440px] mx-auto">
        <div className="flex flex-col items-center gap-6">
          <Link
            href={"https://forms.fillout.com/t/9QDQgUUtsSus"}
            className="font-montserrat  border-[1.24px] border-[rgba(255,255,255,0.3)] px-[19.81px] py-[9.91px] rounded-[61.91px] text-[17.33px] font-normal  text-[#F2F4F8] bg-transparent hover:bg-[#000075] hover:font-semibold transition-colors duration-300"
          >
            BETA
          </Link>
          <div className="flex flex-col items-center gap-6">
            <h1
              className="font-montserrat text-[80px] leading-normal text-center max-w-[960px] font-medium max-[915px]:text-4xl max-[915px]:max-w-[90%]"
              style={{
                background:
                  "linear-gradient(145.55deg, #ECECEC 20.35%, rgba(236, 236, 236, 0) 128.73%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
              }}
            >
              What exam are you prepping for?
            </h1>
            <p className="font-inter text-lg text-center text-[#909DAC] font-normal max-[915px]:text-base max-[564px]:w-[90%]">
              Instantly get an AI-powered study plan based on your exact
              syllabus
            </p>
          </div>
          <div className="w-1/2 max-[915px]:w-[300px] h-12 rounded-[60px] border border-[#ECECEC] bg-transparent flex items-center justify-between pl-3 max-[430px]:w-[80%]">
            <Icon.Search />
            <input
              type="text"
              placeholder="Enter your exam"
              className="flex-1 pl-[15px] text-[#ECECEC] bg-transparent outline-none placeholder:text-[#ECECEC] font-inter text-[15px] max-[915px]:text-sm max-[915px]:placeholder:text-sm  font-normal"
            />
            <Link href={"https://forms.fillout.com/t/9QDQgUUtsSus"}>
              <Icon.ExamButton />
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-10">
          <p className="font-inter text-[rgba(144,157,172,0.8)] text-[20px] font-normal text-center  max-[915px]:text-base max-[564px]:w-[90%]">
            Supports all high-stakes exams, including yours
          </p>

          <Image
            src={logos}
            alt="/"
            className="object-contain max-w-[780px] max-[843px]:scale-50 max-[557px]:hidden"
          />
          <Image
            src={logosMobile}
            alt="/"
            className="object-contain min-[557px]:hidden px-6"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

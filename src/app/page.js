import Hero from "@/components/landing-page/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import banner from "@/../public/assets/acebuddy.so.png";
import Features from "@/components/landing-page/Features";
import StudySection from "@/components/landing-page/StudySection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black overflow-x-hidden">
      {/* <Image
        className="ml-[7.15%]"
        src={banner}
        alt="Banner"
        objectFit="contain"
      /> */}
      {/* <Navbar /> */}
      <Hero />
      <Features />
      <StudySection />
      {/* <Footer /> */}
    </main>
  );
}

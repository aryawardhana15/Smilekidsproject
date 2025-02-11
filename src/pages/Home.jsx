import React from "react";
import hero2Img from "../components/assets/images/hero2.png";
import heroImgback from "../components/assets/images/hero-shape-purple.png";
import { FaAcquisitionsIncorporated, FaGraduationCap } from "react-icons/fa";
import { About } from "./About";
import { Courses } from "./Courses";
import { Instructor } from "./Instructor";
import { Blog } from "./Blog";

export const Home = () => {
  return (
    <>
      <HomeContent />
      <About />
      <br />
      <br />
      <br />
      <Courses />
      <Instructor />
      <Blog />
    </>
  );
};

export const HomeContent = () => {
  return (
    <>
      <section className="bg-yellow-300 py-10 h-[92vh] md:h-full">
        <div className="container">
          <div className="flex items-center justify-center md:flex-col">
            <div className="left w-1/2 text-black md:w-full">
              <h1 className="text-4xl leading-tight text-black font-semibold">
                Welcome to Smile Kids <br />
              </h1>
              <h3 className="text-lg mt-3">Belajar dan bermain bersama kami</h3>
              <span className="text-[14px]">
                Tempat terbaik untuk bermain, belajar, dan tumbuh bersama! Di
                Smile Kids, kami menciptakan lingkungan yang aman, penuh kasih,
                dan edukatif untuk mendukung perkembangan si kecil secara
                optimal.
              </span>
            </div>

            <div className="right w-1/2 md:w-full relative">
              <div className="images relative">
                <img
                  src={heroImgback}
                  alt=""
                  className="absolute top-32 left-10 w-96 md:left-10"
                />
                <div className="img h-[85vh] w-full">
                  <img
                    src={hero2Img}
                    alt=""
                    className="h-full w-full object-contain z-20 relative"
                  />
                </div>
              </div>

              {/* Panggil ZigzagButtons di sini */}
              <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center gap-6">
                <ZigzagButtons />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// Komponen ZigzagButtons dipisah
export const ZigzagButtons = () => {
  return (
    <div className="flex flex-col items-center gap-6 mt-10 ">
    

      {/* Button 2 (Kiri) */}
      <div className="flex justify-start w-full mt-12">
        <ButtonComponent
          icon={<FaAcquisitionsIncorporated size={26} />}
          title="Fundamental untuk SD!"
          className="ml-10"
        />
      </div>

      {/* Button 3 (Kanan) */}
      <div className="flex justify-end w-full ">
        <ButtonComponent
          icon={<FaGraduationCap size={26} />}
          title="Berakhlak Islami"
          subtitle="Lulusan memiliki akhlak islami"
          className="mr-10"
        />
      </div>
    </div>
  );
};


const ButtonComponent = ({ icon, title, subtitle, className }) => {
  return (
    <button
      className={`bg-white shadow-lg p-3 flex items-center rounded-lg hover:scale-105 transition-all duration-300 z-40 ${className}`}
    >
      <div className="icon w-12 h-12 text-white rounded-full flex items-center justify-center bg-orange-500">
        {icon}
      </div>
      <div className="text flex flex-col items-start px-4">
        <span className="text-sm text-gray-800 font-semibold">{title}</span>
        {subtitle && <span className="text-xs text-gray-600">{subtitle}</span>}
      </div>
    </button>
  );
};

import React from "react"
import heroImg from "../components/assets/images/hero.png"
import heroImgback from "../components/assets/images/hero-shape-purple.png"
import { FiSearch } from "react-icons/fi"
import { BsFillLightningChargeFill } from "react-icons/bs"
import { FaAcquisitionsIncorporated, FaGraduationCap } from "react-icons/fa"
import { About } from "./About"
import { Courses } from "./Courses"
import { Instructor } from "./Instructor"
import { Blog } from "./Blog"

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
  )
}

export const HomeContent = () => {
  return (
    <>
      <section className='bg-yellow-300 py-10 h-[92vh] md:h-full'>
        <div className='container'>
          <div className='flex items-center justify-center md:flex-col'>
            <div className='left w-1/2 text-black md:w-full'>
              <h1 className='text-4xl leading-tight text-black font-semibold'>
                Welcome to Smile Kids <br /> 
              </h1>
              <h3 className='text-lg mt-3'>
                Belajar dan bermain bersama kami
              </h3>
            

              {/* <div className='relative text-gray-600 focus-within:text-gray-400 mt-5'>
                <input 
                  type='search' 
                  className='py-3 text-sm bg-white rounded-md pl-10 focus:outline-none' 
                  placeholder='Search for classes...' 
                  autocomplete='off' 
                />
                <span className='absolute inset-y-0 left-0 flex items-center pl-2'>
                  <button type='submit' className='p-1 focus:outline-none focus:shadow-outline'>
                    <FiSearch />
                  </button>
                </span>
              </div> */}
             <span className='text-[14px]'>
             Tempat terbaik untuk bermain, belajar, dan tumbuh bersama! Di Smile Kids, kami menciptakan lingkungan yang aman, penuh kasih, dan edukatif untuk mendukung perkembangan si kecil secara optimal.
             </span>

            </div>

            <div className='right w-1/2 md:w-full relative'>
              <div className='images relative'>
                <img src={heroImgback} alt='' className='absolute top-32 left-10 w-96 md:left-10' />
                <div className='img h-[85vh] w-full'>
                  <img src={heroImg} alt='' className='h-full w-full object-contain z-20 relative' />
                </div>
              </div>
              <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center gap-6">
    
    {/* Button 1 - Fundamental untuk SD */}
    <button className="bg-white shadow-lg p-3 flex items-center rounded-lg hover:scale-105 transition-all duration-300 z-40 mt-20 ">
      <div className="icon w-12 h-12 text-white rounded-full flex items-center justify-center bg-orange-500">
        <BsFillLightningChargeFill size={26} />
      </div>
      <div className="text flex flex-col items-start px-4">
        <span className="text-sm text-gray-800 font-semibold">Fundamental untuk SD!</span>
      </div>
    </button>

    {/* Button 2 - Berkarakter tinggi */}
    <button className="bg-white shadow-lg p-3 flex items-center rounded-lg hover:scale-105 transition-all duration-300 z-40">
      <div className="icon w-12 h-12 text-white rounded-full flex items-center justify-center bg-orange-500">
        <FaAcquisitionsIncorporated size={26} />
      </div>
      <div className="text flex flex-col items-start px-4">
        <span className="text-sm text-gray-800 font-semibold">Berkarakter tinggi</span>
      </div>
    </button>

    {/* Button 3 - Lulusan Terampil */}
    <button className="bg-white shadow-lg p-3 flex items-center rounded-lg hover:scale-105 transition-all duration-300 z-50">
      <div className="icon w-12 h-12 text-white rounded-full flex items-center justify-center bg-orange-500">
        <FaGraduationCap size={26} />
      </div>
      <div className="text flex flex-col items-start px-4">
        <span className="text-sm text-gray-800 font-semibold">450+</span>
        <span className="text-xs text-gray-600">Lulusan Terampil</span>
      </div>
    </button>

  </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

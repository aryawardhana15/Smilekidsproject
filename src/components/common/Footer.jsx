import React from "react"
import logImg from "../assets/images/logo-smilekids.png"
import { BsApple, BsGooglePlay, fausers } from "react-icons/bs"
import { NavLink } from "react-router-dom"

export const Footer = () => {
  return (
    <>
    <section className='app w-4/5 m-auto rounded-lg shadow-shadow2 text-white flex md:flex-col bg-[#FF7C54] mt-16 relative z-10'>
  <div className='left w-[60%] md:w-full p-10'>
    <h1 className='text-4xl font-semibold leading-tight'>
      Discover Fun & Learning with <br /> SmileKids!
    </h1>
  </div>
  <div className='right w-[40%] md:w-full flex items-center px-5 rounded-r-lg rounded-bl-[500px] gap-5 bg-[#FF7C54] md:bg-transparent md:p-8'>
    <div className='box flex gap-2 items-center px-4 py-3 border text-white border-gray-50 hover:bg-white hover:text-black shadow-shadow1 rounded-sm'>
      <fausers />
      <label className='text-sm'>Daycare</label>
    </div>
    <div className='box flex gap-2 items-center px-4 py-3 bg-white text-black shadow-shadow1 rounded-sm'>
     
      <label className='text-sm'>Preschool</label>
    </div>
  </div>
</section>

      <footer className='bg-[#F3F4F8] py-10 pt-32 -mt-24'>
        <div className='container grid grid-cols-4 gap-5 md:grid-cols-2'>
          <div className='logo'>
            <img src={logImg} alt='logImg' className='h-6 w-10' />
            <span className='text-[14px]'>Rencana kegiatan disesuaikan untuk mendukung perkembangan anak secara holistik..</span>
          </div>

          <li>
            <h4 className='text-black text-sm font-semibold mb-5'>Website</h4>
            <NavLink to='#' className=' text-[14px] block mb-2'>
              About us
            </NavLink>
            <NavLink to='#' className=' text-[14px] block mb-2'>
              Contact
            </NavLink>
            <NavLink to='#' className=' text-[14px] block mb-2'>
              Reviews
            </NavLink>
            <NavLink to='#' className=' text-[14px] block mb-2'>
              Services
            </NavLink>
          </li>
        </div>
      </footer>
    </>
  )
}

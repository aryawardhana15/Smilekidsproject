import React from "react"
import { courses } from "../components/assets/data/dummydata"
import { FaBook, FaClock } from "react-icons/fa"
import { AiFillStar } from "react-icons/ai"
import { NavLink } from "react-router-dom"
import { HiOutlineArrowNarrowRight } from "react-icons/hi"

export const Courses = () => {
  return (
    <>
      <section className='courses bg-[#F3F4F8] py-16 '>
        <div className='w-4/5 m-auto'>
          <div className='heading mb-16'>
            <h1 className='text-3xl font-semibold text-black'>
              Temukan paket <br />
              terbaik untuk anda
            </h1>
            <span className='text-sm mt-2 block'>Berikan paket terbaik untuk buah hati anak anda</span>
          </div>
          <div className='grid grid-cols-2 gap-10 md:grid-cols-1'>
            {courses.map((item) => (
              <div className='box rounded-lg shadow-shadow1 bg-white'>
                <div className='images rounded-t-lg relative overflow-hidden h-40 w-ful'>
                  <img src={item.cover} alt='' className='rounded-t-lg object-cover w-full h-full transition ease-in-out delay-150 cursor-pointer hover:scale-125 duration-300' />
                  <div className='categ flex gap-4 absolute top-0 m-3'>
                    <span className='text-[14px] bg-blue-700 p-1 px-3 text-white rounded-[5px] shadow-md'>Education</span>
                    <span className='text-[14px] bg-pink-700 p-1 px-3 text-white rounded-[5px] shadow-md'>Childcare</span>
                  </div>
                </div>
                <div className='text p-3'>
                  <div className='flex justify-between items-center'>
                    <div className='flex items-center'>
                      <FaClock />
                      <span className='text-[14px] ml-2'> 10 Jam</span>
                    </div>
                    <div className='flex items-center'>
                      <AiFillStar className='text-orange-500' />
                      <span className='text-[14px] ml-2'> 4.50(2)</span>
                    </div>
                  </div>
                  <h3 className='text-black my-4 font-medium h-10'>{item.title}</h3>
                  <h4 className='text-black my-4  h-10 text-sm'>{item.desc}</h4>
                  {/* <div className='user flex items-center'>
                    <img className='rounded-full' src='https://secure.gravatar.com/avatar/75ec18a5bf959aab895830be3a78cb34?s=50&d=mm&r=g' alt='' />
                    <span className='text-[14px] ml-2'> sunil</span>
                  </div> */}
                </div>
                <div to='/' className='flex items-center justify-beetween  border-t border-gray-200 p-3'>
                  <NavLink to='/courseSinglepage'>
                  <span className='text-sm text-primary px-3'>{item.harga}</span>
                  </NavLink>
                  <NavLink className='text-[14px] ml-auto flex items-center pr-3' to='/courseSinglepage'>
                  Know Details <HiOutlineArrowNarrowRight />
                  </NavLink>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

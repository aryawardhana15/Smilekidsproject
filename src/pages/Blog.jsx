import React from "react"
import { berita} from "../components/assets/data/dummydata"
import { AiTwotoneCalendar } from "react-icons/ai"
import { NavLink } from "react-router-dom"

export const Blog = () => {
  return (
    <>
      <section className='courses'>
        <div className='w-4/5 m-auto'>
          <div className='heading text-center py-12'>
            <h1 className='text-3xl font-semibold text-black'>
           Beberapa Program Kami
            </h1>
            <span className='text-sm mt-2 block'>Smile Kids memiliki beberapa Program untuk meningkatkan edukasi dan Pemahaman anak</span>
          </div>
          <div className='grid grid-cols-3 gap-5 md:grid-cols-1'>
            {berita.slice(0, 3).map((item) => (
              <div className='box rounded-lg shadow-shadow1 bg-white'>
                <div className='images rounded-t-lg relative overflow-hidden h-40 w-ful'>
                  <img src={item.cover} alt='' className='rounded-t-lg object-cover w-full h-full transition ease-in-out delay-150 cursor-pointer hover:scale-125 duration-300' />
                </div>
                <div className='text p-3'>
                  <span className='text-[12px] bg-backbg p-1 px-3 text-white rounded-[5px]'>Lifestyle</span>
                  {/* <NavLink to='/single-blog'> */}
                    <h3 className='text-black my-4 font-medium h-10'>{item.desc}</h3>
             
                  {/* </NavLink> */}

                  <div className='user flex items-center justify-between'>
                    {/* <div className='flex items-center'>
                      <img className='rounded-full w-7 h-7 object-cover shadow-shadow1' src='https://secure.gravatar.com/avatar/75ec18a5bf959aab895830be3a78cb34?s=50&d=mm&r=g' alt='' />
                      <span className='text-[14px] ml-2'> sunil</span>
                    </div> */}
                    <div className='flex items-center'>
                      <AiTwotoneCalendar />
                      <span className='text-[14px] ml-2'>{item.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

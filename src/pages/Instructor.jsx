import React from "react"
import { FaGraduationCap, FaUsers } from "react-icons/fa"
import { GiEvilBook, GiWorld } from "react-icons/gi"
import intructor from "../components/assets/images/instructor1.jpg"
import intructor2 from "../components/assets/images/about2.jpg"

export const Instructor = () => {
  return (
    <>
      <section className='instructor mb-16'>
        <div className='container'>
          <div className='heading py-12 text-center w-2/3 m-auto md:w-full'>
            <h1 className='text-3xl font-semibold text-black'>Mari Bergabung Bersama Smile Kids</h1>
            <span className='text-[14px] mt-2 block'>Pilih Program anda dan daftar sekarang untuk bergabung dengan Smile Kids </span>
          </div>
          <div className='content grid grid-cols-2 gap-5 md:grid-cols-1'>
            <div className='images rounded-lg relative overflow-hidden h-72 w-ful before:bg-backbg before:h-72 before:w-full before:absolute before:top-0 before:left-0 before:content before:z-10'>
              <img src={intructor} alt='' className='rounded-t-lg object-cover w-full h-72' />
              <div className='categ flex flex-col gap-4 absolute top-5 z-30 m-3 p-8 items-center justify-center text-center'>
                <h2 className='text-3xl text-white font-semibold'> Daftar Daycare Smilekids</h2>
                <button className='text-[15px] py-2 px-4 border border-gray-200 rounded-md text-white'>Start a class today</button>
              </div>
            </div>
            <div className='images rounded-lg relative overflow-hidden h-72 w-ful before:bg-backbg before:h-72 before:w-full before:absolute before:top-0 before:left-0 before:content before:z-10'>
              <img src={intructor2} alt='' className='rounded-t-lg object-cover w-full h-72 relative' />
              <div className='categ flex flex-col gap-4 absolute top-5 z-30 m-3 p-8 items-center justify-center text-center'>
                <h2 className='text-3xl text-white font-semibold'>Daftar Preschool SmileKids</h2>
                <button className='text-[15px] py-2 px-4 border border-gray-200 rounded-md text-white'>Start a class today</button>
              </div>
            </div>
          </div>
          <div className='content'>
            <div className='heading py-12 text-center w-2/3 m-auto md:w-full'>
            <h1 className='text-3xl font-semibold text-black'>Kami Bangga Menjadi Bagian dari Perjalanan Anak Anda</h1>
            <span className='text-[14px] mt-2 block'>Tumbuh, belajar, dan bermain dengan penuh keceriaan di lingkungan yang aman dan penuh kasih.</span>
            </div>
            <div className="content grid grid-cols-4 gap-5 md:grid-cols-2">
  <InstructorCard 
    color="text-blue-500" 
    icon={<FaUsers size={40} />} 
    title="400+" 
    desc="Anak Bergabung" 
  />
  <InstructorCard 
    color="text-green-500" 
    icon={<GiEvilBook size={40} />} 
    title="15+" 
    desc="Program Edukatif" 
  />
  <InstructorCard 
    color="text-purple-500" 
    icon={<FaGraduationCap size={40} />} 
    title="8+" 
    desc="Pendidik Berkualitas" 
  />
  <InstructorCard 
    color="text-orange-500" 
    icon={<GiWorld size={40} />} 
    title="15+" 
    desc="Tahun Pengalaman" 
  />
</div>

          </div>
        </div>
      </section>
    </>
  )
}
export const InstructorCard = (props) => {
  return (
    <div className={`box p-5 py-5 rounded-md`}>
      <div className={`${props.color}`}>{props.icon}</div>
      <div className='text mt-2'>
        <h4 className='text-lg font-semibold text-black'>{props.title}</h4>
        <p className='text-[15px]'>{props.desc}</p>
      </div>
    </div>
  )
}

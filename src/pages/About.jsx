import React from "react"
import aboutImg from "../components/assets/images/about.jpg"
import aboutImgBanner from "../components/assets/images/about-banner.jpg"
import imgs from "../components/assets/images/join1.png"
import { FaBookDead, FaChild } from "react-icons/fa"
import { AiOutlineCheck } from "react-icons/ai"
import { FaUsers, FaChalkboardTeacher, FaRegSmile, FaHandsHelping } from 'react-icons/fa';

export const About = () => {
  return (
    <>
      <section className='about py-16'>
        <div className='container'>
          <div className='heading text-center py-12 '>
            <h1 className='text-3xl font-semibold text-black'> Kenapa harus Smile Kids </h1>
            <span className='text-sm mt-2 block'>you don't have to struggle alone, you've got our assistance and help.</span>
          </div>
          <div className='grid grid-cols-1 gap-5 mt-5 md:grid-cols-2 lg:grid-cols-4 '>
  <AboutCard 
    color='bg-[#2D69F0]' 
    icon={<FaUsers size={50} />} 
    title='Pengasuhan Berkualitas' 
    desc="Membantu anak tumbuh dengan pengalaman belajar menyenangkan."
  /> 
  <AboutCard 
    color='bg-[#DD246E]' 
    icon={<FaChalkboardTeacher size={50} />} 
    title='Kegiatan Edukatif' 
    desc="Menyediakan rencana kegiatan yang mendukung perkembangan anak secara holistik."
  />
  <AboutCard 
    color='bg-[#8007E6]' 
    icon={<FaRegSmile size={50} />} 
    title='Fasilitas Nyaman' 
    desc="Lingkungan yang aman dan nyaman untuk anak-anak belajar dan bermain."
  />
  <AboutCard 
    color='bg-[#0CAE74]' 
    icon={<FaHandsHelping size={50} />} 
    title='Pendamping Profesional' 
    desc="Guru dan pengasuh terlatih untuk memberikan perhatian penuh pada setiap anak."
  />
</div>

        </div>
      </section>
      <AboutContent />
    </>
  )
}
export const AboutCard = (props) => {
  return (
    <div className={`box shadow-md p-5 py-8 rounded-md text-white ${props.color} cursor-pointer transition ease-in-out delay-150 hover:-translate-y-4 duration-300 `}>
      <div className='icon'>{props.icon}</div>
      <div className='text mt-5'>
        <h4 className='text-lg font-semibold my-3'>{props.title}</h4>
        <p className='text-sm'>{props.desc}</p>
      </div>
    </div>
  )
}

export const AboutContent = () => {
  return (
<section className='mb-16'>
  <div className='container flex md:flex-col'>
    <div className='left w-1/3 md:w-full mr-8 md:mr-0 relative'>
      <img src={aboutImg} alt='Tentang SmileKids' className='rounded-xl' />
      <div className='img-group ml-24 mt-3'>
        <img src={imgs} alt='' />
        <span className='text-[14px]'>
          Lebih dari <label className='text-black text-sm'>4,000+</label> anak telah bergabung
        </span>
      </div>
    </div>
    <div className='right w-2/3 md:w-full md:mt-16'>
      <div className='heading w-4/5 md:w-full'>
        <h1 className='text-3xl font-semibold text-black'>
          Tumbuh, Bermain, dan Belajar di SmileKids
        </h1>
        <span className='text-sm mt-2 block leading-6 text-gray-700'>
          SmileKids adalah tempat yang dirancang khusus untuk mendukung tumbuh kembang anak dengan suasana yang aman, nyaman, dan penuh keceriaan. Kami menyediakan program pembelajaran interaktif yang mengasah kreativitas, sosial, serta nilai-nilai kebaikan dalam keseharian mereka.
        </span>
        <ul className='my-5'>
          <li className='text-sm flex items-center gap-5'>
            <AiOutlineCheck className='text-green-500' /> Lingkungan aman dan ramah anak.
          </li>
          <li className='text-sm flex items-center gap-5 my-2'>
            <AiOutlineCheck className='text-green-500' />
            Program edukatif berbasis bermain.
          </li>
          <li className='text-sm flex items-center gap-5'>
            <AiOutlineCheck className='text-green-500' />
            Pengajar berpengalaman dan profesional.
          </li>
        </ul>
        <button className='px-5 py-2 border border-gray-300 rounded-md text-sm'>
          Bergabung Sekarang
        </button>
      </div>
    </div>
  </div>
</section>

  )
}

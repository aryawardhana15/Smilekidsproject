import React, { useState } from "react"
import LogoImg from "../assets/images/logo-smilekids.png"
import { LinkData } from "../assets/data/dummydata"
import { NavLink } from "react-router-dom"
import { BiShoppingBag } from "react-icons/bi"
import { HiOutlineMenuAlt1, HiViewGrid } from "react-icons/hi"

export const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <header className='bg-yellow-50 py-4 text-black sticky z-50 shadow-md top-0 left-0 w-full ' >
        <div className='container flex justify-between items-center '>
          <div className='logo flex items-center gap-0 '>
            <img src={LogoImg} alt='logo' className='h-9 w-14' /> 
            <h1 className=' gap-0.5 text-1xl font-semibold text-yellow-500'>SMILE KIDS</h1>
            {/* <div className='category flex items-center text-sm gap-6'>
              <HiViewGrid size={20} />
              <span>category</span>
            </div> */}
          </div>
          <nav className={open ? "mobile-view" : "desktop-view"}>
            <ul className='flex items-center gap-6'>
              {LinkData.map((link) => (
                <li key={link.id} onClick={() => setOpen(null)}>
                  <NavLink className={({ isActive }) => (isActive ? "text-primary text-sm" : "text-[15px]")} to={link.url}>
                    {link.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className='account flex items-center gap-5'>
            {/* <button>
              <BiShoppingBag size={25} />
            </button> */}
            {/* <button>Login</button>{" "}
            <button className='open-menu' onClick={() => setOpen(!open)}>
              <HiOutlineMenuAlt1 size={25} />
            </button> */}
          </div>
        </div>
      </header>
    </>
  )
}

import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from "../assets/agventure-2.png";
import "./Navbar.css";
import { navItems } from "./NavItems";
import NavLinks from "./NavLinks";





function Navbar() {

  const [open, setOpen] = useState(false)



  return (
    <>
      <nav className='bg-white '>
        <div className="z-50 flex items-center font-medium justify-around">
          <div className='z-50 p-5 md:w-auto w-full flex justify-between'>
            <img src={logo} alt="logo" className="md:cursor-pointer h-9" />

            <div className='text-3xl md:hidden cursor-pointer' onClick={() => setOpen(!open)}>
              <i className={`${open ? "fas fa-times" : "fas fa-bars"}`}>
              </i>
            </div>
          </div>

          <ul className=' md:flex hidden  items-center gap-8 font-[Poppins]'>
            <li>
              <Link to="\" className="py-6 px-3 inline-block">
                Home
              </Link>
            </li>
            <NavLinks></NavLinks>
          </ul>

          <div className='md:block hidden'>

          </div>
          {/* Mobile */}
          <ul className={`z-40
             md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
             duration-500 ${open ? "left-0" : "left-[-100%]"}
          `}>
            <li>
              <Link to="\" className="py-6 px-3 inline-block ">
                Home
              </Link>
            </li>
            <NavLinks></NavLinks>

            <div className="py-5">

            </div>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

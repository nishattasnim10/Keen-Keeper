import React from 'react'
import logo from '../../assets/logo.png'
import { BiHomeAlt2 } from "react-icons/bi";
import { RiTimeLine } from "react-icons/ri";
import { PiChartLine } from "react-icons/pi";
import { NavLink } from 'react-router';

const Navbar = () => {
  return (
      <div className="navbar bg-base-100 shadow-sm px-10 font">
          <div className="navbar-start">
              <img src={logo} alt="Logo" />
          </div>
          <div className="navbar-end "> 

              <NavLink to={"/"} className={({ isActive }) =>
                  `btn border-none flex items-center gap-2 ${isActive ? 'bg-[#244D3F] text-white ' : 'bg-white text-[#64748B]'}`
              }><BiHomeAlt2 />Home</NavLink>
              <NavLink to={"/timeline"} className={({ isActive }) =>
                  `btn border-none flex items-center gap-2 ${isActive ? 'bg-[#244D3F] text-white ' : 'bg-white text-[#64748B]'}`
              }><RiTimeLine />Timeline</NavLink>
              
              <div className="mr-6">
                  <NavLink to={"/stats"} className={({ isActive }) =>
                      `btn border-none flex items-center gap-2 ${isActive ? 'bg-[#244D3F] text-white ' : 'bg-white text-[#64748B]'}`
                  }><PiChartLine />Stats</NavLink>
              </div>
          </div>
          
      </div>
  )
}

export default Navbar
import React from 'react'
import logo from '../../assets/logo.png'
import { BiHomeAlt2 } from "react-icons/bi";
import { RiTimeLine } from "react-icons/ri";
import { PiChartLine } from "react-icons/pi";
import { NavLink } from 'react-router';

const Navbar = () => {
  return (
      <div className="navbar bg-base-100 shadow-sm px-4 md:px-10 flex-wrap gap-4">
         
          <div className="flex-1">
              <img src={logo} alt="Logo" className="w-20 md:w-auto" />
          </div>

          <div className="flex-none flex flex-wrap items-center gap-1 md:gap-4">
              <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                      `btn btn-sm md:btn-md border-none flex items-center gap-1 md:gap-2 px-2 md:px-4 ${isActive ? 'bg-[#244D3F] text-white ' : 'bg-white text-[#64748B]'}`
                  }
              >
                  <BiHomeAlt2 />
                  <span className="text-xs md:text-base">Home</span>
              </NavLink>

              <NavLink
                  to={"/timeline"}
                  className={({ isActive }) =>
                      `btn btn-sm md:btn-md border-none flex items-center gap-1 md:gap-2 px-2 md:px-4 ${isActive ? 'bg-[#244D3F] text-white ' : 'bg-white text-[#64748B]'}`
                  }
              >
                  <RiTimeLine />
                  <span className="text-xs md:text-base">Timeline</span>
              </NavLink>

              <NavLink
                  to={"/stats"}
                  className={({ isActive }) =>
                      `btn btn-sm md:btn-md border-none flex items-center gap-1 md:gap-2 px-2 md:px-4 ${isActive ? 'bg-[#244D3F] text-white ' : 'bg-white text-[#64748B]'}`
                  }
              >
                  <PiChartLine />
                  <span className="text-xs md:text-base">Stats</span>
              </NavLink>
          </div>
      </div>
  )
}

export default Navbar
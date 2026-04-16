import React from 'react'
import { Link } from "react-router";
import { SlHome } from "react-icons/sl";

const NotFoundPage = () => {
  return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4 text-center">
          <h1 className="text-[120px] font-black text-[#2d4a3e] leading-none select-none">
              404
          </h1>

          {/* Main Heading */}
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Page Not Found
          </h2>

          {/* Description */}
          <p className="max-w-xs text-gray-500 text-sm md:text-base mb-8">
              Looks like this friendship link is broken. The page you're looking for doesn't exist or has been moved.
          </p>

          {/*button*/}
          <Link to="/">
          <button className="btn bg-[#2d4a3e] hover:bg-[#1e332a] border-none text-white px-8 normal-case rounded-sm flex items-center gap-2">
               <SlHome />Back to Home
          </button>
          </Link>
      </div>
  )
}

export default NotFoundPage
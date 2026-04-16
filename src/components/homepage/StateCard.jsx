import React from 'react'

const StateCard = () => {
  return (
      <div className=" w-9/12 mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 p-4 mt-5">
          {/* 1. Total Friends Card */}
          <div className="bg-white border border-gray-100 rounded-xl p-8 flex flex-col items-center justify-center shadow-sm">
              <h1 className="text-3xl font-bold text-[#2d4a3e]">10</h1> 
              <p className="text-gray-500 text-sm mt-2">Total Friends</p> 
          </div>

          {/* 2. On Track Card */}
          <div className="bg-white border border-gray-100 rounded-xl p-8 flex flex-col items-center justify-center shadow-sm">
              <h1 className="text-3xl font-bold text-[#2d4a3e]">3</h1>
              <p className="text-gray-500 text-sm mt-2">On Track</p>
          </div>

          {/* 3. Need Attention Card */}
          <div className="bg-white border border-gray-100 rounded-xl p-8 flex flex-col items-center justify-center shadow-sm">
              <h1 className="text-3xl font-bold text-[#2d4a3e]">6</h1>
              <p className="text-gray-500 text-sm mt-2">Need Attention</p>
          </div>

          {/* 4. Interactions This Month Card */}
          <div className="bg-white border border-gray-100 rounded-xl p-8 flex flex-col items-center justify-center shadow-sm">
              <h1 className="text-3xl font-bold text-[#2d4a3e]">12</h1>
              <p className="text-gray-500 text-sm mt-2">Interactions This Month</p>
          </div>

          {/* divider */}
          <div className="md:col-span-4 h-0.5 bg-gray-100 mt-5"></div>

      </div>
  )
}

export default StateCard
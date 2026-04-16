import React from 'react'

const Banner = () => {
  return (
    <div className='w-9/12 items-center text-center mx-auto  mt-15 gap-5'>
          <h1 className='font-bold text-4xl text-[#244D3F ]'>Friends to keep close in your life</h1>
          <p className='text-[#64748B] mt-4'>Your personal shelf of meaningful connections. Browse, tend, and nurture the
              relationships that matter most.</p>
          <button className='bg-[#244D3F] text-white py-2 px-4 rounded-md hover:bg-[#1a3a2d] mt-5 cursor-pointer'>+ Add a Friend</button>
        
    </div>
  )
}

export default Banner
import React from 'react'

export default function Navbar() {
  return (
    <div>

        <div className='h-[64px] p-2 flex justify-between items-center bg-gray-400'>
            {/* name logo */}
            <div className=' ml-[4%]'>
                <h2 className='font-bold text-4xl text-teal-700 whitespace-normal '>Emaan   Waqar</h2>
            </div>
            {/* pages links */}
            <div className='flex gap-8 mr-[4%] font-bold'>
                <a href="">About</a>
                <a href="">Projects</a>
                <a href="">Blog</a>
            </div>
        </div>
    </div>
  )
}

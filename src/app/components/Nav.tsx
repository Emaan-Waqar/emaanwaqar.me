import React from 'react'

export default function Nav() {
  return (
    <div>
        <div className='flex m-1 p-2 justify-between'>
            {/* logo */}
<div className='items-start'>EmaanWaqar</div>
            {/* buttons */}
            <div className=''>
            <nav className='gap-4'>
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Portfolio</a>
            </nav>
            </div>
        </div>
        <br />
    </div>
  )
}

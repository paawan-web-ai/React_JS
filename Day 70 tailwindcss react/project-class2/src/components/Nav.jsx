import React from 'react'

const Nav = () => {
  return (
    <div className='flex flex-row items-center justify-between p-3 px-5 bg-black text-white font-bold'>
      <div className='text-2xl'>DVSY</div>
      <div className='flex gap-4'>
        <button className='para-btn bg-gray-700 p-1 px-2 rounded-sm'>DESIGNERS</button>
        <button className='para-btn bg-gray-700 p-1 px-2 rounded-sm'>COLLARS</button>
        <button className='para-btn bg-gray-700 p-1 px-2 rounded-sm'>EVENTS</button>
        <button className='para-btn bg-gray-700 p-1 px-2 rounded-sm'>BLOGS</button>
        <button className='para-btn bg-gray-700 p-1 px-2 rounded-sm'>CARD</button>
        <button className='bg-orange-500 p-1 px-2 rounded-sm text-black'>GET IN TOUCH</button>
      </div>
    </div>
  )
}

export default Nav

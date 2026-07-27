import React from 'react'
import { Outlet } from 'react-router-dom'


const Courses = () => {
   
  return (
    <div>
     <div className='mt-20 bg-red-800 text-white flex gap-10 flex-nowrap w-full overflow-hidden'>
        <p className='shrink-0'>Sale is Live!!!</p>
        <p className='shrink-0'>Sale is Live!!!</p>
        <p className='shrink-0'>Sale is Live!!!</p>
        <p className='shrink-0'>Sale is Live!!!</p>
        <p className='shrink-0'>Sale is Live!!!</p>
        <p className='shrink-0'>Sale is Live!!!</p>
        <p className='shrink-0'>Sale is Live!!!</p>
        <p className='shrink-0'>Sale is Live!!!</p>
     </div>
      <Outlet/>
    </div>
  )
}

export default Courses

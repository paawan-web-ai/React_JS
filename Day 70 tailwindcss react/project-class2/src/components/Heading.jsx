import React from 'react'

const Heading = () => {
  return (
    <div className='w-full p-2 px-3'>
      <div className='relative w-full'>
        <img className='w-full  rounded-2xl' src="https://images.unsplash.com/photo-1765916093860-28dc1bdd2de9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>
      <div className='svg-positon  absolute  bottom-1 right-25 flex gap-2 flex-row items-center bg-gray-600 p-2 px-3 rounded-2xl'>
        <i class="svg-icon ri-arrow-down-line"></i>
        <p className='text-white '>LEARN MORE</p>
      </div>
    </div>
  )
}

export default Heading

import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
   const navigate = useNavigate()
  return (
    <div className='flex items-center justify-between p-10 bg-purple-700 text-4xl absolute w-full bottom-0'>
      <h2>Footer</h2>
      <button onClick={()=>{
        navigate('/course')
      }} className='p-5 cursor-pointer'>Explore Courses</button>
    </div>
  )
}

export default Footer

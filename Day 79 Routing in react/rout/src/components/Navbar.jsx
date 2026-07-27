import React from 'react'
import { Link, Links } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className='flex justify-between items-center px-10 py-4 bg-pink-400'>
     <h1 className='text-3xl font-bold'>Navbar</h1>

     <input type="text" className='border-2 w-23' />

     <div className='flex gap-10 font-bold'>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/product'>Products</Link>
      <Link to={'/courses'}>Courses</Link>
     </div>
    </div>
    </div>
  )
}

export default Navbar

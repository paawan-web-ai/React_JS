import React from 'react'

const Navbar = (props) => {
    // console.log(props.color)
  return (
    <div style={{backgroundColor:props.color}} className='px-8 py-2 flex flex-row items-center justify-between'>
      <h1 className='text-2xl'>Sheriyans</h1>
      <div className='flex gap-10'>
        <h2 className='text-sm'>home</h2>
        <h2 className='text-sm'>home</h2>
        <h2 className='text-sm'>home</h2>
      </div>
    </div>
  )
}

export default Navbar

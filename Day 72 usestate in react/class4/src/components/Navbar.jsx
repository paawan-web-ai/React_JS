import React from 'react'

const Navbar = (props) => {
    // console.log(props.links)
    
  return (
    <div style={{backgroundColor:props.color}} className=' text-white px-8 py-3 flex flex-row items-center justify-between '>
      <h2 className='text-2xl'>{props.title}</h2>
      <div className='flex gap-10'>

      {props.links.map((val,index)=>{
        return  <h3 key={index} className='text-sm '>{val}</h3>
        
      })}
      </div>
    </div>
  )
}

export default Navbar

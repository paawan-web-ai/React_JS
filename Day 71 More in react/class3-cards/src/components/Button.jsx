import React from 'react'

const Button = (props) => {
    console.log(props)
  return (
    <div className='w-fit bg-emerald-600 text-2xl px-10 py-3 font-bold text-white rounded-sm '>
      {props.text}
    </div>
  )
}

export default Button

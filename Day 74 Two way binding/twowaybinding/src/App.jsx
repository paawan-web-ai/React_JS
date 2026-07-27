import React, { useState } from 'react'

const App = () => {
  //show name in h1
  const [show, setshow] = useState("")
  const [name, setname] = useState("")
  return (
    <div className='flex justify-center flex-col gap-10 items-center h-screen'>
      <form 
      className='flex flex-col items-center gap-5'
      onSubmit={(e)=>{
        e.preventDefault()
        setshow(name)
        setTimeout(() => {
          setname("")
        },2000);
      }}
      >
        <input 
        required
        onChange={(e)=>{
          setname(e.target.value)
        }}
        className='border-2 h-10 text-center bg-amber-100'
        value={name}
        type="text" 
         placeholder='Enter your name'
        />
        <button className='py-2 px-5 bg-violet-600'>submit</button>
      </form>

    <h1 className='text-2xl font-bold'>{show}</h1>
    </div>
  )
}

export default App

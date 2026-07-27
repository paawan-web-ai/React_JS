import React from 'react'
import { useState } from 'react'
import Card from './components/Card';
const App = () => {
  const [user, setuser] = useState("");
  const [role, setrole] = useState("");
  const [img, setimg] = useState("");
  const [dispcription, setdispcription] = useState("");

  const [allusers, setallusers] = useState([])
  const submitHandler=(e)=>{
    e.preventDefault()

    setallusers([...allusers,{user,role,img,dispcription}])

    console.log(allusers)
    setuser("")
    setrole("")
    setimg("")
    setdispcription("")
  }

  const deleteElement =(indexToDelete)=>{
    setallusers(prev=>
    prev.filter((_,idx)=> idx !== indexToDelete)
  )}
  
  return (
    <div className='min-h-screen bg-black'>
      <form 
       onSubmit={(e)=>{
        submitHandler(e)
       }}
       className='flex justify-center flex-wrap p-5 w-[98%]'
      >
        <input 
         onChange={(e)=>{
          setuser(e.target.value)
         }}
         value={user}
        className='text-2xl font-semibold lg:w-[48%] m-2 border rounded p-2' 
        type="text" 
        placeholder='Enter Name' />

        <input 
        onChange={(e)=>{
          setrole(e.target.value)
        }}
        value={role}
        className='text-2xl font-semibold lg:w-[48%] m-2 border rounded p-2' 
        type="text" 
        placeholder='Enter Role' />

        <input 
         onChange={(e)=>{
          setimg(e.target.value)
         }}
         value={img}
        className='text-2xl font-semibold lg:w-[48%] m-2 border rounded p-2' 
        type="text" 
        placeholder='Image-URL' />

        <input 
        onChange={(e)=>{
          setdispcription(e.target.value)
        }}
        value={dispcription}
        className='text-2xl font-semibold lg:w-[48%] m-2 border rounded p-2' 
        type="text" 
        placeholder='Enter Dispcription' />

        <button 
        className='bg-sky-800 py-2 sm:w-[89%] lg:w-[97%] rounded text-xl font-bold mt-2 active:scale-98 active:bg-sky-950'>Create Card</button>
      </form>
      <div className='p-5 w-[98%] flex flex-wrap gap-4 m-5'>
      {allusers.map((val,index)=>{
        return(
         <Card 
           key={index}
           user={val.user}
           role={val.role}
           img={val.img}
           dispcription={val.dispcription}
           onDelete = {()=>deleteElement(index)}
         />
        )
      })}
      </div>
    </div>
  )
}

export default App

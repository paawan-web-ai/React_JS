import React, { useState } from 'react'
import Card from './components/Card'

const App = () => {
  const [name, setname] = useState("")
  const [role, setrole] = useState("")
  const [img, setimg] = useState("")
  const [description, setdescription] = useState("")

  const [alluser, setalluser] = useState([])

  
   const submitHandler=(e)=>{
    e.preventDefault()
    const newusers ={name:name,role:role,img:img,description:description}
    
    setalluser([...alluser , newusers])
   }

   const deleteHandler = (indexdeletevala)=>{
    setalluser(prev=>
      prev.filter((__,idx)=>idx !== indexdeletevala)
    )
   }

  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input
          onChange={(e)=>{
            setname(e.target.value)
          }}
          value={name}
         type="text" placeholder='Enter name' />
        <input
          onChange={(e)=>{
            setrole(e.target.value)
          }}
          value={role}
         type="text" placeholder='Enter role' />
        <input
          onChange={(e)=>{
            setimg(e.target.value)
          }}
          value={img}
         type="text" placeholder='img-url' />
        <input
          onChange={(e)=>{
            setdescription(e.target.value)
          }}
          value={description}
         type="text" placeholder='Enter description' />

         <button>CreateElement</button>
      </form>

      {alluser.map((val,index)=>{
        return <Card
                key={index}
                name={val.name}
                role={val.role}
                img={val.img}
                description={val.description}
                delete = {()=>deleteHandler(index)}
               />
      })}
    </div>
  )
}

export default App

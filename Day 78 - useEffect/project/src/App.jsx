import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
const App = () => {
  
  const [user, setuser] = useState('')
  const [count, setcount] = useState(0) 

  const getData = async () =>{
      const response = await axios.get("https://randomuser.me/api/")
    setuser((response.data.results[0].name.first) + " " +( response.data.results[0].name.last))
  }

  useEffect(()=>{
    getData()
  },[count])

  return (
    <div>
     {user}

     <h1>{count}</h1>
     <button onClick={()=>setcount(count + 1)}>click</button>
    </div>
  )
}

export default App

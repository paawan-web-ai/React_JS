import React, {useState } from 'react'

const App = () => {
  const [title, settitle] = useState("")
//array 1
  const [allusers, setallusers] = useState([])

  const submitHandler=(e)=>{
    e.preventDefault()
    // //2
    // const newallUsers = [...allusers]
    // //3
    // newallUsers.push(title)
    // //4
    // setallusers(newallUsers)
    setallusers([...allusers,title])

    
    settitle("")
  }
  return (
    <div>
      <form 
       onSubmit={(e)=>{
        submitHandler(e)
       }}
      >
        <input 
        onChange={(e)=>{
          settitle(e.target.value)
        }}
        value={title}
        required
        type="text"
        placeholder='enter your name'
         />
         <button>Submit</button>
      </form>
    
    {allusers.map((user,index)=>{
      return <li key={index}>{user}</li>
    })}
    </div>
  )
}

export default App

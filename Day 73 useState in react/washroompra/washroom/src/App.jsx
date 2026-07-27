import React, { useState } from 'react'
import Washroom from './components/Washroom'

const App = () => {
  const [user, setuser] = useState("Male")
  return (
    <div className='parent'>
      <h1>your gender is ~ {user}</h1>
      <button onClick={() => {
        if (user === "Male") {
          setuser("Female")
        } else if (user === "Female") {
          setuser("Other")
        } else {
          setuser("Male")
        }
      }}>change</button>
      <Washroom user={user} />
    </div>
  )
}

export default App

import React, { useState } from 'react'
import "./index.css"
import Card from './components/Card'

const App = () => {
  const [username, setusername] = useState("")
  const [email, setemail] = useState("")
  const [imgurl, setimgurl] = useState("")
  const [description, setdescription] = useState("")

  const LocalData = JSON.parse(localStorage.getItem("all-users")) || []


  const [allusers, setallusers] = useState(LocalData)

  function handleSubmit(e) {

    const oldUsers = [...allusers, { username, email, imgurl, description }]

    setallusers(oldUsers)

    localStorage.setItem('all-users', JSON.stringify(oldUsers))

    e.preventDefault()
  }

  return (
    <div className='form-container'>

      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => {
            setusername(e.target.value)
          }}
          value={username}
          type="text"
          placeholder='Enter username' />

        <input
          onChange={(e) => {
            setemail(e.target.value)
          }}
          value={email}
          type="email"
          placeholder='Enter email' />

        <input
          onChange={(e) => {
            setimgurl(e.target.value)
          }}
          value={imgurl}
          type="text"
          placeholder='Enter imgUrl' />

        <input
          onChange={(e) => {
            setdescription(e.target.value)
          }}
          value={description}
          type="text"
          placeholder='Enter discription' />

        <button>Create Element</button>
      </form>

      <div>
        {allusers.map((val, idx) => {
          return (<Card
            username={val.username}
            email={val.email}
            imgurl={val.imgurl}
            description={val.description}
          />)
        })}
      </div>

    </div>
  )
}

export default App

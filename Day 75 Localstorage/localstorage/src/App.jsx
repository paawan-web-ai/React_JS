import React, { useState } from 'react'

const App = () => {

  const [username, setusername] = useState("")
  const [userrole, setuserrole] = useState("")
  const [age, setage] = useState("")
  const [userdescription, setuserdescription] = useState("")

  const [allusers, setallusers] = useState([])



  const submitHandler = (e) => {
    e.preventDefault()

    const newUser = {
      username,
      userrole,
      age,
      userdescription
    }

    setallusers((prev) => {
      const updateduser = [...prev, newUser]
      // console.log(updateduser)
      return updateduser;
    })

    // console.log("form submitted")


    setusername("")
    setuserrole("")
    setage("")
    setuserdescription("")
  }
  return (
    <div className='h-screen bg-black text-white min-h-screen'>
      <form
        onSubmit={(e) => {
          submitHandler(e)
        }}
        className='flex flex-wrap justify-center'
      >
        <input
          onChange={(e) => {
            setusername(e.target.value)
          }}
          value={username}
          className='text-xl font-semibold border-2 px-5 py-2 rounded m-2 w-[45%]'
          type="text"
          placeholder='Enter your name' />

        <input
          onChange={(e) => {
            setage(e.target.value)
          }}
          value={age}
          className='text-xl font-semibold border-2 px-5 py-2 rounded m-2 w-[45%]'
          type="text"
          placeholder='Enter Age' />

        <input
          onChange={(e) => {
            setuserrole(e.target.value)
          }}
          value={userrole}
          className='text-xl font-semibold border-2 px-5 py-2 rounded m-2 w-[45%]'
          type="text"
          placeholder='Enter Role' />

        <input
          onChange={(e) => {
            setuserdescription(e.target.value)
          }}
          value={userdescription}
          className='text-xl font-semibold border-2 px-5 py-2 rounded m-2 w-[45%]'
          type="text"
          placeholder='Enter Description' />

        <button
          className=' text-xl font-semibold mt-3 w-[92%] rounded-md py-2 px-5 bg-sky-800 transition-transform duration-150 active:scale-95'>Create user</button>

      </form>

  <div className="mt-5 w-[98%] mx-auto p-3">
  {allusers.map((user, index) => (
    <div
      key={index}
      className="border border-gray-700 p-5 m-3 rounded flex justify-center items-center gap-[25%]"
    >
      <h2 className="text-xl font-bold">{user.username}</h2>
      <p className="text-xl text-sky-400">{user.userrole}</p>
      <p className="text-xl text-gray-300">{user.userdescription}</p>
      <p className="text-xl text-gray-500 break-all">
        {user.age}
      </p>
    </div>
  ))}
</div>


    </div>
  )
}

export default App

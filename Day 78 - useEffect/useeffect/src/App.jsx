// import React, { useEffect, useState } from 'react'

// const App = () => {

//   const [counter, setcounter] = useState(0)

//   useEffect(()=>{
//     console.log('useEffect is running..')
//   })

//   return (
//     <div>
//       <h1>{counter}</h1>
//       <button onClick= {()=>setcounter(counter + 1)}>increase</button>
//     </div>
//   )
// }

// export default App

// ----------------------------------------

// import React, { useEffect, useState } from 'react'

// const App = () => {

//   const [user, setuser] = useState("")
  
//   const submitHandler = (e) =>{
//     e.preventDefault()
//     console.log(user)
//   }

//   useEffect(()=>{
//     console.log("hello")
//   })
//   return (
//     <div className='bg-sky-950 w-fit p-5 m-5'>
//      <form 
//       className='flex gap-5'
//       onSubmit={(e)=>{
//         submitHandler(e)
//       }}
//      >
//       <input 
//       className='border-2 py-2 text-xl'
//        onChange={(e)=>{
//         setuser(e.target.value)
//        }}
//        value={user}
//       type="text" />
//       <button className='bg-red-500 px-3 font-bold'>submit</button>
//      </form>
    
//     </div>
//   )
// }

// export default App

// ---------------------------------------

// import React, { useEffect, useState } from 'react'

// const App = () => {
//   const [count, setcount] = useState(0)
//   const [title, settitle] = useState('')
  
//   useEffect(()=>{
//     console.log("useEffect")
//   },[count]) // now count has become this useEffect dependencyy(jab jab count ki value change hogi useffect uttni baar chaalega )

//   return (
//     <div className='bg-red-500 w-fit p-3'>
//       <p className='text-2xl font-semibold mb-2'>Input</p>
//       <input 
//        onChange={(e)=>{settitle(e.target.value)}}
//        value={title}
//        className=' border'
//        type="text"
//        placeholder='Enter Name'
//        />

//     <div className='mt-5 text-4xl'>
//       <h1>{count}</h1>
//       <button onClick={(e)=>{
//         setcount(count + 1)
//       }}>Increase</button>
//     </div>

//     </div>
//   )
// }

// export default App

// --------------------------------------------

import React, { useEffect, useState } from 'react'

const App = () => {
  const [number1, setnumber1] = useState(0)
  const [number2, setnumber2] = useState(0)
  const [number3, setnumber3] = useState(0)

  useEffect(()=>{
    console.log("useEffect")
  },[number1,number2,number3])

  return (
    <div>
      <h1>{number1}</h1>
      <button
       onClick={()=>{
        setnumber1(Math.floor(Math.random()*100))
       }}
      >Change Number1</button>

      <br />
      <br />

      <h1>{number2}</h1>
      <button
       onClick={()=>{
        setnumber2(Math.floor(Math.random()*100))
       }}
      >Change Number2</button>

      <br />
      <br />

      <h1>{number3}</h1>
      <button
       onClick={()=>{
        setnumber3(Math.floor(Math.random()*100))
       }}
      >Change Number3</button>
    </div>
  )
}

export default App


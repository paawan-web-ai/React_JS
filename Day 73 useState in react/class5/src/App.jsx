// import React, { useState } from 'react'

// const App = () => {
//   const [user, setuser] = useState("anubhav")
//   let val = 0
//   return (
//     <div>
//       <h1>{user}</h1>
//       <button onClick={() => {
//         user === "anubhav" ? setuser("sarthak") : setuser("anubhav")
//       }}>change user</button>
//     </div>
//   )
// }

// export default App

// -------------------------------

// import React, { useState } from 'react'

// const App = () => {
//   const [num, setnum] = useState(0)
//   return (
//     <div>
//       <h1>{num}</h1>
//       <button onClick={()=>{
//         setnum(num+1)
//       }}>increase</button>
//       <button onClick={()=>{
//         setnum(num-1)
//       }}>decrease</button>
//       <button onClick={()=>{
//         setnum(0)
//       }}>clearAll</button>
//     </div>
//   )
// }

// export default App

//--------------------------------------------

// import React, { useState } from 'react'

// const App = () => {
//   const [num, setnum] = useState(0)
//   return (
//     <div>
//       <div className='box'>
//         {num}
//       </div>
//       <button onClick={() => {
//         const rdm = Math.floor(Math.random() * 100)
//         setnum(rdm)
//       }}>Click here</button>
//     </div>
//   )
// }

// export default App;

// -------------------------------------------

// import React, { useState } from 'react'

// const App = () => {
//   let arr =['sarthak','rohan','sohan','vinod','bhopal','suhail']
//   const [num, setnum] = useState("sohan")
//   return (
//     <div>
//       <h1>{num}</h1>
//       <button onClick={()=>{
//         let rdm = Math.floor(Math.random()*arr.length)
//         setnum(arr[rdm])
//       }}>change</button>
//     </div>
//   )
// }

// export default App


//---------------------------------

// import React, { useState } from 'react'

// const App = () => {
//   let arr =['sarthak','rohan','sohan','vinod','bhopal','suhail']
//   const [num, setnum] = useState(0)
//   return (
//     <div>
//       <h1>{arr[num]}</h1>
//       <button onClick={()=>{
//         if(num<arr.length-1){
//           setnum(num + 1)
//         }
//       }}>change</button>
//     </div>
//   )
// }

// export default App

// ------------------------------------

// import React, { useState } from 'react'

// const App = () => {

//   const [marks, setmarks] = useState([53,32,13,87,33,65,42])
//   return (
//     <div>
//       {marks.map(function (val, index) {
//         return <li key={index}>student {index + 1} = {val} = {val>33 ? "Pass" : "Fail" }</li>
//       })}

//       <button onClick={() => {
//         const newmarks = marks.map(function (val) {
//           return val + 5
//         })
//         setmarks(newmarks)
//       }}>give them grace</button>
//     </div>
//   )
// }

// export default App

//----------------------------------------


// import React, { useState } from 'react'
// import Men from './component/Men'
// import Women from './component/Women'

// const App = () => {
//   const [gender, setgender] = useState("Male")

//   const changeGender = () => {
//     if (gender === "Male") {
//       setgender("Female")
//     } else {
//       setgender("Male")
//     }
//   }
//   return (
//     <div className='parent'>
//       <h1>{gender}</h1>
//       <button onClick={changeGender}>Change gender</button>

//       {gender === "Male" ? <Men /> : <Women />}
//     </div>
//   )
// }

// export default App


// --------------------------------------------------------

import React, { useState } from 'react'

const App = () => {
    const [king, setking] = useState("a")
    const [queen, setqueen] = useState("q")

    const changeKing = () => {
        setking(king === "a" ? "b" : "a")
    }
    const changeQueen = () => {
        setqueen(queen === "q" ? "r" : "q")
    }
    return (
        <div>
            <h1>{king}x{queen}</h1>
            <button onClick={changeKing}>changeKing</button>
            <button onClick={changeQueen}>changeQueen</button>

        </div>
    )
}

export default App

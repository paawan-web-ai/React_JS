// import React, { useState } from 'react'

// const App = () => {
//   const [king, setking] = useState('ram')
//   const [queen, setqueen] = useState('sham')


//   const changeking=()=>{
//     setking("popo")
//   }

//   return (
//     <div>
//       <h1><span>{king}</span> X <span>{queen}</span></h1>
//       <button onClick={changeking}>change king</button>
//       <button onClick={(e)=>{
//         setqueen("sopo")
//       }}>change queen</button>
//     </div>
//   )
// }

// export default App

// --------------------------------------------------------------

// import React, { useState } from 'react'

// const App = () => {
//   const arr =["ram","sham",'alok','rafle','shashi','tanvi']
//   const [name, setname] = useState("names")
//   return (
//     <div>
//        <h1>{name}</h1>
//        <button onClick={(e)=>{
//         let rdm = Math.floor(Math.random()*arr.length)
//         setname(arr[rdm])
//        }}>change Name</button>
//     </div>
//   )
// }

// export default App


// -----------------------------------------------

// import React, { useState } from 'react'

// const App = () => {
//   const [number, setnumber] = useState(0)
//   return (
//     <div>
//       <h1>{number}</h1>
//       <button
//       onClick={()=>{
//         setnumber(number+1)
//       }}
//       >increase</button>
//       <button
//       onClick={()=>{
//         setnumber(number-1)
//       }}
//       >
//         decrease
//       </button>
//       <button
//       onClick={()=>{
//         setnumber(number+5)
//       }}
//       >
//         Jump by 5
//       </button>
//       <button
//       onClick={()=>{
//         setnumber(0)
//       }}
//       >reset</button>
//     </div>
//   )
// }

// export default App


// -------------------------------------------------

// import React, { useState } from 'react'

// const App = () => {

//   const [color, setcolor] = useState("rgb(0,0,0)")
//   return (
//     <div>
//       <div className="box" style={{backgroundColor:color}}></div>
//       <button
//       onClick={()=>{
//         const r = Math.floor(Math.random()*256)
//         const g = Math.floor(Math.random()*256)
//         const b = Math.floor(Math.random()*256)

//         setcolor(`rgb(${r},${g},${b})`)
//       }}
//       >change Color</button>
//     </div>
//   )
// }

// export default App


//2

// import React, { useState } from 'react'

// const App = () => {
//   const [color, setcolor] = useState("rgb(0,0,0))")
//   return (
//     <div>
//       <div className='box' style={{ backgroundColor: color }}></div>
//       <button
//         onClick={() => {
//           let r = Math.floor(Math.random() * 256)
//           let g = Math.floor(Math.random() * 256)
//           let b = Math.floor(Math.random() * 256)

//           setcolor(`rgb(${r},${g},${b})`)
//         }}
//       >change</button>
//     </div >
//   )
// }

// export default App



// -------------------------------------------

// import React, { useState } from 'react'

// const App = () => {
//   const arr = ['sarthak','harsh','ajay','ankit','hitesh']

//   const [name, setname] = useState(0)

//   return (
//     <div>
//       <h1>{arr[name]}</h1>
//       <button
//       onClick={()=>{
//         if(name<arr.length-1){
//         setname(name + 1)
//         }
//       }}
//       >change</button>
//     </div>
//   )
// }

// export default App


import React, { useState } from 'react'

const App = () => {
  const arr = ['sarkthak', 'harsh', 'ajay', 'ankit', 'hitesh']
  const [name, setname] = useState(0)
  return (
    <div>
      <h1>{arr[name]}</h1>
      <button
        onClick={() => {
          if (name < arr.length - 1) {
            setname(name + 1)
          }
        }}
      >
        change
      </button>
    </div>
  )
}

export default App



// ---------------------------------------------

// import React, { useState } from 'react'

// const App = () => {
//   const [marks, setmarks] = useState([88,76,90,67,28])

//   const graceStudent =()=>{
//      const update = marks.map((m)=>{
//       return m > 20 ? m + 10 : m
//     })
//     setmarks(update)
//   }
//   return (
//     <div>
//       {marks.map((val,idx)=>{
//           return <h1 key={idx}>student {idx+1} = {val} ({val>30 ?'Pass':'Fail'})</h1>
//       })}

//       <button
//       onClick={graceStudent}
//       >Give Grace</button>
//     </div>
//   )
// }

// export default App

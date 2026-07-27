// import React from 'react'
// import Card from './components/card'
// const App = () => {

//   const age = 18; 
//   const user = 'sarthak'
//   const arr = [10,20,30,40]
//   return (
//     <div className='text-red-500 text-4xl'>
//       {/* app
//       <Card/> */}
//       <h1>user = {user}</h1>
//      <h2>age={age}</h2> 

//      {/* <p>{arr.map(function(val,index){
//       return <li key={index}>{index}-{val}</li>
//      })}</p> */}

//     <h1></h1>
     
//     </div>
//   )
// }

// export default App

// ------------(MAP)----------------

// import React from 'react'

// const App = () => {

//   const arr = ['anubhav','bixi','chandu','dev']

//   return (
//     <div>
//       <ul>{arr.map((val , index)=>{
//         return <li key={index}>{val}</li>
//       })}</ul>
//     </div>
//   )
// }

// export default App

// ------------(Filter)----------------

// import React from 'react'

// const App = () => {
//   const arr = [90,80,77,30]
//   return (
//     <div>
//       {arr.filter(function(elem){
//         return elem>33
//       })}
//     </div>
//   )
// }

// export default App


// import React from 'react'

// const App = () => {
//   const arr = [10, 20, 30, 40, 50]  
//   return (
//     <div>
//       {arr.filter((elem)=>elem>33)
//       .map((val,index)=>{
//         return <li key={index}>{index} - {val}</li>
//       })
//       }
//     </div>
//   )
// }

// export default App


// ---------------------------------------------------

import React from 'react'
import Card from './components/card'
const App = () => {
  return (
    <div>
      {Card(10,20)}
      {Card("Sarthak")}
    </div>
  )
}

export default App



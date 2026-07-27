// import React from 'react'

// // const Cards = (user,age) => {
// const Cards = (prop) => {
//     console.log(prop)
//   return (
//     <div className='bg-white w-fit px-10 py-6 rounded-sm border-8 border-red-500'>
//       {/* <h1 className='text-4xl font-semibold'>{user}-{age}</h1> */}
//       <h1 className='text-4xl font-semibold'>{prop.user}-{prop.age}</h1>
//     </div>
//   )
// }

// export default Cards

import React from 'react'

const Cards = (prop) => {
    console.log(prop)
  return (
    <div className='bg-white h-50 w-100 px-10 py-6 rounded-sm border-8 border-red-500'>
      <h1 className='text-4xl font-bold text-red-600 '>{prop.user}</h1>
    </div>
  )
}

export default Cards


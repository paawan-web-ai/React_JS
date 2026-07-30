// import React from 'react'

// const Section = (props) => {
//   return (
//     <div className='h-140 bg-zinc-700'>
//       <h1 className='text-xl'>All Sections</h1>
//       {props.children[0]}
//       {props.children[1]}
//     </div>
//   )
// }

// export default Section

//---------------------------------------------

import React, { useContext } from 'react'
import { userDataContext } from '../context/UserContext'

const Section = () => {

  const data = useContext(userDataContext)

  return (
    <div className='h-140 bg-zinc-700'>
      <h1 className='text-xl'>All Sections</h1>
      <h2>{data[0].name}</h2>
    </div>
  )
}

export default Section

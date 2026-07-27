import React from 'react'

const Lower = (lower) => {
  return (
     <div className='bottom'>
        <h1>{lower.user}</h1>
        <h4>{lower.email}</h4>
        <h3>{lower.role}</h3>
      </div>
  )
}

export default Lower

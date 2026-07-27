import React from 'react'
import Upper from './Upper'
import Lower from './Lower'
const Card = (props) => {
    // console.log(props)
  return (
    <div className='card'>
      <Upper 
       img = {props.profile}
      />
      <Lower
       user={props.user}
       email={props.email}
       role={props.role}
      />
    </div>
  )
}

export default Card

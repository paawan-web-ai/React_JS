import React from 'react'
import { Link, useParams } from 'react-router-dom'

const AnyCourse = () => {
   const params = useParams()
//    console.log(params.courseId)
  return (
    <div>
        <h1 className='capitalize text-3xl font-bold absolute top-25 left-1/2 -translate-x-1/2 underline whitespace-nowrap'>{params.courseId} Course Page
      </h1>
    </div>
  )
}

export default AnyCourse

import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetail = () => {
   const param = useParams()
  return (
    <div>
          <h1 className='capitalize text-3xl font-bold absolute top-25 left-1/2 -translate-x-1/2 underline whitespace-nowrap'>{param.courseId} Course Details
      </h1>
    </div>
  )
}

export default CourseDetail

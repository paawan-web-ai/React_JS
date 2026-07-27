import React from 'react'
import Course from './Course'

const AllCourses = ({ courseData }) => {
    console.log(courseData)
    return (
        <div>
            Allcourses
            <Course />
            <Course />
            <Course />
            <Course />
        </div>
    )
}

export default AllCourses

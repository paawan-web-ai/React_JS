import React from 'react'
import Section1 from './Section1'
import Section2 from './Section2'

const AllSections = ({ courseData }) => {

    // console.log(props)
    // console.log(courseData)

    return (
        <div>
            All_Sections
            <Section1 />
            <Section2 courseData={courseData} />
        </div>
    )
}

export default AllSections

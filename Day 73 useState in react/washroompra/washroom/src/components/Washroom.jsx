import React from 'react'

const Washroom = (pros) => {
    return (
        <div className={`wash ${pros.user}`}>
            <h1>{pros.user}</h1>
        </div>
    )
}

export default Washroom

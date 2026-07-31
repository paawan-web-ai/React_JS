import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Section2 = () => {
    const value = useContext(ThemeDataContext)
    return (
        <div>
            <h1>Section2</h1>
            <p>{value}</p>
        </div>
    )
}

export default Section2

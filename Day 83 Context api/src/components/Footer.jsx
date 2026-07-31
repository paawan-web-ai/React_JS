import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Footer = () => {

    const value = useContext(ThemeDataContext)

    return (
        <div className='foot'>
            <h1>Footer</h1>
            <p>{value}</p>
        </div>
    )
}

export default Footer

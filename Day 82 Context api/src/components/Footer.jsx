import React, { useContext } from 'react'
import { userDataContext } from '../context/UserContext'

const Footer = () => {

    const data = useContext(userDataContext)
    return (
        <div className='absolute bottom-0 h-10 w-full bg-blue-700 flex gap-5'>
            <h1>Footer</h1>
            <p>{data[2].name}</p>
        </div>
    )
}

export default Footer

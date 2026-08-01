import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate()

    return (
        <div className='home'>
            <h1>this is home page</h1>
            <button
                onClick={() => {
                    navigate("/product")
                }}
                className='home-btn'
            >Explore Products</button>
        </div>
    )
}

export default Home

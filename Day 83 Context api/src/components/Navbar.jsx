import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Navbar = () => {

    const [theme, settheme] = useContext(ThemeDataContext)

    return (
        <div className='nav'>
            <h1>Navbar </h1>
            <p>{theme}</p>
            <button
                onClick={() => {
                    (theme === "light" ? settheme("dark") : settheme("light"))
                }}
            >Change Theme</button>
        </div>
    )
}

export default Navbar

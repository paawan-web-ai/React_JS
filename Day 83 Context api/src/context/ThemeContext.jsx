import React, { createContext, useState } from 'react'

export const ThemeDataContext = createContext()

const ThemeContext = (props) => {

    const [theme, settheme] = useState('light')

    return (
        <ThemeDataContext.Provider value={[theme, settheme]}>
            {props.children}
        </ThemeDataContext.Provider>
    )
}

export default ThemeContext

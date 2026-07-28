import React, { useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {

  const [theme, settheme] = useState('light')


  const changeTheme = (value) => {
    settheme(value)
  }

  return (
    <div>
      {/* <Navbar theme={theme} settheme={settheme} /> */}
      <Navbar theme={theme} changeTheme={changeTheme} />

    </div>
  )
}

export default App

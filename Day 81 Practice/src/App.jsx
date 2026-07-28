import React, { useState } from 'react'
import Nav from './components/Nav'

const App = () => {

  const [value, setvalue] = useState('')

  const changeTheme = (theme) => {
    setvalue(theme)
    console.log(theme)
  }

  return (
    <div className={`main-div ${value}`}>
      <Nav value={value} changeTheme={changeTheme} />
    </div>
  )
}

export default App

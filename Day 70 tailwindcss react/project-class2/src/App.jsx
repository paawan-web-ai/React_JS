import React from 'react'
import Nav from './components/Nav'
import Heading from './components/Heading'
import Cards from './components/Cards'
const App = () => {
  return (
    <div className='bg-black h-full'>
      <Nav/>
      <Heading/>
      <Cards/>
    </div>
  )
}

export default App

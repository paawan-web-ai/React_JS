import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Section from './components/Sections'

const App = () => {
  return (
    <div>
      {/* <Navbar brand="Sheriyans">
        <h1 className='text-red-700'>Hello Guys!!!!</h1>
      </Navbar> */}

      {/* <Section>
        <h1>Halku re</h1>
        <h2>Batman re</h2>
      </Section> */}

      <Navbar />
      <Section />
      <Footer />
    </div>
  )
}

export default App

// import React from 'react'
// import axios from 'axios'

// const App = () => {

//   const getData = async () => {

//     try {
//       const response = await axios.get("http://localhost:8000/data")
//       console.log(response.data)
//     } catch (err) {
//       console.log(err)
//     }
//   }

//   return (
//     <div>
//       <button onClick={getData}>Click</button>
//     </div>
//   )
// }

// export default App

//--------------------------------------------

import React from 'react'
import Navbar from './components/Navbar'
import AllSections from './components/AllSections'
import Footer from './components/Footer'

const App = () => {

  const courseData = {
    courseName: "Cohort 2.0",
    instructor: "sarthak",
    mentor: "Anubhav",
    duration: "6 months",
  }

  return (
    <div>
      <Navbar />
      <AllSections
        courseData={courseData}
      />
      <Footer />
    </div>
  )
}

export default App

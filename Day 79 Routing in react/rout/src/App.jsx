import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import { Link, Route,Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Men from './pages/Men'
import Women from './pages/Women'
import Randomabout from './pages/Randomabout'
import Courses from './pages/Courses'
import AnyCourse from './pages/AnyCourse'
import CourseDetail from './pages/CourseDetail'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <div>
  <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/courses' element={<Courses/>}/>

        {/* Nested Routes */}
        <Route path='/product/men' element={<Men/>}/>
        <Route path='/product/women' element={<Women/>}/>

          {/* Dynamic Route */}
        <Route path='/about/:id' element={<Randomabout/>}/>
        <Route path='/courses/:courseId' element={<AnyCourse/>}/>

           {/* Nested Dynamic Route */}
        <Route path='/courses/:courseId/detail' element={<CourseDetail/>}/>
      

        {/* NotFOund page */}
         <Route path='*' element={<NotFound/>} />
      </Routes>
     
    </div>
  )
}

export default App

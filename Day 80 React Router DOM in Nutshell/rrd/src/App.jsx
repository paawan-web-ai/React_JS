import React from 'react'
import Nav from './Components/Nav'
import { createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Courses from './pages/Courses'
import Kodr from './pages/Kodr'
import Kodex from './pages/Kodex'
import AllCourses from './pages/AllCourses'
import Footer from './Components/Footer'

const App = () => {

  const allroutes = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/courses',
      element: <Courses />,
      children: [
        {
          path: 'kodex',
          element: <Kodex />
        },
        {
          path: 'kodr',
          element: <Kodr />
        },
      ]
    }
  ]
  )


  return (
    <div>

      <RouterProvider router={allroutes}>
        <Nav />
        <Footer />
      </RouterProvider>

      {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />

        <Route path='/course' element={<Courses />}>

          <Route path='/course' element={<AllCourses />} />
          <Route path='/course/kodr' element={<Kodr />} />
          <Route path='/course/kodex' element={<Kodex />} />

        </Route>
      </Routes> */}


    </div>
  )
}

export default App

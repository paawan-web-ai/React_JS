import React from 'react'
import Cards from './components/Cards'
import Button from './components/Button'
// const App = () => {
//   return (
//     <div className='flex justify-center  flex-wrap gap-4 items-center h-screen  bg-black'>
      {/* {Cards("harsh",55)}
      {Cards("sarthak",34)}
      {Cards("ayush",26)} */}

      {/* <Cards user='sarthak' age='32'/>
      <Cards user='rahul' age='52'/>
      <Cards user='lalu' age='22'/>
      
      <Button text ='Buy Now'/>
      <Button text ='Explore Courses'/> */}
    {/* </div>
  )
}

export default App */}



const App = () => {
  const user = ['anubhav','sarthaki','harsh','chetan','rahul','kalu']
  return (
    <div className='flex justify-center  flex-wrap gap-4 items-center min-h-screen  bg-black'>
      {user.map((elem,index)=>{
        return <Cards key={index} user={elem} />
      })}
    </div>
  )
}

export default App


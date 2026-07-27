import React from 'react'
import Navbar from './components/Navbar'
import Men from './components/Men'
import Women from './components/Women'
const App = () => {
  
  const user1 ={
    name:"harshit",
    age:30,
    gender:"male",
  }

    const user2 ={
    name:"shreya",
    age:20,
    gender:"female",
  }
  
    const user3={
      name:'bixi',
      age:8,
      gender:"male",
    }
  return (
    <div className='flex flex-col gap-5'>
      <Navbar title="Sheryians" color="red" links={['Home','About','Account','Contact']}/>
      <Navbar title="Sarthak" color="blue" links={['Home','Services','Courses','Contact','Videos']}/>
      <Navbar title="Anubhav" color="green" links={['Home','Product','Men','Things']}/>


      {user1.gender==="male"? user3.age>10?<Men/>:<Women/>:<Women />}
    </div>
  )
}

export default App

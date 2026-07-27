import React from 'react'
import Card from './components/Card'
const App = () => {

  const cardData = [
  {
    username: 'anubhav',
    role: 'engineer',
    email: 'anu@gmail.com',
    profile: 'https://plus.unsplash.com/premium_photo-1768288662582-24c46f53d290?w=1000'
  },
  {
    username: 'danish',
    role: 'developer',
    email: 'danish@gmail.com',
    profile: 'https://plus.unsplash.com/premium_photo-1768189747523-d322c3f0b68d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D'
  }
];
  return (
     <>
      <h1>Hello Guys</h1>
      <h2>kaise ho Guys</h2>
     {cardData.map((val,index)=>{
      return (
      <div className='cardmap' key={index}>
       <Card
       user = {val.username}
       role = {val.role}
       email = {val.email}
       profile = {val.profile}
      />
     </div>
    )
     })}
     </>
  )
}

export default App

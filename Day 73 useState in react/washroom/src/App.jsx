import React, { useState } from 'react';
import Washroom from './components/Washroom';

const App = () => {
  const [gender, setGender] = useState("Male");

  const changeGender = () => {
    if (gender === "Male") {
      setGender("Female")
    } else if (gender === "Female") {
      setGender("Other")
    } else {
      setGender("Male")
    }
  };

  return (
    <div className="parent">
      <h1>your gender is ~ {gender}</h1>
      <button onClick={changeGender}>Change gender</button>
      <Washroom user={gender} />
    </div>
  );
};

export default App;

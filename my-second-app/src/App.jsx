import React, { useState } from 'react';
import './App.css'
import Navbar from './Navbar';
import EmployeeForm from './EmployeeForm';
import iphone17max from './assets/iphone17.jpg'
function App() {

  let name = "Tejas";

  let count = 5;

  let [cnt, setCnt] = useState(0)

  let [user, setUser] = useState('')
  let [finaluser, setFinalUser] = useState('')

  const handleClick = () => {
    count += 1
    setCnt(cnt + 1)
    console.log("react event invoke & handle ")
    console.log(count)
  }

  // React.createElement('h2' , null , "i am the resolver...")

  const handleUser = (e) => {
   setUser(e.target.value)
   // console.log(e.target.value)
  }

  const assignUser = () => {
     setFinalUser(user)
     setUser('')
  }
  return (

    <>

      <center>

        enter user <input type="text" name="jbk" value={user} onChange={handleUser} />

        <button onClick={assignUser}>Set User</button>
        <h1>Welcome to my 2nd React app..{name}.. user : {finaluser}</h1>

        <button type='button' onClick={handleClick}>Click Me!</button>

        <h3>Normal variable : {count}</h3>

        <h3>useState variable : {cnt}</h3>

        {/* Event : Onclick : it will execute a function on click
        attributes are in camelCase 
        function is defined without round Brackets, & perffered syntax is camelCase 

        Event : onChange : use to read & set the value of input tag 
        
        */}

        <img src={iphone17max} alt="" />

        <Navbar />

        <EmployeeForm />

      </center>



    </>

  )
}

export default App

// Root Component - App.jsx

// JSX : javascript xml :  we can write or use javascript code into html 

// 1) useState : hooks : use to create dymamic variable , it uses the set function to set or assign the values to variables

// 
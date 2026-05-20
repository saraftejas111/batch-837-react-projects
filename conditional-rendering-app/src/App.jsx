import React, { useState } from 'react'
import './App.css'
import EmployeeForm from './EmployeeForm'

const App = () => {

  let [active, setActive] = useState(false)  // false --> true
  let [show, setShow] = useState(false)  // false --> true

  let [add , setAdd] = useState(null)


  return (
    <div>
      <center>
        <h1>
          Welcome to my conditional-rendering-app
        </h1>

        username : <input type="text" /> <br /><br />
        password : <input type={show ? "text" : "password"} /> <button onClick={() => setShow(!show)}>{show ? "🙈" : "🐼"}</button> <br /><br />


        <button onClick={() => setActive(!active)}>

          {active ? "Logout" : "Login"}

        </button>

        <br /><br />

        <button onClick={() => setAdd(2)}>Go to Add Employee</button> <br /><br />
        <button onClick={() => setAdd(1)}>Go to Update Employee</button> <br /><br />



  {
    add && 
    <EmployeeForm isAdd={add}/>
  }



      </center>
    </div>
  )
}

export default App

import React, { useState } from 'react'
import './App.css'
import { api } from './apiServices'
// import { showAllEmployees } from './apiServices'

const App = () => {

  const [allemployees , setAllEmployees] = useState([])

 // console.log(showAllEmployees().then((res)=>res.data))

 console.log( api.get("/employees").then((res)=>res.data))


  // axios.post(`http://localhost:8080/employees`)
  return (
    <div>
      <center>
        <h1>Welcome to My ENV App</h1>


      </center>
    </div>
  )
}

export default App

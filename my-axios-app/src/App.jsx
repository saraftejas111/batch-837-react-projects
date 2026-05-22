import React, { useState } from 'react'
import './App.css'
import ShowEmployee from './components/ShowEmployee'
import EmployeeForm from './components/EmployeeForm'


const App = () => {

  let [add, setAdd] = useState(0)

  let [emp, setEmp] = useState(null)  // emp 

  const handleAdd = () => {
    setAdd(add + 1)

  }

  const handleUpdate = (upEmp) => {
    setEmp(upEmp)
  }



  return (
    <div>
      <center>
        <h1>
          Welcome To My Axios App
        </h1>

        <button onClick={() => setEmp(false)}>Go to Add Employee</button>


        <EmployeeForm empAdded={handleAdd} acceptUpdate={emp} />

        <ShowEmployee empAddHua={add} updateEmp={handleUpdate} />
      </center>
    </div>
  )
}

export default App

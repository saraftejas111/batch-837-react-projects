import React, { useState } from 'react'
import './App.css'
import ShowAllEMployees from './components/ShowAllEMployees'
import EmployeeForm from './components/EmployeeForm'


const App = () => {

  let [add, setAdd] = useState(0)

  let [emp, setEmp] = useState(null)
  const handleAdded = () => {
    setAdd(add + 1)
  }

  const acceptUpdate = (acceptemp) => {
    setEmp(acceptemp)
  }
  return (
    <div>
      <center>
        <h1>Welcome to my java crud</h1>

        <ShowAllEMployees added={add} sendUpdate={acceptUpdate}/>

        <EmployeeForm empAdded={handleAdded} acceptUpdate={emp} />
      </center>
    </div>
  )
}

export default App

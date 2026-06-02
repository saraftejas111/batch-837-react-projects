import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Mobiles from './Mobiles'
import Clothing from './Clothing'
import Navbar from './Navbar'
import Dashboard from './Dashboard'
import Login from './Login'

const App = () => {
  return (
    <div>
      <center>
        <h1>Welcometo Navigate App</h1>
        <Navbar /> <br /><br />
        <Routes>
          <Route path='mobiles' element={<Mobiles />} />
          <Route path='cloths' element={<Clothing />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='login' element={<Login />} />
        </Routes>
      </center>
    </div>
  )
}

export default App

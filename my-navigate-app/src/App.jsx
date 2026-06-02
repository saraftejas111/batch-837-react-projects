import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Dashboard from './Dashboard'
import Login from './Login'
import ProtectedRoute from './ProtectedRoute'

const App = () => {
  return (
    <div>
      <center>
        <h1>Welcometo Navigate App</h1>
       <BrowserRouter>
        <Navbar /> <br /><br />
        <Routes>

          <Route path='/login' element={<Login />} />

          <Route path='/dashboard' element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }

          />
        </Routes>
       </BrowserRouter>
      </center>
    </div>
  )
}

export default App

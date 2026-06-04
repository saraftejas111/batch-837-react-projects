import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Mobiles from './Mobiles'
import Fashion from './Fashion'
import Navbar from './Navbar'
import Dashboard from './Dashboard'
import Login from './Login'
import ProtectedRoute from './ProtectedRoute'
import Cart from './Cart'
import Settings from './Settings'
import Profile from './Profile'

const App = () => {
  return (
    <div>
      <center>
        <h1>
          Welcome to Routing Revision
        </h1>

        <Navbar />

        <Routes>

          <Route path='/mobiles' element={<Mobiles />} />
          <Route path='/fashion' element={<Fashion />} />
          <Route path='/login' element={<Login />} />

          <Route element={<ProtectedRoute />}>

            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/profiles' element={<Profile />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/cart' element={<Cart />} />
          </Route>

        </Routes>

      </center>
    </div>
  )
}

export default App

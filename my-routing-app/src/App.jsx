import React from 'react'
import './App.css'
import Mobiles from './components/Mobiles'
import Fashion from './components/Fashion'
import Electronics from './components/Electronics'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'

const App = () => {
  return (
    <div>
      <center>
        <h1>
          welcome to my routing app
        </h1>

        <Navbar />

        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='mobiles' element={<Mobiles />} />
          <Route path='fashion' element={<Fashion />} />
          <Route path='electronics' element={<Electronics />} />

        </Routes>

      </center>
    </div>
  )
}

export default App

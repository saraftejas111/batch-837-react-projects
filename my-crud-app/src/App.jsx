import React, { useState } from 'react'
import './App.css'
import ShowAllProducts from './components/ShowAllProducts'
import ProductForm from './components/ProductForm'


const App = () => {

  let [added, setAdded] = useState(0)

  let [updatepro, setUpdatepro] = useState(null)

  const handleAdded = () => {
    setAdded(added + 1)
  }

  const recieveUpdate = (pro) => {
    setUpdatepro(pro);
  }
  return (
    <div>
      <center>
        <h1>
          My Crud App

        </h1>
        <ShowAllProducts recieveAdded={added} sendUpdate={recieveUpdate} /> <br />

        <ProductForm proAdded={handleAdded} updateProduct={updatepro} />
      </center>
    </div>
  )
}

export default App

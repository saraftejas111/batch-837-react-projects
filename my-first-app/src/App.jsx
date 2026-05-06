import { useState } from 'react';
import './App.css'

function App() {
  let name = "Tejas" ; 
  let  count = 0 ; 
  let [cnt , setCnt]= useState(0)

  const handleIncrease = ()=>{
    count++
    console.log('button clicked --> '+count)
    setCnt(cnt + 1)
    console.log(cnt)
  }
  const handleDecrease = ()=>{
    count--
    console.log('button clicked --> '+count)
    setCnt(cnt - 1)
    console.log(cnt)
  }
  return (
    <>
      <h1>Welcome to my 1st app {name}</h1>
      <button onClick={handleIncrease}>increase</button>
      <button onClick={handleDecrease}>decrease</button>
      <h3>Count = {count}</h3>
      <h3>Cnt = {cnt}</h3>
    </>
  )
}

export default App

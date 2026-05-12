
import { useState } from 'react'
import './App.css'

function App() {

  let [username, setUserame] = useState("")
  let [fixuser, setFixuser] = useState("")


  const handleClick = (id) => {
    console.log("Click Me button..", id)
  }


  const handleInbuilt = (id) => {
    console.log("inbuilt ", id)

  }

  const handleName = (e) => {
    console.log(e.target)
    console.log(e.target.value)

    setUserame(e.target.value)
  }

  const handleUser = () => {
    setFixuser(username)
  }

  return (
    <>
      <center>

        <h1>Welcome to my Events App...{name}</h1>

        <button onClick={handleClick}>Click Me...</button> {" "}

        <button onClick={() => handleInbuilt(101)}>Inbuilt Me...</button>  <br /><br />

        Enter Name : <input type="text" name='uname' value={username} onChange={handleName} /> <br /><br />

        <button onClick={handleUser}>Set User</button>

        <h3>username -- {fixuser}</h3>


      </center>
    </>
  )
}

export default App

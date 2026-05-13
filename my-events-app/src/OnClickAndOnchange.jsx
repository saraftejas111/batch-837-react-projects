import React, { useState } from 'react'

const OnClickAndOnchange = () => {

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
    <div>
      
       <button onClick={handleClick}>Click Me...</button> {" "}

        <button onClick={() => handleInbuilt(101)}>Inbuilt Me...</button>  <br /><br />

        Enter Name : <input type="text" name='uname' value={username} onChange={handleName} /> <br /><br />

        <button onClick={handleUser}>Set User</button>

        <h3>username -- {fixuser}</h3>

    </div>
  )
}

export default OnClickAndOnchange

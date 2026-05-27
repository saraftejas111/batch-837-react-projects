import React, { useState } from 'react'
import './App.css'
import { loginUser } from './apiServices'


const App = () => {

  let [userForm, setUserform] = useState({ username: '', password: '' })

  let [role, setRole] = useState(null)

  const handleChange = (e) => {
    let { name, value } = e.target;
    setUserform({ ...userForm, [name]: value })
  }


  const handleSubmit = async (e) => {

    e.preventDefault();

    const userData = await loginUser(userForm);

    console.log("data ", userData.data.role)
    
    if (userData.data.role === undefined) {
      console.log("false data")
      setRole("invalid")
    }
    else if (userData.data.role !== null) {
      setRole(userData.data.role)
    }

    // loginUser(userForm).then((res)=>{
    //   console.log("success : " , res)
    //   console.log("data : " , res.data)
    //   console.log("role : " , res.data.role)
    //       setRole(res.data.role)
    // }).catch((err)=> {
    //   console.log("login error : " , err)
    // })
  }

  return (
    <div>
      <center>
        <h1>
          Welcome To My Login App
        </h1>

        <form onSubmit={handleSubmit}>
          Enter Username : <input type="text" name='username' value={userForm.username} onChange={handleChange} /> <br /><br />
          Enter Password : <input type="text" name='password' value={userForm.password} onChange={handleChange} /> <br /><br />
          <button type='submit'>Login</button>
        </form>

        {
          role &&

          <h1>{role === 'admin' ? "Admin Login Success" :
            role === 'user' ? "User Login Success" :
              role === 'invalid' ? "Invalid Credentials" : ""
          }</h1>
        }
      </center>
    </div>
  )
}

export default App

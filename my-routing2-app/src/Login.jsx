import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    let [form , setForm] = useState({username : "" , password : ""})
    let [error , setError] = useState("")
    const navigate = useNavigate() ; 

    const handleChange = (e) => {

        let {name , value} = e.target ; 
        setForm({...form , [name] : value})
    }


    const handleSubmit = (e) => {

        e.preventDefault(); 

       if (form.username === "tejas" && form.password === "tka123") {
        localStorage.setItem("isLogin" , "data recieved")
         navigate('/dashboard')
       }else {
        localStorage.removeItem("isLogin")
        setError("Invalid Credentials")
       }
    }
  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        username : <input type="text" name='username' value={form.username} onChange={handleChange} required/> <br /><br />
        password : <input type="text" name='password' value={form.password} onChange={handleChange} required/> <br /><br />
      
      <button type='submit'>Login</button>
      </form>

      <h3>
        {error && error}
      </h3>
    </div>
  )
}

export default Login

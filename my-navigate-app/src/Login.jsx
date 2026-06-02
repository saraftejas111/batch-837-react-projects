import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [form, setForm] = useState({ username: '', password: '' })
    const [errorMsg, setErrormsg] = useState("")
    const handleChange = (e) => {
        let { name, value } = e.target;

        setForm({ ...form, [name]: value })
    }

    const navigateToPage = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

       if (form.username ==='tejas' && form.password === 'tka123') {

        localStorage.setItem("isLogin" , "data recieved")
        
        navigateToPage('/dashboard')
        
    } else {
        setErrormsg("Invalid Credentials")
        localStorage.setItem("isLogin" , "invalid")
       }

    }
    return (
        <div>
            <form onSubmit={handleLogin}>
                Username : <input type="text" name='username' value={form.username} onChange={handleChange} /> <br /><br />
                Password : <input type="text" name='password' value={form.password} onChange={handleChange} /> <br /><br />
                <button type='submit'>Login</button>
            </form> <br />

            {errorMsg && 
            <h2>{errorMsg}</h2>
            }
        </div>
    )
}

export default Login

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [form, setForm] = useState({ username: '', password: '' })

    const handleChange = (e) => {
        let { name, value } = e.target;

        setForm({ ...form, [name]: value })
    }

    const navigateToPage = useNavigate();

    const handleLogin = (e) => {

        e.preventDefault();

        navigateToPage('/dashboard')



    }
    return (
        <div>
            <form onSubmit={handleLogin}>
                Username : <input type="text" name='username' value={form.username} onChange={handleChange} /> <br /><br />
                Password : <input type="text" name='password' value={form.password} onChange={handleChange} /> <br /><br />
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login

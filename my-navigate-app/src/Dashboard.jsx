import React from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {

    const navigate = useNavigate() ; 
    const handleLogout = () => {
        localStorage.removeItem("isLogin")
        navigate("/login")

    }
    return (
        <div>
            <h1>Login Success</h1>

            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Dashboard

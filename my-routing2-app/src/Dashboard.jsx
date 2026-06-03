import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Dashboard = () => {

    const navigate = useNavigate() ; 
    const handleLogout = () => {
        localStorage.removeItem("isLogin")
        navigate("/login")
    }
  return (
    <div>
      <h1>
        Dashboard -- Login Success <br />
      </h1>



      <h3>
        <button onClick={handleLogout}>
            Logout
        </button>
      </h3>
    </div>
  )
}

export default Dashboard

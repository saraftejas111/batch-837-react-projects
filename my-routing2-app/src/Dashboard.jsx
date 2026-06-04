import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Dashboard = () => {

  const location = useLocation();

  let user = (location.state || JSON.parse(localStorage.getItem('userData')));

  console.log(user)
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("isLogin")
    navigate("/login")
  }
  return (
    <div>
      <h1>
        Dashboard -- Login Success by user.. id = {user.id} , name = {user.name} <br />
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

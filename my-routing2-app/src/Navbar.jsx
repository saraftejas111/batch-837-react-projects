import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {

    const [isLogin, setIsLogin] = useState(
        localStorage.getItem("isLogin")
    );

    console.log("nav --> ", isLogin)
    return (
        <div>

            <NavLink to="/">Home</NavLink>
            <NavLink to="/mobiles">Mobiles</NavLink>
            <NavLink to="/fashion">Fashion</NavLink>
            {
                isLogin === "data recieved"
                    ? <NavLink to="/logout">Logout</NavLink>
                    : <NavLink to="/login">Login</NavLink>
            }
            <NavLink to="/profiles">Profile</NavLink>
            <NavLink to="/settings">Settings</NavLink>
            <NavLink to="/cart">Go to Cart</NavLink>

        </div>
    )
}

export default Navbar

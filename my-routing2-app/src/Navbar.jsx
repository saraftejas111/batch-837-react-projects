import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {

    const isLogin = localStorage.getItem("isLogin")
    return (
        <div>

            <NavLink to="/">Home</NavLink>
            <NavLink to="/mobiles">Mobiles</NavLink>
            <NavLink to="/fashion">Fashion</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/profiles">Profile</NavLink>
            <NavLink to="/settings">Settings</NavLink>
            <NavLink to="/cart">Go to Cart</NavLink>

        </div>
    )
}

export default Navbar

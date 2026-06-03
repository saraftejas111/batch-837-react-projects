import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {

    const isLogin = localStorage.getItem("isLogin")
    return (
        <div>

            <NavLink to="/">Home</NavLink> {" | "}
            <NavLink to="/mobiles">Mobiles</NavLink>{" | "}
            <NavLink to="/login">Login</NavLink>{" | "}
            <NavLink to="/fashion">Fashion</NavLink>

        </div>
    )
}

export default Navbar

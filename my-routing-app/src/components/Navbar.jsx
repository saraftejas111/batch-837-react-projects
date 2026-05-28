import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <NavLink>
                {/* replacement of anchor tag... to prevent from page reloading */}

                <Link to="/">Home</Link> {" | "}
                <Link to="/mobiles">Mobiles</Link> {" | "}
                <Link to="/fashion">Fashion</Link> {" | "}
                <Link to="/electronics">Electronics</Link>
            </NavLink>
        </div>
    )
}

export default Navbar

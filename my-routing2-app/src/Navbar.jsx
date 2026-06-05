import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const [isLogin, setIsLogin] = useState(
        localStorage.getItem("isLogin")
    );

    useEffect(() => {
        // Listen for storage changes from other tabs/windows
        const handleStorageChange = (e) => {
            if (e.key === "isLogin") {
                setIsLogin(e.newValue);
            }
        };

        // Listen for custom login/logout event from same tab
        const handleLoginEvent = () => {
            setIsLogin(localStorage.getItem("isLogin"));
        };

        window.addEventListener('storage', handleStorageChange);
        window.addEventListener('loginSuccess', handleLoginEvent);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
            window.removeEventListener('loginSuccess', handleLoginEvent);
        };
    }, []);

    console.log("nav --> ", isLogin);

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
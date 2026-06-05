import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Clear localStorage
        localStorage.removeItem("isLogin");
        localStorage.removeItem("userData");

        // Dispatch event to notify Navbar immediately
        window.dispatchEvent(new Event('loginSuccess'));

        // Redirect to login or home page
        navigate('/login');
    }, [navigate]);

    return (
        <div>
            <h1>Logging out...</h1>
        </div>
    )
}

export default Logout
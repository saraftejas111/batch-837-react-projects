import React from 'react'
import { Navigate, replace } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {

    const checkLogin = localStorage.getItem("isLogin"); 

    console.log(checkLogin)

    if(checkLogin !== "data recieved"){

        return <Navigate to='/login'/>
    }
    return children ; 

}

export default ProtectedRoute

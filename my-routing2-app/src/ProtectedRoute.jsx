import React from 'react'
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {

    const isLogin = localStorage.getItem("isLogin") 

    console.log("isLogin --> " , isLogin)

    if(isLogin !== "data recieved"){

        alert("Please Login First") 
        
        return <Navigate to="/login"/>
    }

  return children ; 
}

export default ProtectedRoute

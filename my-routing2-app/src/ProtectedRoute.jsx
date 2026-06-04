import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {

    const isLogin = localStorage.getItem("isLogin") 

    console.log("isLogin --> " , isLogin)

    if(isLogin !== "data recieved"){
        return <Navigate to="/login"/>
    }

  return <Outlet/> ; 
}

export default ProtectedRoute

import React from "react";
import { Navigate, Outlet } from 'react-router-dom';
import AuthCookie from "../../Hooks/AuthCookie";

const ProtectedRoute = () => {
    const {ValorCookie} = AuthCookie();
    
  
    return ValorCookie ? <Outlet /> : <Navigate to="/login" />;
  };
  
  export default ProtectedRoute;
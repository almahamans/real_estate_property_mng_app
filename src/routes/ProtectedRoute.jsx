import React from 'react'
import { Outlet } from 'react-router-dom';
import { SignIn } from '../pages/SignIn';

export const ProtectedRoute = () => {
    const isLogin = localStorage.getItem("isLogin");
    return (
      <div>
        {isLogin ? 
          <Outlet />   
         : 
          <SignIn />
        }
      </div>
    );
}

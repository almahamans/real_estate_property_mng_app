import React from 'react'
import { useNavigate } from 'react-router-dom';

export const SignOut = () => {
    return (
      <div>
        <h1>you are logged out now...</h1>
        {
            localStorage.removeItem("isLogin")
        }
      </div>
    );
}

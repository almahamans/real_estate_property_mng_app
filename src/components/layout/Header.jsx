import React from 'react'
import { BrowserRouter, Link, Outlet } from "react-router-dom";

export const Header = () => {
    return (
      <>
        <header>
          <ul className="flex justify-around items-center bg-gray-700 text-white font-medium p-5">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/ListProperties">Property List</Link>
            </li>
            <li>
              <Link to="/AddProperty">Add Property</Link>
            </li>
            <li>
              <Link to="/EditProperty">Edit Property</Link>
            </li>
            <li>
              <Link to="/SignIn">Sign In</Link>
            </li>
            <li>
              <Link to="/SignOut">Sign Out</Link>
            </li>
          </ul>
        </header>
        <Outlet />
      </>
    );
}

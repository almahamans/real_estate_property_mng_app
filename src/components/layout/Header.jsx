import React from 'react'
import { BrowserRouter, Link, Outlet } from "react-router-dom";

export const Header = () => {
    return (
      <>
      <header>
        <ul>
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
        </ul> 
      </header>
      <Outlet />
      </>
    );
}

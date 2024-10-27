import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import '../src/main.css';
import { Properties } from "./components/property/Properties";

import { AddProperty } from "./components/form/AddPropertyForm";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Home } from "./pages/Home";
import {ErrorPage} from "./pages/ErrorPage";
import { PropertyProvider } from "./context/ProprtyContext"; 

const App = () => {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/ListProperties",
          element:
            <Properties
            />
        },
        {
          path: "/AddProperty",
          element: <AddProperty  />,
        },
      ],
    },
  ]);
  return (
    <>
      <PropertyProvider>
        <RouterProvider router={router} />
        <Footer />
      </PropertyProvider>
    </>
  );
};

export default App;

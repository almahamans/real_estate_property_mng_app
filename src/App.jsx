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
import { ProtectedRoute } from "./routes/ProtectedRoute";
import { SignIn } from "./pages/SignIn";
import { SignOut } from "./pages/SignOut";
import { UpdatePropertyform } from "./components/form/UpdatePropertyform";

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
          path: "ListProperties",
          element: <Properties />,
        },
        {
          path: "/",
          element: <ProtectedRoute />,
          children: [
            {
              path: "AddProperty",
              element: <AddProperty />,
            },
            {
              path: "EditProperty",
              element: <UpdatePropertyform />,
            },
          ],
        },
        {
          path: "SignIn",
          element: <SignIn />,
        },
        {
          path: "SignOut",
          element: <SignOut />,
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

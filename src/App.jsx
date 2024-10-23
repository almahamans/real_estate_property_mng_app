import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import '../src/main.css';
import { Properties } from "./components/property/Properties";
import propertiesData from "./data/propertiesData";
import { AddProperty } from "./components/form/AddPropertyForm";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Home } from "./pages/Home";
import {ErrorPage} from "./pages/ErrorPage";

const App = () => {
  const [propertyList, setPropertyList] = useState(propertiesData); //update the list

  const handleAddingItem = (newProperty) => {
    setPropertyList((prevPropertiesList) => {
      return [...prevPropertiesList, newProperty];
    });
  };
  // console.log("propertyList", propertyList);

  const handleDeleteItem = (id) => {
    const filteredProperties = propertyList.filter(
      (property) => property.id !== id
    );
    setPropertyList(filteredProperties);
  };

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
              properties={propertyList}
              onHandleDeleteProperty={handleDeleteItem}
            />
        },
        {
          path: "/AddProperty",
          element: <AddProperty onHandleAddProperty={handleAddingItem} />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
      <Footer />
    </>
  );
};

export default App;

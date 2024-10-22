import React, { useState } from "react";

// import '../src/main.css';
import { Properties } from "./components/property/Properties";
import propertiesData from "./data/propertiesData";
import { AddProperty } from "./components/form/AddPropertyForm";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";

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
  return (
    <>
      <Header />
      {/* <Properties
        properties={propertyList}
        onHandleDeleteProperty={handleDeleteItem}
      /> */}
      <AddProperty onHandleAddProperty={handleAddingItem} />
      <Footer />
    </>
  );
};

export default App;

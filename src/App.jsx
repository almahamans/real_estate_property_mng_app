import React, { useState } from "react";

// import '../src/main.css';
import { Properties } from "./components/Properties";
import propertiesData from "./components/propertiesData";
import { AddProperty } from "./components/AddProperty";

const App = () => {
  const [propertyList, setPropertyList] = useState(propertiesData); //update the list

  const handleAddingItem = (newProperty) => {
    setPropertyList(prevPropertiesList => {
      return [...prevPropertiesList, newProperty]
    })
  }
  // console.log("propertyList", propertyList);

  const handleDeleteItem = (id) => {
    const filteredProperties = propertyList.filter((property) => property.id !== id);
    setPropertyList(filteredProperties);
  };
  return (
    <Properties
      properties={propertyList}
      onHandleDeleteProperty={handleDeleteItem}
    />
    // <AddProperty onHandleAddProperty={handleAddingItem} />
  );
};

export default App;

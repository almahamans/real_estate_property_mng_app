import React, {createContext, useState} from 'react'

import propertiesData from "../data/propertiesData";

export const PropertyContext = createContext();
export const PropertyProvider = ({ children }) => {
  const [propertyList, setPropertyList] = useState(propertiesData || []); 
  const [updatedProperty, setUpdatedProperty] = useState(null);

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

  const handleEdit = (id) => {
    setUpdatedProperty(id);
  };

  const handleUpdateSubmit = (updatedProperty) => {
    setPropertyList((prevProp) => {
      prevProp.map((property) =>
        property.id === updatedProperty.id ? updatedProperty : property
      );
    });
    // setUpdatedProperty(null);
  };

  return (
    <PropertyContext.Provider
      value={{
        updatedProperty,
        propertyList,
        setPropertyList,
        handleAddingItem,
        handleDeleteItem,
        handleUpdateSubmit,
        handleEdit,
      }}
    >
      {children}
    </PropertyContext.Provider>
  );
};
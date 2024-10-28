import React, {createContext, useState} from 'react'

import propertiesData from "../data/propertiesData";

export const PropertyContext = createContext();
export const PropertyProvider = ({ children }) => {
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

    const handleEditItem = (id) => {
      const filteredProperties = propertyList.filter(
        (property) => property.id !== id
      );
      setPropertyList(filteredProperties);
    };

  return (
    <PropertyContext.Provider
      value={{
        propertyList,
        setPropertyList,
        handleAddingItem,
        handleDeleteItem,
        handleEditItem,
      }}
    >
      {children}
    </PropertyContext.Provider>
  );
};



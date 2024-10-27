import React, { useContext } from "react";

import { Property } from "./Property";
import { PropertyContext } from "../../context/ProprtyContext";

export const Properties = () => {
  const { propertyList, handleDeleteItem } = useContext(PropertyContext);
  // console.log("properties ", properties);
  return (
    <section className="flex flex-wrap justify-center items-center gap-4 bg-zinc-200 pt-9">
      {propertyList.length > 0 ? (
        propertyList.map((property) => {
          return (
            <Property
              property={property}
              key={property.id}
              onHandleDeleteProperty={handleDeleteItem}
            />
          );
        })
      ) : (
        <h1>No properties to show</h1>
      )}
    </section>
  );
};

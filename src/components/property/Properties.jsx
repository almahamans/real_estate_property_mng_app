import React, { useContext } from "react";

import { Property } from "./Property";
import { PropertyContext } from "../../context/ProprtyContext";

export const Properties = () => {
  const { propertyList } = useContext(PropertyContext);
  console.log("properties ", propertyList);
  return (
    <section className="flex flex-wrap justify-center items-center gap-4 bg-zinc-200 pt-9">
      {propertyList &&  propertyList.length > 0 ? (
        propertyList.map((property) => {
          return <Property property={property} key={property.id} />;
        })
      ) : (
        <h1>No properties to show</h1>
      )}
    </section>
  );
};

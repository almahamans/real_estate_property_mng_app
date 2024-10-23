import React from "react";

import { Property } from "./Property";

export const Properties = (props) => {
  let { properties, onHandleDeleteProperty } = props;
  // console.log("properties ", properties);
  return (
    <section className="flex flex-wrap justify-center items-center bg-slate-100">
      {properties.length > 0 ? (
        properties.map((property) => {
          return (
            <Property
              property={property}
              key={property.id}
              onHandleDeleteProperty={onHandleDeleteProperty}
            />
          );
        })
      ) : (
        <h1>No properties to show</h1>
      )}
    </section>
  );
};

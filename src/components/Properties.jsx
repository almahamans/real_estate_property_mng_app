import React from "react";

import { Property } from "./Property";

export const Properties = (props) => {
  let { properties } = props;
  console.log("properties ", properties);

  return (
    <>
      {properties.length > 0 ? (
        properties.map((property, index) => {
          return <Property property={property} key={index} />;
        })
      ) : (
        <h1>No properties to show</h1>
      )}
    </>
  );
};

import React from "react";

import { PropertyTitle } from "./propertyTitle";
import { PropertyImage } from "./PropertyImage";
import { PropertyLocation } from "./PropertyLocation";
import { PropertyPrice } from "./PropertyPrice";

export const Property = (props) => {
  let { title, image, location, price } = props.property;

  console.log("props.property ", props.property);
  return (
    <>
      <section className="flex flex-col">
        <PropertyTitle title={title} />
        <PropertyImage image={image} title={title} />
        <PropertyLocation location={location} />
        <PropertyPrice price={price} />
      </section>
    </>
  );
};

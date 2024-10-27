import React, { useContext } from "react";

import { PropertyTitle } from "./PropertyTitle";
import { PropertyImage } from "./PropertyImage";
import { PropertyLocation } from "./PropertyLocation";
import { PropertyPrice } from "./PropertyPrice";
import { PropertyContext } from "../../context/ProprtyContext";

export const Property = ({ property }) => {
  let { title, image, location, price } = property;
  const { handleDeleteItem } = useContext(PropertyContext);
  // console.log("props.property ", props.property);
  return (
    <>
      <section className="flex flex-col flex-nowrap justify-center items-center border box-border p-0 m-2 w-5/12 h-96 bg-white">
        <PropertyTitle title={title} />
        <PropertyImage image={image} title={title} />
        <PropertyLocation location={location} />
        <PropertyPrice price={price} />
        <button
          onClick={() => handleDeleteItem(property.id) }
          className="w-14 text-sm border-amber-950 border-2 mt-3"
        >
          Delete
        </button>
      </section>
    </>
  );
};

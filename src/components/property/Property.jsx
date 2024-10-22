import React from "react";

import { PropertyTitle } from "./PropertyTitle";
import { PropertyImage } from "./PropertyImage";
import { PropertyLocation } from "./PropertyLocation";
import { PropertyPrice } from "./PropertyPrice";

export const Property = (props) => {
  let { title, image, location, price } = props.property;
  // console.log("props.property ", props.property);

  const handleDelete = (id) => {
    props.onHandleDeleteProperty(id);
  };
  
  return (
    <>
      <section className="flex flex-col flex-nowrap justify-center items-center border box-border p-0 m-2 w-5/12 h-72">
        <PropertyTitle title={title} />
        <PropertyImage image={image} title={title} />
        <PropertyLocation location={location} />
        <PropertyPrice price={price} />
        <button onClick={() => {handleDelete(props.property.id)}}
          className="w-14 text-sm border-amber-950 border-2 mt-3">
          Delete
        </button>
      </section>
    </>
  );
};

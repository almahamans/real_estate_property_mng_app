import React, { useContext } from "react";

import { PropertyTitle } from "./PropertyTitle";
import { PropertyImage } from "./PropertyImage";
import { PropertyLocation } from "./PropertyLocation";
import { PropertyPrice } from "./PropertyPrice";
import { PropertyContext } from "../../context/ProprtyContext";
import { useNavigate } from "react-router-dom";

export const Property = ({ property }) => {
  let { title, image, location, price } = property;
  const { handleDeleteItem, handleEdit } = useContext(PropertyContext);
  console.log("props.property ", property);
  const navigate = useNavigate()
  
  const handleupdate = () => {
    handleEdit(property.id);
    navigate("/EditProperty");
  }
  return (
    <>
      <section className="flex flex-col flex-nowrap justify-center items-center border box-border m-2 w-5/12 h-96 bg-white">
        <PropertyTitle title={title} />
        <PropertyImage image={image} title={title} />
        <PropertyLocation location={location} />
        <PropertyPrice price={price} />
        <section className="flex gap-5">
          <button
            onClick={() => handleDeleteItem(property.id)}
            className="w-14 text-sm border-amber-950 border-2 mt-3"
          >
            Delete
          </button>
          <button
            onClick={handleupdate}
            className="w-14 text-sm border-amber-950 border-2 mt-3"
          >
            Edit
          </button>
        </section>
      </section>
    </>
  );
};

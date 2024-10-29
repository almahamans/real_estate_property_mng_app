import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PropertyContext } from "../../context/ProprtyContext";

export const EditPropertyform = () => {
  const { updatedProperty, propertyList, handleUpdateSubmit } = useContext(PropertyContext);
  const currentProperty = propertyList?.find((property) => property.id === updatedProperty) || {};
  const navigate = useNavigate();

  const [property, setProperty] = useState({
    id: currentProperty.id || "",
    title: currentProperty.title || "",
    location: currentProperty.location || "",
    price: currentProperty.price || 0,
  });

  useEffect(() => {
    setProperty({
      id: currentProperty.id || "",
      title: currentProperty.title || "",
      location: currentProperty.location || "",
      price: currentProperty.price || 0,
    });
  }, [updatedProperty, currentProperty]);

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setProperty((prevState) => ({ ...prevState, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    handleUpdateSubmit(property);
    navigate("/ListProperties");
  };

  // console.log("edit: ", property);

  return (
    <section className="max-w-96 mt-6 mb-6 mx-auto">
      <h1 className="text-center text-red-700 font-bold text-lg py-5">
        Update a property details
      </h1>
      <form
        onSubmit={handleSubmit}
        className="grid grid-rows-4 gap-5 place-content-center"
      >
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          name="title"
          id="title"
          onChange={handleChange}
          value={property.title}
          className="border-2 border-gray-700"
        />
        {errors.title && <span className="text-red-600">{errors.title}</span>}
        <label htmlFor="price">Price: </label>
        <input
          type="number"
          name="price"
          id="price"
          onChange={handleChange}
          value={property.price}
          className="border-2 border-gray-700"
        />
        {errors.price && <span className="text-red-600">{errors.price}</span>}
        <label htmlFor="location">Location: </label>
        <input
          type="text"
          name="location"
          id="location"
          onChange={handleChange}
          value={property.location}
          className="border-2 border-gray-700"
        />
        {errors.location && (
          <span className="text-red-600">{errors.location}</span>
        )}
        <div className="text-center">
          <button
            type="submit"
            className="bg-green-700 p-2 my-5 rounded-md w-28 text-sm text-white font-bold"
          >
            Confirm Edit
          </button>
        </div>
      </form>
    </section>
  );
};
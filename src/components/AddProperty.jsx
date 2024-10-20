import { nanoid } from "nanoid";
import React, { useState } from "react";

export const AddProperty = (props) => {
  const [property, setProperty] = useState({
    title: "",
    image: "",
    price: 0,
    location: "",
  });

  let handleChange = (event) => {
    const { name, value } = event.target;
    setProperty((prevStatus) => ({
      ...prevStatus,
      [name]: value,
    }));
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    const newProperty = {
      id: nanoid(),
      title: property.title,
      location: property.location,
      price: property.price,
      image: property.image,
    };
    props.onHandleAddProperty(newProperty);

    console.log("new property ", newProperty);

    setProperty({
      title: "",
      image: "",
      price: 0,
      location: "",
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          name="title"
          id="title"
          onChange={handleChange}
          value={property.title}
        />
        <label htmlFor="image">Image: </label>
        <input
          type="text"
          name="image"
          id="image"
          onChange={handleChange}
          value={property.image}
        />
        <label htmlFor="price">Price: </label>
        <input
          type="number"
          name="price"
          id="price"
          onChange={handleChange}
          value={property.price}
        />
        <label htmlFor="location">Location: </label>
        <input
          type="text"
          name="location"
          id="location"
          onChange={handleChange}
          value={property.location}
        />
        <button type="submit">Add property</button>
      </form>
    </div>
  );
};

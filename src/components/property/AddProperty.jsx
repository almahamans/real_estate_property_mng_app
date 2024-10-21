import { nanoid } from "nanoid";
import React, { useState } from "react";

export const AddProperty = (props) => {
  const [property, setProperty] = useState({
    title: "",
    image: "",
    price: 0,
    location: "",
  });
  const [errors, setErrors] = useState({});
  const validate = () => {
  const newErrors = {};
  if (!title) {
    newErrors.title = "Title is required";
  } else if (!/^[a-zA-Z\s]/.test(title)) {
    newErrors.title = "Title must not contain numbers or special characters";
  }
  if (!location) {
    newErrors.location = "location is required";
  }
  if (!price) {
    newErrors.price = "Price is required";
  } else if (!/^[0-9]+(\.[0-9]{1,2})?$/.test(price)) {
    newErrors.price = "Price must be a numeric value";
  }
  return newErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProperty((prevStatus) => ({
      ...prevStatus,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
    setErrors({});
    
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
        location: ""
      });
      
      }
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
        {errors.title && <span>{errors.title}</span>}
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
        {errors.price && <span>{errors.price}</span>}
        <label htmlFor="location">Location: </label>
        <input
          type="text"
          name="location"
          id="location"
          onChange={handleChange}
          value={property.location}
        />
        {errors.location && <span>{errors.location}</span>}
        <button type="submit">Add property</button>
      </form>
    </div>
  );
};

import { nanoid } from "nanoid";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { uploadImageToCloudinary } from "../../utility/uploadingImage";

export const AddProperty = (props) => {
  const [property, setProperty] = useState({
    title: "",
    image: "",
    price: 0,
    location: "",
  });
  const [errors, setErrors] = useState({});

const handleChange = (event) => {
  const { name, value } = event.target;
  setProperty((prevStatus) => ({
    ...prevStatus,
    [name]: value,
  }));
};
const handleImageChange = (event) => {
  setProperty(preStat => {
    return {... preStat, image: event.target.files[0]};
  })
};

const validateinput = () => {
  const newErrors = {};
  if (!property.title) 
    newErrors.title = "property title is required";
  if (property.title.length < 10)
    newErrors.title = "Title should be at least 10 characters long";
  if (!/^[a-zA-Z\s]+$/.test(property.title)) 
    newErrors.title = "Title must not contain numbers or special characters";
  if (property.location.length < 10)
    newErrors.location = "Location should be at least 10 characters long";
  if (!property.price || parseFloat(property.price) <= 0)
    newErrors.price = "Price must be a positive number";
  if (!property.image)
    newErrors.image = "Please upload a property image";
  setErrors(newErrors);
  return Object.keys(newErrors).length === 0; // Return true if no errors
};

const handleSubmit = async (event) => {
  event.preventDefault();
  if (validateinput()) {
    try {   
      const imageUrl = await uploadImageToCloudinary(property.image); //upload image to Cloudinary
      const newProperty = {
        id: nanoid(),
        title: property.title,
        price: property.price,
        image: imageUrl,
        location: property.location,
      };
      console.log("new Property ", newProperty);
      toast.success("Property created successfully!");
      props.onHandleAddProperty(newProperty);
      setProperty({
        title: "",
        image: "",
        price: 0,
        location: "",
      });
    } catch (error) {
      console.error("Error uploading image: ", error);
      toast.error("Failed to upload image. Please try again.");
    }
  } else {
    console.log(errors);
  }
  };
  const notify = () => toast.success("Property added successfully");
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
        type="file"
        name="image"
        id="image"
        onChange={handleImageChange}
        accept="image/*"
        required
      />
      {property.image && (
        <div>
          <img
            className="user-img"
            src={URL.createObjectURL(property.image)}
            alt="Selected Preview"
          />
        </div>
      )}
      {errors.image && <span>{errors.image}</span>}
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
      <button type="submit" onClick={notify}>
        Add property
      </button>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </form>
    </div>
    );
    };

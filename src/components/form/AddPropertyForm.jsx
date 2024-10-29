import { nanoid } from "nanoid";
import React, { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { uploadImageToCloudinary } from "../../utility/uploadingImage";
import { useNavigate } from "react-router-dom";
import { PropertyContext } from "../../context/ProprtyContext";

export const AddProperty = () => {
  const { handleAddingItem } = useContext(PropertyContext);

  const initalValue = {
    title: "",
    image: "",
    price: 0,
    location: "",
  };
  const [property, setProperty] = useState(initalValue);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

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
   
      handleAddingItem(newProperty);
      setProperty(initalValue);   
      navigate("/ListProperties");
    } catch (error) {
      console.error("Error uploading image: ", error);   
    }
    } else {
      console.log(errors);
    }
  };

  const notify = () => {
    if (validateinput()){
      toast.success("Property created successfully!");
    } else {
      toast.error("Failed to upload image. Please try again.");
    }
  }
  
  return (
    <section className="max-w-96 mt-6 mb-6 mx-auto">
      <h1 className="text-center text-red-700 font-bold text-lg py-5">Add a new property</h1>
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
        <label htmlFor="image">Image: </label>
        <input
          type="file"
          name="image"
          id="image"
          onChange={handleImageChange}
          accept="image/*"
        />
        {property.image && (
          <img
            className="m-auto p-0 z-30"
            src={URL.createObjectURL(property.image)}
            alt="Selected Preview"
            width={"50%"}
          />
        )}
        {errors.image && <span className="text-red-600">{errors.image}</span>}
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
            onClick={notify}
          >
            Add Property
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
        </div>
      </form>
    </section>
  );
};

import { nanoid } from 'nanoid';
import React, { useState } from 'react'

export const AddProperty = () => {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [price, setPrice] = useState(0);
    const [location, setLocation] = useState('');
    let handleTitle = (event) => {
        setTitle(event.target.value);
    }
    let handleImage = (event) => {
        setImage(event.target.value);
    };
    let handlePrice = (event) => {
        setPrice(event.target.value);
    };
    let handleLocation = (event) => {
        setLocation(event.target.value);
    };
    let handleSubmit = (e) => {
      e.preventDefault();
      const newProperty = {
        id: nanoid(),
        title: title,
        location: location,
        price: price,
        image: image
      }
      setTitle('');
      setImage('');
      setLocation('');
      setPrice(0);

      console.log(newProperty);
    }
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title: </label>
          <input type="text" name="title" id="title" onChange={handleTitle} value={title} />
          <label htmlFor="image">Image: </label>
          <input type="text" name="image" id="image" onChange={handleImage} value={image} />
          <label htmlFor="price">Price: </label>
          <input type="number" name="price" id="price" onChange={handlePrice} value={price} />
          <label htmlFor="location">Location: </label>
          <input type='text' name="location" id="location" onChange={handleLocation} value={location} />
          <button type="submit">Add property</button>
        </form>
      </div>
    );
}

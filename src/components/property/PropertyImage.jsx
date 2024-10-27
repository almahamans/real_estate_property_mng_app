import React from 'react';

export const PropertyImage = (props) => {
    let {image, title} = props;
    return <img src={image} alt={title} className='max-h-52'/>
}

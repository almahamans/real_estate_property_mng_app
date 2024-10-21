import React from 'react';

export const PropertyPrice = (props) => {
    let {price} = props;
    return <h1 className="text-lg font-semibold">Price: {price}</h1>
}

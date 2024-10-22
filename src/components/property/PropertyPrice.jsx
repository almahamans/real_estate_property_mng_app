import React from 'react';

export const PropertyPrice = (props) => {
    let {price} = props;
    return (
      <h1 className="text-sm">
        <span>Price:</span> {price}
      </h1>
    );
}

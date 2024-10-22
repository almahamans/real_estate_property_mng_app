import React from 'react';

export const PropertyTitle = (props) => {
    let {title} = props;
    return <h1 className="text-md text-amber-950 font-semibold mb-2">{title}</h1>;
}

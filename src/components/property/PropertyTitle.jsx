import React from 'react';

export const PropertyTitle = (props) => {
    let {title} = props;
    return <h1 className="text-lg font-semibold">Title: {title}</h1>
}

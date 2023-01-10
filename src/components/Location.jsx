import React from 'react';

const Location = ({location}) => {
    return (
        <div className='location-box'>
            <b>Name:</b>
            <b>Type:</b>
            <b>Dimension: </b>
            <b>Population: </b>
            <p>{location?.name}</p>
            <p>{location?.type}</p>
            <p>{location?.dimension}</p>
            <p>{location?.residents?.length}</p>
        </div>
    );
};

export default Location;
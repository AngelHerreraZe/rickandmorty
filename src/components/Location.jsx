import React from 'react';

const Location = ({ location }) => {
    return (
        <div className='location-box'>
            <b>Name:</b>
            <p className='location-name'>{location?.name}</p>
            <b>Type:</b>
            <p className='location-type'>{location?.type}</p>
            <b>Dimension: </b>
            <p className='location-dimension'>{location?.dimension}</p>
            <b>Population: </b>
            <p className='location-length'>{location?.residents?.length}</p>
        </div>
    );
};

export default Location;
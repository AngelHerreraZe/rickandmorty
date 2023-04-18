import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ResidentInfo = ({resident}) => {

    const [residentInfo, setResidentInfo] = useState({});

    useEffect(() => {
        axios.get(resident)
        .then(res => setResidentInfo(res.data))
    },[])

    return (
        <div className='card'>
            <div className='card-header'>
                <img src={residentInfo.image} alt="" className='card-img' />
                <p  className={`status`}><span className={`circle-${residentInfo.status}`}></span>{residentInfo.status}</p>
            </div>
            <div className='card-body'>
                <p className='card-name'>{residentInfo.name}</p>
                <div className='card-item'>
                    <b>RACE:</b>
                    <p>{residentInfo.species}</p>
                </div>
                <div className='card-item'>
                    <b>ORIGIN: </b>
                    <p>{residentInfo?.origin?.name}</p>
                </div>
                <div className='card-item'>
                    <b>APPARENCES in EPISODES: </b>
                    <p>{residentInfo?.episode?.length}</p>
                </div>
            </div>
        </div>
        )
};

export default ResidentInfo;
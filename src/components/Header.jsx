import React from 'react';
import background from '../assets/header.png'
import text from '../assets/text.png'

const Header = () => {
    return (
        <div className='header'>
            <img src={text} alt="" className='text'/>
        </div>
    );
};

export default Header;
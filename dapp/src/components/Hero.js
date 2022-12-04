import React from 'react';
import './Hero.css';

const Hero = ({ imageSrc }) => {
    return (
        <div className='Hero'>
            <img src={imageSrc} alt='music' className='Hero__image'></img>
            <h1 className='Hero__title'>Listening made simple.</h1>
        </div>
    )
}
export default Hero
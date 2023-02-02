import React from 'react';
import banner_img from "../../assets/Images/banner_kasa.jpg"

const Banner = () => {
    return (
        <div className='banner-container'>
            <img src={banner_img} alt="Banniere de la page d'accueil" />
            <h1>Chez vous, partout et ailleurs</h1>
        </div>
    );
};

export default Banner;
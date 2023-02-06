import React from 'react';
import banner_img from "../../assets/Images/banner_about.jpg";
import Banner from '../../components/Banner/Banner';

const About = () => {
    return (
        <div className='about'>
            <Banner 
                picture={banner_img}
                title={""}
            />
        </div>
    );
};

export default About;
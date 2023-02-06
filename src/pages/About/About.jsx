import React, { useEffect, useState } from 'react';
import banner_img from "../../assets/Images/banner_about.jpg";
import Banner from '../../components/Banner/Banner';
import DropDown from '../../components/DropDown/DropDown';
import About_data from '../../datas/About';
import icon from '../../assets/Images/vector.png';

const About = () => {
    const [ dataAbout, setDataAbout ] = useState([])

    useEffect(() => {
        setDataAbout(About_data)
    }, [])

    return (
        <div className='about'>
            <Banner 
                picture={banner_img}
                title={""}
            />
            <section className='about-container'>
                {dataAbout.map((about) => (
                    <DropDown
                        title={about.title}
                        icon={icon}
                        text={about.text}
                    />
                ))}
            </section>
        </div>
    );
};

export default About;
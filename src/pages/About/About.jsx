import React, { useEffect, useState } from 'react';
import banner_img from '../../assets/Images/banner_about_mobile.jpg';
import Banner from '../../components/Banner/Banner';
import DropDown from '../../components/DropDown/DropDown';
import About_data from '../../datas/About';

const About = () => {
  const [dataAbout, setDataAbout] = useState([]);

  useEffect(() => {
    setDataAbout(About_data);
  }, []);

  return (
    <div className="about">
      <Banner picture={banner_img} title={''} />

      <section className="about-container">
        {dataAbout.map((about) => (
          <DropDown key={about.title} title={about.title} datas={about.text} />
        ))}
      </section>
    </div>
  );
};

export default About;

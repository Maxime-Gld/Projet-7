import React, { useEffect, useState } from 'react';
import banner_img from '../../assets/Images/banner__about.jpg';
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
      <div className="banner-container banner-container--about">
        <Banner picture={banner_img} title={''} />
      </div>

      <section className="about-container">
        {dataAbout.map((about) => (
          <DropDown key={about.title} title={about.title} datas={about.text} />
        ))}
      </section>
    </div>
  );
};

export default About;

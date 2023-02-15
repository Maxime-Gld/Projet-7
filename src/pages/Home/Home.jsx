import React, { useState, useEffect } from 'react';
import banner_img from '../../assets/Images/banner_kasa.jpg';
import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card';

const Home = () => {
  const [dataHousing, setDataHousing] = useState([]);

  useEffect(() => {
    fetch('/housing.json')
      .then((res) => res.json())
      .then((data) => setDataHousing(data));
  }, []);

  return (
    <div className="home">
      <div className="banner-container">
        <Banner picture={banner_img} title={'Chez vous, partout et ailleurs'} />
      </div>

      <section className="cards-container">
        {dataHousing.map((housing) => (
          <Card key={housing.id} datas={housing} />
        ))}
      </section>
    </div>
  );
};

export default Home;

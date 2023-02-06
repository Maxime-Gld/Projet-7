import React from 'react';
import banner_img from "../../assets/Images/banner_kasa.jpg";
import Banner from '../../components/Banner/Banner';
import { useState, useEffect } from 'react';
import Card from '../../components/Card/Card';
import data from '../../datas/Housing.json';

const Home = () => {
    const [ dataHousing, setDataHousing ] = useState([])

    useEffect(() => {
        setDataHousing(data)
    }, [])

    return (
        <div className='home'>
            <Banner 
                picture={banner_img}
                title={"Chez vous, partout et ailleurs"}
            />
            <section className='cards-container'>
                {dataHousing.map((housing) => (
                    <Card
                        key={housing.id}
                        id={housing.id}
                        picture={housing.cover}
                        title={housing.title}
                    />
                ))}
            </section>
        </div>
    );
};

export default Home;
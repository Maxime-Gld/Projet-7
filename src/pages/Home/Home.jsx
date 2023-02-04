import React from 'react';
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
            <Banner />
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
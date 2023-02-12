import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Slideshow from '../../components/Slideshow/Slideshow';

const Housing = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [housing, setHousing] = useState({});

  useEffect(() => {
    fetch('/housing.json')
      .then((res) => res.json())
      .then((datas) => {
        const house = datas.find((elt) => elt.id === id);
        if (house !== undefined) {
          setHousing(house);
        } else {
          navigate('../Error/error');
        }
      })
      .catch((err) => console.error(err));
  }, [id, navigate]);

  const { title, location } = housing;

  return (
    <div className="housing">
      <div>
        <Slideshow datas={housing.pictures} />
      </div>

      <section className="display_container">
        <div className="display_text">
          <h1>{title}</h1>
          <p>{location}</p>
        </div>
        <div></div>
      </section>
    </div>
  );
};

export default Housing;

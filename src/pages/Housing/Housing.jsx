import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Profil from '../../components/Profil/Profil';
import Slideshow from '../../components/Slideshow/Slideshow';
import Tag from '../../components/Tag/Tag';
import star from '../../assets/Images/star-icon.png';
import star_red from '../../assets/Images/star-red.png';
import DropDown from '../../components/DropDown/DropDown';

const Housing = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [housing, setHousing] = useState([]);
  const {
    title,
    location,
    host,
    tags,
    rating,
    pictures,
    equipments,
    description,
  } = housing;

  const range = [1, 2, 3, 4, 5];
  const missingValue = range.length - rating;

  const housingKeys = Object.keys(housing);
  const titleEquipement = housingKeys[8];
  const titleDescription = housingKeys[4];

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

  return (
    <div className="housing">
      <Slideshow datas={pictures} />

      <section className="housing--information">
        <div className="housing--information__container">
          <div className="housing__text">
            <h1>{title}</h1>
            <p>{location}</p>
          </div>
          <Tag datas={tags} />
        </div>

        <div className="housing--information__container">
          <Profil datas={host} />
          <div className="housing__rating">
            {range.map((rangeElem) =>
              rating >= rangeElem ? (
                <img
                  src={star_red}
                  alt="etoile donnée sur 5"
                  key={rangeElem.toString()}
                />
              ) : null
            )}

            {range.map((rangeElem) =>
              missingValue >= rangeElem ? (
                <img
                  src={star}
                  alt="étoile manquante sur 5"
                  key={rangeElem.toString()}
                />
              ) : null
            )}
          </div>
        </div>
      </section>

      <div className="housing__dropdown">
        <DropDown title={titleEquipement} datas={equipments} />
        <DropDown title={titleDescription} datas={description} />
      </div>
    </div>
  );
};

export default Housing;

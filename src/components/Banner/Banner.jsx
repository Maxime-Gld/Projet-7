import React from 'react';
import { PropTypes } from 'prop-types';

const Banner = ({ picture, title }) => {
  return (
    <div className="banner__container">
      <img src={picture} alt="Banniere de la page d'accueil" />
      <h1>{title}</h1>
    </div>
  );
};

Banner.prototype = {
  picture: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Banner;

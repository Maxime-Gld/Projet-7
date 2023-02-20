import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="error__container">
      <h1 className="error__container__title">404</h1>
      <p className="error__container__text">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link className="backHome" to="/">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
};

export default Error;

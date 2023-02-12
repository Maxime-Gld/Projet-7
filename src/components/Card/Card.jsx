import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PropTypes } from 'prop-types';

const Card = ({ data }) => {
  const { id, cover, title } = data;
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/housing/${id}`);
  };
  return (
    <article className="card" onClick={handleNavigate}>
      <img src={cover} alt={title} />
      <h2>{title}</h2>
    </article>
  );
};

Card.propTypes = {
  id: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Card;

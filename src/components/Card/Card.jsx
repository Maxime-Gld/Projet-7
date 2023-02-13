import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoading } from '../../utils/hook/useLoading';
import Loader from '../Loader/Loader';

const Card = ({ datas }) => {
  const { data, isLoading } = useLoading(datas);
  const { id, cover, title } = data;
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/housing/${id}`);
  };
  return !isLoading ? (
    <article className="card" onClick={handleNavigate}>
      <img src={cover} alt={title} />
      <h2>{title}</h2>
    </article>
  ) : (
    <article className="card">
      <Loader />
    </article>
  );
};

export default Card;

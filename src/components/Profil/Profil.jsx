// import React, { useEffect, useState } from 'react';
import { useLoading } from '../../utils/hook/useLoading';
import Loader from '../Loader/Loader';

const Profil = ({ datas }) => {
  const { data, isLoading } = useLoading(datas);

  return !isLoading ? (
    <div className="profil__container">
      <p>{data.name}</p>
      <div
        className="profil__picture"
        style={{ backgroundImage: `url(${data.picture})` }}
      ></div>
    </div>
  ) : (
    <div className="profil__container">
      <Loader />
    </div>
  );
};

export default Profil;

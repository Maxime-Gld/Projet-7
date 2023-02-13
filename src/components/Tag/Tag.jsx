import React from 'react';
import { useLoading } from '../../utils/hook/useLoading';
import Loader from '../Loader/Loader';

const Tag = ({ datas }) => {
  const { data, isLoading } = useLoading(datas);

  return !isLoading ? (
    <div className="tag">
      {data.map((tag, index) => (
        <div className="tag__container" key={index}>
          <p>{tag}</p>
        </div>
      ))}
    </div>
  ) : (
    <Loader />
  );
};

export default Tag;

import React from 'react';

const Profil = ({ host }) => {
  return (
    <div className="profil__container">
      <p>{host.name}</p>
      <div className="profil__picture">
        <img src={host.picture} alt={host.name} />
      </div>
    </div>
  );
};

export default Profil;

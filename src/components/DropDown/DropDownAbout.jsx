import React, { useState } from 'react';
import icon from '../../assets/Images/vector.png';

const DropDown = ({ title, text }) => {
  const [isOpen, SetIsOpen] = useState(false);

  return isOpen ? (
    <div className="dropdown">
      <div
        className="dropdown__btn dropdown__btn--about"
        onClick={() => SetIsOpen(false)}
      >
        <h2>{title}</h2>
        <img
          className="dropdown__icon--revert"
          src={icon}
          alt="icone fléchée"
        />
      </div>
      <div className="dropdown__container dropdown__container--about">
        <p>{text}</p>
      </div>
    </div>
  ) : (
    <div className="dropdown">
      <div
        className="dropdown__btn dropdown__btn--about"
        onClick={() => SetIsOpen(true)}
      >
        <h2>{title}</h2>
        <img className="dropdown__icon" src={icon} alt="icone fléchée" />
      </div>
    </div>
  );
};

export default DropDown;

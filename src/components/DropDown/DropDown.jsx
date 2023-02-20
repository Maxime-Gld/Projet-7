import React, { useState } from 'react';
import icon from '../../assets/Images/vector.png';

const DropDown = ({ title, datas }) => {
  const [isOpen, SetIsOpen] = useState(false);
  const text = datas;

  let dropdownText;
  if (Array.isArray(text)) {
    dropdownText = (
      <ul>
        {text.map((equipement, index) => (
          <li key={index}>{equipement}</li>
        ))}
      </ul>
    );
  } else {
    dropdownText = <p>{text}</p>;
  }

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
        {dropdownText}
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

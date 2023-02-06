import React, { useState } from 'react';
import { PropTypes } from 'prop-types';

const DropDown = ({title, icon, text}) => {
    const [isOpen, SetIsOpen ] = useState(false)

    return isOpen ? (
        <div className='dropdown'>
            <div className='dropdown__btn' onClick={() => SetIsOpen(false)}>
                <h2>{title}</h2>
                <img className='dropdown__icon--revert' src={icon} alt="icone fléchée"/>
            </div>
            <div className='dropdown__container'>
                <p>{text}</p>
            </div>
        </div>
    ) : (
        <div className='dropdown'>
            <div className='dropdown__btn' onClick={() => SetIsOpen(true)}>
                <h2>{title}</h2>
                <img className='dropdown__icon' src={icon} alt="icone fléchée"/>
            </div>
        </div>
    );
};

DropDown.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default DropDown;
import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types'

const Card = ({ id, picture, title }) => {
    return (
        <article className='card'>
            <Link to={`/housing/${id}`}>
                <img src={picture} alt="aperçu de l'appartement" />
                <h2>{title}</h2>
            </Link>
        </article>
    );
};


Card.propTypes = {
    id: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default Card;
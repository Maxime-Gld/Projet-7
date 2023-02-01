import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='error-container'>
            <h1 className='error-container_title'>404</h1>
            <p className='error-container_text'>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/">Retourner sur la page d’accueil</Link>
        </div>
    );
};

export default Error;
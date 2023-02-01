import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/Images/logo.svg";

const Header = () => {
    return (
        <header className='header'>
            <img src={logo} alt="logo de Kasa" className='header_logo' />
            <nav className='header_nav'>
                <ul>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/about">A propos</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
import React from 'react';
import logo_footer from '../../assets/Images/logo_footer.svg'

const Footer = () => {
    return (
        <footer className='footer'>
                <img src={logo_footer} alt="logo de Kasa" className='footer_logo'/>
                <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
};

export default Footer;
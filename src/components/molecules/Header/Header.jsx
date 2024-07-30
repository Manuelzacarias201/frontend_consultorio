import React, { useState } from 'react';
import '../Header/Header.css';

const Header = (props) => {
    const [showPopup, setShowPopup] = useState(false);

    const handleMouseEnter = () => {
        setShowPopup(true);
    };

    const handleMouseLeave = () => {
        setShowPopup(false);
    };

    return (
        <div className='content'>
            <div className='contentLogo'>
                <img className='logoImage' src={props.logo} alt="Logo" />
            </div>
            <div className='contentContact' 
                 onMouseEnter={handleMouseEnter} 
                 onMouseLeave={handleMouseLeave}>
                <img className='contactImage' src={props.contact} alt="" />
                {showPopup && (
                    <div className='popup'>
                        <a href="/login">Iniciar sesión</a>
                        <a href="/register">Registrarse</a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;

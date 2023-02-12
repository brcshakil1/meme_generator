import React from 'react';
import './Navbar.css';

import trollFace from '../../images/Troll-Face.png'


const Navbar = () => {
    return (
        <header className='header-nav'>
            <nav className='navbar'>
                <div className="logo_section">
                    <img src={trollFace} alt="logo" />
                    <h2>Meme Generator</h2>
                </div>
                <p className='nav-text'>React Course - Project 3</p>
            </nav>
        </header>
    );
};

export default Navbar;
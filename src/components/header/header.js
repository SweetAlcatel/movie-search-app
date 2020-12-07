import React from 'react';
import './header.css';

const Header = ({ text }) => {
    return (
        <header>
            <h2>{text}</h2>
        </header>
    );
};

export default Header;


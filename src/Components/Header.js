import React from 'react';

import './Header.css';

const Header = () => {
    return (
        <header>
            <div className="logo-content">
                <img src="/snorlax_64.png" alt="Snorlax" />
                
                <h3>Pokedex</h3>
            </div>
        </header>
    );
}

export default Header;

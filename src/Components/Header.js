import React from 'react';
import SwitchToggle from './SwitchToggle';

import './Header.css';

const Header = () => {
    
    return (
        <header>
            <div className="logo-content">
                <img src="snorlax_64.png" alt="Snorlax" />
                
                <h3>Pokedex</h3>
            </div>

            <div className="toggle-mode">
                <small>Beautiful &#10024;</small>
                <SwitchToggle />
            </div>
        </header>
    );
}

export default Header;

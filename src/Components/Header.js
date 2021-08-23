import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Header.css';

const Header = () => {
    const navigate = useNavigate();
    
    function goHome() {
        navigate('/');
    }

    return (
        <header>
            <div className="logo-content" onClick={goHome}>
                <img src="/snorlax_64.png" alt="Snorlax" />
                
                <h3>Poketest</h3>
            </div>
        </header>
    );
}

export default Header;

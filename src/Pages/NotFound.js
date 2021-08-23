import React from 'react';
import { useNavigate } from 'react-router-dom';

import './NotFound.css';

const NotFound = () => {
    const navigate = useNavigate();

    function goHome() {
        navigate('/');
    }

    return (
        <section className="notfound-container">
            <h3>404 - Page not found </h3>
            <img src="/snorlax_not_found.png" alt="Snorlax" />

            <button onClick={goHome}>Go Back</button>
        </section>
    );
}

export default NotFound;

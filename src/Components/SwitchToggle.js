import React from 'react';
import { GlobalContext } from '../Context/GlobalContext';

import './SwitchToggle.css'; 

function SwitchToggle({ value = false }) {
    const global = React.useContext(GlobalContext);

    return (
        <div>
            <label className="switch">
                <input onChange={global.switchMode} type="checkbox" checked={global.beautifulMode} />
                <span className="slider round" />
            </label>
        </div>
    )
}

export default SwitchToggle;

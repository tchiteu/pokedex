import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
    const [beautifulMode, setBeautifulMode] = React.useState(false);

    function switchMode() {
        setBeautifulMode(beautifulMode => !beautifulMode);
    }

    return (
        <GlobalContext.Provider value={{beautifulMode, switchMode}}>
            { children }
        </GlobalContext.Provider>
    )
}
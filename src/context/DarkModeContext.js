import React, {createContext, useState} from 'react';

export const DarkModeContext = createContext() 

export const DarkModeProvider =(props) => {

    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }
    return (
        <>
            <DarkModeContext.Provider value = {{darkMode, toggleDarkMode }}>
                {props.children}
            </DarkModeContext.Provider>
        </>
    );
}



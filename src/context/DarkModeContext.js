import React, {createContext, useState} from 'react';

export const DarkModeContext = createContext() 

//Se esta agregando una opcion de darkMode usando Context al proyecto

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



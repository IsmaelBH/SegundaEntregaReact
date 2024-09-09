import React, { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext/ThemeContext';

const ChildComponent = () => {
    const { isDarkMode, ToggleTheme } = useContext(ThemeContext);

    console.log(isDarkMode);
    return (
        <div
            className={isDarkMode ? "white" : "black"}
        >
            <button onClick={ToggleTheme}>Toggle Dark Mode</button>
        </div>
    );
}

export default ChildComponent;

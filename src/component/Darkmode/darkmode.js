import React from "react";
import './dark-m.css';

const darkmode = () => {
    const SetDarkMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'dark')
        localStorage.setItem("selectedTheme", "dark")
    };
    
    const SetLightMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'light')
        localStorage.setItem("selectedTheme", "light")
    };

    const selectedTheme = localStorage.getItem("selectedTheme")

    if (selectedTheme === "dark") {
        SetDarkMode()
    } else {
        SetLightMode()
    };

    const toggleTheme = (e) => {
        if (e.target.checked) SetDarkMode();
        else SetLightMode()
    };
    return (
        <div>
            <input className="dark_mode_input" id="darkmode-toggle" type="checkbox" onChange={toggleTheme} defaultChecked={selectedTheme === "dark"}/>
            <label className='dark_mode_label' for='darkmode-toggle'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-brightness-low-fill" viewBox="0 0 16 16" className="sun">
                    <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8.5 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 11a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m5-5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m-11 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m9.743-4.036a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707m-7.779 7.779a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707m7.072 0a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707M3.757 4.464a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707" />
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-moon-fill" viewBox="0 0 16 16" className="moon">
                    <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278" />
                </svg>
            </label>
        </div>
    );
};

export default darkmode;
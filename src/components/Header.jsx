import React from "react";
import { useState } from "react";

import "../styles/Header.css"

const Header = props => {
    const initialState = false;
    const [darkMode, setDarkMode] = useState(initialState);
    

    const {titulo, item, className, setText} = props;

    const handlerDarkMode = () =>{
        setDarkMode(!darkMode);
        setText(darkMode ? "No Dark Mode" : "Dark Mode");
    };

    return (
        <header className ={!darkMode ? "normal-header" : "dark-header"}>
            <a href="#">{titulo}</a>
            <ul>
                <li>
                    <a href="#">{item}</a>
                </li>
                <li>
                    <a href="#">{item}</a>
                </li>
                <li>
                    <a href="#">{item}</a>
                </li>
                <li>
                    <button onClick = {handlerDarkMode}>Dark Mode</button>
                </li>
            </ul>
        </header>
    );
};

export default Header;
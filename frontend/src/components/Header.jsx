import React from 'react';
import "../styles/Header.css";
import { Link } from "react-router-dom";
import mimi from "../assets/mimiLogo.jpg";

const header = () => {
    return (
        <div className='header'>
            <div className='enc'>
            <img className="logo" src={mimi} alt="logo"/>
            <div className='leLien'>
            <Link className='lien' to="/">Acceuil</Link>
            </div>
            </div>
        </div>
    );
};

export default header;
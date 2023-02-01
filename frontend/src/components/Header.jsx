import React from 'react';
import "../styles/Header.css";
import { Link } from "react-router-dom";

const header = () => {
    return (
        <div className='header'>
            <Link to="/">Acceuil</Link>
        </div>
    );
};

export default header;
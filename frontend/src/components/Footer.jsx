import React from 'react';
import "../styles/Footer.css";
import { AiFillFacebook } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";


function Footer() {
    return (
        <footer className="footer">
            <div className='coordonnées'>
            <div className='nameNath'>
                <p className='firts'>Réalisation de Nathalie Dune</p>
            </div>
            </div>
        </footer>
    );
}

export default Footer;

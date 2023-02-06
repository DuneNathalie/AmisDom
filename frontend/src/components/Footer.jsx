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
                <p className='firts'>Réalisation faite en 2 jours par Nathalie Dune aprés 4 mois et demie de formation</p>
            </div>
            <div className="logoBis">
                <Link className="logos" to="//fr-fr.facebook.com/">
                    <AiFillFacebook />
                </Link>
                <Link className="logos" to="//www.instagram.com/?hl=fr">
                    <BsInstagram />
                </Link>
            </div>
            </div>
        </footer>
    );
}

export default Footer;

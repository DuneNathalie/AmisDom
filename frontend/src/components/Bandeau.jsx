import React from 'react';
import "../styles/Bandeau.css";
//import chien from "../assets/chien.jpg";
//import chat from "../assets/chat.jpg";
//import hamster from "../assets/hamster.jpg";
//import lapin from "../assets/lapin.jpg";
import { Link } from "react-router-dom";
import mimi from "./../assets/mimiLogo.jpg";

const bandeau = () => {
    return (
        <div className='letout'>  
            <div className='acceuil'>  
                <Link className='liens' to="/Home">
                    <div className="lien">AmisDom à adopter</div>
                    <img className="logo" src={mimi} alt="logo"/>
                </Link>
            </div>
        </div>
    );
};

export default bandeau;
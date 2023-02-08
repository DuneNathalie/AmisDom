import React from 'react';
import "../styles/Bandeau.css";
import chien from "../assets/chien.jpg";
import chat from "../assets/chat.jpg";
import hamster from "../assets/hamster.jpg";
import lapin from "../assets/lapin.jpg";
import { Link } from "react-router-dom";
import mimi from "./../assets/mimiLogo.jpg";

const bandeau = () => {
    return (
        <div className='bandeau'> 
            <div className='bienvenue'>
            <img className="logo" src={mimi} alt="logo"/>
                <h1>Bienvenue à AmisDom</h1>
            </div> 
            <div className="toutlien">
            <div className='acceuil'>  
                <Link className='liens' to="/Home">
                    <div className="lien">Adopte un AmisDom</div>
                </Link>
                    <img className="vecto" src={chien} alt="logo"/>
            </div>
            <div className='aAdopter'>  
                <Link className='liens' to="/CreationAdoption">
                    <div className="lien">Ajoute un AmisDom</div>
                </Link>
                    <img className="vecto" src={chat} alt="logo"/>
            </div>
            <div className='deconnection'>  
                <Link className='liens' to="/">
                    <div className="lien">Pour te deconnecter</div>
                </Link>
                    <img className="vecto" src={hamster} alt="logo"/>
            </div>
            </div>
            </div>
    );
};

export default bandeau;
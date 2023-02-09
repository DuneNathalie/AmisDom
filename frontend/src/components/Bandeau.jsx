import React from 'react';
import "../styles/Bandeau.css";
import chien from "../assets/chien.jpg";
import chat from "../assets/chat.jpg";
import hamster from "../assets/hamster.jpg";
import { Link } from "react-router-dom";
import mimi from "./../assets/mimiLogo.jpg";

const bandeau = () => {
    return (
        <div className='bandeau'> 
            <div className='bienvenue'>
            <img className="logo" src={mimi} alt="logo"/>
                <p>AmisDom</p>
            </div> 
            <div className="toutlien">
            <div className='clic'>  
                    <img className="vecto" src={chien} alt="logo"/>
                <Link className='liens' to="/Home">
                    <div className="lien">Adopte un AmisDom</div>
                </Link>
            </div>
            <div className='clic'>  
                <Link className='liens' to="/CreationAdoption">
                    <div className="lien">Ajoute un AmisDom</div>
                </Link>
                    <img className="vecto" src={chat} alt="logo"/>
            </div>
            <div className='clic'>  
                    <img className="vecto" src={hamster} alt="logo"/>
                <Link className='liens' to="/">
                    <div className="lien">Pour te deconnecter</div>
                </Link>
            </div>
            </div>
            </div>
    );
};

export default bandeau;
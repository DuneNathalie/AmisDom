import React from 'react';
import "../styles/Bandeau.css";
import { Link } from "react-router-dom";
import mimi from "./../assets/mimiLogo.jpg";

const bandeau = () => {
    return (
        <div className='bandeau'> 
            <div className='bienvenue'>
            <img className="logo" src={mimi} alt="logo"/>
           <div  className='bienvenue'>Bienvenue</div>
            </div> 
            <div className="toutlien">
            <Link className='profil' to="/User">
                    <div className="profi">Ta page profil</div>
                </Link>
            <div className='clic'>  
                <Link className='liens' to="/Home">
                    <div className="lien">Adopte un AmisDom</div>
                </Link>
            </div>
            <div className='clic'>  
                <Link className='liens' to="/CreationAdoption">
                    <div className="lien">Ajoute un AmisDom</div>
                </Link>
            </div>
            <div className='clic'>  
                <Link className='liens' to="/">
                    <div className="lien">Pour te deconnecter</div>
                </Link>
            </div>
            </div>
            </div>
    );
};

export default bandeau;
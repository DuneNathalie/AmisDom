import React from 'react';
import "../styles/Bandeau.css";
import { Link } from "react-router-dom";
import mimi from "./../assets/mimiLogo.jpg";
import profil from "../assets/profil.svg";
import hamster from "../assets/hamster.svg";
import patte from "../assets/patte.svg";
import bye from "../assets/bye.svg";

const bandeau = () => {
    return (
        <div className='bandeau'> 

            <div className='bienvenue'>
                <img className="logo" src={mimi} alt="logo"/>
                <div  className='bienvenue'>Bienvenue</div>
            </div> 

        <div className="toutlien">


            <div className='clic'>  
                    <img className='iconB' src={patte} alt="patte" width={40}/>
                <Link className='liens' to="/Home">
                    <div className="lien">Adopte un AmisDom</div>
                </Link>
            </div>

            <div className='clic'>  
                    <img className='iconB' src={hamster} alt="hamster" width={40}/>
                <Link className='liens' to="/CreationAdoption">
                    <div className="lien">Ajoute un AmisDom</div>
                </Link>
            </div>

            <div className='clic'> 
                    <img className='iconB' src={profil} alt="coeur" width={40}/>
                <Link className='liens' to="/User">
                    <div className="profi">Ta page profil</div>
                </Link>
            </div>
            
            <div className='clic'>  
                    <img className='iconB' src={bye} alt="bye" width={40}/>
                <Link className='liens' to="/">
                    <div className="lien">Pour te deconnecter</div>
                </Link>
            </div>
            </div>
            </div>
    );
};

export default bandeau;
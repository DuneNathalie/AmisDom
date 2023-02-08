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
        <div className='letout'>     
        <div className='header'>
            <div className='enc'>
            <div className='leLien'>
            <Link className='liens' to="/">
                <div className="lien">Acceuil</div>
            <img className="logo" src={mimi} alt="logo"/>
            </Link>
            </div>
            </div>
        </div>
      <div className='amis'>
                AmisDom à adopter
            </div>
            <div className='anim'>
            <div className='type'>
            <img className='vecto' src={chien} alt="chien" />
            <p>Chien</p>
            </div>
            <div className='type'>
            <img className='vecto' src={chat} alt="chat" />
            <p>Chat</p>
            </div>
            <div className='type'>
            <img className='vecto' src={lapin} alt="lapin" />
            <p>Lapin</p>
            </div>
            <div className='type'>
            <img className='vecto' src={hamster} alt="hamster" />
            <p>Hamster</p>
            </div>
            </div>
    
        </div>
    );
};

export default bandeau;
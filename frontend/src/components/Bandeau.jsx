import React from 'react';
import "../styles/Bandeau.css";
import chien from "../assets/chien.jpg";
import chat from "../assets/chat.jpg";
import hamster from "../assets/hamster.jpg";
import lapin from "../assets/lapin.jpg";

const bandeau = () => {
    return (
        <div className='letout'>
            <div className='amis'>
                <p>Nos AmisDom <br></br> à Adopter</p>
            </div>
        <div className='bandeau'>
            <div className='type'>
            <img className='vecto' src={chien} alt="chien" />
            <p>Chat</p>
            </div>
            <div className='type'>
            <img className='vecto' src={chat} alt="chat" />
            <p>Lapin</p>
            </div>
            <div className='type'>
            <img className='vecto' src={lapin} alt="lapin" />
            <p>Chien</p>
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
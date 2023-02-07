
import React, {useState} from 'react';
import "../styles/Adopte.css";
import {Link} from "react-router-dom";
import Confetti from './Confetti';
import Amis from "../assets/mimiLogo.jpg";

const Adopte = () => {
    const [ferme, setFerme] = useState(false);

    return (
        <div className='validation'>
            <Confetti />
            <img className="amis" src={Amis} alt="amis"/>
            <div className='cubeTex'>
            <div className='message'>
                <div className="titreMess">
                TON ADOPTION EST VALIDÉE!
                </div>
                <p>Nous vous souhaitons plein de bonheur</p>
                </div>
            <Link to="/">
            <button className="fermer" type="submit" >Fermer</button>
            </Link>
            </div>           
        </div>
    );
};

export default Adopte;
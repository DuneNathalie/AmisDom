
import React, {useState} from 'react';
import "../styles/Adoption.css";
import {Link} from "react-router-dom";
import Confetti from '../components/Confetti';
import Amis from "../assets/mimiLogo.jpg";

const Adoption = () => {
    const [ferme, setFerme] = useState(false);

    return (
    <div className='adopteValide'>
            <div className='conf'>
            <Confetti />
            </div>
            <div className='validation'>
                <div className='cubeImg'>
                    <img className="amis" src={Amis} alt="amis"/>
                </div>
                <div className='message'>
                    <div className='petitexte'>
                        <h2>FELICITATION TON ADOPTION EST VALIDÉE!</h2>
                        <br/>
                        <p>Nous vous souhaitons plein de bonheur</p>
                        </div>
                    <Link to="/">
                        <button className="fermer" type="submit" >Fermer</button>
                    </Link>
                </div>
            </div>
        </div> 
    );
};

export default Adoption;
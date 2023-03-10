import React, {useState} from 'react';
import {Link} from "react-router-dom";
import Footer from "../components/Footer";
import Bandeau from "../components/Bandeau";
import Confetti from '../components/Confetti';
import Amis from "../assets/mimiLogo.jpg";
import "../styles/adoption/Adoption.css";

const Adoption = () => {
    const [ferme, setFerme] = useState(false);

    return (
<div className='cent'>
         <div className="banhearder">
            <Bandeau />
        </div>

    <div className='bravo'>

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

                    <Link to="/Home">
                        <button className="fermer" type="submit" >RETOUR HOME</button>
                    </Link>
                    </div>
            </div>

        </div>
            <Footer/>
        </div>
    </div>
    );
};

export default Adoption;
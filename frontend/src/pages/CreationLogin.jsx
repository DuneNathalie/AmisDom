import React from 'react';
import {Link} from 'react-router-dom';
import "../styles/login/CreationLogin.css";
import video from "../assets/videoChien.mp4";

const CreationLogin = () => {
    return (
        <div className='creationLogin'>
                    <div className='video'>
                <video className="videoChien" src={video} alt="videoChien" autoPlay loop muted/>
                    </div>
            <div className='inscrip'>
                    <div className='titre'>
                        <h1>INSCRIPTION</h1>   
                    </div>
                
                    <form className='formInscrip'>
                        <div className='divlab'>
                            <label htmlFor="lab">Choisi ton pseudo</label>
                                <input className='inplab' type="text" id="pseudo" name="pseudo"/>
                        </div>
                        <div className='divlab'>
                            <label htmlFor="lab">Adresse mail</label>
                                <input className='inplab' type="text" id="ajouterMail" name="ajouterMail"/>
                        </div>
                        <div className='divlab'>
                            <label htmlFor="lab">Confirme ton adresse mail</label>
                                <input className='inplab' type="text" id="confirMail" name="confirrMail"/>
                        </div>
                        <div className='divlab'>
                            <label htmlFor="lab">Mot de passe</label>
                                <input className='inplab' type="text" id="ajouteMpass" name="ajouteMpass"/>
                        </div>
                        <div className='divlab'>
                            <label htmlFor="lab">Confirme ton mot de passe</label>
                                <input className='inplab' type="text" id="ajouteMpass" name="confirMpass"/>
                        </div>
                        <button className='seconnecter'>
                    <Link className='validerInscription' to="/Home">VALIDE</Link>
                        </button>
                    </form>
                </div>
                </div>
    );
};

export default CreationLogin;
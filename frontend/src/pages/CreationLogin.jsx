import React from 'react';
import {Link} from 'react-router-dom';
import "../styles/login/CreationCompte.css";
import video from "../assets/videoChien.mp4";

const CreationLogin = () => {
    return (
        <div className='creationLogin'>
                    <div className='video'>
                <video className="video" src={video} alt="videoChien" autoPlay muted/>
                    </div>
            <div className='inscrip'>
                    <div className='inscription'>
                        Inscription
                    </div>
                
                    <form className='formInscrip'>
                        <div className='divlab'>
                            <label htmlFor="lab">adresse mail</label>
                                <input className='inplab' type="text" id="ajouterMail" name="ajouterMail"/>
                        </div>
                        <div className='divlab'>
                            <label htmlFor="lab">confirme ton adresse mail</label>
                                <input className='inplab' type="text" id="confirMail" name="confirrMail"/>
                        </div>
                        <div className='divlab'>
                            <label htmlFor="lab">mot de passe</label>
                                <input className='inplab' type="text" id="ajouteMpass" name="ajouteMpass"/>
                        </div>
                        <div className='divlab'>
                            <label htmlFor="lab">confirme ton mot de passe</label>
                                <input className='inplab' type="text" id="ajouteMpass" name="confirMpass"/>
                        </div>
                    </form>
                        <button className='validerInscrip'>
                    <Link className='validerInscription' to="/Home">Valide</Link></button>
                </div>
                </div>
    );
};

export default CreationLogin;
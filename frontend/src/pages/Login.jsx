import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import "../styles/login/Login.css";
import video from "../assets/videoChien.mp4";

const Login = () => {
    const [user, setUser] = useState({mail: "", password: ""});

    
    const handelcliclog=() => {
        axios
        .post(`http://localhost${process.env.REACT_APP_PORT}/login`, user) 
        .then(result=> {
            console.log(result.data)
        })
        .cache(error => console.error(error))
    }
    

    return (
        <div className='creationLogin'>
            <div className='video'>
                <video className="videoChien" src={video} alt="videoChien" autoPlay loop muted/>
                 
            </div>
           <div className='inscrip'>
                <div className='titre'>
                    <h1 className='logAmi'>AMISDOM</h1>
                </div>
            <div className='formCompte'>
               
                    <form className='formulaire'>
                        <div className='divlab'>
                            <label className="lab" htmlFor="mail">Adresse mail</label>
                                <input 
                                onChange={(e)=> setUser({...user, mail: e.target.value})}
                                value={user.mail}
                                className='inplab' type="text" id="mail" name="mail"/>
                                {user.mail}
                        </div>
                        <div className='divlab'>
                            <label className="lab" htmlFor="mpass">Mot de passe</label>
                                <input
                                 onChange={(e)=> setUser({...user, password: e.target.value})}
                                 value={user.password}
                                className="inplab" type="text" id="mpass" name="mpasse"/>
                                {user.password}
                        </div>
                    <button 
                    onClick={() => handelcliclog()}
                    className='seconnecter'>
                        <Link className='seconnecter' to="/Home">SE CONNECTER</Link>
                    </button>
            <div className='créerLogin'>
                <Link className='créerLogin' to="/CreationLogin">
                    <div className="créer">
                        <h2>créer un compte</h2>
                    </div>
                </Link>
            </div>
                    </form>
                </div>
        </div>
        </div>
    );
};

export default Login;


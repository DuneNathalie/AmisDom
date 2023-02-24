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
        <div className='login'>
            <div className='video'>
                <video className="video" src={video} alt="videoChien" autoPlay muted/>
            </div>
           <div className='connectCompte'>
                <div className='titre'>
                    AMISDOM
                </div>

            <div className='formCompte'>
               
                    <form className='formInscrip'>
                        <div className='divlab'>
                            <label className="lab" htmlFor="mail">adresse mail</label>
                                <input 
                                onChange={(e)=> setUser({...user, mail: e.target.value})}
                                value={user.mail}
                                className='inplab' type="text" id="mail" name="mail"/>
                                {user.mail}
                        </div>
                        <div className='divlab'>
                            <label className="lab" htmlFor="mpass">mot de passe</label>
                                <input
                                 onChange={(e)=> setUser({...user, password: e.target.value})}
                                 value={user.password}
                                className="inplab" type="text" id="mpass" name="mpasse"/>
                                {user.password}
                        </div>
                    </form>
                    <button 
                    onClick={() => handelcliclog()}
                    className='seconnecter'>
                        <Link className='seconnecter' to="/Home">se connecter</Link>
                </button>
                </div>
            <div className='créerLogin'>
                <Link className='créerLogin' to="/CreationLogin">
                    <div className="créer">créer un compte</div>
                </Link>
                </div>
        </div>
        </div>
    );
};

export default Login;


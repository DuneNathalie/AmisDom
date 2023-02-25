import react from "react";
import Bandeau from "../components/Bandeau.jsx";
import Footer from "../components/Footer.jsx";
import "../styles/User.css";
import chat from "../assets/chat.jpg";

const User = () => {
    return (
        <div className="User">
             <div className="banhearder">
                <Bandeau />
            </div>
            <div className="profilUser">
                <div className="Profil">
                    <img className="photo" src={chat} alt="profil"/>
                    <div className="profilPhoto">
                    <div className="nameProfil">
                        <h1>Nathalie</h1>
                    </div>
                    <button className="change" type="button">Change ta photo</button> 
                    </div>
                </div>
                <div className="groupe">
                    <div className="favoris">
                        <h2>Favoris</h2><br/>
                    </div>
                    <div className="groupadopte">
                        <h2>Adopté</h2><br/>
                    </div>
                    <div className="faitAdopte">
                        <h2>Mis à l'adoption</h2><br/>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default User;
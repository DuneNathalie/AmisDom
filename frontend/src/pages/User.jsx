import react from "react";
import Bandeau from "../components/Bandeau.jsx";
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
                    <div className="nameProfil">Nathalie</div>
                    <button className="change" type="button">change ta photo</button> 
                    </div>
                </div>
                <div className="groupe">
                    <div className="favoris">
                        <p>favoris</p><br/>
                    </div>
                    <div className="groupadopte">
                        <p>Adopté</p><br/>
                    </div>
                    <div className="faitAdopte">
                        <p>mis à l'adoption</p><br/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User;
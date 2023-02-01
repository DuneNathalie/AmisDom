import React, { useState } from "react";
import { Link } from "react-router-dom";
//import axios from "axios";
import "../styles/Carte.css";
import lapin from "../assets/lapin.jpg";

const carte = () => {

   // const [cardAnimaux, setCardAnimaux] = useState([]);
    
    //const cardanimaux = () => {
       // axios
      //  .get(`http://localhost:${import.meta.env.VITE_PORT_BACK}/animaux`)
       // .then((res) => {
        //  setCardAnimaux(res.data);
      //  })
       // .catch((err) => {
      //    console.error(err);
       // });
   // };
    return (
        <div className='carte'>
            
             <div className="imga">
                <img className="tete" src={lapin} alt="lapin"/>
                <Link to="/Descriptif">
                    <div className="descri">
                        <div className="name">Panpan</div>
                        <div className="gabarit">Petit Lapin</div>
                        <div className="age">10 ans</div>
                    </div>
                    </Link>
            </div>
        </div>
    );
};

export default carte;
import React, { useState, useEffect } from "react";
import Bandeau from "../components/Bandeau.jsx";
import Carte from "../components/Carte.jsx";
//import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {

   // const [cardAnimaux, setCardAnimaux] = useState([]);
    
//const cardanimaux = () => {
    //axios
   // .get(`http://localhost:${import.meta.env.VITE_PORT_BACK}/animaux`)
   // .then((res) => {
    //  setCardAnimaux(res.data);
   // })
   // .catch((err) => {
     // console.error(err);
   // });
//};

//useEffect(() => {
//  cardanimaux();
//}, []);

    return (
        <div className='home'>
            <div className="bando">
            <Bandeau />
            </div>
            <div className="leTout">
                <div className="cadre">
            <div className="titre">TROUVE TON AMISDOM</div>
            <div className="filtre">filtre</div>
            </div>
           <div className='touteCarte'>
                <Link to="/Descriptif" className="Link" >
                    <Carte />
                </Link>
                <Link to="/Descriptif" className="Link" >
                    <Carte />
                </Link>
                <Link to="/Descriptif" className="Link" >
                    <Carte />
                </Link>
                <Link to="/Descriptif" className="Link" >
                    <Carte />
                </Link>
                <Link to="/Descriptif" className="Link" >
                    <Carte />
                </Link>
                <Link to="/Descriptif" className="Link" >
                    <Carte />
                </Link>
                <Link to="/Descriptif" className="Link" >
                    <Carte />
                </Link>
                <Link to="/Descriptif" className="Link" >
                    <Carte />
                </Link>
                <Link to="/Descriptif" className="Link" >
                    <Carte />
                </Link>
                <Link to="/Descriptif" className="Link" >
                    <Carte />
                </Link>
                <Link to="/Descriptif" className="Link" >
                    <Carte />
                </Link>
                <Link to="/Description" className="Link" >
                    <Carte />
                </Link>
            </div>
            </div>
        </div>
    );
};

export default Home;
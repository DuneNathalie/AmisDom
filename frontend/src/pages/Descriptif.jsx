import React, { useState,  useEffect} from "react";
import {useParams} from 'react-router-dom'
import axios from "axios";
import { Link } from "react-router-dom";
import Bandeau from "../components/Bandeau.jsx";
import Footer from "../components/Footer";
import "../styles/Descriptif.css";

const Descriptif = () => {
const [descrip, setDescrip] = useState([]);
const [delAnimaux, setDelAnimaux] = useState([]);
const [confirmation, setConfirmation] = useState(false);
const {id} = useParams();


useEffect(() => {
    axios
    .get(`http://localhost:${process.env.REACT_APP_PORT}/animal/${id}`)
    .then((res) => {
        setDescrip(res.data);
    })
    .catch((err) => {
        console.error(err);
    });
}, []);

const deleteanimaux = () => {
    axios
      .delete(`http://localhost:${process.env.REACT_APP_PORT}/animal/${id}`)
      .then(() => {
        console.log(process.env.REACT_APP_PORT);
        setDelAnimaux("Suppression réussie !");
      })
      .catch(() => {
        setDelAnimaux("Suppression échouée !");
      });
  };
    return (
        <div className="centre">
        <div className="banhearder">
                <Bandeau />
            </div>
                <div className='cadreDescriptif'>
            <div className='presentation'>
            <div className="test">
                {descrip
                .map((val) => {
                    return (
                <div className='rass' key={val.id}>
                    <div className="tofCarre">
                    <img className="pin" src={`http://localhost:${process.env.REACT_APP_PORT}/${val.image}`} alt="pin"/>
                    </div>
                        <div className='info'>
                            <div className="precision">
                                <div className="name">{val.name}</div>
                                <div className="sexe">{val.sexe}</div>
                                 <div className="age">{val.age} ans</div>
                            </div>
                                <div className="texte">
                                    <div className='text'>{val.descriptif}</div>
                                </div>
                        </div>
                </div>
                );
                })}
            </div>
            <Link to="/Adoption">
            <button className="adopte" type="submit" onClick={() => {
                deleteanimaux();
            }} >ADOPTE</button>
            </Link>
            </div>
        </div>
        <Footer/>
        </div>
)}

export default Descriptif;
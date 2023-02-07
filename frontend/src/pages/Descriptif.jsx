import React, { useState,  useEffect} from "react";
import {useParams} from 'react-router-dom'
import axios from "axios";
//import Bandeau from "../components/Bandeau.jsx";
import Adopte from "../components/Adopte";
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
        setDelAnimaux("Suppression réussie !");
      })
      .catch(() => {
        setDelAnimaux("Suppression échouée !");
      });
  };
    return (
        <div className='cadreDescriptif'>
            <div className='presentation'>
                <div className="titrePres">
                    <p>Je te présente</p>
                    </div>
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
            <button className="adopte" type="submit" onClick={() => {
                deleteanimaux();
                setConfirmation(true)
            }} >ADOPTE</button>
            {confirmation && <Adopte />}
            </div>
        </div>
)}

export default Descriptif;
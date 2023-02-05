import React, { useState,  useEffect} from "react";
import {useParams} from 'react-router-dom'
import axios from "axios";
import Bandeau from "../components/Bandeau.jsx";
import "../styles/Descriptif.css";

const Descriptif = () => {
const [descrip, setDescrip] = useState([]);
const [delAnimaux, setDelAnimaux] = useState([]);
//const [targetId, setTargetId] = useState(null);
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
            <div className="bando">
            <Bandeau />
            </div>
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
                                <div className="type">{val.type}</div>
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
            <button className="adopte" type="submit" onClick={() => { deleteanimaux();}} >ADOPTE</button>
            </div>
        </div>
)}

export default Descriptif;
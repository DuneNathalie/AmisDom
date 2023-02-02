import React, { useState,  useEffect} from "react";
import {useParams} from 'react-router-dom'
import axios from "axios";
import Bandeau from "../components/Bandeau.jsx";
import "../styles/Descriptif.css";

const Descriptif = () => {
const [descrip, setDescrip] = useState([]);
const {id} = useParams() ;
    
    useEffect(() => {
    axios
      .get(`http://localhost:5005/animal/${id}`)
      .then((res) => {
       setDescrip(res.data);
      })
      .catch((err) => {
       console.error(err);
      });
 }, []);

    return (
        <div className='descriptif'>
            <div className="bando">
            <Bandeau />
            </div>
            <div className='presentation'>
                <div className='qui'>
                    <p>Je te présente</p>

                <div className="test">
                {descrip
                .map((val) => {
                    return (
                <div className='tofNom' key={val.id}>
                    <img className="pin" src={`http://localhost:5005/${val.image}`} alt="pin"/>
                        <div className='info'>
                        <div className="name">{val.name}</div>
                        <div className="gabarit">{val.gabarit}</div>
                        <div className="type">{val.type}</div>
                        <div className="age">{val.age} ans</div>
                        </div>
                    <div className='text'>{val.descriptif}</div>
                </div>
                );
            })}
            </div>
        </div>
        </div>
        </div>
    
)}

export default Descriptif;
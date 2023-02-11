import React, {useState, useEffect} from 'react';
import Bandeau from "../components/Bandeau.jsx";
import Footer from '../components/Footer';
//import axios from "axios";
//import { Link } from 'react-router-dom';
import "../styles/CreationAdoption.css";


const CreationAdoption = () => {
   /* const [types, setTypes] = useState([]);
    const [sexes, setSexes] = useState([]);
    const [selectedType, setSelectedType] = useState("");
    const [selectedSexe, setSelectedSexe] = useState("");
    const [name, setName] = useState("");
    const [descriptif, setDescriptif] = useState("");
    const [image, setImage] = useState("");

    useEffect(() => {
        axios
        .get(`http://localhost:${process.env.REACT_APP_PORT}/animal/`)
        .then((res) => {
            setTypes(res.data.types);
            setSexes(res.data.sexes);
        })
        .catch((err) => {
            console.error(err);
        });
    }, []);

    const handleSubmit = event => {
        event.preventDefault();
        axios
            .post(`http://localhost:${import.meta.env.VITE_PORT_BACK}/animal`, {
                type: selectedType,
                name: name,
                sexe: selectedSexe,
                descriptif: descriptif,
                image: image
                })
                .then((res)=> {
                    setSelectedType("");
                    setSelectedSexe("");
                    setName("");
                    setDescriptif("");
                    setImage("");
    })

        };*/

    return (
      <div className="centrer">
      <div className="banhearder">
              <Bandeau />
          </div>
        <div className='creationAdoption'>
           <div className='titreCreation'>Ajoute un AmisDom</div>  
           <form className='formInscrip'>
                        <div className='divlab'>
                            <label htmlFor="lab">type</label>
                                <input className='inplab' type="text" id="ajouterMail" name="ajouterMail"/>
                        </div>
                        <div className='divlab'>
                            <label htmlFor="lab">prenom</label>
                                <input className='inplab' type="text" id="confirMail" name="confirrMail"/>
                        </div>
                        <div className='divlab'>
                            <label htmlFor="lab">sexe</label>
                                <input className='inplab' type="text" id="ajouteMpass" name="ajouteMpass"/>
                        </div>
                        <div className='divlab'>
                            <label htmlFor="lab">description</label>
                                <input className='inplab' type="text" id="ajouteMpass" name="confirMpass"/>
                        </div>
                    </form>
               <button className="confir" type="submit">Ajouter</button>
               <Footer/>
        </div>
        </div>
    );
    }

export default CreationAdoption;
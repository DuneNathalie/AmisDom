import React, {useState, useEffect} from 'react';
import Bandeau from "../components/Bandeau.jsx";
import Footer from '../components/Footer';
import axios from "axios";
//import { Link } from 'react-router-dom';
import "../styles/CreationAdoption.css";


const CreationAdoption = () => {
    const [types, setTypes] = useState([]);
    const [sexes, setSexes] = useState([]);
    //const [selectedType, setSelectedType] = useState("");
    //const [selectedSexe, setSelectedSexe] = useState("");
    const [name, setName] = useState("");
    const [descriptif, setDescriptif] = useState("");
    const [image, setImage] = useState("");
    const [age, setAge] = useState("");

    useEffect(() => {
        axios
        .get(`http://localhost:${process.env.REACT_APP_PORT}/animal/`)
        .then((res) => {
            setTypes(res.data.type);
            setSexes(res.data.sexe);
        })
        .catch((err) => {
            console.error(err);
        });
    }, []);

    const handleSubmit = event => {
        event.preventDefault();
        axios
            .post(`http://localhost:${import.meta.env.VITE_PORT_BACK}/animal`, {
                type: types,
                name: name,
                sexe: sexes,
                descriptif: descriptif,
                image: image,
                age: age
                })
                .then((res)=> {
                    setTypes("");
                    setSexes("");
                    setName("");
                    setDescriptif("");
                    setImage("");
                    setAge("");
    })

        }

    return (
      <div className="centrer">
      <div className="banhearder">
              <Bandeau />
          </div>
        <div className='creationAdoption'>
           <div className='titreCreation'>
            <h1>AJOUTE UN AMISDOM</h1>
            </div>  
            <form className='tableau'>
                        <div className='divlab'>
                            <label htmlFor="lab">Quel type est-il?</label>
                                <input className='inplab' type="text" id="ajouterType" name="ajouterType"/>
                        </div>
                        <div className='divlab'>
                            <label htmlFor="lab">Quel on son sexe</label>
                                <input className='inplab' type="text" id="confirSexe" name="confirSexe"/>
                        </div>
                        <div className='divlab'>
                            <label htmlFor="lab">Quel age a t'il?</label>
                                <input 
                                onChange={(e)=> setAge({age: e.target.value})}
                                value={age.age}
                                className='inplab' type="text" id="confirAge" name="confirAge"/>
                        </div>
                        <div className='divlab'>
                            <label htmlFor="lab">Son prénom</label>
                                <input 
                                onChange={(e)=> setName({name: e.target.value})}
                                value={name.name}
                                className='inplab' type="text" id="ajoutePrenom" name="ajoutePrenom"/>
                        </div>
                        <div className='divlab'>
                            <label htmlFor="lab">Description</label>
                                <input 
                                onChange={(e)=> setDescriptif({descriptif: e.target.value})}
                                value={descriptif.descriptif}
                               className="inpladescrip" type="text" id="confirDescrip" name="confirDescrip"/>
                        </div>
                    </form>
               <button 
                    className='seconnecter'
                    type="submit"
                    onClick={() => {
                        handleSubmit();
                    }}>
                    AJOUTE!
                </button>
                <Footer />
        </div>
        </div>
    );
    }

export default CreationAdoption;
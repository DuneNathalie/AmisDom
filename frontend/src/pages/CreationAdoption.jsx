import React, {useState, useEffect} from 'react';
import axios from "axios";
import "../styles/CreationAdoption.css";


const CreationAdoption = () => {
    const [types, setTypes] = useState([]);
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

        };

    return (
        <div className='creationAdoption'>
            <div className='titreCreation'>Ajoute un AmisDom</div>

            <div className='tableau'>
            <form onSubmit={handleSubmit}>
      <label>
        Type:
        <select value={selectedType} onChange={event => setSelectedType(event.target.value)}>
    {types.map(type => (
      <option key={type} value={type}>
        {type}
      </option>
    ))}
  </select>
  </label>
      <br />
      <label>
        Nom:
        <input
          type="text"
          value={name}
          onChange={event => setName(event.target.value)}
        />
      </label>
      <br />
      <label>
        Sexe:
        <select value={selectedSexe} onChange={event => setSelectedSexe(event.target.value)}>
    {sexes.map(sexes => (
      <option key={sexes} value={sexes}>
        {sexes}
      </option>
    ))}
  </select>
      </label>
      <br />
      <label>
        Description:
        <textarea
          value={descriptif}
          onChange={event => setDescriptif(event.target.value)}
        />
      </label>
      <br />
      <label>
        Image:
        <input
          type="text"
          value={image}
          onChange={event => setImage(event.target.value)}
        />
      </label>
      <br />
      <button className="confir" type="submit">Ajouter</button>
    </form>
            </div>
        </div>
    );
    }

export default CreationAdoption;
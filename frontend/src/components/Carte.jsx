import React from "react";
import "../styles/Carte.css";

const Carte = ({profil}) => {
    return (
      <div className='carte'>
        <div className="descri" key={profil.id}>
              <img className="tete" src={`http://localhost:${process.env.REACT_APP_PORT}/${profil.image}`}alt="tete"/>
              <div className="name">{profil.name}</div>
          </div>
      </div>
)}

export default Carte;
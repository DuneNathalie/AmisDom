import React from 'react';
import Bandeau from "../components/Bandeau.jsx";
import lapin from "../assets/lapin.jpg";
import "../styles/Descriptif.css"

const Descriptif = () => {
    return (
        <div className='descriptif'>
        <div className='bande'>
            <Bandeau />
            </div>
            <div className='presentation'>
                <div className='qui'>
                    <p>Je te présente</p>
                </div>
                <div className='tofNom'>
                    <img className="pin" src={lapin} alt="lapin"/>
                        <div className='info'>
                        <div className='nom'>
                        <div className="name">Panpan</div>
                        <div className="gabarit">Petit Lapin</div>
                        <div className="age">10 ans</div>
                        </div>
                </div>
                </div>
                <div className='text'>
                    I voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </div>
        </div>
        </div>
    );
};

export default Descriptif;
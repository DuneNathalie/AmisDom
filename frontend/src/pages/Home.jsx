import React, { useState,  useEffect} from "react";
import Bandeau from "../components/Bandeau.jsx";
import Search from "../components/Search.jsx";
import Carte from "../components/Carte.jsx";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/home/Home.css";

const Home = () => {
const [cardAnimaux, setCardAnimaux] = useState([]);
const [searchType, setSearchType] = useState("");
const [type, setType] = useState([]);

const handleSearchTerm = (e) => {
    setSearchType(e.target.value)
 };

const getType = () => {
    axios
   .get(`http://localhost:5005/animal/type/type`)
   .then((res) => {
    setType(res.data);
   })
   .catch((err) => {
     console.error(err);
  });
}

useEffect(() => {
   axios
   .get(`http://localhost:5005/animal`)
   .then((res) => {
    setCardAnimaux(res.data);
   })
   .catch((err) => {
     console.error(err);
  }); getType()
}, []);


    return (
        <div className="home">
             <div className="banhearder">
                <Bandeau />
            </div>
        <div className='centre'>
                <div className="cadre">
                    <div className="titre">Trouve ton AmisDom</div>
                    <div className="filtre">
                    <Search datas={type} handleSearchTerm= {handleSearchTerm} />
                    </div>
                </div>
        
                    <div className='toCarte'>
                        {cardAnimaux
                        .filter((el) => {
                            if (searchType === "")
                            return true;
                            if (searchType === el.type)
                            return true;
                        }   
                        )
                        .map((val) => {
                            return (
                                <div className="bar">
                                <Link to={`/Descriptif/${val.id_animaux}`} className="link" key={val.id_animaux} >
                                    <Carte profil={val}/>
                                </Link>
                                    </div>
                                    );
                        })}         
                    </div>
        </div>
        </div>

        )}


export default Home;
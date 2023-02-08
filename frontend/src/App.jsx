import { React, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Descriptif from "./pages/Descriptif";
import CreationAdoption from "./pages/CreationAdoption";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import Bandeau from "./components/Bandeau";
import Adoption from "./pages/Adoption"
import './App.css';


function App() {
  return (
    <div className="app">
      <div className="banhearder">
        <Bandeau />
      </div>
      <div className="toutHeader">
     <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Descriptif/:id" element={<Descriptif />} />
          <Route path="/Adoption" element={<Adoption />} />
          <Route path="/CreationAdoption" element={<CreationAdoption />} />
      </Routes>
      <Footer />
      </div>

    </div>
  );
}

export default App;

import { React, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Descriptif from "./pages/Descriptif";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Bandeau from "./components/Bandeau";
import Adopte from "./pages/Adoption";
import './App.css';


function App() {
  return (
    <div className="app">
     <div className="plein">
     <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Descriptif/:id" element={<Descriptif />} />
          <Route path="/Adopte" element={<Adopte />} />
      </Routes>
      </div>
      <Footer />
      <div className="banhearder">
        <Bandeau />
      </div>
      </div>
  );
}

export default App;

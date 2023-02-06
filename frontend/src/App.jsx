import { React, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Descriptif from "./pages/Descriptif";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Bandeau from "./components/Bandeau";
import './App.css';


function App() {
  return (
    <div className="app">
      <div className="banhearder">
        <Bandeau />
      </div>
      <div className="toutHeader">
     <Header />
     <div className="plein">
     <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Descriptif/:id" element={<Descriptif />} />
      </Routes>
      </div>
      <Footer />
      </div>
    </div>
  );
}

export default App;

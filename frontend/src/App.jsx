import { React, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Descriptif from "./pages/Descriptif";
import Header from "./components/Header";
//import Footer from "./components/Footer";
import './App.css';


function App() {
  return (
    <div className="App">
     <Header />
     <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Descriptif/:id" element={<Descriptif />} />
      </Routes>
    </div>
  );
}

export default App;

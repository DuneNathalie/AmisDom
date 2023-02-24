import { React, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Descriptif from "./pages/Descriptif";
import CreationAdoption from "./pages/CreationAdoption";
import CreationLogin from "./pages/CreationLogin";
import Login from "./pages/Login";
import Adoption from "./pages/Adoption";
import User from "./pages/User";
//import Footer from "./components/Footer";
import './App.css';


function App() {
  return (
    <div className="app">
     <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/CreationLogin" element={<CreationLogin />} />
          <Route path="/Descriptif/:id" element={<Descriptif />} />
          <Route path="/Adoption" element={<Adoption />} />
          <Route path="/User" element={<User />} />
          <Route path="/CreationAdoption" element={<CreationAdoption />} />
      </Routes>
    </div>
  );
}

export default App;

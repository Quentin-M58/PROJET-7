import React from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import './style/main.scss';
/*import './style/css/style.css';*/
import Home from "./pages/Home.js";
import Error from "./pages/Error.js";
import About from "./pages/About.js";
import Logement from "./pages/Logements.js";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/accueil" />} />
        <Route path="/accueil" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:idlogement" element={<Logement />} />
        <Route path="/*" element={<Navigate replace to="/error404" />} />
        <Route path="/error404" element={<Error />} />
      </Routes >
    </BrowserRouter >
  );
}

export default App;

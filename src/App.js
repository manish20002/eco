import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './component/Home/home';
import About from './component/About/about';
import Conatctus from './component/Contactus/contact';
import Coins from './component/Coins/coins';
import NoPage from './component/Nopage/nopg';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />}/>
        <Route path="/contact" element={<Conatctus />}/>
        <Route path="/coins" element={<Coins />}/>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

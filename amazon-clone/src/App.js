
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Header/Header';
import Checkout from './Checkout/Checkout';
import Home from './Home/Home'

import React from 'react';


function App() {
  return (
    
      <Router>
        <div className="app">
          <Routes>
            <Route path="/checkout" element={[<Header/>, <Checkout/>]} />
            <Route path="/login" element={<Header/>} />
            <Route path="/" element={[<Header/>, <Home />]}  />
          </Routes>
        </div>
      </Router>
  );
}

export default App;

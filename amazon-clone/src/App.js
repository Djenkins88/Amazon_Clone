
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Header/Header';
import React from 'react';


function App() {
  return (
    
      <Router>
        <div className="app">
          <Routes>
            <Route path="/checkout" element={<Header />} />
            <Route path="/login" element={<Header/>} />
            <Route path="/" element={<Header />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;

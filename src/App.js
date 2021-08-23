import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';

import './App.css';

// Routes
import Home from './Pages/Home';
import Details from './Pages/Details';

function App() {  
  return (
    <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:name" element={<Details />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App;
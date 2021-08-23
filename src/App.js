import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import { GlobalStorage } from './Context/GlobalContext';

import './App.css';

// Routes
import Home from './Pages/Home';

function App() {  
  return (
    <BrowserRouter>
      <GlobalStorage>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </GlobalStorage>
    </BrowserRouter>
  )
}

export default App;
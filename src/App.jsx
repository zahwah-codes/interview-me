import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Category from './pages/Category';
import Instructions from './pages/Instructions';
import Behavioural from './pages/Behavioural';
import Communication from './pages/Communication';
import Performance from './pages/Performance';
import BrainTeaser from './pages/BrainTeaser';
import Completed from './pages/Completed';


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category/>} />
          <Route path="/instructions" element={<Instructions/>} />
          <Route path="/behavioural" element={<Behavioural />} />
          <Route path="/communication" element={<Communication />} />
          <Route path="/performance" element={<Performance />} />
          <Route path="/brainteaser" element={<BrainTeaser />} />
          <Route path="/completed" element={<Completed />} />
          
        </Routes>
      </Router>
    </div>
  );
};

export default App;
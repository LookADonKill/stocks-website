import { useState } from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/home.jsx';
import Portfolio from './pages/portfolio.jsx';
import NavBar from './components/navBar.jsx';
function App() {

  return (
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Portfolio" element={<Portfolio />} />
        </Routes>
      </div>
  );
}

export default App;

import './App.css';
import React from 'react';
import navbar from './components/inc/navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';

function App() {
  return (
    <div className="container">
     <Home />
     <Contact />
     <About />
    </div>
  );
}

export default App;

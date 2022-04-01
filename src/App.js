import './App.css';
import React from 'react';
import Navbar from './components/inc/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';


function App() {
  return (
    <div className="container">
     <Navbar />
     <Home />
     <Contact />
     <About />
    </div>
  );
}

export default App;

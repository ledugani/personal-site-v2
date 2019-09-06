import React from 'react';
import logo from './impossible_cube.png';

import Blog from '../components/Blog/Blog';
import Contact from '../components/Contact/Contact';
import Experience from '../components/Experience/Experience';
import Home from '../components/Home/Home';
import Projects from '../components/Projects/Projects';
import Navbar from '../components/Navbar/Navbar';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="navigation-menu">
        <Navbar />
      </div>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          "The quieter you become, the more you can hear."
        </p>
      </header>

      <div className="home">
        <Home />
      </div>

      <div className="experience">
        <Experience />
      </div>

      <div className="projects">
        <Projects />
      </div>

      <div className="blog">
        <Blog />
      </div>

      <div className="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;

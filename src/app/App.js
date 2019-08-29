import React from 'react';
import logo from './logo.svg';

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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <div className="navigation-menu">
        <Navbar />
      </div>

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

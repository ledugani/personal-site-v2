import React from 'react';
// import logo from './impossible_cube.png';

//import Blog from '../components/Blog/Blog';
import Contact from '../components/Contact/Contact';
import Experience from '../components/Experience/Experience';
import Home from '../components/Home/Home';
import Proficiencies from '../components/Proficiencies/Proficiencies';
import Projects from '../components/Projects/Projects';
import Navbar from '../components/Navbar/Navbar';

import './App.css';

function App() {
  const year = new Date().getFullYear();

  const footerStyle = {
    "background-color": '#C8DAB9'
  };

  return (
    <div className="App">
      <div className="navigation-menu">
        <Navbar />
      </div>

      {/* <header className="App-header">
        <div className="home-container">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="hm-text">
            "The quieter you become, the more you can hear."
          </p>
        </div>
      </header> */}

      <div className="home">
        <Home />
      </div>

      <div className="proficiencies">
        <Proficiencies />
      </div>

      <div className="experience">
        <Experience />
      </div>

      <div className="projects">
        <Projects />
      </div>

      {/* <div className="blog">
        <Blog />
      </div> */}

      <div className="contact">
        <Contact />
      </div>

      <footer>
        <ul>
          <li><a href="https://twitter.com/@ledugani" className="social twitter"></a></li>
          <li><a href="https://www.linkedin.com/in/tom-dugan/" className="social linkedin"></a></li>
          <li><a href="https://github.com/ledugani" className="social github"></a></li>
        </ul>
        <p class="copyright">&copy;{year}, Tom Dugan Enterprise</p>
      </footer>
    </div>
  );
}

export default App;

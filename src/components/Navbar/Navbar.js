import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {
  render () {
    return (
      <nav className="navbar navbar-default">
        <ul className="navigation-list">
          <a href="/">
            <li className="nav-btn nav-home">
              <p>Home</p>
            </li>
          </a>

          <a href="/">
            <li className="nav-btn nav-experience">
              <p>Experience</p>
            </li>
          </a>

          <a href="/">
            <li className="nav-btn nav-projects">
              <p>Projects</p>
            </li>
          </a>

          <a href="/">
            <li className="nav-btn nav-blog">
              <p>Blog</p>
            </li>
          </a>

          <a href="/">
            <li className="nav-btn nav-contact">
              <p>Contact</p>
            </li>
          </a>
        </ul>
      </nav>
    );
  }
};

export default Navbar;

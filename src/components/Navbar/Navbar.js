import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {

  render () {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><a href="#">Home</a></li>
              <li><a href="#">Experience</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;

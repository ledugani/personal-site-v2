import React from 'react';
// import logo from './impossible_cube.png';
//import Blog from '../components/Blog/Blog';
import Contact from '../components/Contact/Contact';
import Experience from '../components/Experience/Experience';
import Home from '../components/Home/Home';
import Proficiencies from '../components/Proficiencies/Proficiencies';
import Projects from '../components/Projects/Projects';
import Navbar from '../components/Navbar/Navbar';
import SideDrawer from '../components/Navbar/SideDrawer/SideDrawer';
import Backdrop from '../components/Navbar/Backdrop/Backdrop';


import './App.css';

class App extends React.Component {
  state = {
    sideDrawerOpen: false
  };

  year = () => {
    return new Date().getFullYear();
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen}
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler}/>;
    }

    return (
      <div className="App" style={{height: '100%'}}>
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}

        <div className="navigation-menu">
          <Navbar drawerToggleClickHandler={this.drawerToggleClickHandler} />
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
            {/* eslint-disable-next-line */}
            <li><a href="https://twitter.com/@ledugani" className="social twitter"></a></li>
            {/* eslint-disable-next-line */}
            <li><a href="https://www.linkedin.com/in/tom-dugan/" className="social linkedin"></a></li>
            {/* eslint-disable-next-line */}
            <li><a href="https://github.com/ledugani" className="social github"></a></li>
          </ul>
          {/* eslint-disable-next-line */}
          <p className="copyright">&copy;{this.year()}, <a className="tdugan" href="https://tduganenterprise.com/" target="_blank">T.Dugan Enterprise</a></p>
        </footer>
      </div>
    );
  }
}

export default App;

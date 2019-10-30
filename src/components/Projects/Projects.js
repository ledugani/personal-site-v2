import React from 'react';
import Collapsible from 'react-collapsible';
import allProjects from './Projects.json';
import placeholder from '../../img/placeholder.jpg';

import './Projects.css';

class Projects extends React.Component {

  render () {
    const MyProjects = allProjects.map((data) => {
      return (
        <h2 className="single-project">
          <Collapsible trigger={data.title} className="clpsbl">

            <div className="project-container">

              <div className="left">
                <img src={placeholder} alt="placeholder" className="placeholder" />
                <div className="buttons-container">

                  <button className="left-button button btn btn-2 btn-2a">Demo</button>

                  <button className="right-button button btn btn-2 btn-2a">Code</button>

                </div>
              </div>

              <div className="right">
                <p className="project-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <ul className="project-details">

                  <li>list item 1</li>
                  <li>list item 2</li>
                  <li>list item 3</li>

                </ul>
              </div>



            </div>
          </Collapsible>
        </h2>
      );
    });

    return (
      <div className="projects">
        <h1>Project Portfolio</h1>
        <div className="project-container">
          {MyProjects}
        </div>
      </div>
    );
  }
};

export default Projects;

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

                  <button className="left-button button btn btn-2 btn-2a" href={data.demoLink}>Demo</button>

                  <button className="right-button button btn btn-2 btn-2a" href={data.githubLink}>Code</button>

                </div>
              </div>

              <div className="right">
                <p className="project-description">{data.description}</p>
                <br />
                <ul className="project-details">

                {
                  data.techUsed.map((tech) => {
                    return (
                      <li className="technologies">{tech}</li>
                    )
                  })
                }

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

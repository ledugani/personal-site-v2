import React from 'react';
import Collapsible from 'react-collapsible';
import allProjects from './Projects.json';
import placeholder from './img/placeholder.jpg';
import polyphony from './img/polyphony.png';
import gamesphere from './img/gamesphere.png';
import moviemaker from './img/movie-maker.png';
import usvitoday from './img/usvi-today.png';
import aadwebb from './img/aadwebb.png';

import './Projects.css';

class Projects extends React.Component {

  renderSwitch(img) {
    switch(img) {
      case 'polyphony':
        return polyphony;
      case 'gamesphere':
        return gamesphere;
      case 'movie-maker':
        return moviemaker;
      case 'usvi-today':
        return usvitoday;
      case 'aadwebb':
        return aadwebb;
      default:
        return placeholder;
    }
  }

  componentDidUpdate() {
    console.log(this.refs.demoRef.classList);
  }

  render () {
    const MyProjects = allProjects.map((data) => {
      return (
        <h2 className="single-project">
          <Collapsible trigger={data.title} className="clpsbl">

            <div className="project-container">

              <div className="left">

                <img
                  src={this.renderSwitch(data.screencap)}
                  alt={data.title}
                  className="screenshot"
                />

                <div className="buttons-container">

                  <button
                    className={`left-button button btn btn-2 btn-2a
                      ${data.demoLink === "disabled" ? 'disabled' : ''}
                    `}
                    href={data.demoLink}
                    ref={"demoRef"}
                  >
                    Demo
                  </button>

                  <button
                    className={`right-button button btn btn-2 btn-2a
                      ${data.githubLink === "disabled" ? 'disabled' : ''}
                    `}
                    href={data.githubLink}
                    ref={"codeRef"}
                  >
                    Code
                  </button>

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

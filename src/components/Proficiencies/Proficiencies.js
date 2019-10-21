import React from 'react';
import './Proficiencies.css';
import Bootstrap from './images/bootstrap-logo.png';
import Browserify from './images/Browserify.png';
import CSharp from './images/csharp.png';
import CSS3 from './images/CSS3.png';
import Grunt from './images/grunt.png';
import HTML5 from './images/HTML5.png';
import ITIL4 from './images/ITIL-4.png';
import Javascript from './images/javascript.png';
import jQuery from './images/jquery.png';
import JSON from './images/JSON.png';
import NodeJS from './images/nodejs.png';
import npm from './images/npm.png';
import ReactJS from './images/react.png';
import Sass from './images/sass.png';
import ServiceNow from './images/servicenow.jpg';
import SQLServer from './images/sql-server.png';
import WordPress from './images/wordpress.png';
import Firebase from './images/firebase.png';

class Proficiencies extends React.Component {

  render () {
    return (
      <div className="proficiencies">
        <div className="outer">
          <img src={Bootstrap} alt="Bootstrap" className="logo" />
          <img src={Browserify} alt="Browserify" className="logo" />
          <img src={CSharp} alt="C-Sharp" className="logo" />
          <img src={CSS3} alt="CSS3" className="logo" />
          <img src={Grunt} alt="Grunt" className="logo" />
          <img src={HTML5} alt="HTML5" className="logo" />
          <img src={ITIL4} alt="ITIL4" className="logo" />
          <img src={Javascript} alt="JavaScript" className="logo" />
          <img src={jQuery} alt="jQuery" className="logo" />
          <img src={JSON} alt="JSON" className="logo" />
          <img src={NodeJS} alt="NodeJS" className="logo" />
          <img src={npm} alt="npm" className="logo" />
          <img src={ReactJS} alt="React" className="logo" />
          <img src={Sass} alt="Sass" className="logo" />
          <img src={ServiceNow} alt="Service Now" className="logo" />
          <img src={SQLServer} alt="SQL Server" className="logo" />
          <img src={WordPress} alt="WordPress" className="logo" />
          <img src={Firebase} alt="Firebase" className="logo" />
        </div>
      </div>
    );
  }
};

export default Proficiencies;

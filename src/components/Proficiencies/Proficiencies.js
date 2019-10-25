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
import ServiceNow from './images/servicenow.png';
import SQLServer from './images/sql-server.png';
import WordPress from './images/wordpress.png';
import Firebase from './images/firebase.png';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

class Proficiencies extends React.Component {
  render () {
    return (
      <div className="proficiencies">
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlay
          autoPlaySpeed={3000}
          centerMode={false}
          className="carousel"
          containerClass="container-with-dots"
          customTransition="transform 3000ms ease-in-out"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={responsive}
          showDots={false}
          sliderClass=""
          slidesToSlide={9}
          swipeable
          transitionDuration={4000}
        >
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
          <img src={npm} alt="npm" className="logo npm" />
          <img src={ReactJS} alt="React" className="logo" />
          <img src={Sass} alt="Sass" className="logo" />
          <img src={ServiceNow} alt="Service Now" className="logo sn" />
          <img src={SQLServer} alt="SQL Server" className="logo" />
          <img src={WordPress} alt="WordPress" className="logo" />
          <img src={Firebase} alt="Firebase" className="logo" />
        </Carousel>
      </div>
    );
  }
};

export default Proficiencies;

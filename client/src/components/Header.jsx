import React from 'react';
import { Link } from 'react-router-dom';
import MediaLinks from './MediaLinks';

const linkStyle = {
  textDecoration: 'none'
};

const Header = ({changeHover, hover}) => {
  let route1 = 'about';
  let route2 = 'projects';
  return (
    <div className="header">
      <h1 id="name">Jon Zawada</h1>
      <h6 id="job-title">Full Stack Developer</h6>
      <hr />
      <MediaLinks />
      <ul id="routes">
        <Link style={linkStyle} to="/about" onClick={changeHover}>
          <li value="about" className={hover === route1 ? "chosen-nav" : "nav"}>About Me</li>
        </Link>
        <Link style={linkStyle} to="/projects" onClick={changeHover}>
          <li value="projects" className={hover === route2 ? "chosen-nav" : "nav"}>Projects</li>
        </Link>
      </ul>
    </div>
  );
};



export default Header;

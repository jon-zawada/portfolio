import React from 'react';
import { Link } from 'react-router-dom';
import MediaLinks from './MediaLinks';

const linkStyle = {
  textDecoration: 'none'
};

const Header = () => (
  <div className="header">
    <h1 id="name">Jon Zawada</h1>
    <h6 id="job-title">Full Stack Developer</h6>
    <hr />
    <MediaLinks />
    <ul id="routes">
      <Link style={linkStyle} to="/about">
        <li className="nav">About Me</li>
      </Link>
      <Link style={linkStyle} to="/projects">
        <li className="nav">Projects</li>
      </Link>
    </ul>
  </div>
);

export default Header;

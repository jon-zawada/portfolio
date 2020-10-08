import React from 'react';
import { Link } from 'react-router-dom';

const linkStyle = {
  textDecoration: 'none'
};

const Header = () => (
  <div className="header">
    <h1 id="name">Jonathan Zawada</h1>
    <h6 id="job-title">Full Stack Developer</h6>
    <div>
      <img src="/images/github.svg" alt="" className="filter-white" />
      <img src="/images/linkedin.svg" alt="" className="filter-white" />
      <img src="/images/gmail.svg" alt="" className="filter-white" />
    </div>
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

import React from 'react';
import { Link } from 'react-router-dom';

const linkStyle = {
  textDecoration: 'none'
};

const Header = () => (
  <div className="header">
    <h1>Jonathan Zawada</h1>
    <ul>
      <Link style={linkStyle} to="/about">
        <li className="nav">about</li>
      </Link>
      <Link style={linkStyle} to="/projects">
        <li className="nav">projects</li>
      </Link>
    </ul>
  </div>
);

export default Header;

/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
// const route1 = 'projects';
const About = ({ changeHover }) => (
  <div id="about">
    <img src="/images/selfie.png" alt="" id="me" />
    <div id="about-text-wrapper">
      <p id="about-text">
        A year ago, a friend jokingly told me if you can solve a Rubik's cube you can be a software enginner. So I put down my cube and got to studying. Now here I am, a year later, with literally thousands of hours developing my own apps and thousands more teaching other juniors engineers. I specialize in frontend and backend development for complex scalable web apps. If you're curious what I am capable of I encourage you to check out my <Link id="projects-link" to="/projects" onClick={changeHover} value="projects">projects</Link> to see how I can contribute to your team! Lets <a href="https://www.linkedin.com/in/jonathan-zawada/" id="projects-link" target="_blank" rel="noreferrer">connect</a>!
      </p>
    </div>
  </div>
);

export default About;

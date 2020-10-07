import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from './About';
import Projects from './Projects';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // something: 0
    };
  }

  render() {
    return (
      <Router>
        <div>
          <div className="header">
            <h1>Jonathan Zawada</h1>
            <ul>
              <li>about</li>
              <li>projects</li>
            </ul>
          </div>
          <About />
          <Projects />
        </div>
      </Router>
    );
  }
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './About';
import Projects from './Projects';
import Header from './Header';
import ProjectInfo from './ProjectInfo';

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
          <Header />
          <Switch>
            <Route path="/" exact component={About} />
            {/* redirct */}
            <Route path="/about" component={About} />
            <Route path="/projects" exact component={Projects} />
            <Route path="/projects/:id" component={ProjectInfo} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

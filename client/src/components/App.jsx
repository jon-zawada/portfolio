import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './About';
import Projects from './Projects';
import Header from './Header';

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
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
